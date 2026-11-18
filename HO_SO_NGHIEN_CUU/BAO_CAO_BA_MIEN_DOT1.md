# Kết quả nghiên cứu ba miền — 15/11/2026

**Hồi cứu thăm dò, chưa kiểm chứng tương lai. Không sửa app.**

Đợt1: 459,072 dòng; đợt2 ML: 27,285 dòng; đợt3 quy tắc: 65,484 dòng.
Đích chung10/11/2021–11/11/2026. Dữ liệu gốc MN/MB tới11/11,MT tới12/11 nhưng cắt cùng đích. Không phải cập nhật dữ liệu tới15/11.
252 cấu hình đợt1 (có đối chứng lặp lại nghiên cứu cũ),15 cấu hình ML và36 quy tắc =303 cấu hình báo cáo, không phải303 giả thuyết độc lập. Phải cộng lịch sử nghiên cứu trước, không reset.

## Phạm vi thực hiện
- Đợt1 đủ6côngthức,1/3/5năm,2/3số,học từngđài+Borda/học cặp/chuỗi ngày; MB chỉ một chuỗi.
- Đợt2 pilot2số,5môhình Logistic/Ridge/LinearSVC/DecisionTree/RandomForest,chuỗi ngày,tái huấn luyện hàngnăm bằng3năm trước. Chưa chạy ML3số hay so đủ mọi cửa sổ.
- Đợt3 Markov hiệndiện có làmtrơn,ưu tiên sốít,đảo số,bóng+5,dịch tổng,vịtrí cốđịnh;2/3số. Các phép dân gian là định nghĩa cụ thể trong PROTOCOL_RULES, không đại diện mọi biến thể.
- Chưa chạy RNN/LSTM,GA,bạcnhớ tổhợp,cầuđộng,tamgiác/quảtrám,lịchâm,hoánvị toàn quytrình. Sổmơ thiếu đầu vào ghi trước; Martingale không đánhgiá khả năng dựbáo.

## Chất lượng và giới hạn
130.896 dòng MN/MB pair khớp nguyên Top3 và hit với backtest cũ. Kiểm tra nội bộ loại trùng mâu thuẫn, sốgiải và dạng chuỗi số; kế thừa kiểm toán độdài của nguồn, chưa xácminh lại toàn bộHTML.
MN0,MT7,MB20 ngày đích thiếu bảng theo lịch nghiên cứu, chưa tự gán ngàynghỉ. Một số cấu hìnhMT thiếu lịch sử khởi tạo nên n giảm thêm1; thống kê ghép cặp chỉ dùng giao ngày. Lịch hiện tại không chứng minh lịch10năm không đổi;480vịtrí kiểm toán cũ vẫn còn hạn chế.
ĐàNẵng thứTư mộtđài chấm riêng. Hướng members dùng cả kỳ thứBảy củaĐàNẵng; hướng pair mộtđài chỉ dùng các ngày thứTư theo lịch đích. Đây là khác biệt chủ đích trong tổchức lịch sử.
CI95% bootstrapkhối7quan sát,1000lần, mô tả chưa hiệu chỉnh toàn bộ nhiều thử nghiệm. Không gọi CI không chứa0 là bằngchứng thắng sau thửnhiều. Không xem hàngtrăm số cùngkỳ là mẫuđộc lập. Không có quy trình chọn tham số thắng trên test; tham số cốđịnh; mọi giaiđoạn đều đã xem.
Brier/hiệuchỉnh chưa tính trong lượt này; Ridge/SVM/điểm hạng không phải xácsuất. ML xácsuất thô chưa đủ để đưa% lên app.

