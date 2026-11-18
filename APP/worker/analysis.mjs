export const methods = {frequency:'Tần suất toàn kỳ',recent10:'10 kỳ gần nhất',recent20:'20 kỳ gần nhất',recent50:'50 kỳ gần nhất',gap:'Hay ra và đang vắng',repeat:'Lặp nhiều ở kỳ trước'};
export function rank(draws, digits, method='frequency') {
 const size=10**digits;
 const rows=Array.from({length:size},(_,n)=>({number:String(n).padStart(digits,'0'),hits:0,total:0,gap:draws.length,last:'Chưa thấy',recent10:0,recent20:0,recent50:0,repeat:0}));
 draws.forEach((draw,index)=>{
  const counts=new Map();
  for(const value of draw.numbers){if(value.length<digits)continue;const number=Number(value.slice(-digits));counts.set(number,(counts.get(number)||0)+1);}
  for(const [number,count] of counts){const row=rows[number];row.hits++;row.total+=count;row.gap=draws.length-index-1;row.last=draw.date;if(index>=draws.length-10)row.recent10++;if(index>=draws.length-20)row.recent20++;if(index>=draws.length-50)row.recent50++;if(index===draws.length-1)row.repeat=count;}
 });
 for(const row of rows){
  row.count=draws.length;
  row.score=method==='gap'?row.hits*Math.min(row.gap,20)/20:method==='repeat'?row.repeat:method==='frequency'?row.hits:row[method];
  if(row.hits===0)row.gap='≥'+draws.length;
 }
 return rows.sort((a,b)=>b.score-a.score||b.hits-a.hits||a.number.localeCompare(b.number));
}
export function backtest(draws,digits){
 const end=draws.at(-1)?.date||'2026-11-09';
 const boundary=new Date(end+'T00:00:00Z');boundary.setUTCFullYear(boundary.getUTCFullYear()-1);const test=boundary.toISOString().slice(0,10);boundary.setUTCFullYear(boundary.getUTCFullYear()-1);const cut=boundary.toISOString().slice(0,10);
 const results=Object.fromEntries(Object.keys(methods).map(key=>[key,{validationHits:0,validationCount:0,hits:0,count:0}]));
 // Each forecast uses only draws strictly before its target date.
 for(let i=30;i<draws.length;i++){
  if(draws[i].date<cut)continue;
  const previous=draws.slice(0,i),actual=new Set(draws[i].numbers.filter(n=>n.length>=digits).map(n=>n.slice(-digits)));
  const ranked=rank(previous,digits);
  for(const method of Object.keys(methods)){
   const top=[...ranked].sort((a,b)=>score(b,method)-score(a,method)||b.hits-a.hits||a.number.localeCompare(b.number)).slice(0,3);
   const hit=Number(top.some(r=>actual.has(r.number))),r=results[method];
   if(draws[i].date<test){r.validationHits+=hit;r.validationCount++;}else{r.hits+=hit;r.count++;}
  }
 }
 const selected=Object.keys(methods).sort((a,b)=>results[b].validationHits-results[a].validationHits)[0];
 return {selected,results,cut,test,end,audit:probabilityAudit(draws,digits,test)};
}
function score(row,method){if(method==='gap')return row.hits*Math.min(typeof row.gap==='number'?row.gap:0,20)/20;if(method==='repeat')return row.repeat;return method==='frequency'?row.hits:row[method];}

// Đánh giá xác suất cho từng số, cập nhật chỉ sau khi chấm kỳ đang xét.
function probabilityAudit(draws, digits, testStart) {
 const size = 10 ** digits;
 const opportunities = draws[0]?.station === 'XSMB' ? (digits === 2 ? 27 : 23) : (draws[0]?.station?.includes(' + ') ? (digits === 2 ? 36 : 34) : (digits === 2 ? 18 : 17));
 const baseline = 1 - (1 - 1 / size) ** opportunities;
 const counts = new Uint32Array(size);
 const bins = Array.from({length: 10}, () => ({count: 0, predicted: 0, actual: 0}));
 let modelLoss = 0, baseLoss = 0, trials = 0, periods = 0;
 for (let index = 0; index < draws.length; index++) {
  const actual = new Set(draws[index].numbers.filter(n => n.length >= digits).map(n => Number(n.slice(-digits))));
  if (index >= 30 && draws[index].date >= testStart) {
   periods++;
   for (let number = 0; number < size; number++) {
    // Prior cố định tương đương 20 kỳ, không lựa chọn dựa trên năm kiểm tra.
    const prediction = (counts[number] + 20 * baseline) / (index + 20);
    const outcome = Number(actual.has(number));
    modelLoss += (prediction - outcome) ** 2;
    baseLoss += (baseline - outcome) ** 2;
    trials++;
    const bin = bins[Math.min(9, Math.floor(prediction * 10))];
    bin.count++; bin.predicted += prediction; bin.actual += outcome;
   }
  }
  for (const number of actual) counts[number]++;
 }
 return {periods, trials, baseline, modelBrier: trials ? modelLoss / trials : null, baselineBrier: trials ? baseLoss / trials : null, bins};
}

function historyInterval(hits, count) {
 if (!count) return null;
 const z = 1.96, rate = hits / count, divisor = 1 + z * z / count;
 const center = (rate + z * z / (2 * count)) / divisor;
 const margin = z * Math.sqrt(rate * (1 - rate) / count + z * z / (4 * count * count)) / divisor;
 return [Math.max(0, center - margin), Math.min(1, center + margin)];
}
