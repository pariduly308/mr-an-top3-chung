export function parse(html,region){
 const result=[];const shapes=region==='mien-bac'?{giai7:[4,2],giai6:[3,3],giai5:[6,4],giai4:[4,4],giai3:[6,5],giai2:[2,5],giai1:[1,5],giaidb:[1,5]}:{giai8:[1,2],giai7:[1,3],giai6:[3,4],giai5:[1,4],giai4:[7,5],giai3:[2,5],giai2:[1,5],giai1:[1,5],giaidb:[1,6]};
 for(const block of html.split('<div class="box_kqxs">').slice(1)){
  const match=block.match(new RegExp('class="title"[\\s\\S]*?/('+region+')/(\\d{2})-(\\d{2})-(\\d{4})\\.html'));if(!match)continue;
  const date=`${match[4]}-${match[3]}-${match[2]}`,dt=new Date(date+'T12:00:00Z');if(!Number.isFinite(+dt)||dt.toISOString().slice(0,10)!==date)continue;
  const tables=region!=='mien-bac'?[...block.matchAll(/<table[^>]*class="rightcl"[^>]*>([\s\S]*?)<\/table>/g)].map(m=>m[1]):[block];
  for(const table of tables){
   const station=region==='mien-bac'?'XSMB':table.match(/class="tinh"[^>]*>\s*<a[^>]*>(.*?)<\/a>/s)?.[1].trim();if(!station||(station!=='XSMB'&&!(region==='mien-trung'?centralDays:stationDays)[dt.getUTCDay()].includes(station)))continue;
   const prizes={};let bad=false;
   for(const cell of table.matchAll(/<td class="(giai[1-8]|giaidb)"[^>]*>([\s\S]*?)<\/td>/g)){
    if(!shapes[cell[1]]||prizes[cell[1]]){bad=true;break;}
    const ns=[...cell[2].matchAll(/<div[^>]*>\s*(\d{2,6})\s*<\/div>/g)].map(x=>x[1]),[count,width]=shapes[cell[1]];
    if(ns.length!==count||ns.some(n=>n.length!==width)){bad=true;break;}prizes[cell[1]]=ns;
   }
   if(!bad&&Object.keys(shapes).every(k=>prizes[k]))result.push({date,station,numbers:Object.keys(shapes).flatMap(k=>prizes[k])});
  }
 }
 return result;
}
async function fetchResults(url){let error;for(let i=0;i<2;i++){try{const r=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!r.ok)throw Error('HTTP '+r.status);return await r.text();}catch(e){error=e;}}throw error;}
const json=value=>Response.json(value,{headers:{'Cache-Control':'no-store'}});
export function createService(page,seed,evaluation){return {async fetch(request,env){
 const url=new URL(request.url),path=url.pathname;
 if(request.method==='POST'&&request.headers.get('Origin')&&request.headers.get('Origin')!==new URL(request.url).origin)return new Response('Forbidden',{status:403});
 if(path==='/')return new Response(page,{headers:{'Content-Type':'text/html;charset=utf-8','Cache-Control':'no-cache'}});
 if(path==='/analysis-worker.js')return new Response(analysisWorkerSource,{headers:{'Content-Type':'text/javascript;charset=utf-8','Cache-Control':'no-cache'}});
 if(path==='/api/central/data')return json(await centralRows(env.BUCKET));
 if(path==='/api/central/tracking')return json(await centralTracking(env.BUCKET,await centralRows(env.BUCKET)));
 if(path==='/api/central/update'&&request.method==='POST')return json(await updateCentral(env.BUCKET));
 if(path==='/api/automatic/day'&&request.method==='GET'){
  const date=url.searchParams.get('date')||'',parsed=new Date(date+'T12:00:00Z');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(+parsed)||parsed.toISOString().slice(0,10)!==date)
   return new Response('Ngày không hợp lệ',{status:400});
  return json(await automaticDateReport(env.BUCKET,[...await allDraws(env.BUCKET,seed),...await centralRows(env.BUCKET)],date));
 }
 if(path==='/api/automatic')return json(await automaticReport(env.BUCKET,[...await allDraws(env.BUCKET,seed),...await centralRows(env.BUCKET)],new Date(),request.method==='POST'));
 if(path==='/evaluation.json')return json(evaluation);
 if(path==='/api/status'){const obj=await env.BUCKET.get('status.json');return json(obj?await obj.json():{lastCheck:null});}
 if(path==='/data.json')return json(await allDraws(env.BUCKET,seed));
 if(path==='/api/tracking')return json(await trackingReport(env.BUCKET,await allDraws(env.BUCKET,seed)));
 if(path==='/api/forecast'&&request.method==='POST')return json({saved:await captureForecasts(env.BUCKET,await allDraws(env.BUCKET,seed))});
 if(path==='/api/update'&&request.method==='POST'){
  // The Site remains owner-private. Sites dispatch authenticates visitors and service callers.
  const now=new Date(),today=now.toLocaleDateString('en-CA',{timeZone:'Asia/Ho_Chi_Minh'}),parts=today.split('-');
  const status={lastCheck:now.toISOString(),draws:0,errors:[],latestDate:null};
  for(const region of ['mien-nam','mien-bac']){
   try{
    const rows=parse(await fetchResults(`https://www.minhngoc.net.vn/ket-qua-xo-so/${region}/${[...parts].reverse().join('-')}.html`),region).filter(r=>r.date<=today);
    if(!rows.length)throw new Error('Chưa có bảng đủ giải');
    const byDate=new Map();for(const row of rows){if(!byDate.has(row.date))byDate.set(row.date,[]);byDate.get(row.date).push(row);}
    for(const [date,values] of byDate){
     const key=`draws/${region}-${date}.json`,old=await env.BUCKET.get(key);
     const merged=new Map((old?await old.json():[]).map(r=>[r.station,r]));
     values.forEach(r=>merged.set(r.station,r));
     await env.BUCKET.put(key,JSON.stringify([...merged.values()]));
    }
    status.draws+=rows.length;status.latestDate=[status.latestDate,...rows.map(r=>r.date)].filter(Boolean).sort().at(-1);
   }catch(e){status.errors.push(region+': '+e.message);}
  }
  try{status.forecastsSaved=await captureForecasts(env.BUCKET,await allDraws(env.BUCKET,seed));}catch(e){status.errors.push('Lưu dự báo: '+e.message);}
  const current=await allDraws(env.BUCKET,seed);status.pending=stationsOn(today).filter(s=>!(s==='XSMB'&&isNorthHoliday(today))&&!current.some(r=>r.station===s&&r.date===today));status.message=status.pending.length?'Đang chờ bảng đủ giải của ngày hôm nay.':'Đã đủ bảng của ngày hôm nay.';
  status.central=await updateCentral(env.BUCKET);
  try{await automaticReport(env.BUCKET,[...current,...await centralRows(env.BUCKET)],new Date(),true);}catch(e){status.errors.push('Dự báo tự động: '+e.message);}
  await env.BUCKET.put('status.json',JSON.stringify(status));return json(status);
 }
 return new Response('Not found',{status:404});
}}}
