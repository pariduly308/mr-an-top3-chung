# Nghiên cứu ba miền — đợt bổ sung 15/11/2026

## Kết luận
Đã thực sự chạy RNN/LSTM, thuật toán di truyền, bạc nhớ có điều kiện, cầu vị trí động, hai biến thể hình học, lịch âm Việt Nam, theo thứ; mở rộng5mô hình cổ điển cả2/3số,train1/3/5năm. Không phải đã quét mọi biến thể của mỗi họ thuật toán. Không sửa app, quyền, lịch, dự báo đã khóa.
Toàn bộ hồi cứu10/11/2021–11/11/2026, dữ liệu cũ đã xem; chưa phải dựbáo tươnglai. Kếthừa hạnchế lịch sử và bảngthiếu của đợt1.

261,936 dòng dựbáo bổsung,144cấu hình. NN21.828,GA10.914,patterns65.484,MLmởrộng163.710. Không phải sốkỳ độc lập. Cộng đợt1 là813.777 dòng. Cộng447cấu hình mô tả của2đợt,bao gồm đối chứng lặp; không là447giảthuyết độc lập vàkhôngreset lịch sử thử trước.
1860 so sánh ghépcặp giữa ứngviên vàđốichứng1/3/5năm của2đợt; McNemarexact hai phía,Holm: 0 chênhlệch dương đạt0,05. Hiệuchỉnh này bảo thủ, gồm phép thửtươngđương; chưahiệuchỉnh mọi nghiêncứu cũ trước15/11. Kếtluận là chưa chứngminh lợi thế, không phải chứngminh mọiAI vôdụng.

## Phạm vi và cách chạy
- NN: RNNtanh/LSTM,hidden8,lookback8,12epochs,chọncheckpoint bằng180ngàyvalidation trướcđích;train3năm,tái fit hằngnăm. Lưu72checkpoint,logloss đầyđủ. 144dựbáo đầu/cuối từngnăm được táilập khớpTop3/hit.
- GA:tốiưu trọngsố6thứhạng,pop12×8thếhệ,36lầnfit,3.456fitness ghiđầyđủ. Fitness365ngày trước mốcđích;không chọn theo test. Tậpứngviên giới hạn top/bottom20 của6côngthức;không tìmmọitổhợp100/1000số.
- MLcổđiển:90cấu hình,train1/3/5năm,max20.000hàng huấnluyện lấy ngẫu nhiên cốđịnh;khác bảntrain đầyđủ ởđợt1. Kỳtest dựbáo đầyđủ100/1000số. Cửa sổ huấnluyện trọngsố khác cửa sổ tần suất các côngthức gốc;features20/50/100ngày cốđịnh.
- Bạcnhớ:cặp kíchhoạt địnhtrước2đuôi nhỏnhất kỳtrước,min10lần,prior20;không đủ dùngfrequency.
- Cầuđộng:12mẫu vịtrí cốđịnh,chọn bằng50chuyểntiếp trướcđích. Hìnhhọc:tamgiácA/B/A vàquảtrám bổsung cạnhB,canhphải3giải cuối;khôngđủmẫu thìbổsungfrequency. Đây là biếnthể lập trình rõ ràng,không chuẩn duy nhất dân gian.
- Lịchâm:vnlunar1.0.5,UTC+7,cùngngày âm trong5năm,prior20;kiểmtra2mốcTết2025/2026, chưa kiểmtoánđộc lập toàn bộ lịchâm. Không dùnglunardate(lịchTrungQuốc) cho kếtquả.
- 99hoánvị nguyênbảng trong cùngđài/cặp vànăm cho mỗi bộdựbáo cốđịnh. Chỉ diagnostic;khôngrefitNN/GA nên KHÔNG là kiểmđịnh hoánvị toànpipeline.
- Mỗi môhình mới hiện chạy chuỗi ngày của miền với các đàiđượcchọn; chưa chạy mỗiNN/GA riêngtừngđài hoặc toàn bộ1/3/5năm choNN/GA. Đợt1 đã so tổchứcđài/cặp/ngày cho6côngthức gốc. Không suy rộng rằng mọi kết hợp thuậttoán×cửasổ×đài đều đã thử.

