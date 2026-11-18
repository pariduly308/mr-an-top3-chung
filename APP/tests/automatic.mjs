import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {webcrypto} from 'node:crypto';
const context=vm.createContext({Date,Map,Set,console,TextEncoder,crypto:webcrypto});
const source=['analysis.mjs','tracking.mjs','central-service.mjs','automatic.mjs'].map(f=>fs.readFileSync('worker/'+f,'utf8').replaceAll('export ','')).join('\n');
vm.runInContext(source+'\nglobalThis.api={autoChoice,autoCut,autoMembers,autoValid,automaticReport,automaticDateReport};const centralFormulaHash="test";',context);const api=context.api;
assert.equal(api.autoCut('2024-02-29',1),'2023-02-28');assert.deepEqual([...api.autoMembers('MT','2026-11-18')],['Đà Nẵng']);
const seed=JSON.parse(fs.readFileSync('worker/seed.json'));assert(seed.every(api.autoValid));assert(!api.autoValid({...seed[0],numbers:seed[0].numbers.slice(1)}));
assert.equal(api.autoChoice([],seed,'MN-pair',2,'2026-11-20','repeat|5').key,'repeat|5');
const rows=[],locks=[];for(let i=0;i<365;i++){const date=new Date(Date.UTC(2020,0,i+1)).toISOString().slice(0,10);rows.push({date,station:'XSMB',numbers:Array(27).fill('00')});locks.push({version:'auto-prospective-v1',scope:'MB-single',date,members:['XSMB'],candidates:{2:{'frequency|5':['01','02','03'],'repeat|1':['00','04','05']}}});}
// Malformed results cannot create a win or trigger promotion.
assert.equal(api.autoChoice(locks,rows,'MB-single',2,'2025-01-01','frequency|5').periods,0);
for(const r of rows)r.numbers=[...Array(4).fill('00'),...Array(3).fill('000'),...Array(10).fill('0000'),...Array(10).fill('00000')];
assert.equal(api.autoChoice(locks,rows,'MB-single',2,'2020-01-01','frequency|5').periods,0);
assert.equal(api.autoChoice(locks,rows,'MB-single',2,'2025-01-01','frequency|5').key,'repeat|1');
assert.equal(api.autoChoice(locks.slice(0,364),rows,'MB-single',2,'2025-01-01','frequency|5').key,'frequency|5');
const objects=new Map(),bucket={async list({prefix}){return {objects:[...objects.keys()].filter(k=>k.startsWith(prefix)).map(key=>({key}))}},async get(k){return objects.has(k)?{json:async()=>JSON.parse(objects.get(k))}:null},async put(k,v){if(objects.has(k))return null;objects.set(k,v);return {};}};
const central=JSON.parse(fs.readFileSync('worker/central-data.json'));const report=await api.automaticReport(bucket,[...seed,...central],new Date('2026-11-16T03:00:00Z'),false);
assert.equal(report.cards.length,3);assert.equal(objects.size,0);assert(report.cards.every(c=>!c.ready));
const c=report.cards[0];c.ready=true;objects.set('automatic/v1/'+c.date+'/MN.json',JSON.stringify(c));const again=await api.automaticReport(bucket,[],new Date('2026-11-16T03:00:00Z'),true);assert.equal(again.cards[0].locked,true);assert.equal(JSON.stringify(JSON.parse(objects.values().next().value).candidates),JSON.stringify(c.candidates));
console.log('PASS automatic: leap-year windows, MT singleton, strict results, no future leakage, 365-period gate, conservative promotion, missing-history suppression, immutable stored choice.');

// A past date reads the original lock and attributes verified matches to each available board.
const target='2026-11-16',row={...seed.find(r=>r.station==='TP. HCM'),date:target};
row.numbers=[...row.numbers];row.numbers[0]='07';row.numbers[17]='120007';
const lockedCard={...c,createdAt:'2026-11-16T02:00:00Z',choices:{2:{key:'repeat|5'},3:{key:'repeat|5'}},candidates:{2:{'repeat|5':['07','12','15'],'repeat|1':['07','19','22']},3:{'repeat|5':['007','999','998']}}};
objects.set('automatic/v1/'+target+'/MN.json',JSON.stringify(lockedCard));
const viewed=await api.automaticDateReport(bucket,[row],target),south=viewed.cards[0];
assert.equal(south.locked,true);assert.equal(south.missing[0],'Đồng Tháp');
assert.equal(south.results[2].evidence[0].prize,'Giải 8');
assert.equal(south.results[2].windows[1].key,'repeat|1');
assert.equal(south.results[2].windows[1].evidence[0].tail,'07');
assert.equal(south.results[2].windows[3],undefined);
assert.equal(south.results[2].key,'repeat|5');
assert.equal(south.results[3].evidence.length,1);
assert.equal(south.results[3].evidence[0].number,'120007');
assert.equal(south.results[3].evidence[0].prize,'Giải đặc biệt');
assert.equal(viewed.cards[1].locked,false);assert.equal(objects.size,1);
