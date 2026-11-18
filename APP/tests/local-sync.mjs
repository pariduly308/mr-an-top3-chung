import assert from 'node:assert/strict';
import fs from 'node:fs';
import {allDraws,centralRows} from '../dist/server/index.js';
import {missingDraws,syncLocal} from '../local-sync.mjs';

const seed=JSON.parse(fs.readFileSync('worker/local-seed.json','utf8'));
const clock=()=>new Date('2026-11-17T13:00:00Z');
const objects=new Map();
const bucket={
 async list({prefix}){return {objects:[...objects.keys()].filter(key=>key.startsWith(prefix)).map(key=>({key}))};},
 async get(key){return objects.has(key)?{json:async()=>JSON.parse(objects.get(key))}:null;},
 async put(key,value){objects.set(key,value);}
};
const truth=seed.filter(r=>r.date>='2026-11-15');
const removed=truth.filter(r=>r.station!=='Bến Tre');
const initial=seed.filter(r=>!removed.includes(r));
const options={from:'2026-11-15',clock,wait:async()=>{},saveForecasts:false};
const calls=[];
const status=await syncLocal(bucket,initial,{...options,fetchPageFor:async(region,date)=>{
 calls.push([region,date]);
 return truth.filter(r=>(region==='mien-bac')===(r.station==='XSMB'));
}});
assert.equal(status.added,removed.length);
assert.equal(status.remaining,0);
assert.equal(calls.length,2);
assert.deepEqual(JSON.parse(JSON.stringify(await allDraws(bucket,initial))),seed);
const repeated=await syncLocal(bucket,initial,{...options,fetchPageFor:async()=>assert.fail('Already stored draws should not be fetched')});
assert.equal(repeated.added,0);
const fresh=await centralRows(bucket);
const calendar=missingDraws([...seed,...fresh],'2026-11-18',clock());
assert.equal(calendar.length,0);
const holiday=missingDraws([], '2026-02-16',new Date('2026-02-16T13:00:00Z'));
assert(!holiday.some(t=>t.region.name==='mien-bac'));
const before=missingDraws([], '2026-11-17',new Date('2026-11-17T09:00:00Z'));
assert.equal(before.length,0);
const rare=await syncLocal(bucket,[],{...options,from:'2026-11-18',clock:()=>new Date('2026-11-18T13:00:00Z'),
 fetchPageFor:async()=>[{date:'2026-11-18',station:'Đà Nẵng',numbers:['07']}]});
assert.equal(rare.added,0);
assert(rare.pending.includes('2026-11-18 · Đà Nẵng'));
console.log('PASS bù ba ngày, một đài đã có, trang nhiều ngày, chạy lại không trùng, nghỉ xác minh, chờ giờ và từ chối bảng thiếu giải');
