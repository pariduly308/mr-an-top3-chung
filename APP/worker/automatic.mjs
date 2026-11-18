// Independently locked prospective comparison. Never uses retrospective reports.
const autoVersion='auto-prospective-v1';
const autoCentral=[['Huế','Kon Tum'],['Huế','Phú Yên'],['Đắk Lắk','Quảng Nam'],['Đà Nẵng'],['Bình Định','Quảng Trị'],['Gia Lai','Ninh Thuận'],['Đà Nẵng','Quảng Ngãi']];
function autoDay(now){return now.toLocaleDateString('en-CA',{timeZone:'Asia/Ho_Chi_Minh'});}
function autoNext(day){return new Date(+new Date(day+'T12:00Z')+86400000).toISOString().slice(0,10);}
function autoCut(day,years){const d=new Date(day+'T12:00Z'),month=d.getUTCMonth();d.setUTCFullYear(d.getUTCFullYear()-years);if(d.getUTCMonth()!==month)d.setUTCDate(0);return d.toISOString().slice(0,10);}
function autoMembers(region,date){const weekday=new Date(date+'T12:00Z').getUTCDay();return region==='MB'?['XSMB']:(region==='MN'?pairDays:autoCentral)[weekday];}
function autoValid(row){const widths=row.station==='XSMB'?{2:4,3:3,4:10,5:10}:{2:1,3:1,4:4,5:11,6:1};return Array.isArray(row.numbers)&&row.numbers.length===Object.values(widths).reduce((a,b)=>a+b,0)&&row.numbers.every(n=>typeof n==='string'&&/^\d+$/.test(n)&&widths[n.length])&&Object.entries(widths).every(([w,n])=>row.numbers.filter(v=>v.length===Number(w)).length===n);}
function autoActual(rows,lock){const found=lock.members.map(s=>rows.find(r=>r.station===s&&r.date===lock.date));return found.every(r=>r&&autoValid(r))?found.flatMap(r=>r.numbers):null;}
function autoHit(numbers,top,digits){const tails=new Set(numbers.filter(n=>n.length>=digits).map(n=>n.slice(-digits)));return top.filter(n=>tails.has(n));}
function autoUniform(numbers,digits){const u=new Set(numbers.filter(n=>n.length>=digits).map(n=>n.slice(-digits))).size,N=10**digits;return 1-(N-u)*(N-u-1)*(N-u-2)/(N*(N-1)*(N-2));}
function autoChoice(locks,rows,scope,digits,target,fallback){
 const done=locks.filter(l=>l.version===autoVersion&&l.scope===scope&&l.date<target&&l.candidates?.[digits]&&autoActual(rows,l)).sort((a,b)=>a.date.localeCompare(b.date));
 let selected=fallback;const decisions=[];
 // Only complete, non-overlapping blocks. Conservative multiplicity + repeated-look allowance.
 for(let start=0;start+365<=done.length;start+=365){const block=done.slice(start,start+365),epoch=start/365+1,alpha=.05/(8*18*epoch*(epoch+1)),bound=Math.sqrt(2*Math.log(1/alpha)/365);let best=selected,bestGain=0;
  for(const key of Object.keys(block[0].candidates[digits])){if(key===selected||block.some(l=>!l.candidates[digits][key]||!l.candidates[digits][selected]))continue;
   const diffs=block.map(l=>{const actual=autoActual(rows,l);return Number(autoHit(actual,l.candidates[digits][key],digits).length>0)-Number(autoHit(actual,l.candidates[digits][selected],digits).length>0);});
   const gain=diffs.reduce((a,b)=>a+b,0)/365,rate=block.reduce((a,l)=>a+Number(autoHit(autoActual(rows,l),l.candidates[digits][key],digits).length>0),0)/365,uniform=block.reduce((a,l)=>a+autoUniform(autoActual(rows,l),digits),0)/365;
   if(gain>=.03&&gain>bound&&gain>bestGain&&rate>=uniform&&diffs.slice(0,182).reduce((a,b)=>a+b,0)>0&&diffs.slice(182).reduce((a,b)=>a+b,0)>0){best=key;bestGain=gain;}
  }
  if(best!==selected)decisions.push({through:block.at(-1).date,from:selected,to:best,gain:bestGain,lower:bestGain-bound});selected=best;
 }
 const hits=done.filter(l=>l.candidates[digits][selected]&&autoHit(autoActual(rows,l),l.candidates[digits][selected],digits).length).length;
 return {key:selected,periods:done.length,hits,decisions,reason:decisions.length?'Đã vượt ngưỡng kiểm chứng tương lai của bộ chọn.':'Giữ phương án nền; chưa đủ bằng chứng để chuyển.',nextReview:365*(Math.floor(done.length/365)+1)};
}
async function automaticReport(bucket,rows,now=new Date(),persist=false){
 const valid=rows.filter(autoValid),locks=await readObjects(bucket,'automatic/v1/'),today=autoDay(now),hour=Number(now.toLocaleTimeString('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',hour12:false})),cards=[];
 for(const region of ['MN','MT','MB']){
  const cutoff=region==='MN'?16:region==='MT'?17:18;let date=hour>=cutoff?autoNext(today):today;
  while(region==='MB'&&isNorthHoliday(date))date=autoNext(date);
  const members=autoMembers(region,date),scope=region+(members.length===1?'-single':'-pair'),station=members.join(' + '),key='automatic/v1/'+date+'/'+region+'.json';
  let lock=locks.find(l=>l.date===date&&l.region===region);
  if(!lock){
   const history=pairHistory(valid,members).filter(r=>r.date<date);
   const missing=members.filter(s=>{let d=date;do{const t=new Date(d+'T12:00Z');t.setUTCDate(t.getUTCDate()-1);d=t.toISOString().slice(0,10);}while(s==='XSMB'?isNorthHoliday(d):!(region==='MT'?centralDays:stationDays)[new Date(d+'T12:00Z').getUTCDay()].includes(s));return !valid.some(r=>r.station===s&&r.date===d);});
   const candidates={},choices={},counts={};
   for(const digits of [2,3]){candidates[digits]={};for(const years of [1,3,5]){const window=history.filter(r=>r.date>=autoCut(date,years));counts[years]=window.length;if(window.length<30)continue;const ranked=rank(window,digits);for(const method of Object.keys(methods))candidates[digits][method+'|'+years]=[...ranked].sort((a,b)=>score(b,method)-score(a,method)||b.hits-a.hits||a.number.localeCompare(b.number)).slice(0,3).map(r=>r.number);}
    choices[digits]=autoChoice(locks,valid,scope,digits,date,(region==='MN'?'repeat':'frequency')+'|5');}
   const ready=!missing.length&&Object.keys(candidates[2]).length===18&&Object.keys(candidates[3]).length===18&&!valid.some(r=>r.date===date&&members.includes(r.station));
   lock={version:autoVersion,date,region,scope,station,members,createdAt:now.toISOString(),formulaHash:centralFormulaHash,sourceHash:await centralHash(history),historyThrough:history.at(-1)?.date,counts,candidates,choices,ready,missing};
   // Recheck wall-clock at write; never backdate, overwrite or lock after first result.
   if(persist&&ready&&autoDay(new Date())<=date&&new Date()<new Date(date+'T'+String(cutoff-7).padStart(2,'0')+':00:00Z')){
    const put=await bucket.put(key,JSON.stringify(lock),{onlyIf:{etagDoesNotMatch:'*'}});if(put){locks.push(lock);lock={...lock,locked:true};}else{const existing=await bucket.get(key);if(existing)lock={...await existing.json(),locked:true};}
   }
  }else lock={...lock,locked:true};
  cards.push(lock);
 }
 return {version:autoVersion,asOf:now.toISOString(),cards,history:locks.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,90).map(l=>{const actual=autoActual(valid,l);return {date:l.date,region:l.region,station:l.station,createdAt:l.createdAt,complete:!!actual,results:Object.fromEntries([2,3].map(d=>{const choice=l.choices[d],top=l.candidates[d][choice.key];return[d,{key:choice.key,top3:top,matches:actual?autoHit(actual,top,d):null}];}))};})};
}

