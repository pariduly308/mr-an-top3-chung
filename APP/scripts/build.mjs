import fs from 'node:fs';
import crypto from 'node:crypto';
const read=p=>fs.readFileSync(p,'utf8');
const seedFile=(backup,original)=>read(fs.existsSync(backup)?backup:original);
fs.mkdirSync('dist/server',{recursive:true});
const workerSource=read('worker/analysis.mjs').replaceAll('export ', '')+'\nonmessage=e=>postMessage(backtest(e.data.history,e.data.digits));';
fs.writeFileSync('dist/server/index.js','const analysisWorkerSource='+JSON.stringify(workerSource)+';\n'+read('worker/analysis.mjs').replaceAll('export ', '')+'\n'+read('worker/tracking.mjs')+'\nconst centralSeed='+seedFile('worker/local-central.json','worker/central-data.json')+';\nconst centralFormulaHash='+JSON.stringify(crypto.createHash('sha256').update(read('worker/analysis.mjs')).digest('hex'))+';\n'+read('worker/central-service.mjs')+'\n'+read('worker/automatic.mjs')+'\n'+read('worker/service.mjs')+'\nexport default createService('+JSON.stringify(read('worker/page.html').replace('/*ANALYSIS*/',()=>read('worker/analysis.mjs').replaceAll('export ', '')).replace('/*UI*/',()=>read('worker/ui.js')+'\n'+read('worker/automatic-ui.js')).replace('/*CENTRAL*/',()=> 'let centralDraws='+seedFile('worker/local-central.json','worker/central-data.json')+';\nconst centralScores='+read('worker/central-summary.json')+';\n'+read('worker/central.js')))+','+seedFile('worker/local-seed.json','worker/seed.json')+','+read('worker/evaluation.json')+');');

fs.appendFileSync('dist/server/index.js','\nexport {allDraws,centralRows,autoValid,stationDays,centralDays,isNorthHoliday,fetchResults,automaticReport,captureForecasts,captureCentral};\n');
