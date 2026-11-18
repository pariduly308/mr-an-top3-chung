const stationDays=[['Tiền Giang','Kiên Giang','Đà Lạt'],['TP. HCM','Đồng Tháp','Cà Mau'],['Bến Tre','Vũng Tàu','Bạc Liêu'],['Đồng Nai','Cần Thơ','Sóc Trăng'],['Tây Ninh','An Giang','Bình Thuận'],['Vĩnh Long','Bình Dương','Trà Vinh'],['TP. HCM','Long An','Bình Phước','Hậu Giang']];
function stationsOn(date){return [...stationDays[new Date(date+'T12:00:00Z').getUTCDay()],'XSMB'];}
async function readObjects(bucket,prefix){
 const values=[];let cursor;
 do{const page=await bucket.list({prefix,cursor});for(const object of page.objects){const value=await bucket.get(object.key);if(value)values.push(await value.json());}cursor=page.truncated?page.cursor:undefined;}while(cursor);
 return values;
}
async function allDraws(bucket,seed){
 const rows=new Map(seed.map(r=>[r.station+'|'+r.date,r]));
 for(const batch of await readObjects(bucket,'draws/'))for(const row of batch)rows.set(row.station+'|'+row.date,row);
 return [...rows.values()].sort((a,b)=>a.date.localeCompare(b.date)||a.station.localeCompare(b.station));
}
const pairDays=[['Tiền Giang','Kiên Giang'],['TP. HCM','Đồng Tháp'],['Bến Tre','Vũng Tàu'],['Đồng Nai','Cần Thơ'],['Tây Ninh','An Giang'],['Vĩnh Long','Bình Dương'],['TP. HCM','Long An']];
function pairHistory(draws,pair){const by=new Map();for(const r of draws){if(!pair.includes(r.station))continue;if(!by.has(r.date))by.set(r.date,{});by.get(r.date)[r.station]=r.numbers;}return [...by].filter(([d,g])=>pair.every(s=>g[s])).map(([date,g])=>({date,station:pair.join(' + '),numbers:pair.flatMap(s=>g[s])})).sort((a,b)=>a.date.localeCompare(b.date));}
const northHolidays=[{"tu": "2022-01-31", "den": "2022-02-03", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/04-02-2022.html"}, {"tu": "2023-01-21", "den": "2023-01-24", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/25-01-2023.html"}, {"tu": "2024-02-09", "den": "2024-02-12", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/13-02-2024.html"}, {"tu": "2025-01-28", "den": "2025-01-31", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/01-02-2025.html"}, {"tu": "2026-02-16", "den": "2026-02-19", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/20-02-2026.html"}];
function isNorthHoliday(day){return northHolidays.some(h=>h.tu<=day&&day<=h.den);}
function previousDue(station,day){let d=new Date(day+'T12:00:00Z');do{d.setUTCDate(d.getUTCDate()-1);}while(station==='XSMB'?isNorthHoliday(d.toISOString().slice(0,10)):!stationDays[d.getUTCDay()].includes(station));return d.toISOString().slice(0,10);}
async function captureForecasts(bucket,draws,now=new Date()){
 const date=now.toLocaleDateString('en-CA',{timeZone:'Asia/Ho_Chi_Minh'}),hour=Number(now.toLocaleTimeString('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',hour12:false})),weekday=new Date(date+'T12:00:00Z').getUTCDay();const saved=[];
 for(const members of [pairDays[weekday],...(isNorthHoliday(date)?[]:[['XSMB']])]){
  const station=members.join(' + '),north=station==='XSMB';
  if(hour>=(north?18:16)||draws.some(r=>r.date===date&&members.includes(r.station)))continue;
  if(members.some(s=>!draws.some(r=>r.station===s&&r.date===previousDue(s,date))))continue;
  const key='forecasts/'+date+'/'+encodeURIComponent(station)+'.json';if(await bucket.get(key))continue;
  const history=(north?draws.filter(r=>r.station==='XSMB'):pairHistory(draws,members)).filter(r=>r.date<date);if(history.length<30)continue;
  const predictions={};for(const d of [2,3]){const ranked=rank(history,d);predictions[d]=Object.fromEntries(Object.keys(methods).map(m=>[m,[...ranked].sort((a,b)=>score(b,m)-score(a,m)||b.hits-a.hits||a.number.localeCompare(b.number)).slice(0,3).map(r=>r.number)]));}
  const s={date,station,members,createdAt:now.toISOString(),historyThrough:history.at(-1).date,historyCount:history.length,version:north?'six-methods-v1':'pair-six-v1',predictions};
  if(await bucket.put(key,JSON.stringify(s),{onlyIf:{etagDoesNotMatch:'*'}}))saved.push(station);
 }
 return saved;
}
async function trackingReport(bucket,draws){return (await readObjects(bucket,'forecasts/')).sort((a,b)=>b.date.localeCompare(a.date)).map(s=>{
 const actual=s.members.map(station=>draws.find(r=>r.date===s.date&&r.station===station));const complete=actual.every(Boolean),scores={};
 for(const d of [2,3]){const tails=new Set(complete?actual.flatMap(r=>r.numbers).filter(n=>n.length>=d).map(n=>n.slice(-d)):[]);scores[d]=Object.fromEntries(Object.entries(s.predictions[d]).map(([m,ns])=>[m,complete?ns.filter(n=>tails.has(n)):null]));}
 return {...s,complete,scores};});}
