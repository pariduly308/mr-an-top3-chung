import {
 allDraws, centralRows, autoValid, stationDays, centralDays, isNorthHoliday, fetchResults, parse,
 automaticReport, captureForecasts, captureCentral
} from './dist/server/index.js';

const regions = [
 {name:'mien-nam', title:'Miền Nam', hour:17, stations:day=>stationDays[day].filter(s=>s!=='XSMB')},
 {name:'mien-trung', title:'Miền Trung', hour:18, stations:day=>centralDays[day]},
 {name:'mien-bac', title:'Miền Bắc', hour:19, stations:(_day,date)=>isNorthHoliday(date)?[]:['XSMB']},
];
const nextDay=day=>new Date(Date.parse(day+'T00:00:00Z')+86400000).toISOString().slice(0,10);
const key=(day,station)=>day+'|'+station;
const localDay=now=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Ho_Chi_Minh'}).format(now);
const localHour=now=>Number(new Intl.DateTimeFormat('en-GB',{hour:'2-digit',hourCycle:'h23',timeZone:'Asia/Ho_Chi_Minh'}).format(now));
const weekday=day=>new Date(day+'T00:00:00Z').getUTCDay();

export function missingDraws(rows, from, now) {
 const known=new Set(rows.filter(autoValid).map(row=>key(row.date,row.station)));
 const today=localDay(now),hour=localHour(now), tasks=[];
 for(let date=from;date<=today;date=nextDay(date)){
  for(const region of regions){
   if(date===today&&hour<region.hour)continue;
   const stations=region.stations(weekday(date),date).filter(station=>!known.has(key(date,station)));
   if(stations.length)tasks.push({date,region,stations});
  }
 }
 return tasks.reverse();
}

async function fetchPage(region,date) {
 const path=date.split('-').reverse().join('-');
 const html=await fetchResults('https://www.minhngoc.net.vn/ket-qua-xo-so/'+region+'/'+path+'.html');
 return parse(html,region);
}
const taskLabel=task=>task.date+' · '+task.region.title;
const pause=()=>new Promise(resolve=>setTimeout(resolve,250));

export async function syncLocal(bucket,seed,{
 from='2021-11-10',clock=()=>new Date(),fetchPageFor=fetchPage,wait=pause,saveForecasts=true
}={}) {
 const started=clock(), today=localDay(started);
 const load=async()=>[...await allDraws(bucket,seed),...await centralRows(bucket)];
 const rows=await load(),known=new Set(rows.filter(autoValid).map(row=>key(row.date,row.station)));
 const tasks=missingDraws(rows,from,started),errors=[];
 let added=0,pages=0,consecutiveFailures=0;
 const publish=status=>bucket.put('status.json',JSON.stringify(status));
 const remaining=()=>tasks.flatMap(task=>task.stations.filter(station=>!known.has(key(task.date,station))).map(station=>task.date+' · '+station));
 for(const task of tasks){
  if(task.stations.every(station=>known.has(key(task.date,station))))continue;
  await publish({lastCheck:started.toISOString(),message:'Đang tải '+taskLabel(task),added,pages,errors:[],pending:[]});
  try{
   const fetched=await fetchPageFor(task.region.name,task.date);
   const batches=new Map();
   for(const row of fetched){
    if(!autoValid(row)||row.date<from||row.date>today)continue;
    if(!task.region.stations(weekday(row.date),row.date).includes(row.station))continue;
    if(known.has(key(row.date,row.station)))continue;
    const storageKey=task.region.name==='mien-trung'
     ? 'central/draws/'+row.date+'/'+encodeURIComponent(row.station)+'.json'
     : 'draws/'+task.region.name+'-'+row.date+'.json';
    if(!batches.has(storageKey))batches.set(storageKey,new Map());
    batches.get(storageKey).set(row.station,row);
   }
   for(const [storageKey,batch] of batches){
    const prior=await bucket.get(storageKey);
    const merged=new Map((prior?await prior.json():[]).map(row=>[row.station,row]));
    for(const [station,row] of batch)merged.set(station,row);
    await bucket.put(storageKey,JSON.stringify([...merged.values()]));
    for(const row of batch.values())known.add(key(row.date,row.station));
    added+=batch.size;
   }
   pages++;
   consecutiveFailures=0;
  }catch(error){
   if(errors.length<20)errors.push(taskLabel(task)+' · '+error.message);
   if(++consecutiveFailures>=3)break;
  }
  await wait();
 }
 const pending=remaining(),current=await load(),now=clock();
 if(saveForecasts){
  try{
   const northSouth=current.filter(row=>!centralDays.flat().includes(row.station));
   await captureForecasts(bucket,northSouth,now);
   await captureCentral(bucket,current,now);
   await automaticReport(bucket,current,now,true);
  }catch(error){errors.push('Lưu dự báo kỳ tới · '+error.message);}
 }
 const status={lastCheck:now.toISOString(),added,pages,errors,remaining:pending.length,pending:pending.slice(0,20),
  latestDate:current.reduce((latest,row)=>row.date>latest?row.date:latest,''),
  message:pending.length
   ? 'Đã bù '+added+' bảng. Còn '+pending.length+' bảng cần xác minh hoặc tải lại, từ '+pending.map(item=>item.slice(0,10)).sort()[0]+' đến '+pending.map(item=>item.slice(0,10)).sort().at(-1)+'.'
   : 'Đã bù '+added+' bảng. Đủ các kỳ đến hạn theo lịch đối chiếu.'};
 await publish(status);
 return status;
}