## Toàn bộ ứng viên mới
|Miền/phạmvi|Đuôi|Ứngviên|Kỳ|Tỷlệ|Đốichứng5năm|Đồngđều|Chênhđiểm% [CI95%]|
|---|---:|---|---:|---:|---:|---:|---|
|MN/all|2|cold|1828|67.34%|67.83%|66.64%|-0.49 [-3.28;+2.46]|
|MN/all|2|forest|1828|66.74%|67.83%|66.64%|-1.09 [-4.16;+2.03]|
|MN/all|2|logistic|1828|65.48%|67.83%|66.64%|-2.35 [-5.42;+0.44]|
|MN/all|2|markov|1828|67.61%|67.83%|66.64%|-0.22 [-3.34;+3.17]|
|MN/all|2|position|1828|66.30%|67.83%|66.64%|-1.53 [-4.49;+1.53]|
|MN/all|2|reverse|1828|67.07%|67.83%|66.64%|-0.77 [-3.77;+2.24]|
|MN/all|2|ridge|1828|65.75%|67.83%|66.64%|-2.08 [-4.87;+0.88]|
|MN/all|2|shadow5|1828|66.03%|67.83%|66.64%|-1.81 [-4.92;+1.26]|
|MN/all|2|sum_shift|1828|65.15%|67.83%|66.64%|-2.68 [-5.75;+0.38]|
|MN/all|2|svm_linear|1828|65.81%|67.83%|66.64%|-2.02 [-4.92;+0.82]|
|MN/all|2|tree|1828|67.40%|67.83%|66.64%|-0.44 [-3.39;+2.35]|
|MN/all|3|cold|1828|8.64%|8.10%|9.71%|+0.55 [-1.48;+2.30]|
|MN/all|3|markov|1828|10.01%|8.10%|9.71%|+1.91 [+0.16;+3.67]|
|MN/all|3|position|1828|8.86%|8.10%|9.71%|+0.77 [-1.04;+2.68]|
|MN/all|3|reverse|1828|7.88%|8.10%|9.71%|-0.22 [-2.08;+1.70]|
|MN/all|3|shadow5|1828|9.30%|8.10%|9.71%|+1.20 [-0.55;+3.01]|
|MN/all|3|sum_shift|1828|9.19%|8.10%|9.71%|+1.09 [-0.77;+3.06]|
|MT/pair|2|cold|1558|66.05%|68.55%|66.59%|-2.50 [-5.71;+1.03]|
|MT/pair|2|forest|1558|66.94%|68.55%|66.59%|-1.60 [-4.82;+1.80]|
|MT/pair|2|logistic|1558|65.47%|68.55%|66.59%|-3.08 [-6.42;+0.00]|
|MT/pair|2|markov|1558|66.11%|68.55%|66.59%|-2.44 [-5.33;+0.51]|
|MT/pair|2|position|1558|66.50%|68.55%|66.59%|-2.05 [-5.46;+1.28]|
|MT/pair|2|reverse|1558|67.84%|68.55%|66.59%|-0.71 [-3.60;+2.31]|
|MT/pair|2|ridge|1558|65.53%|68.55%|66.59%|-3.02 [-6.42;+0.13]|
|MT/pair|2|shadow5|1558|68.10%|68.55%|66.59%|-0.45 [-3.66;+2.76]|
|MT/pair|2|sum_shift|1558|66.30%|68.55%|66.59%|-2.25 [-5.13;+1.09]|
|MT/pair|2|svm_linear|1558|65.53%|68.55%|66.59%|-3.02 [-6.03;+0.26]|
|MT/pair|2|tree|1558|65.53%|68.55%|66.59%|-3.02 [-6.29;+0.39]|
|MT/pair|3|cold|1558|9.05%|9.69%|9.71%|-0.64 [-2.82;+1.48]|
|MT/pair|3|markov|1558|9.82%|9.69%|9.71%|+0.13 [-1.86;+2.05]|
|MT/pair|3|position|1558|10.14%|9.69%|9.71%|+0.45 [-1.67;+2.63]|
|MT/pair|3|reverse|1558|10.65%|9.69%|9.71%|+0.96 [-0.96;+3.08]|
|MT/pair|3|shadow5|1558|8.99%|9.69%|9.71%|-0.71 [-2.70;+1.22]|
|MT/pair|3|sum_shift|1558|9.24%|9.69%|9.71%|-0.45 [-2.63;+1.54]|
|MT/single|2|cold|262|43.51%|42.75%|42.01%|+0.76 [-8.02;+9.54]|
|MT/single|2|forest|262|42.37%|42.75%|42.01%|-0.38 [-8.02;+6.49]|
|MT/single|2|logistic|262|42.37%|42.75%|42.01%|-0.38 [-8.79;+8.02]|
|MT/single|2|markov|262|41.60%|42.75%|42.01%|-1.15 [-8.02;+6.49]|
|MT/single|2|position|262|40.08%|42.75%|42.01%|-2.67 [-11.07;+6.49]|
|MT/single|2|reverse|262|44.66%|42.75%|42.01%|+1.91 [-5.73;+9.16]|
|MT/single|2|ridge|262|43.13%|42.75%|42.01%|+0.38 [-8.78;+8.02]|
|MT/single|2|shadow5|262|39.31%|42.75%|42.01%|-3.44 [-11.46;+5.34]|
|MT/single|2|sum_shift|262|41.98%|42.75%|42.01%|-0.76 [-7.25;+6.11]|
|MT/single|2|svm_linear|262|43.13%|42.75%|42.01%|+0.38 [-8.02;+9.16]|
|MT/single|2|tree|262|45.04%|42.75%|42.01%|+2.29 [-4.96;+9.54]|
|MT/single|3|cold|262|6.11%|3.05%|4.98%|+3.05 [-0.76;+6.87]|
|MT/single|3|markov|262|5.73%|3.05%|4.98%|+2.67 [-0.76;+6.11]|
|MT/single|3|position|262|4.20%|3.05%|4.98%|+1.15 [-1.91;+4.20]|
|MT/single|3|reverse|262|3.05%|3.05%|4.98%|+0.00 [-3.05;+3.05]|
|MT/single|3|shadow5|262|4.96%|3.05%|4.98%|+1.91 [-1.53;+5.34]|
|MT/single|3|sum_shift|262|4.58%|3.05%|4.98%|+1.53 [-1.53;+4.96]|
|MB/all|2|cold|1808|55.37%|54.37%|56.10%|+1.00 [-2.21;+4.20]|
|MB/all|2|forest|1808|55.81%|54.37%|56.10%|+1.44 [-1.44;+4.43]|
|MB/all|2|logistic|1808|56.64%|54.37%|56.10%|+2.27 [-1.22;+5.53]|
|MB/all|2|markov|1808|55.75%|54.37%|56.10%|+1.38 [-1.77;+4.26]|
|MB/all|2|position|1808|56.86%|54.37%|56.10%|+2.49 [-0.55;+5.81]|
|MB/all|2|reverse|1808|53.71%|54.37%|56.10%|-0.66 [-4.04;+2.60]|
|MB/all|2|ridge|1808|56.47%|54.37%|56.10%|+2.10 [-1.49;+5.03]|
|MB/all|2|shadow5|1808|54.54%|54.37%|56.10%|+0.17 [-3.49;+3.65]|
|MB/all|2|sum_shift|1808|57.25%|54.37%|56.10%|+2.88 [-0.28;+6.36]|
|MB/all|2|svm_linear|1808|56.58%|54.37%|56.10%|+2.21 [-0.94;+5.64]|
|MB/all|2|tree|1808|57.69%|54.37%|56.10%|+3.32 [+0.11;+6.58]|
|MB/all|3|cold|1808|7.91%|7.85%|6.68%|+0.06 [-1.60;+1.77]|
|MB/all|3|markov|1808|6.42%|7.85%|6.68%|-1.44 [-3.04;+0.33]|
|MB/all|3|position|1808|6.91%|7.85%|6.68%|-0.94 [-2.65;+0.67]|
|MB/all|3|reverse|1808|6.69%|7.85%|6.68%|-1.16 [-2.88;+0.55]|
|MB/all|3|shadow5|1808|7.58%|7.85%|6.68%|-0.28 [-1.88;+1.55]|
|MB/all|3|sum_shift|1808|7.30%|7.85%|6.68%|-0.55 [-2.43;+1.16]|

