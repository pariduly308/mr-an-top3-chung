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
  function renderCentral() {
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
  for (const element of [station,digits,date,years,method,year]) element.addEventListener('change',renderCentral);
  renderCentral();
}
