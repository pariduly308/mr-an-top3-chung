import fs from 'node:fs';
const read=p=>fs.readFileSync(p,'utf8');
fs.mkdirSync('dist/server',{recursive:true});
const workerSource=read('worker/analysis.mjs').replaceAll('export ', '')+'\nonmessage=e=>postMessage(backtest(e.data.history,e.data.digits));';
fs.writeFileSync('dist/server/index.js','const analysisWorkerSource='+JSON.stringify(workerSource)+';\n'+read('worker/analysis.mjs').replaceAll('export ', '')+'\n'+read('worker/tracking.mjs')+'\n'+read('worker/service.mjs')+'\nexport default createService('+JSON.stringify(read('worker/page.html').replace('/*ANALYSIS*/',()=>read('worker/analysis.mjs').replaceAll('export ', '')).replace('/*UI*/',()=>read('worker/ui.js')).replace('/*CENTRAL*/',()=> 'const centralDraws='+read('worker/central-data.json')+';\nconst centralScores='+read('worker/central-summary.json')+';\n'+read('worker/central.js')))+','+read('worker/seed.json')+','+read('worker/evaluation.json')+');');
