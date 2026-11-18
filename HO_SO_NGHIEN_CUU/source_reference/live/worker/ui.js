const holidays=[{"tu": "2022-01-31", "den": "2022-02-03", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/04-02-2022.html"}, {"tu": "2023-01-21", "den": "2023-01-24", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/25-01-2023.html"}, {"tu": "2024-02-09", "den": "2024-02-12", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/13-02-2024.html"}, {"tu": "2025-01-28", "den": "2025-01-31", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/01-02-2025.html"}, {"tu": "2026-02-16", "den": "2026-02-19", "nguon": "https://www.minhngoc.net.vn/ket-qua-xo-so/mien-bac/20-02-2026.html"}];
function isHoliday(day){return holidays.some(h=>h.tu<=day&&day<=h.den);}
let data=[], evaluation={}, tracking=[];
let evaluationTimer, evaluationWorker, evaluationGeneration=0;
const $=id=>document.getElementById(id);
const schedule=[['Tiền Giang','Kiên Giang','Đà Lạt'],['TP. HCM','Đồng Tháp','Cà Mau'],['Bến Tre','Vũng Tàu','Bạc Liêu'],['Đồng Nai','Cần Thơ','Sóc Trăng'],['Tây Ninh','An Giang','Bình Thuận'],['Vĩnh Long','Bình Dương','Trà Vinh'],['TP. HCM','Long An','Bình Phước','Hậu Giang']];
const pairs=[['Tiền Giang','Kiên Giang'],['TP. HCM','Đồng Tháp'],['Bến Tre','Vũng Tàu'],['Đồng Nai','Cần Thơ'],['Tây Ninh','An Giang'],['Vĩnh Long','Bình Dương'],['TP. HCM','Long An']];
function historyFor(station){
 if(station==='XSMB')return data.filter(r=>r.station===station);
 const members=station.split(' + '),groups=new Map();
 for(const r of data){if(!members.includes(r.station))continue;if(!groups.has(r.date))groups.set(r.date,{});groups.get(r.date)[r.station]=r.numbers;}
 return [...groups].filter(([day,g])=>members.every(s=>g[s])).map(([day,g])=>({date:day,station,numbers:members.flatMap(s=>g[s])})).sort((a,b)=>a.date.localeCompare(b.date));
}
function actualFor(station,day){return historyFor(station).find(r=>r.date===day);}
function selection(station){
 const digits=Number($('digits').value),cut=new Date($('day').value+'T00:00:00Z');
 cut.setUTCFullYear(cut.getUTCFullYear()-Number($('years').value));
 const draws=historyFor(station).filter(r=>r.date<$('day').value&&r.date>=cut.toISOString().slice(0,10)).sort((a,b)=>a.date.localeCompare(b.date));
 const method=$(station==='XSMB'?'northMethod':'method').value;
 return {digits,draws,rows:rank(draws,digits,method),method};
}
function detail(){
 const station=$('station').value,{digits,draws,rows,method}=selection(station),input=$('number').value.trim();
 if(input&&!new RegExp('^\\d{1,'+digits+'}$').test(input)){$('detail').textContent='Anh nhập tối đa '+digits+' chữ số.';return;}
 const shown=input?rows.filter(r=>r.number===input.padStart(digits,'0')):rows.slice(0,10);
 const opportunities=station==='XSMB'?(digits===2?27:23):(digits===2?36:34);
 const baseline=100*(1-(1-1/10**digits)**opportunities);
 $('detail').innerHTML='<h3>'+station+' · '+methods[method]+'</h3><p>Mốc tham chiếu một số '+baseline.toFixed(2)+'% (giả định đồng đều, độc lập).</p><table><tr><th>Số</th><th>Kỳ có mặt</th><th>Tỷ lệ lịch sử</th><th>Tổng lần</th><th>Vắng trong khoảng chọn</th><th>Lần cuối</th></tr>'+shown.map(r=>`<tr><td><b>${r.number}</b></td><td>${r.hits}/${r.count}</td><td>${r.count?(100*r.hits/r.count).toFixed(1):'—'}%</td><td>${r.total}</td><td>${r.gap}</td><td>${r.last}</td></tr>`).join('')+'</table>';
 renderTracking(station,digits,method);
 renderNumberHistory(draws,digits,input);
 clearTimeout(evaluationTimer);
 if(evaluationWorker){evaluationWorker.terminate();evaluationWorker=null;}
 const generation=++evaluationGeneration;
 $('evaluation').textContent='Đang tính lại kiểm tra lịch sử theo dữ liệu mới…';
 evaluationTimer=setTimeout(async()=>{
  try{
  evaluation[station] ||= {};
  const history=historyFor(station).filter(r=>r.date<$('day').value);
  const key=digits+'|'+history.at(-1)?.date;
  const report=evaluation[station][key] ||= await computeReport(history,digits);
  if(generation!==evaluationGeneration)return;
  $('evaluation').innerHTML='<p>'+station+' · '+digits+' số cuối. Cách đứng đầu năm lựa chọn <b>'+methods[report.selected]+'</b>.</p><table><tr><th>Cách tính</th><th>Năm lựa chọn</th><th>Năm kiểm tra</th><th>Tỷ lệ</th></tr>'+Object.entries(report.results).map(([key,r])=>`<tr><td>${methods[key]}</td><td>${r.validationHits}/${r.validationCount}</td><td>${r.hits}/${r.count}</td><td>${r.count?(100*r.hits/r.count).toFixed(1):'—'}%</td></tr>`).join('')+'</table><p class="note">Từ '+report.cut+' đến trước '+report.test+' để lựa chọn. Từ '+report.test+' đến '+report.end+' để kiểm tra. Tính lại từ dữ liệu mới, chỉ dùng các kỳ trước ngày đang xem. Đây là nghiên cứu lịch sử. Phần dự báo lưu trước giờ quay được theo dõi riêng bên dưới.</p>';
  renderAudit(report.audit);
  }catch{if(generation===evaluationGeneration)$('evaluation').textContent='Chưa tính được bảng so sánh. Anh thử chọn lại đài.';}
 },20);

}
function render(){
 if(!$('day').value||!data.length)return;
 const digits=Number($('digits').value);$('number').maxLength=digits;$('number').placeholder=digits===2?'00–99':'000–999';
 $('cards').replaceChildren();
 const weekday=new Date($('day').value+'T12:00:00Z').getUTCDay();
 if($('station').value!=='XSMB')$('station').value=pairs[weekday].join(' + ');
 for(const station of [pairs[weekday].join(' + '),...(isHoliday($('day').value)?[]:['XSMB'])]){
  const {rows,method}=selection(station),card=document.createElement('article');card.className='card';
  card.innerHTML='<small>TOP 3 · '+digits+' SỐ CUỐI</small><h2>'+station+'</h2><p class="balls">'+(rows[0].count?rows.slice(0,3).map(r=>r.number).join(' · '):'Chưa đủ dữ liệu')+'</p><p>'+methods[method]+'</p><button>Xem chi tiết</button>';
  addDrawStatus(card,station,digits,method);
  card.querySelector('button').onclick=()=>{$('station').value=station;$('number').value='';detail();$('detail').scrollIntoView({behavior:'smooth'});};$('cards').append(card);
 }
 detail();
}
async function load(){
 try{
  data=await fetch('/data.json').then(r=>r.json());
  evaluation={};
  try{tracking=await fetch('/api/tracking').then(r=>r.json());}catch{tracking=[];}
  
  const selectedStation=$('station').value;
  $('station').replaceChildren(...[pairs[new Date($('day').value+'T12:00:00Z').getUTCDay()].join(' + '),...pairs.map(p=>p.join(' + ')).filter(p=>p!==pairs[new Date($('day').value+'T12:00:00Z').getUTCDay()].join(' + ')),'XSMB'].map(s=>new Option(s,s)));
  if([...$('station').options].some(o=>o.value===selectedStation))$('station').value=selectedStation;
  $('status').textContent='Đã nạp '+data.length.toLocaleString('vi-VN')+' kỳ mở thưởng.';
  $('coverage').textContent='Dữ liệu có từ '+data[0]?.date+' đến '+data.at(-1)?.date+'. Kỳ thiếu bảng đủ giải được loại khỏi bộ đếm.';
  render();
 }catch{$('status').textContent='Không tải được dữ liệu. Anh thử tải lại trang.';}
}
let syncing=false;
async function syncStatus(){
 try{const r=await fetch('/api/status');if(!r.ok)throw Error();const s=await r.json();
 $('sync').textContent=(s.lastCheck?'Kiểm tra '+new Date(s.lastCheck).toLocaleString('vi-VN',{timeZone:'Asia/Ho_Chi_Minh'})+' · ':'')+(s.message||'Chưa kiểm tra nguồn trong phiên này.')+(s.errors?.length?' '+s.errors.join(' / '):'');
 $('missing').textContent=s.pending?.length?'Ngày mới còn thiếu bảng: '+s.pending.join(' · '):'';
 }catch{$('sync').textContent='Chưa đọc được trạng thái cập nhật. Anh thử tải lại trang.';}
}
async function updateData(){if(syncing)return;syncing=true;$('update').disabled=true;$('update').textContent='Đang cập nhật…';try{const r=await fetch('/api/update',{method:'POST'});if(!r.ok)throw Error();const s=await r.json();await load();await syncStatus();}catch{$('sync').textContent='Cập nhật chưa thành công. Dữ liệu đã lưu vẫn được giữ nguyên.';}finally{syncing=false;$('update').disabled=false;$('update').textContent='Cập nhật ngay';}}
$('update').onclick=updateData;
$('day').value=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Ho_Chi_Minh'});
for(const id of ['day','years','method','northMethod'])$(id).onchange=render;
$('digits').onchange=()=>{$('number').value='';render();};$('station').onchange=detail;$('check').onclick=detail;
load().then(()=>{syncStatus();updateData();});
setInterval(()=>{if(!document.hidden)updateData();},3600000);

