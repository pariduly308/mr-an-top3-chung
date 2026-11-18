import fs from 'node:fs';import assert from 'node:assert/strict';
const read=p=>fs.readFileSync(p,'utf8');
const api=new Function(read('worker/analysis.mjs').replaceAll('export ','')+'\n'+read('worker/tracking.mjs')+'\n'+read('worker/service.mjs').replaceAll('export ','')+'\nreturn {parse,pairHistory,captureForecasts,trackingReport,createService,rank};')();
const seed=JSON.parse(read('worker/seed.json'));
class Bucket{constructor(){this.map=new Map()}async get(k){const v=this.map.get(k);return v?{json:async()=>JSON.parse(v)}:null}async put(k,v,opts){if(opts?.onlyIf&&this.map.has(k))return null;this.map.set(k,v);return {etag:'ok'}}async list({prefix}){return {objects:[...this.map.keys()].filter(k=>k.startsWith(prefix)).map(key=>({key})),truncated:false}}}
const south=api.parse(read('tests/south.html'),'mien-nam'),north=api.parse(read('tests/north.html'),'mien-bac');assert.equal(south.length,22);assert.equal(north.length,7);
assert.equal(api.parse(read('tests/south.html').replaceAll('class="giai8"','class="bad"'),'mien-nam').length,0);
const ph=api.pairHistory(seed,['Đồng Nai','Cần Thơ']);assert.equal(ph.length,262);assert(ph.every(r=>r.numbers.length===36));
assert.equal(api.pairHistory(seed.filter(r=>!(r.date==='2026-11-11'&&r.station==='Cần Thơ')),['Đồng Nai','Cần Thơ']).length,261);
const bucket=new Bucket();const saved=await api.captureForecasts(bucket,seed,new Date('2026-11-12T02:00:00Z'));assert.equal(saved.length,2);assert(saved.includes('Tây Ninh + An Giang'));assert(saved.includes('XSMB'));
assert.equal((await api.captureForecasts(bucket,seed,new Date('2026-11-12T03:00:00Z'))).length,0);
assert((await api.trackingReport(bucket,seed)).every(r=>!r.complete));
const late=new Bucket();assert.equal((await api.captureForecasts(late,seed,new Date('2026-11-12T12:00:00Z'))).length,0);
const nh=seed.filter(r=>r.station==='XSMB');const snapshots=await api.trackingReport(bucket,seed);const ns=snapshots.find(r=>r.station==='XSMB');for(const d of [2,3])for(const m of Object.keys(ns.predictions[d]))assert.deepEqual(ns.predictions[d][m],api.rank(nh,d,m).slice(0,3).map(r=>r.number));
const scoreBucket=new Bucket();await scoreBucket.put('forecasts/test',JSON.stringify({date:'2026-11-11',station:'Đồng Nai + Cần Thơ',members:['Đồng Nai','Cần Thơ'],predictions:{2:{repeat:[ph.at(-1).numbers[0].slice(-2),'00','99']},3:{repeat:['007','123','456']}}}));const scored=(await api.trackingReport(scoreBucket,seed))[0];assert(scored.complete);assert(scored.scores[2].repeat.length>=1);
assert(!(await api.trackingReport(scoreBucket,seed.filter(r=>!(r.date==='2026-11-11'&&r.station==='Cần Thơ'))))[0].complete);
const service=api.createService('test',seed,{});const bad=await service.fetch(new Request('https://example.test/api/update',{method:'POST',headers:{Origin:'https://evil.test'}}),{BUCKET:bucket});assert.equal(bad.status,403);
console.log('PASS: strict source parsing, complete pairs, immutable pre-draw snapshots, cutoff, unchanged North rankings, union scoring, missing pair and request origin.');