// Match against complete boards only, preserving the original prize text and leading zeroes.
function drawEvidence(row, top, digits) {
 const groups=row.station==='XSMB'
  ? [[7,4],[6,3],[5,6],[4,4],[3,6],[2,2],[1,1],['ĐB',1]]
  : [[8,1],[7,1],[6,3],[5,1],[4,7],[3,2],[2,1],[1,1],['ĐB',1]];
 const labels=groups.flatMap(([prize,count])=>Array(count).fill(prize==='ĐB'?'Giải đặc biệt':'Giải '+prize));
 return row.numbers.flatMap((number,index)=>{
  const tail=number.slice(-digits);
  return number.length>=digits&&top.includes(tail)?[{tail,number,prize:labels[index],station:row.station}]:[];
 });
}
// The year control compares the same formula across each saved history window.
function automaticWindowResults(record, digits, evidenceFor = () => []) {
 const key=record.choices[digits].key, method=key.split('|')[0];
 const windows={};
 for(const years of [1,3,5]){
  const windowKey=method+'|'+years,top3=record.candidates[digits][windowKey];
  if(top3)windows[years]={key:windowKey,top3,evidence:evidenceFor(top3)};
 }
 return {key,top3:record.candidates[digits][key],evidence:evidenceFor(record.candidates[digits][key]),windows};
}
// Reconstruct only from observations before the target date. This does not create a lock.
function retrospectiveWindows(rows,members,date,method,digits) {
 const history=pairHistory(rows.filter(autoValid),members).filter(row=>row.date<date);
 const windows={};
 for(const years of [1,3,5]){
  const sample=history.filter(row=>row.date>=autoCut(date,years));
  if(sample.length<30)continue;
  const ranked=rank(sample,digits);
  const top3=[...ranked].sort((a,b)=>score(b,method)-score(a,method)||b.hits-a.hits||a.number.localeCompare(b.number))
   .slice(0,3).map(row=>row.number);
  windows[years]={key:method+'|'+years,top3,evidence:[],retrospective:true,
   historyThrough:sample.at(-1).date,historyCount:sample.length};
 }
 return windows;
}
async function automaticDateReport(bucket,rows,date) {
 const cards=await Promise.all(['MN','MT','MB'].map(async region=>{
  const holiday=region==='MB'&&isNorthHoliday(date);
  const saved=await bucket.get('automatic/v1/'+date+'/'+region+'.json');
  const lock=saved?await saved.json():null;
  const members=lock?.members||autoMembers(region,date);
  const cutoff={MN:16,MT:17,MB:18}[region];
  const beforeDraw=lock&&Date.parse(lock.createdAt)<Date.parse(date+'T'+cutoff+':00:00+07:00');
  const boards=members.map(station=>rows.find(row=>row.date===date&&row.station===station&&autoValid(row))).filter(Boolean);
  const missing=members.filter(station=>!boards.some(row=>row.station===station));
  const station=members.join(' + ');
  const legacyObject=!beforeDraw&&region!=='MT'?await bucket.get('forecasts/'+date+'/'+encodeURIComponent(station)+'.json'):null;
  const legacy=legacyObject?await legacyObject.json():null;
  const legacyBeforeDraw=legacy&&legacy.historyThrough<date&&Date.parse(legacy.createdAt)<Date.parse(date+'T'+cutoff+':00:00+07:00');
  const results={};
  if(beforeDraw)for(const digits of [2,3]){
   results[digits]=automaticWindowResults(lock,digits,top3=>boards.flatMap(row=>drawEvidence(row,top3,digits)));
  }
  if(legacyBeforeDraw)for(const digits of [2,3]){
   const method=region==='MN'?'repeat':'frequency',top3=legacy.predictions?.[digits]?.[method];
   if(top3)results[digits]={key:method+'|toàn bộ lịch sử',top3,evidence:boards.flatMap(row=>drawEvidence(row,top3,digits))};
  }
  if(!holiday)for(const digits of [2,3]){
   const method=results[digits]?.key.split('|')[0]||(region==='MN'?'repeat':'frequency');
   const reconstructed=retrospectiveWindows(rows,members,date,method,digits);
   for(const value of Object.values(reconstructed))
    value.evidence=boards.flatMap(row=>drawEvidence(row,value.top3,digits));
   if(results[digits]){
    // Preserve genuine saved selections and fill only unsaved comparison windows.
    results[digits].windows={...reconstructed,...results[digits].windows};
   }else{
    const primary=reconstructed[5];
    if(primary)results[digits]={...primary,windows:reconstructed};
   }
  }
  return {region,date,station,holiday,missing,boards:boards.length,locked:!!(beforeDraw||legacyBeforeDraw),legacy:!!legacyBeforeDraw,results};
 }));
 return {cards};
}