function nextDate(station,date){
 const day=new Date(date+'T12:00:00Z');
 do{day.setUTCDate(day.getUTCDate()+1);}while(station==='XSMB'?isHoliday(day.toISOString().slice(0,10)):pairs[day.getUTCDay()].join(' + ')!==station);
 return day.toISOString().slice(0,10);
}
function addDrawStatus(card,station,digits,method){
 const date=$('day').value,actual=actualFor(station,date);
 const today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Ho_Chi_Minh'});
 const hour=Number(new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',hour12:false}));
 const status=document.createElement('p');
 status.textContent=actual?'✓ Đã đủ kết quả':date>today||date===today&&hour<(station==='XSMB'?19:17)?'Đang chờ kết quả':'Chưa có bảng đủ giải · cần kiểm tra nguồn';
 card.prepend(status);
 if(actual){
  const saved=tracking.find(s=>s.station===station&&s.date===date);
  const info=document.createElement('p');info.className='note';
  info.textContent=saved?'Dự báo đã lưu '+saved.predictions[digits][method].join(' · ')+' — Số trúng '+(saved.scores[digits][method]?.join(' · ')||'0'):'Chưa có dự báo được lưu trước kỳ này. Top 3 đang hiển thị là tính lại lịch sử.';card.append(info);
  const next=nextDate(station,date),button=document.createElement('button');button.textContent='Xem kỳ tiếp theo · '+next;
  button.onclick=()=>{$('day').value=next;$('station').value=station;render();};card.append(button);
 }
}
function renderTracking(station,digits,method){
 const rows=tracking.filter(s=>s.station===station),done=rows.filter(s=>s.complete),hits=done.filter(s=>s.scores[digits][method].length>0).length;
 $('tracking').innerHTML='<p>'+station+' · '+methods[method]+' · '+digits+' số cuối. Đạt '+hits+'/'+done.length+' kỳ đã có kết quả.</p>'+(rows.length?'<table><tr><th>Kỳ</th><th>Giờ lưu</th><th>Top 3 đã khóa</th><th>Số xuất hiện</th></tr>'+rows.slice(0,60).map(s=>`<tr><td>${s.date}</td><td>${new Date(s.createdAt).toLocaleString('vi-VN',{timeZone:'Asia/Ho_Chi_Minh'})}</td><td>${s.predictions[digits][method].join(' · ')}</td><td>${s.complete?(s.scores[digits][method].join(' · ')||'0'):'Chờ kết quả'}</td></tr>`).join('')+'</table>':'<p>Chưa có dự báo lưu trước giờ quay. Bản dự báo được lưu trước 16h miền Nam hoặc 18h miền Bắc khi cập nhật có đủ lịch sử. Không tạo dự báo ngược cho kỳ đã quay.</p>');
}

function computeReport(history,digits){
 return new Promise((resolve,reject)=>{
  const worker=new Worker('/analysis-worker.js');evaluationWorker=worker;
  worker.onmessage=e=>{if(evaluationWorker===worker)evaluationWorker=null;worker.terminate();resolve(e.data);};
  worker.onerror=e=>{if(evaluationWorker===worker)evaluationWorker=null;worker.terminate();reject(e);};
  worker.postMessage({history,digits});
 });
}

function renderNumberHistory(draws, digits, input) {
 const target = $('numberHistory');
 if (!input) {target.textContent = 'Nhập một số để xem lịch sử 20 kỳ, các lần ra gần đây và khoảng bất định.'; return;}
 const number = input.padStart(digits, '0');
 const records = draws.map((draw, index) => ({date:draw.date, index, times:draw.numbers.filter(n=>n.length>=digits && n.slice(-digits)===number).length}));
 const appearances = records.filter(r=>r.times>0);
 const interval = historyInterval(appearances.length, records.length);
 const recent = records.slice(-20), previous = records.slice(0,-20).slice(-100);
 const frequency = rows => rows.length ? rows.filter(r=>r.times>0).length+'/'+rows.length+' kỳ' : 'Chưa có dữ liệu';
 target.innerHTML = '<h3>Lịch sử số '+number+'</h3><p>20 kỳ gần nhất: '+frequency(recent)+'. Tối đa 100 kỳ liền trước: '+frequency(previous)+'.</p>';
 if (interval) target.innerHTML += '<p>Khoảng tin cậy 95% cho tỷ lệ lịch sử: '+(interval[0]*100).toFixed(1)+'–'+(interval[1]*100).toFixed(1)+'%. Công thức Wilson, giả định các kỳ độc lập và tỷ lệ ổn định. Đây chưa phải khoảng xác suất đã kiểm chứng cho kỳ tới.</p>';
 target.innerHTML += '<h4>20 kỳ gần nhất</h4><table><tr><th>Ngày</th><th>Số lần xuất hiện</th></tr>'+recent.slice().reverse().map(r=>'<tr style="'+(r.times?'background:#e5f5ef':'')+'"><td>'+r.date+'</td><td>'+r.times+'</td></tr>').join('')+'</table>';
 target.innerHTML += '<h4>10 lần xuất hiện gần đây</h4><table><tr><th>Ngày</th><th>Số lần</th><th>Cách lần trước</th></tr>'+appearances.map((r,i)=>({...r,distance:i?r.index-appearances[i-1].index:null})).slice(-10).reverse().map(r=>'<tr><td>'+r.date+'</td><td>'+r.times+'</td><td>'+(r.distance===null?'Chưa đủ lịch sử':r.distance+' kỳ')+'</td></tr>').join('')+'</table>';
}
function renderAudit(audit) {
 if (!audit?.trials) {$('audit').textContent='Chưa đủ dữ liệu kiểm tra xác suất.';return;}
 const better = audit.modelBrier < audit.baselineBrier;
 $('audit').innerHTML='<p>Kiểm tra từng số ở '+audit.periods+' kỳ cuối, dùng lịch sử trước mỗi kỳ. Ước lượng thử nghiệm là tần suất được làm trơn về mốc đồng đều, với trọng số cố định 20 kỳ.</p><p>Sai số Brier (thấp hơn tốt hơn): mô hình <b>'+audit.modelBrier.toFixed(6)+'</b>; mốc đồng đều <b>'+audit.baselineBrier.toFixed(6)+'</b>.</p><p>'+(better?'Mô hình có sai số thấp hơn trong giai đoạn kiểm tra này. Cần tiếp tục kiểm chứng trên các kỳ mới.':'Chưa thấy cải thiện so với mốc đồng đều trong giai đoạn kiểm tra này.')+' Các số trong cùng kỳ phụ thuộc nhau; tổng lượt chấm không phải số mẫu độc lập.</p><table><tr><th>Ước lượng trung bình</th><th>Xuất hiện thực tế</th><th>Lượt số/kỳ</th></tr>'+audit.bins.filter(b=>b.count).map(b=>'<tr><td>'+(100*b.predicted/b.count).toFixed(2)+'%</td><td>'+(100*b.actual/b.count).toFixed(2)+'%</td><td>'+b.count+'</td></tr>').join('')+'</table><p class="note">Đây là kiểm tra toàn bộ số, chưa chứng minh lợi thế cho riêng số anh chọn hoặc Top 3. Không tự đổi cách xếp hạng theo kết quả năm kiểm tra.</p>';
}