## Nhận xét kỹ thuật quan trọng
NNchuỗi ngàyMT khôngnhận trực tiếp sốgiải kỳđích làmfeature, nênđặcbiệt ngàyĐàNẵng riêng cócalibration kém. Đây là giới hạncấu hình,không lýdo thaytham số sau nhìnkếtquả rồi gọi cùng thửnghiệm. Các thayđổi phải thànhđợt địnhtrước mới.
BrierNN tính trungbình mỗi kỳ,kèm mốc hiệndiện đồngđều theo18/36/27 giải(2số),17/34/23giải(3số). Đây là baseline môhìnhđộc lập lýtưởng;baselineTop3 trong bảng dựaU thực tế. Chưa đánhgiá đầyđủcalibration bins,khôngđưa%từngsố lênapp.
CIbootstrapkhối7quan sát,1000lần mô tả,chưaCIđồngthời. McNemargiảđịnh cặpngày độc lập là hạnchế;nếu cótựtươngquan,cầnphépkiểmtra bổsung. Khônglấy100/1000số làmn độc lập.

## Sổ mơ và gấp thếp
Sổmơ:khôngcódữliệu giấcmơ ghi trướcgiờquay vàbảng ánhxạ cốđịnh, nênkhôngcó backtest hợp lệ. Không tạo giấcmơgiả.
Gấp thếp:không thayxácsuấtsố. Nếu tiềnđầu là1đơnvị, sauk lầnthua mứcđãchi=2^k-1 vàmức tiếp=2^k. Ví dụ5lần:31/32;10lần:1023/1024;20lần:1048575/1048576. Khẳngđịnh mộtlầnthắng bùhết chỉ đúngvới giảđịnh tỷlệtrảthưởng phùhợp;chưa cóquytắc trảthưởng/vốn cụthể nênkhông tính lợinhuậnxổsố. Khôngđưa gấpthếp vào thướcđoTop3.

