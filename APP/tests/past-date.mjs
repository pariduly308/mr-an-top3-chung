import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {webcrypto} from 'node:crypto';
const context=vm.createContext({Date,Map,Set,console,TextEncoder,crypto:webcrypto});
const source=['analysis.mjs','tracking.mjs','central-service.mjs','automatic.mjs']
 .map(file=>fs.readFileSync('worker/'+file,'utf8').replaceAll('export ','')).join('\n');
vm.runInContext(source+'\nglobalThis.api={automaticDateReport,retrospectiveWindows};const centralFormulaHash="test";',context);
const api=context.api;
const rows=['local-seed','local-central'].flatMap(file=>JSON.parse(fs.readFileSync('worker/'+file+'.json')));
const bucket={async get(){return null;},async put(){assert.fail('Retrospective view must not persist forecasts');}};
const report=await api.automaticDateReport(bucket,rows,'2026-11-17');
for(const card of report.cards){
 assert(card.boards>0);
 assert(!card.locked);
 for(const digits of [2,3]){
  const result=card.results[digits];assert(result.retrospective);
  for(const year of [1,3,5]){
   const window=result.windows[year];assert.equal(window.top3.length,3);
   assert(window.historyThrough<'2026-11-17');
  }
 }
}
const after=rows.map(row=>row.date>='2026-11-17'?{...row,numbers:row.numbers.map(n=>'9'.repeat(n.length))}:row);
const unchanged=await api.automaticDateReport(bucket,after,'2026-11-17');
for(let i=0;i<3;i++)for(const d of [2,3])for(const y of [1,3,5])
 assert.deepEqual(report.cards[i].results[d].windows[y].top3,unchanged.cards[i].results[d].windows[y].top3);
console.log(JSON.stringify(report.cards.map(card=>({region:card.region,top3:card.results[2].top3,
 matches:[...new Set(card.results[2].evidence.map(e=>e.tail))]}))));
console.log('PASS 17/11: three regions, 1/3/5 years, both digit modes, actual matches, no target/future leakage, no backdated lock.');
