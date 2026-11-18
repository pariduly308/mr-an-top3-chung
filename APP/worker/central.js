{
  const station = document.getElementById('centralStation');
  const digits = document.getElementById('centralDigits');
  const date = document.getElementById('centralDate');
  const years = document.getElementById('centralYears');
  const method = document.getElementById('centralMethod');
  const year = document.getElementById('centralYear');
  const top = document.getElementById('centralTop');
  const table = document.getElementById('centralTable');
  const stations = [...new Set(centralDraws.map(row => row.station))].sort((a,b) => a.localeCompare(b,'vi'));
  for (const name of stations) station.add(new Option(name, name));
  for (const [key, label] of Object.entries(methods)) method.add(new Option(label,key));
  for (const value of ['2021','2022','2023','2024','2025','2026']) year.add(new Option(value,value));
  date.value = new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Ho_Chi_Minh'}).format();
  let locked=[];
  function renderCentral() {
    renderLocked();
    top.replaceChildren();
    if (!date.value || !date.validity.valid) {
      top.textContent = 'Chọn ngày hợp lệ để xem Top 3.';
      return;
    }
    const cut = new Date(date.value+'T00:00:00Z');
    cut.setUTCFullYear(cut.getUTCFullYear()-Number(years.value));
    const start = cut.toISOString().slice(0,10);
    const draws = centralDraws.filter(row => row.station===station.value && row.date>=start && row.date<date.value);
    const chosen = draws.length ? rank(draws, Number(digits.value), method.value).slice(0,3) : [];
    const heading = document.createElement('p');
    heading.className='balls';
    heading.textContent = chosen.map(row => row.number).join(' · ') || 'Chưa có lịch sử trong cửa sổ này';
    const note = document.createElement('p');
    note.textContent = draws.length ? `${draws.length} kỳ · kỳ gần nhất trong mẫu ${draws.at(-1).date}. Top 3 thử nghiệm cho ngày được chọn.` : 'Đổi ngày hoặc cửa sổ để xem lịch sử.';
    top.append(heading,note);
    const actual = centralDraws.find(row => row.station===station.value && row.date===date.value);
    if (actual && chosen.length) {
      const tails = new Set(actual.numbers.filter(n => n.length>=Number(digits.value)).map(n => n.slice(-Number(digits.value))));
      const matches = chosen.filter(row => tails.has(row.number)).map(row => row.number);
      const result = document.createElement('p');
      result.textContent = 'Đối chiếu lại kỳ đã quay · ' + (matches.join(' · ') || '0 số khớp');
      top.append(result);
    }
    const scores = centralScores.filter(r => r[0]===station.value && r[1]===Number(digits.value) && (!year.value || r[4]===year.value));
    function cell(key, window) {
      const rows = scores.filter(r => r[2]===key && r[3]===window);
      const wins = rows.reduce((sum,r) => sum+r[5],0);
      const count = rows.reduce((sum,r) => sum+r[6],0);
      return count ? `${wins}/${count} · ${(100*wins/count).toFixed(2)}%` : '—';
    }
    table.innerHTML = '<table><thead><tr><th>Công thức</th><th>1 năm</th><th>3 năm</th><th>5 năm</th></tr></thead><tbody>'+
      Object.entries(methods).map(([key,label]) => '<tr><th scope="row">'+label+'</th>'+[1,3,5].map(window=>'<td>'+cell(key,window)+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
  }

  const live = document.createElement('div');
  const refresh = document.createElement('button');
  const status = document.createElement('p');
  refresh.textContent = 'Cập nhật miền Trung và khóa bộ hôm nay';
  const lockedTable = document.createElement('div');
  lockedTable.style.overflow = 'auto';
  live.append(refresh,status,lockedTable);
  document.getElementById('central').append(live);
  function renderLocked() {
    const selected=locked.filter(r=>r.station===station.value);
    const summary=[1,3,5].map(window=>{
      const done=selected.filter(r=>r.complete).map(r=>r.records.find(v=>v.years===window&&v.digits===Number(digits.value)&&v.method===method.value)).filter(Boolean);
      return '<tr><td>'+window+' năm</td><td>'+done.filter(r=>r.distinct>0).length+'/'+done.length+'</td><td>'+[0,1,2,3].map(n=>n+' số '+done.filter(r=>r.distinct===n).length+' kỳ').join(' · ')+'</td></tr>';
    }).join('');
    lockedTable.innerHTML='<h3>Bộ đã khóa trước 17h · '+methods[method.value]+'</h3><p>Cùng đài, cùng kỳ, cùng Top 3. Tính số khớp khác nhau 0–3. Kỳ có ít nhất một số khớp được tính đạt.</p><table><tr><th>Cửa sổ</th><th>Kỳ đạt / đã chấm</th><th>Phân bố kết quả</th></tr>'+summary+'</table>'+
    (selected.length?'<table><tr><th>Ngày / giờ chốt</th><th>Cửa sổ</th><th>Top 3</th><th>Số khớp</th></tr>'+selected.flatMap(lock=>lock.records.filter(r=>r.digits===Number(digits.value)&&r.method===method.value).map(r=>'<tr><td>'+lock.date+'<br>'+new Date(lock.createdAt).toLocaleTimeString('vi-VN',{timeZone:'Asia/Ho_Chi_Minh'})+'</td><td>'+r.years+' năm</td><td>'+r.top3.join(' · ')+'</td><td>'+(r.matches?r.matches.join(' · ')||'0':'Chờ kết quả')+'</td></tr>')).join('')+'</table>':'<p>Chưa có bộ khóa cho đài này. Mở app hoặc cập nhật trước 17h ngày quay, với kỳ gần nhất đủ kết quả, để lưu ba cửa sổ. Kỳ chưa có bản khóa được để trống.</p>');
  }
  async function refreshCentral() {
    refresh.disabled=true;status.textContent='Đang cập nhật và kiểm tra bộ khóa…';
    try {
      const result=await fetch('/api/central/update',{method:'POST'});
      if(!result.ok)throw Error('Cập nhật HTTP '+result.status);
      const update=await result.json();
      const responses=await Promise.all([fetch('/api/central/data'),fetch('/api/central/tracking')]);
      if(responses.some(r=>!r.ok))throw Error('Chưa đọc được dữ liệu sau cập nhật');
      [centralDraws,locked]=await Promise.all(responses.map(r=>r.json()));
      status.textContent='Dữ liệu đến '+(update.latestDate||'chưa xác nhận')+'. '+(update.errors.length?update.errors.join(' · '):'Đã kiểm tra bộ khóa hôm nay.')+' Bảng hồi cứu bên trên chốt giai đoạn 10/11/2021–12/11/2026.';
      renderCentral();
    } catch(error) {status.textContent='Cập nhật chưa hoàn tất. '+error.message;}
    finally {refresh.disabled=false;}
  }
  refresh.onclick=refreshCentral;

  for (const element of [station,digits,date,years,method,year]) element.addEventListener('change',renderCentral);
  renderCentral();
  // Main update owns synchronization; avoid concurrent source writes.
}