## Toàn bộ kết quả — đối chứng5năm
Đối chứngMNrepeat,MT/MBfrequency;MT chỉ làđốichứngnghiêncứu. Bảngall_tests_combined còn đủ1/3năm;đặcbiệtMBkhôngđượcchỉso5năm yếu hơn.
|Miền/phạmvi|Đuôi|Ứngviên|Kỳ|Tỷlệ|Đốichứng5năm|Chênhđiểm% [CI95%]|
|---|---:|---|---:|---:|---:|---|
|MN/all|2|bacnho_pair|1828|66.25%|67.83%|-1.59 [-4.32;+1.31]|
|MN/all|2|diamond|1828|65.81%|67.83%|-2.02 [-4.92;+0.98]|
|MN/all|2|dynamic_positions|1828|66.08%|67.83%|-1.75 [-4.98;+1.37]|
|MN/all|2|forest_train1y_sample20k|1828|66.25%|67.83%|-1.59 [-4.60;+1.48]|
|MN/all|2|forest_train3y_sample20k|1828|68.16%|67.83%|+0.33 [-2.90;+3.29]|
|MN/all|2|forest_train5y_sample20k|1828|67.56%|67.83%|-0.27 [-3.34;+2.68]|
|MN/all|2|ga_rankblend|1828|68.22%|67.83%|+0.38 [-2.46;+3.28]|
|MN/all|2|logistic_train1y_sample20k|1828|65.26%|67.83%|-2.57 [-5.75;+0.44]|
|MN/all|2|logistic_train3y_sample20k|1828|67.51%|67.83%|-0.33 [-3.23;+2.52]|
|MN/all|2|logistic_train5y_sample20k|1828|66.25%|67.83%|-1.59 [-4.43;+1.42]|
|MN/all|2|lstm|1828|67.34%|67.83%|-0.49 [-3.56;+2.24]|
|MN/all|2|lunar_day|1828|65.59%|67.83%|-2.24 [-5.36;+0.77]|
|MN/all|2|ridge_train1y_sample20k|1828|65.54%|67.83%|-2.30 [-5.20;+0.77]|
|MN/all|2|ridge_train3y_sample20k|1828|67.40%|67.83%|-0.44 [-3.39;+2.52]|
|MN/all|2|ridge_train5y_sample20k|1828|66.19%|67.83%|-1.64 [-4.65;+1.42]|
|MN/all|2|rnn|1828|65.92%|67.83%|-1.91 [-4.87;+0.88]|
|MN/all|2|svm_linear_train1y_sample20k|1828|65.43%|67.83%|-2.41 [-5.53;+0.66]|
|MN/all|2|svm_linear_train3y_sample20k|1828|67.34%|67.83%|-0.49 [-3.50;+2.41]|
|MN/all|2|svm_linear_train5y_sample20k|1828|66.19%|67.83%|-1.64 [-4.82;+1.48]|
|MN/all|2|tree_train1y_sample20k|1828|66.36%|67.83%|-1.48 [-4.65;+1.70]|
|MN/all|2|tree_train3y_sample20k|1828|65.43%|67.83%|-2.41 [-5.53;+0.88]|
|MN/all|2|tree_train5y_sample20k|1828|68.60%|67.83%|+0.77 [-2.36;+3.99]|
|MN/all|2|triangle|1828|66.47%|67.83%|-1.37 [-4.38;+1.59]|
|MN/all|2|weekday|1828|67.56%|67.83%|-0.27 [-3.06;+2.35]|
|MN/all|3|bacnho_pair|1828|9.25%|8.10%|+1.15 [-0.60;+2.95]|
|MN/all|3|diamond|1828|9.30%|8.10%|+1.20 [-0.55;+2.95]|
|MN/all|3|dynamic_positions|1828|9.85%|8.10%|+1.75 [-0.05;+3.56]|
|MN/all|3|forest_train1y_sample20k|1828|9.63%|8.10%|+1.53 [-0.27;+3.50]|
|MN/all|3|forest_train3y_sample20k|1828|9.90%|8.10%|+1.81 [-0.22;+3.77]|
|MN/all|3|forest_train5y_sample20k|1828|11.21%|8.10%|+3.12 [+1.31;+4.98]|
|MN/all|3|ga_rankblend|1828|9.46%|8.10%|+1.37 [-0.27;+3.17]|
|MN/all|3|logistic_train1y_sample20k|1828|8.86%|8.10%|+0.77 [-1.26;+2.63]|
|MN/all|3|logistic_train3y_sample20k|1828|8.37%|8.10%|+0.27 [-1.53;+2.13]|
|MN/all|3|logistic_train5y_sample20k|1828|8.53%|8.10%|+0.44 [-1.48;+2.24]|
|MN/all|3|lstm|1828|10.56%|8.10%|+2.46 [+0.49;+4.32]|
|MN/all|3|lunar_day|1828|10.18%|8.10%|+2.08 [+0.27;+3.88]|
|MN/all|3|ridge_train1y_sample20k|1828|8.59%|8.10%|+0.49 [-1.31;+2.41]|
|MN/all|3|ridge_train3y_sample20k|1828|8.32%|8.10%|+0.22 [-1.53;+2.19]|
|MN/all|3|ridge_train5y_sample20k|1828|8.42%|8.10%|+0.33 [-1.42;+2.08]|
|MN/all|3|rnn|1828|10.07%|8.10%|+1.97 [-0.00;+3.83]|
|MN/all|3|svm_linear_train1y_sample20k|1828|8.59%|8.10%|+0.49 [-1.37;+2.35]|
|MN/all|3|svm_linear_train3y_sample20k|1828|8.37%|8.10%|+0.27 [-1.64;+2.08]|
|MN/all|3|svm_linear_train5y_sample20k|1828|8.48%|8.10%|+0.38 [-1.53;+2.08]|
|MN/all|3|tree_train1y_sample20k|1828|9.79%|8.10%|+1.70 [-0.06;+3.50]|
|MN/all|3|tree_train3y_sample20k|1828|10.50%|8.10%|+2.41 [+0.60;+4.27]|
|MN/all|3|tree_train5y_sample20k|1828|9.52%|8.10%|+1.42 [-0.49;+3.39]|
|MN/all|3|triangle|1828|9.79%|8.10%|+1.70 [-0.17;+3.39]|
|MN/all|3|weekday|1828|9.68%|8.10%|+1.59 [-0.16;+3.17]|
|MT/pair|2|bacnho_pair|1558|66.43%|68.55%|-2.12 [-5.20;+1.03]|
|MT/pair|2|diamond|1558|66.56%|68.55%|-1.99 [-4.88;+1.09]|
|MT/pair|2|dynamic_positions|1558|65.73%|68.55%|-2.82 [-6.23;+0.51]|
|MT/pair|2|forest_train1y_sample20k|1558|68.49%|68.55%|-0.06 [-3.27;+2.95]|
|MT/pair|2|forest_train3y_sample20k|1558|67.14%|68.55%|-1.41 [-4.75;+1.67]|
|MT/pair|2|forest_train5y_sample20k|1558|66.88%|68.55%|-1.67 [-4.75;+1.73]|
|MT/pair|2|ga_rankblend|1558|66.69%|68.55%|-1.86 [-5.26;+1.73]|
|MT/pair|2|logistic_train1y_sample20k|1558|66.24%|68.55%|-2.31 [-5.46;+0.96]|
|MT/pair|2|logistic_train3y_sample20k|1558|67.14%|68.55%|-1.41 [-4.69;+2.12]|
|MT/pair|2|logistic_train5y_sample20k|1558|64.25%|68.55%|-4.30 [-7.64;-0.83]|
|MT/pair|2|lstm|1558|66.56%|68.55%|-1.99 [-5.33;+1.54]|
|MT/pair|2|lunar_day|1558|64.12%|68.55%|-4.43 [-7.77;-0.96]|
|MT/pair|2|ridge_train1y_sample20k|1558|66.30%|68.55%|-2.25 [-5.33;+0.90]|
|MT/pair|2|ridge_train3y_sample20k|1558|67.27%|68.55%|-1.28 [-4.62;+1.99]|
|MT/pair|2|ridge_train5y_sample20k|1558|64.38%|68.55%|-4.17 [-7.77;-0.96]|
|MT/pair|2|rnn|1558|66.37%|68.55%|-2.18 [-5.46;+1.03]|
|MT/pair|2|svm_linear_train1y_sample20k|1558|66.24%|68.55%|-2.31 [-5.65;+0.90]|
|MT/pair|2|svm_linear_train3y_sample20k|1558|67.01%|68.55%|-1.54 [-4.75;+1.86]|
|MT/pair|2|svm_linear_train5y_sample20k|1558|64.31%|68.55%|-4.24 [-7.70;-0.83]|
|MT/pair|2|tree_train1y_sample20k|1558|65.40%|68.55%|-3.15 [-6.42;+0.13]|
|MT/pair|2|tree_train3y_sample20k|1558|65.40%|68.55%|-3.15 [-6.35;-0.06]|
|MT/pair|2|tree_train5y_sample20k|1558|64.63%|68.55%|-3.92 [-7.19;-0.45]|
|MT/pair|2|triangle|1558|66.56%|68.55%|-1.99 [-5.14;+1.03]|
|MT/pair|2|weekday|1558|69.06%|68.55%|+0.51 [-0.39;+1.41]|
|MT/single|2|bacnho_pair|262|41.60%|42.75%|-1.15 [-9.16;+6.49]|
|MT/single|2|diamond|262|37.02%|42.75%|-5.73 [-13.36;+1.15]|
|MT/single|2|dynamic_positions|262|40.46%|42.75%|-2.29 [-9.93;+5.34]|
|MT/single|2|forest_train1y_sample20k|262|38.93%|42.75%|-3.82 [-11.07;+3.06]|
|MT/single|2|forest_train3y_sample20k|262|43.13%|42.75%|+0.38 [-7.64;+9.16]|
|MT/single|2|forest_train5y_sample20k|262|39.31%|42.75%|-3.44 [-11.83;+4.58]|
|MT/single|2|ga_rankblend|262|46.56%|42.75%|+3.82 [-3.82;+11.07]|
|MT/single|2|logistic_train1y_sample20k|262|40.08%|42.75%|-2.67 [-10.69;+5.34]|
|MT/single|2|logistic_train3y_sample20k|262|41.60%|42.75%|-1.15 [-9.54;+8.02]|
|MT/single|2|logistic_train5y_sample20k|262|35.50%|42.75%|-7.25 [-16.42;+1.15]|
|MT/single|2|lstm|262|40.08%|42.75%|-2.67 [-10.69;+4.96]|
|MT/single|2|lunar_day|262|43.51%|42.75%|+0.76 [-5.73;+7.26]|
|MT/single|2|ridge_train1y_sample20k|262|40.08%|42.75%|-2.67 [-10.69;+4.59]|
|MT/single|2|ridge_train3y_sample20k|262|42.37%|42.75%|-0.38 [-8.02;+8.40]|
|MT/single|2|ridge_train5y_sample20k|262|35.88%|42.75%|-6.87 [-15.27;+1.15]|
|MT/single|2|rnn|262|37.79%|42.75%|-4.96 [-12.22;+3.05]|
|MT/single|2|svm_linear_train1y_sample20k|262|40.46%|42.75%|-2.29 [-10.31;+5.73]|
|MT/single|2|svm_linear_train3y_sample20k|262|42.37%|42.75%|-0.38 [-9.16;+7.63]|
|MT/single|2|svm_linear_train5y_sample20k|262|35.11%|42.75%|-7.63 [-16.41;+1.15]|
|MT/single|2|tree_train1y_sample20k|262|41.22%|42.75%|-1.53 [-8.78;+5.73]|
|MT/single|2|tree_train3y_sample20k|262|41.22%|42.75%|-1.53 [-8.41;+6.12]|
|MT/single|2|tree_train5y_sample20k|262|40.46%|42.75%|-2.29 [-9.16;+4.58]|
|MT/single|2|triangle|262|40.84%|42.75%|-1.91 [-9.54;+5.34]|
|MT/single|2|weekday|262|41.98%|42.75%|-0.76 [-2.29;+0.76]|
|MT/pair|3|bacnho_pair|1558|11.10%|9.69%|+1.41 [-0.71;+3.27]|
|MT/pair|3|diamond|1558|11.23%|9.69%|+1.54 [-0.51;+3.53]|
|MT/pair|3|dynamic_positions|1558|10.46%|9.69%|+0.77 [-1.41;+2.83]|
|MT/pair|3|forest_train1y_sample20k|1558|10.08%|9.69%|+0.39 [-1.93;+2.44]|
|MT/pair|3|forest_train3y_sample20k|1558|9.56%|9.69%|-0.13 [-2.12;+1.86]|
|MT/pair|3|forest_train5y_sample20k|1558|9.69%|9.69%|+0.00 [-1.99;+1.99]|
|MT/pair|3|ga_rankblend|1558|10.21%|9.69%|+0.51 [-1.48;+2.50]|
|MT/pair|3|logistic_train1y_sample20k|1558|10.53%|9.69%|+0.83 [-1.22;+2.82]|
|MT/pair|3|logistic_train3y_sample20k|1558|10.91%|9.69%|+1.22 [-0.96;+3.28]|
|MT/pair|3|logistic_train5y_sample20k|1558|10.21%|9.69%|+0.51 [-1.67;+2.57]|
|MT/pair|3|lstm|1558|9.50%|9.69%|-0.19 [-2.12;+1.73]|
|MT/pair|3|lunar_day|1558|9.05%|9.69%|-0.64 [-2.50;+1.48]|
|MT/pair|3|ridge_train1y_sample20k|1558|10.46%|9.69%|+0.77 [-1.09;+2.70]|
|MT/pair|3|ridge_train3y_sample20k|1558|10.85%|9.69%|+1.16 [-1.03;+3.47]|
|MT/pair|3|ridge_train5y_sample20k|1558|9.95%|9.69%|+0.26 [-1.86;+2.44]|
|MT/pair|3|rnn|1558|9.31%|9.69%|-0.39 [-2.50;+1.67]|
|MT/pair|3|svm_linear_train1y_sample20k|1558|10.40%|9.69%|+0.71 [-1.48;+2.82]|
|MT/pair|3|svm_linear_train3y_sample20k|1558|10.91%|9.69%|+1.22 [-0.83;+3.27]|
|MT/pair|3|svm_linear_train5y_sample20k|1558|9.95%|9.69%|+0.26 [-1.67;+2.37]|
|MT/pair|3|tree_train1y_sample20k|1558|10.91%|9.69%|+1.22 [-0.84;+3.21]|
|MT/pair|3|tree_train3y_sample20k|1558|9.63%|9.69%|-0.06 [-2.18;+2.12]|
|MT/pair|3|tree_train5y_sample20k|1558|9.18%|9.69%|-0.51 [-2.70;+1.48]|
|MT/pair|3|triangle|1558|11.42%|9.69%|+1.73 [-0.32;+3.79]|
|MT/pair|3|weekday|1558|9.31%|9.69%|-0.39 [-1.28;+0.39]|
|MT/single|3|bacnho_pair|262|6.87%|3.05%|+3.82 [+0.38;+8.02]|
|MT/single|3|diamond|262|6.87%|3.05%|+3.82 [+0.38;+7.63]|
|MT/single|3|dynamic_positions|262|3.82%|3.05%|+0.76 [-1.91;+3.44]|
|MT/single|3|forest_train1y_sample20k|262|6.11%|3.05%|+3.05 [-0.77;+7.25]|
|MT/single|3|forest_train3y_sample20k|262|7.63%|3.05%|+4.58 [+0.76;+8.02]|
|MT/single|3|forest_train5y_sample20k|262|4.96%|3.05%|+1.91 [-1.53;+5.34]|
|MT/single|3|ga_rankblend|262|4.96%|3.05%|+1.91 [-0.76;+4.59]|
|MT/single|3|logistic_train1y_sample20k|262|4.96%|3.05%|+1.91 [-1.53;+5.34]|
|MT/single|3|logistic_train3y_sample20k|262|4.96%|3.05%|+1.91 [-0.76;+4.96]|
|MT/single|3|logistic_train5y_sample20k|262|3.44%|3.05%|+0.38 [-2.67;+3.44]|
|MT/single|3|lstm|262|4.20%|3.05%|+1.15 [-1.91;+4.58]|
|MT/single|3|lunar_day|262|5.73%|3.05%|+2.67 [-1.53;+6.87]|
|MT/single|3|ridge_train1y_sample20k|262|5.34%|3.05%|+2.29 [-1.15;+5.73]|
|MT/single|3|ridge_train3y_sample20k|262|4.96%|3.05%|+1.91 [-1.15;+4.96]|
|MT/single|3|ridge_train5y_sample20k|262|3.44%|3.05%|+0.38 [-2.67;+3.44]|
|MT/single|3|rnn|262|6.49%|3.05%|+3.44 [+0.00;+6.87]|
|MT/single|3|svm_linear_train1y_sample20k|262|5.34%|3.05%|+2.29 [-1.53;+5.73]|
|MT/single|3|svm_linear_train3y_sample20k|262|4.96%|3.05%|+1.91 [-1.15;+4.96]|
|MT/single|3|svm_linear_train5y_sample20k|262|3.44%|3.05%|+0.38 [-2.67;+3.44]|
|MT/single|3|tree_train1y_sample20k|262|4.96%|3.05%|+1.91 [-1.15;+4.96]|
|MT/single|3|tree_train3y_sample20k|262|4.20%|3.05%|+1.15 [-1.91;+4.20]|
|MT/single|3|tree_train5y_sample20k|262|3.05%|3.05%|+0.00 [-2.29;+2.29]|
|MT/single|3|triangle|262|6.49%|3.05%|+3.44 [+0.00;+7.25]|
|MT/single|3|weekday|262|3.44%|3.05%|+0.38 [-1.53;+2.29]|
|MB/all|2|bacnho_pair|1808|56.03%|54.37%|+1.66 [-1.61;+4.76]|
|MB/all|2|diamond|1808|54.37%|54.37%|+0.00 [+0.00;+0.00]|
|MB/all|2|dynamic_positions|1808|57.08%|54.37%|+2.71 [-0.39;+5.86]|
|MB/all|2|forest_train1y_sample20k|1808|55.42%|54.37%|+1.05 [-2.16;+4.48]|
|MB/all|2|forest_train3y_sample20k|1808|54.98%|54.37%|+0.61 [-2.77;+3.93]|
|MB/all|2|forest_train5y_sample20k|1808|54.54%|54.37%|+0.17 [-3.32;+3.71]|
|MB/all|2|ga_rankblend|1808|57.02%|54.37%|+2.65 [-0.50;+5.75]|
|MB/all|2|logistic_train1y_sample20k|1808|56.19%|54.37%|+1.83 [-1.49;+4.98]|
|MB/all|2|logistic_train3y_sample20k|1808|56.53%|54.37%|+2.16 [-1.05;+5.31]|
|MB/all|2|logistic_train5y_sample20k|1808|57.47%|54.37%|+3.10 [-0.28;+6.42]|
|MB/all|2|lstm|1808|57.30%|54.37%|+2.93 [+0.06;+5.75]|
|MB/all|2|lunar_day|1808|54.87%|54.37%|+0.50 [-2.82;+3.82]|
|MB/all|2|ridge_train1y_sample20k|1808|56.08%|54.37%|+1.71 [-1.77;+4.92]|
|MB/all|2|ridge_train3y_sample20k|1808|56.53%|54.37%|+2.16 [-1.55;+5.48]|
|MB/all|2|ridge_train5y_sample20k|1808|56.80%|54.37%|+2.43 [-0.72;+5.81]|
|MB/all|2|rnn|1808|57.41%|54.37%|+3.04 [+0.16;+5.92]|
|MB/all|2|svm_linear_train1y_sample20k|1808|56.08%|54.37%|+1.71 [-1.33;+4.98]|
|MB/all|2|svm_linear_train3y_sample20k|1808|56.58%|54.37%|+2.21 [-1.44;+5.53]|
|MB/all|2|svm_linear_train5y_sample20k|1808|56.91%|54.37%|+2.54 [-0.77;+5.97]|
|MB/all|2|tree_train1y_sample20k|1808|56.53%|54.37%|+2.16 [-1.16;+5.59]|
|MB/all|2|tree_train3y_sample20k|1808|58.13%|54.37%|+3.76 [+0.39;+7.08]|
|MB/all|2|tree_train5y_sample20k|1808|55.03%|54.37%|+0.66 [-2.71;+4.04]|
|MB/all|2|triangle|1808|54.31%|54.37%|-0.06 [-0.17;+0.00]|
|MB/all|2|weekday|1808|56.53%|54.37%|+2.16 [-0.94;+5.15]|
|MB/all|3|bacnho_pair|1808|7.85%|7.85%|+0.00 [+0.00;+0.00]|
|MB/all|3|diamond|1808|7.85%|7.85%|+0.00 [+0.00;+0.00]|
|MB/all|3|dynamic_positions|1808|7.52%|7.85%|-0.33 [-1.83;+1.44]|
|MB/all|3|forest_train1y_sample20k|1808|6.91%|7.85%|-0.94 [-2.43;+0.77]|
|MB/all|3|forest_train3y_sample20k|1808|5.81%|7.85%|-2.05 [-3.71;-0.39]|
|MB/all|3|forest_train5y_sample20k|1808|7.30%|7.85%|-0.55 [-2.21;+1.05]|
|MB/all|3|ga_rankblend|1808|7.02%|7.85%|-0.83 [-2.49;+0.88]|
|MB/all|3|logistic_train1y_sample20k|1808|6.75%|7.85%|-1.11 [-2.65;+0.50]|
|MB/all|3|logistic_train3y_sample20k|1808|6.19%|7.85%|-1.66 [-3.21;+0.00]|
|MB/all|3|logistic_train5y_sample20k|1808|6.19%|7.85%|-1.66 [-3.21;-0.06]|
|MB/all|3|lstm|1808|6.25%|7.85%|-1.60 [-3.15;-0.06]|
|MB/all|3|lunar_day|1808|6.08%|7.85%|-1.77 [-3.43;-0.11]|
|MB/all|3|ridge_train1y_sample20k|1808|6.97%|7.85%|-0.88 [-2.38;+0.61]|
|MB/all|3|ridge_train3y_sample20k|1808|6.19%|7.85%|-1.66 [-3.26;-0.11]|
|MB/all|3|ridge_train5y_sample20k|1808|6.25%|7.85%|-1.60 [-3.26;+0.00]|
|MB/all|3|rnn|1808|6.91%|7.85%|-0.94 [-2.65;+0.72]|
|MB/all|3|svm_linear_train1y_sample20k|1808|6.91%|7.85%|-0.94 [-2.49;+0.67]|
|MB/all|3|svm_linear_train3y_sample20k|1808|6.08%|7.85%|-1.77 [-3.26;-0.16]|
|MB/all|3|svm_linear_train5y_sample20k|1808|6.19%|7.85%|-1.66 [-3.26;-0.06]|
|MB/all|3|tree_train1y_sample20k|1808|5.53%|7.85%|-2.32 [-3.87;-0.72]|
|MB/all|3|tree_train3y_sample20k|1808|7.08%|7.85%|-0.77 [-2.54;+0.83]|
|MB/all|3|tree_train5y_sample20k|1808|5.97%|7.85%|-1.88 [-3.54;-0.28]|
|MB/all|3|triangle|1808|7.85%|7.85%|+0.00 [+0.00;+0.00]|
|MB/all|3|weekday|1808|6.86%|7.85%|-1.00 [-2.44;+0.55]|

## Tái chạy
Đặt thư mục research_20261115_phase2 vàresearch_20261115 cạnhnhau. Cài numpy,pandas,scipy,scikit-learn,torchCPU,vnlunar. Chạy neural.py,ga.py,patterns.py,ml_all.py,evaluate.py,verify.py,negative.py;khôngnạp dữliệutươnglai. Code/nguồn/seed/checkpointđi kèm đểtái lập.
Mẫu code banđầu lunar truycập.day bịlỗi dict trước khichạy;đã sửa sang[day], kiểmtra2mốcpass. Khôngđổi tham sốdựbáo theo kếtquả. Lần cài chungtorch+lunardate khôngthànhcông doindexkhôngcólunardate;đã cài riêng thànhcông;khôngdùnglunardate chođánhgiá.

## Tài liệu kỹ thuật
https://docs.pytorch.org/docs/stable/generated/torch.nn.LSTM.html
https://docs.pytorch.org/docs/stable/generated/torch.nn.BCEWithLogitsLoss.html
https://pypi.org/project/vnlunar/
Các nguồn trên giải thích côngcụ, không chứngminh dựbáoxổsố cólợi thế.