## Tiếp theo
Ưu tiên kiểm toán và kiểm tra âm tính, hiệu chỉnh nhiều thử nghiệm trước chọn ứngviên. Định trước kiếntrúc/seed/ngânsách cho RNN/LSTM/GA, ánhxạ từngquytắc dân gian, kiểm tra lịchâm bằng thưviện đã xácminh. Không tiếp tục quét côngthức vôhạn. Ứngviên mới cần khóa kỳtươnglai và người dùng đồngý trước áp dụng.
Không tạo/cậpnhật lịch tựđộng trong lượt này. Nhật ký cần nối kết gói này để tiếp tục, không tự coi các thửnghiệm chưa chạy là đã hoàn tất.

## Kiểm tra bổ sung đã hoàn tất
Monte Carlo5.000 chuỗi mỗi nhóm phạmvi/chếđộ, chỉ mô phỏng chỉbáotrúng Top3đồngđều; không tạo dữliệuxổsốgiả. Phânphối trong monte_carlo.json. Không phải kiểmtra hoánvị toàn bộ tìm kiếm môhình.
1.284 phép so sánh ghépcặp với đối chứng1/3/5năm, McNemarexact hai phía vàHolm: không có chênh lệch dương đạt0,05 sau hiệu chỉnh. Cách hiệu chỉnh bảo thủ, có phép thử trùng; không là bằng chứng mọi phươngpháp đều vôdụng, chỉ chưa có bằngchứng cải thiện trong phép kiểm tra này.
XSMB cây quyết định57,69% trên1.808kỳ; frequency1năm57,08%, chênh+0,61điểm%,p exact0,728. So5năm54,37% thì+3,32điểm%,p0,0447 trước chỉnh, Holm1. Không được chỉ chọn đối chứng5năm để nói vượt trội.

## Ba hướng tổ chức dữ liệu, phươngpháp chính, cửa sổ5năm
|Phạmvi / đuôi2|Theo cặp|Riêng đài+Borda|Chuỗi ngày|Sốkỳ|
|---|---:|---:|---:|---:|
|MN repeat|67,83%|66,68%|66,79%|1.828|
|MT haiđài frequency|68,55%|68,29%|66,43%|1.558|
|MT ĐàNẵng thứTư frequency|42,75%|41,60%|37,79%|262|
Các tỷlệ là Top3 cóít nhất1số trong hồi cứu, không xácsuất từngsố/kỳtới.
