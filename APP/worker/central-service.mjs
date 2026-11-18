const centralDays = [
 ['Khánh Hòa','Huế','Kon Tum'], ['Phú Yên','Huế'], ['Đắk Lắk','Quảng Nam'],
 ['Đà Nẵng','Khánh Hòa'], ['Bình Định','Quảng Trị','Quảng Bình'],
 ['Gia Lai','Ninh Thuận'], ['Đà Nẵng','Đắk Nông','Quảng Ngãi']
];
async function centralHash(value) {
 const bytes = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify(value)));
 return [...new Uint8Array(bytes)].map(n=>n.toString(16).padStart(2,'0')).join('');
}
async function centralRows(bucket) {
 const rows = new Map(centralSeed.map(r=>[r.station+'|'+r.date,r]));
 for (const batch of await readObjects(bucket,'central/draws/')) {
  for (const row of batch) rows.set(row.station+'|'+row.date,row);
 }
 return [...rows.values()].sort((a,b)=>a.date.localeCompare(b.date)||a.station.localeCompare(b.station));
}
async function captureCentral(bucket,rows,now=new Date()) {
 const date = now.toLocaleDateString('en-CA',{timeZone:'Asia/Ho_Chi_Minh'});
 const hour = Number(now.toLocaleTimeString('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',hour12:false}));
 if (hour>=17) return [];
 const saved=[];
 for (const station of centralDays[new Date(date+'T12:00:00Z').getUTCDay()]) {
  const key='central/locks/'+date+'/'+encodeURIComponent(station)+'.json';
  if (await bucket.get(key) || rows.some(r=>r.station===station && r.date===date)) continue;
  const history=rows.filter(r=>r.station===station && r.date<date);
  const due=new Date(date+'T12:00:00Z');
  do { due.setUTCDate(due.getUTCDate()-1); } while (!centralDays[due.getUTCDay()].includes(station));
  if (history.at(-1)?.date!==due.toISOString().slice(0,10)) continue;
  const records=[];
  for (const years of [1,3,5]) {
   const cut=new Date(date+'T00:00:00Z');cut.setUTCFullYear(cut.getUTCFullYear()-years);
   const start=cut.toISOString().slice(0,10);
   const draws=history.filter(r=>r.date>=start);
   if (draws.length<30) continue;
   for (const digits of [2,3]) {
    const ranked=rank(draws,digits);
    for (const method of Object.keys(methods)) {
     const top3=[...ranked].sort((a,b)=>score(b,method)-score(a,method)||b.hits-a.hits||a.number.localeCompare(b.number)).slice(0,3).map(r=>r.number);
     records.push({years,digits,method,top3,count:draws.length,start,through:draws.at(-1).date});
    }
   }
  }
  if(records.length!==36) continue;
  const snapshot={date,station,createdAt:now.toISOString(),version:'central-six-windows-v1',sourceHash:await centralHash(history),formulaHash:centralFormulaHash,records,limitations:['Lịch sử còn vị trí nghỉ/thay lịch/thiếu chưa phân loại.']};
  if(await bucket.put(key,JSON.stringify(snapshot),{onlyIf:{etagDoesNotMatch:'*'}})) saved.push(station);
 }
 return saved;
}
async function centralTracking(bucket,rows) {
 return (await readObjects(bucket,'central/locks/')).sort((a,b)=>b.date.localeCompare(a.date)).map(lock=>{
  const actual=rows.find(r=>r.date===lock.date && r.station===lock.station);
  return {...lock,complete:!!actual,records:lock.records.map(record=>{
   const counts={};
   for(const value of actual?.numbers||[]) {
    if(value.length<record.digits)continue;
    const tail=value.slice(-record.digits);counts[tail]=(counts[tail]||0)+1;
   }
   const matches=actual?record.top3.filter(n=>counts[n]):null;
   return {...record,matches,distinct:matches?.length??null,repetitions:matches?Object.fromEntries(matches.map(n=>[n,counts[n]])):null};
  })};
 });
}
async function updateCentral(bucket,now=new Date()) {
 const date=now.toLocaleDateString('en-CA',{timeZone:'Asia/Ho_Chi_Minh'});
 const status={lastCheck:now.toISOString(),errors:[],saved:[]};
 try {
  const html=await fetchResults('https://www.minhngoc.net.vn/ket-qua-xo-so/mien-trung/'+date.split('-').reverse().join('-')+'.html');
  const rows=parse(html,'mien-trung').filter(r=>r.date<=date);
  if(!rows.length)throw Error('Chưa nhận được bảng đủ giải');
  for(const row of rows)await bucket.put('central/draws/'+row.date+'/'+encodeURIComponent(row.station)+'.json',JSON.stringify([row]));
  const all=await centralRows(bucket);
  status.saved=await captureCentral(bucket,all,new Date());
  status.latestDate=all.at(-1)?.date;
  status.pending=centralDays[new Date(date+'T12:00:00Z').getUTCDay()].filter(s=>!all.some(r=>r.station===s&&r.date===date));
 } catch(error) {status.errors.push(error.message);}
 await bucket.put('central/status.json',JSON.stringify(status));
 return status;
}
