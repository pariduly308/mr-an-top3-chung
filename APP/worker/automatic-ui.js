(function () {
 const host=$('automaticCards');
 const status=$('automaticStatus');
 const mode=$('automaticDigits');
 const day=$('viewDay');
 const yearButtons=[...document.querySelectorAll('[data-view-years]')];
 let selectedYears='auto';
 const regions={MN:'Miền Nam',MT:'Miền Trung',MB:'Miền Bắc'};
 let cards=[],requestVersion=0;
 const today=()=>new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Ho_Chi_Minh'});
 const el=(tag,text,className)=>{
  const node=document.createElement(tag);
  node.textContent=text;
  if(className)node.className=className;
  return node;
 };
 const displayDate=date=>date.split('-').reverse().join('/');
 function renderCards() {
  const digits=Number(mode.value);
  host.replaceChildren();
  for(const record of cards){
   const card=el('article','','card');
   card.append(el('small',regions[record.region]+' · '+displayDate(record.date)),el('h3',record.station));
   const primary=record.results?.[digits];
   const result=selectedYears==='auto'?primary:primary?.windows?.[selectedYears];
   if(record.holiday)card.append(el('p','Nghỉ quay theo lịch đã xác minh.'));
   else if(!result&&selectedYears!=='auto'&&primary){
    card.append(el('p','Kỳ này chưa có bộ đã lưu cho cửa sổ '+selectedYears+' năm.'));
   } else if(!result&&!record.previewStatus) {
    card.append(el('p',record.boards?'Chưa có dự báo chính đã lưu cho kỳ này.':'Chưa có bộ dự báo chính đã lưu.'));
   } else if(result) {
    card.append(el('p',result.retrospective?'Tính lại lịch sử · chỉ dùng dữ liệu trước ngày này':record.locked?'Dự báo đã lưu trước giờ quay':'Bộ số kỳ tới','note'));
    const matched=new Set(result.evidence.map(entry=>entry.tail));
    const balls=el('div','','draw-balls');
    for(const number of result.top3)balls.append(el('span',matched.has(number)?'✓ '+number:number,'draw-ball'+(matched.has(number)?' hit':'')));
    card.append(balls);
    if(record.boards){
     const verdict=record.missing.length?(matched.size?matched.size+'/3 số đã khớp':'Chưa thấy số khớp'):(matched.size?'✓ Khớp '+matched.size+'/3 số':'0/3 số khớp');
     card.append(el('p',verdict,'draw-verdict'+(matched.size?' hit':'')));
     if(matched.size){
      const evidence=el('ul','','draw-evidence');
      for(const entry of result.evidence)evidence.append(el('li',entry.tail+' · '+entry.station+' · '+entry.prize+' · '+entry.number));
      card.append(evidence);
     }
    }
    const [method,years]=result.key.split('|');
    card.append(el('p',methods[method]+' · '+(record.legacy&&!result.retrospective&&selectedYears==='auto'?'bản khóa cũ, '+years:years+' năm'),'note'));
   }
   if(!record.holiday&&record.missing?.length)card.append(el('p','Chờ bảng đủ giải: '+record.missing.join(', '),'note'));
   if(!record.holiday&&!record.missing?.length&&record.boards)card.append(el('p','Đã đủ kết quả','note'));
   if(record.previewStatus)card.append(el('p',record.previewStatus,'note'));
   host.append(card);
  }
 }
 function nextCard(card){
  const results={};
  if(card.ready)for(const digits of [2,3]){
   const key=card.choices[digits].key, method=key.split('|')[0];
   const windows={};
   for(const years of [1,3,5]){
    const windowKey=method+'|'+years,top3=card.candidates[digits][windowKey];
    if(top3)windows[years]={key:windowKey,top3,evidence:[]};
   }
   const top3=card.candidates[digits][key];
   if(top3)results[digits]={key,top3,evidence:[],windows};
  }
  return {...card,results,missing:[],previewStatus:card.locked?'Đã lưu trước giờ quay':card.ready?'Dự báo chưa khóa':card.missing?.length?'Thiếu kỳ gần nhất: '+card.missing.join(', '):'Chờ đủ dữ liệu để khóa'};
 }
 async function refreshView(){
  const version=++requestVersion,selected=day.value;
  status.textContent='Đang tải dự báo và kết quả…';
  try{
   const response=await fetch(selected?'/api/automatic/day?date='+encodeURIComponent(selected):'/api/automatic',{method:selected?'GET':'POST'});
   if(!response.ok)throw Error('HTTP '+response.status);
   const report=await response.json();
   if(version!==requestVersion)return;
   cards=selected?report.cards:report.cards.map(nextCard);
   renderCards();
   status.textContent=selected?'Đang xem ngày '+displayDate(selected):'Đang xem kỳ kế tiếp của từng miền.';
  }catch(error){
   if(version!==requestVersion)return;
   cards=[];host.replaceChildren();
   status.textContent='Chưa tải được bảng. Anh thử chọn lại ngày hoặc cập nhật kết quả.';
  }
 }
 function syncDetails(){
  for(const id of ['day','centralDate']){
   const input=$(id);
   input.value=day.value||today();
   input.dispatchEvent(new Event('change'));
  }
 }
 function setDay(value){
  day.value=value;
  $('viewToday').setAttribute('aria-pressed',String(value===today()));
  $('viewNext').setAttribute('aria-pressed',String(!value));
  cards=[];host.replaceChildren();
  syncDetails();
  refreshView();
 }
 day.addEventListener('change',()=>setDay(day.value));
 $('viewToday').onclick=()=>setDay(today());
 $('viewNext').onclick=()=>setDay('');
 mode.onchange=renderCards;
 for(const button of yearButtons)button.onclick=()=>{
  selectedYears=button.dataset.viewYears;
  for(const option of yearButtons)option.setAttribute('aria-pressed',String(option===button));
  renderCards();
 };
 $('automaticRefresh').onclick=async()=>{
  const button=$('automaticRefresh');
  button.disabled=true;
  button.textContent='Đang cập nhật…';
  try{
   const update=await updateData();
   if(update){
    if(!day.value)setDay(today());
    $('automaticUpdateStatus').textContent=update.message || ([...(update.errors||[]),...(update.central?.errors||[])].length
     ? 'Một phần dữ liệu chưa cập nhật được. Bảng đang hiển thị kết quả đã lưu.'
     : 'Đã kiểm tra kết quả mới.');
   }else $('automaticUpdateStatus').textContent='Chưa cập nhật được. Anh thử lại khi kết nối ổn định.';
  }finally{button.disabled=false;button.textContent='Cập nhật kết quả';}
 };
 window.addEventListener('lottery-updated',refreshView);
 window.addEventListener('detail-date-selected',event=>setDay(event.detail));
 setDay('');
})();
