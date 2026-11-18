# Mr Ân — Nhật ký nghiên cứu Top 3 chung

Khởi tạo: 12/11/2026 (Asia/Ho_Chi_Minh). Đây là nhật ký riêng của Site mới, không thay nhật ký hay lịch công việc Site cũ.

## Sản phẩm đang chạy — chỉ thay cách tính khi anh đồng ý
- Site: https://mr-an-top3-chung.pariduly308.chatgpt.site
- Project ID: appgprj_6af51d80fedc819194e8a2e4ae84dfbd
- Bản nguồn đầu tiên: 4d599b2782ad45d2ad8e30e2b9d7df48ce5b7713.
- Riêng tư, chủ sở hữu được xem. Site cũ và quyền của Site cũ không thay đổi.
- Miền Nam: một Top 3 chung cho hai đài. Đạt nếu ít nhất một số chọn xuất hiện ở ít nhất một đài. Cùng một số xuất hiện cả hai đài chỉ là thống kê phụ, không phải tiêu chí chính.
- Cặp đài: T2 TP. HCM–Đồng Tháp; T3 Bến Tre–Vũng Tàu; T4 Đồng Nai–Cần Thơ; T5 Tây Ninh–An Giang; T6 Vĩnh Long–Bình Dương; T7 TP. HCM–Long An; CN Tiền Giang–Kiên Giang.
- Miền Bắc: giữ sáu công thức gốc, chọn phương pháp độc lập với miền Nam. Không dùng kết quả miền Nam trong thuật toán XSMB đang chạy.
- Hai chế độ: đuôi 2 số và 3 số. South version pair-six-v1, North six-methods-v1. Mặc định South repeat; North frequency. Các lựa chọn còn lại giữ sẵn cho người dùng.
- Dữ liệu khởi tạo: 7.553 bảng thật, từ 10/11/2021 đến 11/11/2026. Mốc cuối không tự chứng minh mọi ngày đã đủ; phải kiểm tra từng lịch đài và ngày nghỉ đã xác minh.
- Dự báo thực tế lưu trước 16h miền Nam và 18h miền Bắc, không ghi đè bản đã khóa. Không tạo dự báo quá khứ rồi chấm như đã dự báo trước.

## Bằng chứng đã xem, không coi là kiểm tra mới
Báo cáo SO_SANH_TOP3_CHUNG_2026_11_11.zip (Library libfile_5cf009190df88191af740d472cd7aaba) là nguồn cần đọc lại trước khi nối nghiên cứu. Đã thử 19 biến thể miền Nam và 10 biến thể chuyển miền Nam sang XSMB, mỗi loại 2/3 số, so với sáu phương pháp cũ. Các tham số và bảng đầy đủ phải lấy từ báo cáo, không suy ra từ tóm tắt này.

- Miền Nam 2 số: phương án chọn qua phát triển pair_repeat đạt 257/365 (70,41%); mốc cũ được chọn old_gap 253/365 (69,32%). Chênh +1,10 điểm %, CI95% khoảng [-4,46; +6,74]. Chưa chứng minh tăng xác suất.
- Cùng công thức repeat, bản chung 70,41% so bản cũ 70,96% trên năm cuối; không được chọn riêng một so sánh thuận lợi.
- Miền Nam 3 số: phương án mới 8,77%, mốc đồng đều khoảng 9,70%; không có bằng chứng vượt ngẫu nhiên.
- Miền Bắc 2 số: ứng viên từ miền Nam 191/361 (52,91%), mốc cũ 203/361 (56,23%). Miền Bắc 3 số: 29/361 (8,03%) so mốc cũ 32/361 (8,86%). Đây là hồi cứu đã xem, không phải bằng chứng để thay app.
- Số 9,86% của nghiên cứu cũ chấm cùng số ở cả hai đài là SAI tiêu chí chính của app này, không dùng để kết luận.
- Báo cáo NGHIEN_CUU_XSMB_THU_TRONG_TUAN_2026-11-11.md là hiểu nhầm giả thuyết chuỗi ngày miền Nam, không dùng để trả lời giả thuyết ấy.

## Quy trình mỗi lượt
1. get_site lấy URL và token hiện hành đúng project. Token chỉ trong bộ nhớ; không lưu hay in. POST /api/update, GET /api/status, /data.json, /api/tracking cùng quyền. Lỗi mạng thử lại một lần. Không sửa mã hay xuất bản.
2. Kiểm tra số lượng/độ dài từng giải, số 0 đầu, đài/ngày trùng, lịch đài, khoảng thiếu. Không thay bảng thiếu bằng giả lập. Chờ bảng đủ giải; ghi ngày/kỳ đang chờ.
3. So hash dữ liệu theo ngày với sổ xử lý. Không chấm lại cùng dữ liệu; nếu nguồn sửa ghi phiên bản và lý do chấm lại, giữ nguyên dự báo đã khóa.
4. Chấm dự báo thực sự lưu trước quay, tách miền/cặp đài/phương pháp/2–3 số. Kỳ không có dự báo trước không tính dự báo thực tế.
5. Nghiên cứu và kết quả nằm ngoài app; tiếp nối nhật ký này và các báo cáo. Chỉ thông báo lỗi cần xử lý, phát hiện quan trọng hoặc đủ bằng chứng đề xuất; không thông báo lượt bình thường.

## Hai nhánh nghiên cứu chính
### A. Top 3 chung miền Nam
Quan sát: gộp lựa chọn có thể tiết kiệm số chọn, nhưng số cơ hội trúng tăng khi dò hai đài. Không mặc định lợi thế dự báo.
Biến đích: có ít nhất một số của Top 3 chung xuất hiện ở một trong hai đài; phụ: số nào lặp cả hai. Báo cáo riêng từng thành viên. Đối chiếu Top 3 mỗi đài theo đúng phạm vi dò của bản cũ, ghi rõ 6 vị trí lựa chọn cũ và 3 số chung mới. So mốc đồng đều cùng Top 3 và số giải. Không gọi khác số cơ hội là lợi thế thuật toán.

### B. Kết quả miền Nam buổi chiều → XSMB cùng tối
Quan sát: có số trùng tự nhiên khi đem một tập ứng viên lớn sang 27 giải XSMB. Trực giác lặp số chưa phải bằng chứng dự báo.
Định nghĩa làm việc: dùng kết quả đủ giải của hai đài miền Nam được chọn cùng ngày, lập tập đuôi duy nhất 2/3 số; đếm lặp trong một đài và cả hai, kết hợp tần suất đã quan sát trước ngày đích để xếp đúng Top 3. Không dùng kết quả XSMB cùng tối lúc tạo đặc trưng. Nếu đổi phạm vi thành mọi đài miền Nam, ghi thành giả thuyết riêng trước thử.
Thời điểm: chỉ khóa ứng viên nghiên cứu khi đủ hai đài chiều và trước 18h; nếu không thực sự lưu được trước mốc, kỳ ấy chỉ thuộc hồi cứu. Lưu bản dự báo nghiên cứu riêng với timestamp, hash nguồn và công thức, tuyệt đối không ghi vào dự báo sản phẩm.
Đối chiếu: XSMB công thức cũ, ứng viên mới và đồng đều trên cùng ngày, đúng Top 3, đúng số giải hợp lệ từng chế độ (2 số 27, 3 số 23). Ghi cả tỷ lệ có ứng viên trùng chiều và hiệu quả chọn ba số, không lẫn hai đại lượng.

## Thiết kế kiểm chứng và tiêu chí giữ/loại
- Ưu tiên ít giả thuyết có lý do. Mỗi thử nghiệm ghi ID, quan sát, dự báo đo được, biến, tham số, số kỳ/đài/ngày, dấu thời gian định trước, cách chia dữ liệu, tiêu chí và kết quả cả thất bại.
- Dữ liệu 5 năm: năm đầu khởi tạo, dự báo cuốn chiếu từng kỳ bốn năm sau; chỉ cập nhật trạng thái sau chấm. Chọn tham số trong phần huấn luyện/xác thực theo thời gian, so cửa sổ trên cùng kỳ đích. Báo cáo đủ sáu công thức, từng năm, từng đài và 2/3 số.
- Các giai đoạn đã xem là dữ liệu đã dùng. Muốn xác nhận ứng viên mới phải cố định trước và theo dõi kỳ tương lai.
- Thống kê tỷ lệ Top 3 trúng ít nhất một, Brier cho xác suất từng số (nếu có xác suất định nghĩa rõ), hiệu chỉnh và bất định. Nếu chỉ có điểm xếp hạng không gọi điểm đó là %.
- Khoảng tin cậy theo kỳ/ngày quay; không coi 100/1000 số cùng kỳ là mẫu độc lập. So chênh lệch ghép cặp với bản hiện hành và đồng đều, có xét nhiều thử nghiệm. Không tuyên bố một kết quả may mắn là cải thiện.
- Tiêu chí nghiên cứu ban đầu: ứng viên chỉ được giữ để xác nhận tương lai khi hiệu quả không phụ thuộc một giai đoạn đơn lẻ, độ hiệu chỉnh không xấu hơn đáng kể và có lý do giải thích; không đủ bằng chứng thì chưa kết luận. Trước mỗi thử nghiệm tương lai phải định trước số kỳ tối thiểu, mức cải thiện mục tiêu và điều chỉnh nhiều phép thử, không đặt sau khi nhìn kết quả.
- Chỉ đề xuất áp dụng khi vượt các mốc trên dữ liệu tương lai và được anh đồng ý. Không hứa 60%, không tăng phần trăm cho đẹp, không tự đổi thuật toán.

## Trạng thái khởi tạo
- Chưa có ngày nào được chấm như dự báo thực tế của Site mới tại lúc khởi tạo.
- processed_day_hashes: {}.
- research_trials_new_site: 0. Các thử nghiệm cũ đã xem được ghi riêng ở trên, không xóa khỏi lịch sử thử nghiệm.
- Việc tiếp: kiểm tra lượt cập nhật đầu tiên; kiểm tra đầy đủ ngày 12/11/2026 sau quay; chấm dự báo đã khóa của Site mới; định trước thử nghiệm B dựa trên báo cáo cũ trước khi tạo ứng viên tương lai. Khi không có bằng chứng mới thì tiếp tục tích lũy, không chế thêm công thức để đủ báo cáo.


## Bổ sung 12/11/2026 — hai mốc và khóa 1/3/5 năm
- Sau miền Nam: kiểm tra từng bảng mới đủ giải, chỉ tính đặc trưng cặp khi đủ hai bảng; trước18h nếu có tín hiệu có căn cứ cho XSMB thì báo với mức bất định. Chưa có thì lưu, không thông báo thường lệ.
- Sau XSMB: chấm riêng dự báo đã khóa, giữ hash giai đoạn MN và MB tách biệt; ghi cả đúng/sai. Không chờ XSMB mới xử lý lượt MN.
- Đã tạo bản khóa window-study-v1 lúc2026-11-12T06:32:19.325Z (13:32:19giờ VN), dữ liệu tới11/11/2026, 144bản ghi:3cửa sổ ×6công thức ×2chế độ ×4đích (Tây Ninh, An Giang, cặp chung, XSMB). Chưa có kết quả để chấm, không tuyên bố cửa sổ nào tốt hơn.
- Số kỳ1/3/5năm: mỗi đài/cặp52/156/260; XSMB361/1084/1806. Khoảng lịch sử có thể gồm ngày nghỉ và thiếu chưa xác minh; phải kiểm tra trước kết luận.
- Gói MR_AN_KHOA_1_3_5_NAM_2026_11_12.zip chứa bản khóa, dữ liệu, code và PROTOCOL.md. Tiêu chí chính repeat miềnNam vàfrequency XSMB2số; đủ6công thức/2–3số vẫn báo. Theo dõi90ngày mô tả,365ngày đánh giá định trước, không hứa đủ mẫu; không sửa app.
- Đang tải thêm5năm cũ10/11/2016–09/11/2021 từMinhNgọc, kiểm tra khả dụng thành công. Chưa tuyên bố hoàn tất10năm hay đã chạy hồi cứu đủ10năm. Mỗi lần tải giữ URL/hash/timestamp để kiểm tra.


## Hoàn tất lượt mở rộng dữ liệu 12/11/2026
- Đã khóa dự báo tương lai ngày 12/11/2026 lúc13:32:19giờ Việt Nam:144bản ghi,6công thức,2/3số,3cửa sổ,4đích. Không sửa app. Gói khóa riêng MR_AN_KHOA_1_3_5_NAM_2026_11_12.zip.
- Đã tải522 trang lịch sử MinhNgọc,0lỗi tải;7.105 bảng bổ sung,14.658 bảng tổng,10/11/2016–11/11/2026. Không có kết quả mâu thuẫn giữa các trang được đối chiếu.
- Parser chỉ nhận bảng đủ số lượng và độ dài từng giải, giữ số0đầu. Có480 vị trí đài/ngày không có bảng theo lịch hiện tại (418MN,62MB); đây là danh sách cần phân loại ngày nghỉ / ngừng quay / thay đổi lịch / thiếu, không mặc định là thiếu do lỗi. Không tạo kết quả giả. Hiệu lực lịch lịch sử chưa xác minh đầy đủ nên kết quả dưới đây là tạm thời.
- So cùng kỳ đích10/11/2021–11/11/2026, mỗi kỳ chỉ dùng lịch sử nằm trong cửa sổ trước kỳ. Năm đầu dữ liệu cũ2016dùng khởi tạo cho cửa sổ 5 năm. Không chọn tham số theo kết quả. Toàn bộ là hồi cứu đã xem, không là dự báo thực tế.
- 337.716 dòng dự báo hồi cứu, đủ sáu công thức,2/3số,3cửa sổ,cácđài và7cặp. Đã đối chiếu161 dòng phân bố toàn bảng với hàmJavaScriptgốc: khớp Top3 vàsố kỳ.

## So sánh chính: đuôi2số, Top3 có ít nhất1số xuất hiện

| Phạm vi / công thức | Số kỳ | 1 năm | 3 năm | 5 năm |
|---|---:|---:|---:|---:|
| Cặp miền Nam / repeat | 1828 | 66.96% | 67.18% | 67.83% |
| XSMB / frequency | 1808 | 57.08% | 54.92% | 54.37% |

Khoảng95%chênh lệch, bootstrap ghép cặp theo khối7quan sát,2.000lần (mô tả, chưa hiệu chỉnh nhiều so sánh):
- pair_south 1 vs5: -0.88 điểm%, khoảng[-2.63;+0.88].
- pair_south 3 vs5: -0.66 điểm%, khoảng[-2.13;+0.88].
- north 1 vs5: +2.71 điểm%, khoảng[-0.55;+5.97].
- north 3 vs5: +0.55 điểm%, khoảng[-2.16;+3.43].

Cả bốn khoảng đều chứa0. Chưa có bằng chứng cửa sổ nào tốt hơn. Tỷ lệ này không phải xác suất từng số và không phải cam kết kỳ tới. Mốc đồng đều lý tưởng (các kết quả độc lập, cùngTop3) là 66.60% cho cặpMN36giải và 56.06% choMB27giải.

## Kết quả từng năm (công thức chính, đuôi2số)

| Năm | Phạm vi | Số kỳ | 1 năm | 3 năm | 5 năm |
|---|---|---:|---:|---:|---:|
| 2021 | MN | 52 | 65.38% | 71.15% | 71.15% |
| 2021 | MB | 52 | 51.92% | 61.54% | 76.92% |
| 2022 | MN | 365 | 66.30% | 63.84% | 66.03% |
| 2022 | MB | 361 | 59.83% | 54.85% | 54.57% |
| 2023 | MN | 365 | 70.68% | 69.59% | 67.12% |
| 2023 | MB | 361 | 56.79% | 55.12% | 52.08% |
| 2024 | MN | 366 | 66.67% | 66.67% | 67.76% |
| 2024 | MB | 362 | 61.33% | 58.84% | 51.10% |
| 2025 | MN | 365 | 65.21% | 67.95% | 67.95% |
| 2025 | MB | 361 | 52.08% | 52.35% | 54.85% |
| 2026 | MN | 315 | 66.03% | 67.30% | 70.16% |
| 2026 | MB | 311 | 55.95% | 52.09% | 56.27% |

2021và2026là năm không đủ12tháng trong phần chấm. Kết quả đầy đủ từng đài/cặp/phương pháp/chế độ/năm có trong retrospective_results.json; từngdựbáo trong retrospective_predictions.csv. CácWilsonCI từngnhóm chỉ là mô tả nhị thức, không coi là phép kiểm định độc lập hàng trăm số hay bảo đảm đã xử lý tự tương quan. So sánh chính dùng bất định theo khối kỳ.

## Bước tiếp
Tiếp tục khóa1/3/5năm trước giờ quay mỗi ngày, chấm hai mốcMN/MB, giữ cả thắng và thua. Xác minh480 vịtrílịch và nguồn ngàynghỉ/ngừngquay. Sau khi có thêm xác minh, nếu sửa dữ liệu hồi cứu thì đánh phiênbản mới; không sửa bản khóa 12/11. Không cần tải xa hơn10năm ngay lúc này; ưu tiên chất lượng và bằng chứng tương lai, không có số năm bảo đảm tìmđược quy luật.

Gói chứng cứ: MR_AN_DU_LIEU_10_NAM_VA_SO_SANH_1_3_5_2026_11_12.zip. Gói khóa trước quay đã lưu riêng Library libfile_4b3897488ff08191a96572cf74f3fc49.


## Lượt thử có kiểm soát sau so sánh cửa sổ — 12/11/2026
# Thử nghiệm bổ sung trên dữ liệu 10 năm — 12/11/2026

Đây là nghiên cứu riêng; app và các bản dự báo đã khóa không thay đổi.

Đã thử 4 giả thuyết, tương ứng 14 tổ hợp miền/chế độ. Tham số và tiêu chí được ghi trước lần chạy trong PROTOCOL.md. Có 8 tổ hợp MN và 6 tổ hợp MB; phương pháp gộp riêng hai đài chỉ dành cho MN. Không phát sinh biến thể sau khi xem kết quả. Giữ đủ sáu công thức gốc làm đối chứng; mốc làm trơn tần suất không tính là công thức xếp hạng mới vì không đổi thứ tự.

Dữ liệu từ 10/11/2016–11/11/2026; đích hồi cứu từ 10/11/2021. Mỗi dự báo chỉ dùng dữ liệu trước ngày đích, lịch sử tối đa5năm. Chia theo thời gian: phát triển đến09/11/2024; xác thực10/11/2024–09/11/2025; phần cuối10/11/2025–11/11/2026. Chọn một ứng viên mỗi miền/chế độ bằng phần xác thực, rồi báo phần cuối; tất cả các phần này đã được xem ở nghiên cứu trước nên KHÔNG là kiểm chứng tương lai độc lập. Không tối ưu tham số sau kết quả.

## Ứng viên chọn bằng phần xác thực
Tỷ lệ dưới đây là Top3 có ít nhất một số xuất hiện, không là xác suất từng số. App đối chứng: repeatMN vàfrequencyMB, cùng cửa sổ5năm, cùng kỳ đích. Cả14tổ hợp đều lưu trong results.json và predictions.csv, không chỉ bốn dòng được chọn.

| Phạm vi | Ứng viên | Số kỳ toàn phần | Toàn phần mới / app | Phần cuối mới / app | Đạt tiêu chí sàng lọc? |
|---|---|---:|---:|---:|---|
| MN 2 số | Giảm trọng số dữ liệu cũ | 1828 | 66.25% / 67.83% | 68.94% / 70.57% | Chưa đạt |
| MN 3 số | Tính riêng từng đài rồi gộp | 1828 | 10.28% / 8.10% | 13.08% / 8.99% | Chưa đạt |
| MB 2 số | Kết hợp gần–xa 50/50 | 1808 | 58.74% / 54.37% | 57.30% / 54.82% | Chưa đạt |
| MB 3 số | Tần suất theo từng giải | 1808 | 7.91% / 7.85% | 8.82% / 8.54% | Chưa đạt |

## Bất định và xác suất
- MN 2 số, 367 kỳ phần cuối: chênh -1.63 điểm%, CI95% [-6.81; +3.81]; Brier ứng viên trừ đồng đều +0.00110450 (dương là kém hơn).
- MN 3 số, 367 kỳ phần cuối: chênh +4.09 điểm%, CI95% [+0.00; +8.17]; Brier ứng viên trừ đồng đều +0.00008892 (dương là kém hơn).
- MB 2 số, 363 kỳ phần cuối: chênh +2.48 điểm%, CI95% [-4.68; +9.37]; Brier ứng viên trừ đồng đều +0.00063502 (dương là kém hơn).
- MB 3 số, 363 kỳ phần cuối: chênh +0.28 điểm%, CI95% [-0.55; +1.38]; Brier ứng viên trừ đồng đều +0.00000691 (dương là kém hơn).

Khoảng bất định dùng bootstrap ghép cặp theo khối7quan sát,2.000lần. Chưa hiệu chỉnh14phép thử, nên không coi khoảng tốt của một mô hình là bằng chứng đã phát hiện lợi thế. Brier tính cho toàn bộ số nhưng lấy trung bình theo kỳ rồi mới tính bất định; không coi100/1000số là mẫu độc lập. Hiệu chỉnh10nhóm được lưu; các nhóm rộng, nhất là chế độ3số, nên không đủ một mình để kết luận xác suất đã hiệu chỉnh tốt.

Cả bốn ứng viên được chọn đều có Brier kém mốc đồng đều. Vì vậy các phần trăm xác suất nội bộ của chúng chưa đáng để đưa lên app. Làm trơn có thể giảm độ quá tự tin mà không đổi Top3; cần phân biệt cải thiện xác suất và cải thiện xếp hạng.

## Đối chiếu thêm với hệ cũ để tránh chọn đối chứng yếu
Mốc cũ dưới đây chọn từ18tổ hợp (6công thức×3cửa sổ) chỉ dựa phần xác thực, phá hòa bằng tên/cửa sổ. Đây là phân tích bổ sung theo cùng quy tắc thời gian, không chọn theo kết quả phần cuối.

| Phạm vi | Mốc cũ được chọn | Phần cuối cũ | Phần cuối ứng viên mới |
|---|---|---:|---:|
| MN 2 số | repeat, 3 năm | 66.49% | 68.94% |
| MN 3 số | repeat, 1 năm | 11.72% | 13.08% |
| MB 2 số | repeat, 3 năm | 54.27% | 57.30% |
| MB 3 số | gap, 1 năm | 4.68% | 8.82% |

## Kết luận và hạn chế
Có dấu hiệu hồi cứu đáng theo dõi ở XSMB2số (kết hợp gần–xa) và MN3số (tính từng đài rồi gộp). Chưa mô hình nào đạt toàn bộ tiêu chí đã ghi trước: cải thiện phần cuối ít nhất3điểm%, CI chênh không chứa0, tăng ở ít nhất2/3giai đoạn và Brier không kém đồng đều. Không áp dụng, không gọi là xác suất cao hơn đã được chứng minh.

Giữ kết quả thất bại của MN2số và mức chênh rất nhỏ MB3số. Hai hướng có tín hiệu chỉ được lưu để nghiên cứu tiếp; không tự thay bản khóa1/3/5năm đã lưu. Trước thử nghiệm tương lai phải cố định phiên bản và tiêu chí, lưu dự báo thực sự trước quay.

Còn480vị trí lịch ở bộ10năm chưa phân loại đầy đủ nghỉ/ngừngquay/thiếu; kết quả tạm thời. Nguồn và kiểm toán nằm trong gói10năm đã lưu. Không thêm kết quả giả. Lần kiểm tra mã này đã đối chiếu toàn bộ43.632dự báo đối chứng với nghiên cứu1/3/5năm trước: khớp Top3 và đạt/khôngđạt. Mốc đồng đều trong mã chỉ cung cấp xác suất/Brier và tỷ lệTop3 lý thuyết, không giả lập một bộ số rồi gọi là tỷ lệ ngẫu nhiên đã đo.

Đã thêm14tổ hợp giả thuyết mới; không đặt lại bộ đếm các thử nghiệm19biến thểMN/10biến thểMN→MB và cửa sổ1/3/5đã ghi trước. Gói: MR_AN_THU_NGHIEM_CO_KIEM_SOAT_2026_11_12.zip.


## Lượt kiểm tra18:35 ngày12/11/2026 — ghi mốcMN, chờMB
# Đối chiếu dự báo đã khóa — 2026-11-12, mốc miền Nam

- Kiểm tra lúc 2026-11-12T11:34:51.647222+00:00; lastCheck=2026-11-12T11:33:52.257Z; errors=[].
- Site mới giữ owner-private, chỉ chủ sở hữu, không đổi quyền/mã/thuật toán/xuất bản. Site cũ không tác động.
- Tổng 7556 bảng; không có khóa đài/ngày trùng, không có bảng sai số lượng/độ dài trong dữ liệu nhận. Số giữ dạng chuỗi, gồm số0đầu. Kiểm tra này theo cấu trúc bảng phẳng; không tự khẳng định đã xác minh lại từng giải với HTML gốc trong lượt này.
- Ngày12/11/2026 đã có Tây Ninh, An Giang, Bình Thuận; còn chờ XSMB. Không đánh dấu cả ngày hoàn tất dù latestDate là12/11.
- Đã chấm108bản ghi nghiên cứu miềnNam của bản khóa13:32:19 (3đích×3cửa sổ×6công thức×2chế độ).36bản ghi XSMB chờ. Bản khóa giữ nguyên. Dự báo Site khóa09:08:37 được tính lại độc lập và khớp /api/tracking.
- Nhật ký đọc vào phiên bản3 chưa có ngày xử lý MN/MB; vì thế đây là lần ghi chấm đầu tiên trong nhật ký. Không cộng thêm lần nữa khi hash không đổi.

## Cửa sổ1/3/5năm — ghi số khớp, dấu “—” nghĩa là không có số khớp

| Đích | Đuôi | Cửa sổ | frequency | recent10 | recent20 | recent50 | gap | repeat |
|---|---:|---:|---|---|---|---|---|---|
| Tây Ninh | 2 | 1 | 19 | 19 | — | 19 | — | — |
| Tây Ninh | 2 | 3 | 19 | 19 | — | 19 | — | — |
| Tây Ninh | 2 | 5 | — | 19 | — | 19 | — | — |
| Tây Ninh | 3 | 1 | — | — | — | — | — | — |
| Tây Ninh | 3 | 3 | — | — | — | — | — | — |
| Tây Ninh | 3 | 5 | — | — | — | — | — | — |
| An Giang | 2 | 1 | 02 | 15 | 15 | 02 | — | 69, 75, 02 |
| An Giang | 2 | 3 | 69 | 92 | 92 | 02 | — | 69, 75 |
| An Giang | 2 | 5 | 02 | 92 | 92 | 02 | — | 69, 75 |
| An Giang | 3 | 1 | — | — | — | — | — | 975 |
| An Giang | 3 | 3 | — | — | — | — | — | 975 |
| An Giang | 3 | 5 | — | — | — | — | — | 975 |
| Tây Ninh + An Giang | 2 | 1 | 15 | — | — | — | 62 | 26, 69 |
| Tây Ninh + An Giang | 2 | 3 | 32 | — | — | — | — | 69, 26 |
| Tây Ninh + An Giang | 2 | 5 | 95 | — | — | — | 56 | 69, 26 |
| Tây Ninh + An Giang | 3 | 1 | — | — | — | — | — | 975 |
| Tây Ninh + An Giang | 3 | 3 | — | — | — | — | — | 975 |
| Tây Ninh + An Giang | 3 | 5 | — | — | — | — | — | 975 |

## Dự báo Site đã khóa

| Đích | Đuôi | Phương pháp | Top3 đã khóa | Số khớp |
|---|---:|---|---|---|
| Tây Ninh + An Giang | 2 | frequency | 95, 13, 14 | 95 |
| Tây Ninh + An Giang | 2 | recent10 | 86, 13, 24 | — |
| Tây Ninh + An Giang | 2 | recent20 | 86, 54, 85 | — |
| Tây Ninh + An Giang | 2 | recent50 | 13, 85, 54 | — |
| Tây Ninh + An Giang | 2 | gap | 44, 11, 56 | 56 |
| Tây Ninh + An Giang | 2 | repeat | 69, 70, 26 | 69, 26 |
| Tây Ninh + An Giang | 3 | frequency | 895, 305, 359 | — |
| Tây Ninh + An Giang | 3 | recent10 | 895, 013, 638 | — |
| Tây Ninh + An Giang | 3 | recent20 | 895, 786, 742 | — |
| Tây Ninh + An Giang | 3 | recent50 | 895, 586, 913 | — |
| Tây Ninh + An Giang | 3 | gap | 359, 171, 420 | — |
| Tây Ninh + An Giang | 3 | repeat | 975, 895, 013 | 975 |

## Diễn giải và giới hạn
- Phương pháp chính repeat,cặpMN,2số: cả1/3/5năm đều chọn cùng tập26–69–70 (khác thứ tự), khớp26và69ởAnGiang; TâyNinh không khớp. Theo đúng tiêu chíunion, cảba đều đạt. Một kỳ/ba cửa sổ cùngđúng không phân biệt được hiệu quả. Không báo tỷ lệ100% như xác suất kỳtới.
- Kỳ quan sát chính tích lũy: MN n=1, MB n=0 trong nhật ký; chênh ghép cặp1vs5và3vs5ởMN bằng0/1. Chưa tính suy luận/kiểm định hoặc chốt phiên bản. Các đài cùng ngày không coi là mẫu độc lập để phóng đại số kỳ.
- Chưa có mô hình xác suất từng số trong bản khóa nên Brier/hiệu chỉnh đểN/A, không đổi điểm xếp hạng thành%.
- Quan sát mô tả chiều: hai đài có30đuôi2số khác nhau,3số chung cảhai là04,15,74; có33đuôi3số khác nhau,204chung cảhai. Đây là thống kê kết quả, KHÔNG phải dự báo XSMB. Không mang cả30số đi dò rồi gọi là tín hiệu tốt; mô hình đồng đều độc lập cũng cho khả năng trùng ít nhất1rất cao khi tập chọn lớn.
- Lượt này bắt đầu sau18h. Không tạo hoặc ghi lùi thời gian dự báo MN→MB cho hômnay. Nhật ký hiện hành không dẫn một bản nghiên cứu MN→MB khóa trước18h; nếu lượt sau tìm thấy bản có bằng chứng lưu trước18h thì đối chiếu đúng bản đó, nếu không thì hômnay chỉ là mô tả/hồi cứu cho nhánh này.
- Chưa có tín hiệu mới đủ cơ sở cảnh báo, không gửi cảnh báo muộn. XSMB chờ đủ bảng rồi phân tích độc lập. Không chấm bảng đang quay dở.
- Không mở thêm thử nghiệm công thức trong lượt này: ưu tiên tích lũy dự báo khóa và chất lượng dữ liệu; sốtổ hợp mới=0. Giữ nguyên14tổ hợp mới gần nhất và toàn bộ lịch sử thửnghiệm trước đó.480vị trí lịch10năm vẫn chưa phân loại xong; không tuyên bố đã giải quyết.

## Bổ sung chỉ đạo giả thuyết khác thường
Cho phép thử giả thuyết trái trực giác hoặc thoạt nhìn vô lý trong nhánh thăm dò, không bác bỏ chỉ vì nghe lạ. Trước mỗi lô ghi lýdo, côngthức, tham số, sốthử tốiđa, tiêu chí giữ/loại và cách so công bằng; ghi cả thất bại. Ưu tiên kiểm tra âm tính/hoánvị bảo toàn cấu trúc kỳ. Tỷ lệ cao do chọn lọc nhiều thử nghiệm hoặc thêm số/giải không gọi là lợi thế. Nếu báo tín hiệu thăm dò phải nêu sốkỳ, giaiđoạn, bấtđịnh, sốphépthử và chưa kiểm chứng. Mọi áp dụng vẫn cần anh đồng ý.

## Trạng thái để nối lượt sau

```json
{
  "date": "2026-11-12",
  "stationHashes": {
    "Tây Ninh": "c37e45e9e024079fa3e3dbbd086a56301e453232ae6bb8f1113c9fd937cb182f",
    "An Giang": "3b4bee59aefca30852df2ab7badfa2ad228ccd8d77d1f1133a5e7873530b1d58",
    "Bình Thuận": "d8acbe5c4436be08cdbe72c5a4d3f67e87f488250d48e30eb3c1e0a8982c6412"
  },
  "stageHashes": {
    "MN": "df64d7c9dc1e8a10f3e85a7c165f3afe4fffea23c74c2bcfc4ed348888fff862",
    "MB": null
  },
  "stageStatus": {
    "MN": "scored",
    "MB": "pending"
  },
  "processedMNDate": "2026-11-12",
  "processedMBDate": null,
  "lockedResearchSource": "libfile_4b3897488ff08191a96572cf74f3fc49",
  "research_scored_records": 108,
  "research_pending_records": 36,
  "primary_paired_sample_sizes": {
    "MN": 1,
    "MB": 0
  },
  "hypothesis_trials_added_this_run": 0
}
```

Gói chứng cứ: MR_AN_DOI_CHIEU_MOC_MN_2026_11_12.zip.


## Lô giả thuyết khác thường v1 — 12/11/2026
# Bảng nháp: giả thuyết khác thường — 12/11/2026

Đã chạy 16 tổ hợp mới, không quét mọi quy tắc và không tối ưu lại sau kết quả. Dữ liệu nguồn 10/11/2016–11/11/2026, 14.658 bảng; 5 năm đầu khởi tạo, chấm 10/11/2021–11/11/2026. Các kỳ đã xem là hồi cứu, không phải dự báo tương lai. Không sử dụng kết quả 12/11 trong đợt này.

## Kết quả đầy đủ

Tỷ lệ = Top 3 có ít nhất một số xuất hiện. MN dò hai đài theo lịch, MB dò XSMB; không so trực tiếp tỷ lệ hai miền. App đối chứng giữ repeatMN/frequencyMB,5năm. CI theo khối7ngày là mô tả, chưa hiệu chỉnh chọn lọc nhiều mô hình.

| Miền | Đuôi | Cách thử | Kỳ | Mới | App | Chênh điểm% | CI95% chênh | Phần cuối mới/app |
|---|---:|---|---:|---:|---:|---:|---|---|
| MN | 2 | Chọn ngược công thức chính | 1828 | 67.78% | 67.83% | -0.05 | [-3.06; +3.06] | 63.22%/70.57% |
| MN | 2 | 1 năm nổi hơn 5 năm | 1828 | 67.12% | 67.83% | -0.71 | [-3.56; +2.02] | 70.57%/70.57% |
| MN | 2 | 5 năm nổi hơn 1 năm | 1828 | 67.34% | 67.83% | -0.49 | [-3.67; +2.57] | 70.84%/70.57% |
| MN | 3 | Chọn ngược công thức chính | 1828 | 9.74% | 8.10% | +1.64 | [-0.22; +3.61] | 10.63%/8.99% |
| MN | 3 | 1 năm nổi hơn 5 năm | 1828 | 9.25% | 8.10% | +1.15 | [-0.82; +2.95] | 7.90%/8.99% |
| MN | 3 | 5 năm nổi hơn 1 năm | 1828 | 9.35% | 8.10% | +1.26 | [-0.55; +3.17] | 9.54%/8.99% |
| MB | 2 | Chọn ngược công thức chính | 1808 | 55.03% | 54.37% | +0.66 | [-2.65; +3.76] | 59.50%/54.82% |
| MB | 2 | 1 năm nổi hơn 5 năm | 1808 | 58.02% | 54.37% | +3.65 | [+0.44; +6.97] | 58.95%/54.82% |
| MB | 2 | 5 năm nổi hơn 1 năm | 1808 | 54.65% | 54.37% | +0.28 | [-2.93; +3.65] | 55.37%/54.82% |
| MB | 2 | Đảo số chiều → tối | 1808 | 55.75% | 54.37% | +1.38 | [-1.66; +4.70] | 59.23%/54.82% |
| MB | 2 | Cộng 5 từng chữ số chiều → tối | 1808 | 57.02% | 54.37% | +2.65 | [-0.44; +5.75] | 58.95%/54.82% |
| MB | 3 | Chọn ngược công thức chính | 1808 | 7.63% | 7.85% | -0.22 | [-1.88; +1.49] | 7.71%/8.54% |
| MB | 3 | 1 năm nổi hơn 5 năm | 1808 | 6.75% | 7.85% | -1.11 | [-2.60; +0.39] | 6.06%/8.54% |
| MB | 3 | 5 năm nổi hơn 1 năm | 1808 | 5.92% | 7.85% | -1.94 | [-3.43; -0.39] | 4.96%/8.54% |
| MB | 3 | Đảo số chiều → tối | 1808 | 7.47% | 7.85% | -0.39 | [-2.05; +1.33] | 9.37%/8.54% |
| MB | 3 | Cộng 5 từng chữ số chiều → tối | 1808 | 6.64% | 7.85% | -1.22 | [-2.88; +0.39] | 6.06%/8.54% |

Phần cuối:10/11/2025–11/11/2026, MN367kỳ,MB363kỳ; vẫn đã được xem. Không chọn nó làm kiểm tra mới.

## Điểm đáng chú ý và đối chứng mạnh hơn

XSMB2số short_rise đạt58,02%, hơn app5năm3,65điểm%, nhưng chỉ hơn frequency1năm57,08% khoảng0,94điểm%. Hướng gần–xa50/50 đã thử trước đạt58,74%, nên hướng mới này cũng không vượt mức hồi cứu đó. Không lựa mốc yếu nhất để gọi là cải thiện.

Chọn ngượcMN2số67,78% gần như app67,83%; không có lợi thế. Đảo số chiều55,75%, cộng5chiều57,02% cũng chưa thể kết luận tốt hơn cáchMB1năm57,08%. Chọn ngượcMN3số9,74% gần mốc đồng đều lý tưởng9,71%: thắng app8,10% chưa đủ để thắng chọn ngẫu nhiên.

Không tổ hợp nào đạt toàn bộ điều kiện sàng lọc đã ghi. Không có Brier/hiệu chỉnh vì các cách chỉ sinh thứ hạng, chưa định nghĩa xác suất từng số.

## Sáu đối chứng và ba cửa sổ chính — cùng kỳ

| Miền | Đuôi | Phương pháp | Kỳ | Tỷ lệ |
|---|---:|---|---:|---:|
| MN | 2 | base_frequency | 1828 | 67.67% |
| MN | 2 | base_recent10 | 1828 | 65.37% |
| MN | 2 | base_recent20 | 1828 | 64.00% |
| MN | 2 | base_recent50 | 1828 | 66.30% |
| MN | 2 | base_gap | 1828 | 67.83% |
| MN | 2 | base_repeat | 1828 | 67.83% |
| MN | 2 | primary_1 | 1828 | 66.96% |
| MN | 2 | primary_3 | 1828 | 67.18% |
| MN | 3 | base_frequency | 1828 | 9.63% |
| MN | 3 | base_recent10 | 1828 | 9.74% |
| MN | 3 | base_recent20 | 1828 | 9.68% |
| MN | 3 | base_recent50 | 1828 | 9.19% |
| MN | 3 | base_gap | 1828 | 10.07% |
| MN | 3 | base_repeat | 1828 | 8.10% |
| MN | 3 | primary_1 | 1828 | 10.18% |
| MN | 3 | primary_3 | 1828 | 9.08% |
| MB | 2 | base_frequency | 1808 | 54.37% |
| MB | 2 | base_recent10 | 1808 | 56.08% |
| MB | 2 | base_recent20 | 1808 | 58.46% |
| MB | 2 | base_recent50 | 1808 | 55.86% |
| MB | 2 | base_gap | 1808 | 56.25% |
| MB | 2 | base_repeat | 1808 | 56.19% |
| MB | 2 | primary_1 | 1808 | 57.08% |
| MB | 2 | primary_3 | 1808 | 54.92% |
| MB | 3 | base_frequency | 1808 | 7.85% |
| MB | 3 | base_recent10 | 1808 | 6.47% |
| MB | 3 | base_recent20 | 1808 | 6.69% |
| MB | 3 | base_recent50 | 1808 | 7.02% |
| MB | 3 | base_gap | 1808 | 7.47% |
| MB | 3 | base_repeat | 1808 | 6.58% |
| MB | 3 | primary_1 | 1808 | 7.25% |
| MB | 3 | primary_3 | 1808 | 7.02% |

## Kiểm tra âm tính và giới hạn phát hiện sau chạy

Đã chạy199dịch vòng cho mỗi tổ hợp =3184đối chứng âm tính, giữ nguyên bảng kết quả và nhóm năm/cặpđài. Lưu toàn bộ kết quả cùng p mô tả/Holm16 trong results.json. Không có Holm p<0,05; với199lần, p nhỏ nhất0,005 nên bước đầu Holm16 tối thiểu0,08: thiết kế này không đủ độ phân giải để bất kỳ ứng viên nào vượt ngưỡng0,05. Đây là lỗi độ phân giải của thiết kế sàng lọc, không phải bằng chứng các ứng viên chắc chắn không hiệu quả. Không tăng số lần sau khi nhìn kết quả trong đợt này; lần sau phải đăng ký số lần phù hợp trước. Cùng với giới hạn mô hình thích nghi bên dưới, các p này chỉ lưu chẩn đoán, không dùng suy luận lợi thế.

**Phép dịch này không là kiểm định hợp lệ để xác nhận ưu thế của mô hình thích nghi.** Dự báo ban đầu đã học trên chuỗi thật; ghép với ngày khác có thể đưa các kỳ từng tham gia huấn luyện vào tập đích giả. Vì thế chọn số ít xuất hiện dễ có p trông nhỏ, còn chọn số vừa tăng có thể gặp hiệu ứng ngược. Đây là giới hạn của kiểm tra âm tính, không phải bằng chứng dự báo. Không sửa phép thử sau khi thấy kết quả rồi chỉ báo cái đẹp.

Lượt sau nếu cần kiểm tra âm tính mạnh hơn: đăng ký riêng phép hoán vị toàn chuỗi đầu vào và chạy lại toàn bộ huấn luyện cuốn chiếu trên mỗi chuỗi, thay vì chỉ dịch kết quả; phải kiểm soát xu hướng, nhóm lịch và số giải. Chưa chạy cách này trong đợt hiện tại.

## Kiểm toán và khả năng nối nghiên cứu

Đã kiểm tra 14,658 bảng: không trùngđài/ngày, số lượng/độdài đúng, giữ chuỗi0đầu. Đã đối chiếu 43,632 bộTop3 đối chứng với báo cáo cửa sổ trước: khớp. Kiểm tra lại độc lập đạt/khôngđạt, sốkhớp và mốc chọnngẫu nhiên cho toàn bộ 87,224 dự báo. Các đặc trưng chỉ dùng trướcngàyđích, ngoại trừ nguồnMNchiều dùng cùngngày cho thử nghiệmB; không dùngMBtối để xếp. Lịch sử không có timestamp chứng minh tất cả nguồnMN đã đầyđủ trước18h, vì vậyB chỉ là hồi cứu giả định.

480vị trí lịch sử chưa phân loại đầyđủ còn nguyên; chưa xác minh lại nguồn ngàynghỉ. Mốc đồng đều theo sốđuôi duy nhất thực tế được lưu từngkỳ, cùngTop3. Mốc lý tưởng độc lập:MN2 66,60%,MN3 9,71%,MB2 56,06%,MB3 6,68%.

predictions.json giữ tất cả Top3, sốkhớp, thành viên cặp, sáuđốichứng và cửa sổ chính1/3; results.json giữ từngnăm/từngcặp/phươngpháp. Tổng16tổhợp mới,3184đốichứng âm tính; giữ lịch sử19biếnthểMN+10MN→MB(cả2/3chếđộ),14tổhợp trước và nghiêncứucửasổ; không đặt bộđếm về0.

Không thay app, không sửa bảnkhóa1/3/5năm, không gửi cảnh báo số tối nay. Bước tiếp: ưu tiên hoàn thiện chất lượng và dựbáo tươnglai đãkhóa; nếu khóa ứngviên khác phải địnhtrước phiênbản riêng.

## Dấu vết
- source SHA256: `821038b49415151984dae9dbff1ae894f3a6c63e04873adf9053fedb82c53820`
- protocol SHA256: `d9407c9a4f84e8a22e616deddcb16025c056332600a4a7b96529b78a3d6d3b35`
- Thời điểm hoàn tất kiểm toán: 2026-11-12T12:03:23.664279+00:00
Gói nối tiếp: MR_AN_GIA_THUYET_KHAC_THUONG_2026_11_12.zip.


## Định hướng kỳ kế tiếp và đối chiếu MinhNgọc — 13/11/2026
# Nghiên cứu chọn số cho kỳ kế tiếp — tham khảo thống kê Minh Ngọc

Ngày13/11/2026. Đã chạy8quy tắc×2chế độ×3phạm vi=48tổ hợp, so18đối chứnggốc. Không tự nhận đã thử mọi quy tắc có thể tồn tại. Đây là môhình Top3 do nghiêncứu địnhnghĩa dựa trên ýtưởng thốngkê, KHÔNG phải dựbáo được MinhNgọc côngbố.

**Mục tiêu:** chỉ nhìn lịch sử trước kỳt, chọn3số, sauđó chấm kếtquả kỳt. Số liệu dưới đây đo hiệuquả chọn cho kỳkếtiếp trong hồi cứu, không chỉ xếp thốngkê và không là xácsuất đảm bảo kỳtới.

Nguồn14.658bảng10/11/2016–11/11/2026; khởi tạo5năm, chấm10/11/2021–11/11/2026. Không sử dụng ngày12/11/2026. Đãxem cácgiaiđoạn trướcđây, không gọi kiểmtra tươnglai mới. Còn480vịtrílịch chưa phânloại nghỉ/thaylịch/thiếu; kếtquảtạmthời.

## 2 số — toàn bộ tám quy tắc

| Quy tắc | MN từng đài,5745kỳ | CặpMN,1828kỳ | XSMB,1808kỳ |
|---|---:|---:|---:|
| Tổng lượt 1 năm | 41.04% | 66.79% | 56.91% |
| Tổng lượt 3 năm | 43.12% | 67.18% | 56.14% |
| Tổng lượt 5 năm | 42.75% | 67.18% | 55.64% |
| Tổng lượt 10 kỳ | 42.33% | 64.66% | 55.64% |
| Tổng lượt 20 kỳ | 41.39% | 65.48% | 57.85% |
| Tổng lượt 50 kỳ | 41.81% | 66.30% | 57.91% |
| Vắng lâu nhất | 41.88% | 67.45% | 56.03% |
| Ra liên tiếp | 43.36% | 66.14% | 56.86% |
| Mốc chính | 42.65% | 67.83% | 54.37% |

## 3 số — toàn bộ tám quy tắc

| Quy tắc | MN từng đài,5745kỳ | CặpMN,1828kỳ | XSMB,1808kỳ |
|---|---:|---:|---:|
| Tổng lượt 1 năm | 4.82% | 9.03% | 7.41% |
| Tổng lượt 3 năm | 5.05% | 9.52% | 6.97% |
| Tổng lượt 5 năm | 4.63% | 9.52% | 7.91% |
| Tổng lượt 10 kỳ | 5.43% | 8.86% | 5.42% |
| Tổng lượt 20 kỳ | 4.86% | 9.41% | 6.19% |
| Tổng lượt 50 kỳ | 4.61% | 8.70% | 6.47% |
| Vắng lâu nhất | 4.51% | 10.67% | 6.25% |
| Ra liên tiếp | 5.29% | 9.74% | 6.64% |
| Mốc chính | 4.70% | 8.10% | 7.85% |

Mốc chính:từngđàiMN frequency5năm chỉ là mốc kỹthuật (app có6lựa chọn),cặpMNrepeat5năm,MBfrequency5năm. MNtừngđài có nhiềuđài/ngày nên bấtđịnh ghép toàn bộđài theo ngày; không coi5745kỳ là5745ngày độc lập. Không so trực tiếp ba cột vì khác sốgiải/cơhội.

## Tín hiệu thăm dò đáng theo dõi: tổng lượt50kỳ XSMB2số

Toànphần:57,91% vsapp5năm54,37%,chênh+3,54điểm%,CI95môtả[+0,22;+6,75]. So frequency1năm57,08%,chỉhơn0,83điểm%. So đếm sốkỳhiệndiện cùng50kỳ và cùngpháhòa:55,20%,chênh+2,71điểm%,CI[+0,94;+4,48]. Đốichứng50kỳ này có pháhòa theo cùng50kỳ; recent50gốc pháhòa theo tầnsuấttoàncửasổ nên làđốichứng khác, vẫnđược giữ trong bảng18côngthức.

Pháttriển1084kỳ57,47%; xác thực361kỳ53,46%; cuối363kỳ63,64% (10/11/2025–11/11/2026). Cuối soapp54,82%,chênh+8,82điểm%,CI[+1,65;+15,71]. Nhưng ứngviên KHÔNG được chọn trên xác thực; chúý nó saukhi thấy nămcuối là chọnlọc saukếtquả. CI chưahiệuchỉnh48tổhợp và lịch sửthử trước. Không đổi63,64% thành xácsuất kỳtới.

CặpMN3số tổnglượt3năm đượcchọnxácthực:cuối12,81%vsapp8,99%,CIchênh[-0,27;+8,17];so đối chứng repeat1năm11,72% chỉhơn1,09điểm%. Toànphần9,52% thấp hơn mốcđồngđều thực tế9,71%. Chưađủbằngchứng.

## Ứng viên chọn đúng phần xác thực

| Phạm vi | Đuôi | Ứng viên | Cuối mới | Cuối mốc chính | Cuối mốc cũ chọn xác thực | CI chênh mốc chính | Đạt sàng lọc |
|---|---:|---|---:|---:|---:|---|---|
| MN từng đài | 2 | Tổng lượt 3 năm | 43.97% | 43.71% | frequency_3:44.06% | [-2.86; +3.38] | Chưa |
| MN từng đài | 3 | Ra liên tiếp | 6.33% | 4.86% | repeat_3:5.81% | [-0.43; +3.39] | Chưa |
| MN cặp chung | 2 | Ra liên tiếp | 67.57% | 70.57% | repeat_3:66.49% | [-8.17; +2.72] | Chưa |
| MN cặp chung | 3 | Tổng lượt 3 năm | 12.81% | 8.99% | repeat_1:11.72% | [-0.27; +8.17] | Chưa |
| XSMB | 2 | Tổng lượt 3 năm | 55.37% | 54.82% | repeat_3:54.27% | [-6.61; +7.44] | Chưa |
| XSMB | 3 | Tổng lượt 1 năm | 7.44% | 8.54% | gap_1:4.68% | [-4.41; +1.93] | Chưa |

Không ứngviên chọnxácthực nào đạt toàn bộ tiêu chí. Điểmhay đángnghiêncứu là phânbiệt sốlần lặp và sốkỳhiệndiện; chưa có căn cứ thayapp. Cácquytắcrawgap/streak chỉdùng ngàytrướcđích, khôngmặcđịnh vắnglâu thì sắpra. Không có Brier/hiệuchỉnh vì chưađịnhnghĩa xácsuấttừngsố.

## Đầy đủ48so sánh và bất định

| Phạm vi | Đuôi | Quy tắc | Tỷ lệ | Mốc chính | CI95 chênh điểm% | Đồng đều |
|---|---:|---|---:|---:|---|---:|
| MN từng đài | 2 | Tổng lượt 1 năm | 41.04% | 42.65% | [-3.43; +0.21] | 42.23% |
| MN từng đài | 2 | Tổng lượt 3 năm | 43.12% | 42.65% | [-1.01; +1.98] | 42.23% |
| MN từng đài | 2 | Tổng lượt 5 năm | 42.75% | 42.65% | [-0.97; +1.17] | 42.23% |
| MN từng đài | 2 | Tổng lượt 10 kỳ | 42.33% | 42.65% | [-2.12; +1.46] | 42.23% |
| MN từng đài | 2 | Tổng lượt 20 kỳ | 41.39% | 42.65% | [-3.01; +0.42] | 42.23% |
| MN từng đài | 2 | Tổng lượt 50 kỳ | 41.81% | 42.65% | [-2.52; +0.99] | 42.23% |
| MN từng đài | 2 | Vắng lâu nhất | 41.88% | 42.65% | [-2.70; +1.18] | 42.23% |
| MN từng đài | 2 | Ra liên tiếp | 43.36% | 42.65% | [-1.01; +2.49] | 42.23% |
| MN từng đài | 3 | Tổng lượt 1 năm | 4.82% | 4.70% | [-0.63; +0.92] | 4.98% |
| MN từng đài | 3 | Tổng lượt 3 năm | 5.05% | 4.70% | [-0.30; +1.04] | 4.98% |
| MN từng đài | 3 | Tổng lượt 5 năm | 4.63% | 4.70% | [-0.26; +0.12] | 4.98% |
| MN từng đài | 3 | Tổng lượt 10 kỳ | 5.43% | 4.70% | [-0.04; +1.53] | 4.98% |
| MN từng đài | 3 | Tổng lượt 20 kỳ | 4.86% | 4.70% | [-0.59; +0.89] | 4.98% |
| MN từng đài | 3 | Tổng lượt 50 kỳ | 4.61% | 4.70% | [-0.82; +0.63] | 4.98% |
| MN từng đài | 3 | Vắng lâu nhất | 4.51% | 4.70% | [-0.97; +0.61] | 4.98% |
| MN từng đài | 3 | Ra liên tiếp | 5.29% | 4.70% | [-0.23; +1.39] | 4.98% |
| MN cặp chung | 2 | Tổng lượt 1 năm | 66.79% | 67.83% | [-4.16; +1.97] | 66.64% |
| MN cặp chung | 2 | Tổng lượt 3 năm | 67.18% | 67.83% | [-3.34; +2.19] | 66.64% |
| MN cặp chung | 2 | Tổng lượt 5 năm | 67.18% | 67.83% | [-3.39; +2.19] | 66.64% |
| MN cặp chung | 2 | Tổng lượt 10 kỳ | 64.66% | 67.83% | [-6.02; -0.38] | 66.64% |
| MN cặp chung | 2 | Tổng lượt 20 kỳ | 65.48% | 67.83% | [-5.36; +0.44] | 66.64% |
| MN cặp chung | 2 | Tổng lượt 50 kỳ | 66.30% | 67.83% | [-4.60; +1.59] | 66.64% |
| MN cặp chung | 2 | Vắng lâu nhất | 67.45% | 67.83% | [-3.56; +2.74] | 66.64% |
| MN cặp chung | 2 | Ra liên tiếp | 66.14% | 67.83% | [-4.54; +1.20] | 66.64% |
| MN cặp chung | 3 | Tổng lượt 1 năm | 9.03% | 8.10% | [-0.82; +2.63] | 9.71% |
| MN cặp chung | 3 | Tổng lượt 3 năm | 9.52% | 8.10% | [-0.49; +3.12] | 9.71% |
| MN cặp chung | 3 | Tổng lượt 5 năm | 9.52% | 8.10% | [-0.38; +3.06] | 9.71% |
| MN cặp chung | 3 | Tổng lượt 10 kỳ | 8.86% | 8.10% | [-0.93; +2.52] | 9.71% |
| MN cặp chung | 3 | Tổng lượt 20 kỳ | 9.41% | 8.10% | [-0.49; +3.23] | 9.71% |
| MN cặp chung | 3 | Tổng lượt 50 kỳ | 8.70% | 8.10% | [-1.15; +2.35] | 9.71% |
| MN cặp chung | 3 | Vắng lâu nhất | 10.67% | 8.10% | [+0.66; +4.38] | 9.71% |
| MN cặp chung | 3 | Ra liên tiếp | 9.74% | 8.10% | [+0.38; +2.90] | 9.71% |
| XSMB | 2 | Tổng lượt 1 năm | 56.91% | 54.37% | [-1.00; +5.97] | 56.10% |
| XSMB | 2 | Tổng lượt 3 năm | 56.14% | 54.37% | [-1.22; +4.65] | 56.10% |
| XSMB | 2 | Tổng lượt 5 năm | 55.64% | 54.37% | [-0.88; +3.43] | 56.10% |
| XSMB | 2 | Tổng lượt 10 kỳ | 55.64% | 54.37% | [-1.99; +4.26] | 56.10% |
| XSMB | 2 | Tổng lượt 20 kỳ | 57.85% | 54.37% | [+0.28; +6.80] | 56.10% |
| XSMB | 2 | Tổng lượt 50 kỳ | 57.91% | 54.37% | [+0.22; +6.75] | 56.10% |
| XSMB | 2 | Vắng lâu nhất | 56.03% | 54.37% | [-1.55; +5.03] | 56.10% |
| XSMB | 2 | Ra liên tiếp | 56.86% | 54.37% | [-0.94; +5.81] | 56.10% |
| XSMB | 3 | Tổng lượt 1 năm | 7.41% | 7.85% | [-1.88; +1.00] | 6.68% |
| XSMB | 3 | Tổng lượt 3 năm | 6.97% | 7.85% | [-2.21; +0.39] | 6.68% |
| XSMB | 3 | Tổng lượt 5 năm | 7.91% | 7.85% | [-0.39; +0.44] | 6.68% |
| XSMB | 3 | Tổng lượt 10 kỳ | 5.42% | 7.85% | [-4.04; -0.94] | 6.68% |
| XSMB | 3 | Tổng lượt 20 kỳ | 6.19% | 7.85% | [-3.32; +0.00] | 6.68% |
| XSMB | 3 | Tổng lượt 50 kỳ | 6.47% | 7.85% | [-3.04; +0.22] | 6.68% |
| XSMB | 3 | Vắng lâu nhất | 6.25% | 7.85% | [-3.21; +0.00] | 6.68% |
| XSMB | 3 | Ra liên tiếp | 6.64% | 7.85% | [-2.88; +0.39] | 6.68% |

## Kiểm toán, lưu trữ, bước tiếp
- 150,096 dự báo ứngviên được chấm lại độc lập từ bảngthật; 144Top3 được dựng lại bằng Counter trực tiếp; 37,524 kếtquảđối chứng frequency/repeat được đốichiếu lại. Không phát hiệnkhácbiệt.
- Giữ18đối chứng đủtừnggiaiđoạn trongresults.json; đủtừngnăm/từngđài/cặp và2/3số; predictions.json lưuTop3 thực tế tính lại. Mỗiđích chỉ dùng dữliệu trướcngàyđích; cậpnhật last/streak sauchấm.
- 48tổhợp mới cộng vào16tổhợp khác thường và14tổhợp trước; giữ19biếnthểMN/10MN→MB cũ và nghiêncứucửasổ, không đặt bộđếm về0. Một số ýtưởng trùng loại môhìnhđãthử nên không gọi toàn bộ là giảthuyết độc lập.
- Không thêm hoánvị saukhi xem kếtquả. Không dùng phép dịchngày lỗi củađợttrước đểkhẳngđịnh. Cần địnhtrước phépkiểmtraâm tính chạy lại toànchuỗihuấnluyện nếu nghiêncứu tiếp.
- Chỉ đềxuất đưa total50MB2 vào một phép theo dõi tươnglai riêng với côngthức và thờiđiểmkhóa cốđịnh; chưa tạo bảnkhóa hay áp dụng tronglượt này. Không sửa app, không sửa snapshot1/3/5năm.
- Chỉ báo cáo liênquan mục tiêu kỳkếtiếp; không kếtluận MinhNgọc hơn/kém môhình mình vì website không côngbố quytrìnhTop3 dựbáo tươngứng.

Source SHA256:821038b49415151984dae9dbff1ae894f3a6c63e04873adf9053fedb82c53820
Protocol SHA256:13fe7754704684efb7bc28fe17d52ef4481fb354b034906fd17d665680e452f2
Hoàn tất:2026-11-13T01:18:44.163620+00:00
Gói nối tiếp: MR_AN_DOI_CHIEU_MINH_NGOC_KY_KE_TIEP_2026_11_13.zip


BỔ SUNG ĐÃ ĐƯỢC ANH ĐỒNG Ý 13/11/2026 — KIỂM CHỨNG TƯƠNG LAI mb-total50-v1:
Đọc gói MR_AN_MB_TOTAL50_KHOA_2026_11_13.zip Library libfile_35102a4849188191bd1d4b489a53df7c gồm PROTOCOL.md, lock.py, nguồn và bản khóa13/11/2026 lúc08:32:06+07 đã lưu trước18h. Top3 total50:75,34,53; presence50:34,53,75; frequency1y:52,14,91;3y:13,32,52;5y:92,13,91. Chưa chấm. Không ghi đè bản khóa.
Đây là ứng viên thăm dò trong48tổ hợp hồi cứu MinhNgọc (gói libfile_966ccf78938c8191acc621c1aeaec315), không thắng phần xác thực; chưa chứng minh lợi thế. Giữ nguyên app và tất cả nhánh/lịch trước. Mỗi lượt sáng trước18hVN tạo bản nghiên cứu XSMB2số cho ngày đích theo mã cố định: tổng mọi lượt đuôi trong50kỳ đầy đủ trước ngày, hòa theo số kỳ hiện diện rồi số tăng. Khóa đồng thời presence50 vàfrequency1/3/5năm, kèm timestamp/hash nguồn/hash mã/sốkỳ; lưu bền vững và liên kết nhật ký trước quay. Tìm bản ngày đã khóa trước khi tạo, không tạo lại/đổi số. Kiểm tra kỳ gần nhất, thiếu kỳ và đủ27giải; không tự giả ngày nghỉ. Bản khóa13/11 có50kỳ liên tục24/09–12/11; cửa sổ dài còn hạn chế lịch sử đã ghi.
MốcMB chấm Top3 có ít nhất1số và số số trúng khác nhau0–3, ghi cả sai/chờ/không có bản khóa; không dùng nhiều lần lặp cùng số để tăng số trúng. Giữ bản khóa, dữ liệu sửa tạo phiên bản chấm mới. So cùng ngày, cùng3số và27giải; mốc đồng đều có điều kiện1-C(100-U,3)/C(100,3). Không quy điểm thành xác suất; BrierN/A. Tích lũy riêng tương lai, không trộn hồi cứu. Mốc90kỳ mô tả,365kỳ đủ điều kiện đánh giá chính, không dừng sớm. Hai so sánh chính total50 vsfrequency1y/5y dùng McNemar exact hai phía vàHolm0,05; CIghép cặp theo ngày vàđộ nhạy block7ngày theoPROTOCOL. Mức+3điểm% trên cả hai, CI dưới>0, Holm đạt và không thấp đồng đều mới đủ cơ sở đề xuất; vẫn cần anh đồng ý trước áp dụng. Các đối chứng3y/presence50 phụ. Không đổi tham số mỗi ngày để săn tỷ lệ đẹp. Không reset tổng thử nghiệm; ứng viên này là xác nhận của một tổ hợp đã thử, không giả thuyết độc lập mới. Chỉ thông báo lỗi cần xử lý hoặc bằng chứng đáng chú ý.

Đã lưu gói trước18h ngày13/11/2026 và cập nhật thành công prompt nhiệm vụ Automation_fd97cfb5b6dc819197cb85ac8e05f1b6, giữ nguyên lịch. Kiểm tra độc lập Top3 khớp. Không POST tracking, không sửa mã/app/quyền. Bộ1/3/5 mới này chỉ đối chứng của mb-total50-v1, không thay thế144bản của thí nghiệm gốc. Sourcehash ed8492748d61e5ada0835312cffd5acb90c62a767f8576784e850f718d899bba; codehash8cc483c85a47cd08a2f07acf20415898699b48856222e3ae2beb1f08a9bbaf5c. Các kỳ thiếu trong cửa sổ dài vẫn là hạn chế cần phân loại, không khẳng định đã xác minh nghỉ.



## Nghiên cứu riêng miền Trung theo yêu cầu13/11/2026
Đã tải523trang MinhNgọc,0lỗi mạng;8534bảng14đài từ10/11/2016–12/11/2026. Chấm4435kỳ đài10/11/2021–12/11/2026,159660dòng dựbáo: sáucôngthứcgốc×1/3/5năm×2/3số (36tổhợp bổsung, cộngvào lịch sử thử, không reset). Tính từngđài, không gộp cặpMT và không dùng miềnkhác tạođặctrưng. Côngthức không đổi.
Đầu tiênparserloại325bảngcũ vìĐB5chữsố, đã kiểmHTML và sửa quy tắc đọc trước01/04/2017 là5chữsố, sauđó6; không thêm0. Chạy lại toàn bộ; giữ sơ bộ sai riêng. 251bảngDOM độc lập và145Top3 bằngJSgốc khớp. Có343vịtrí lịch tham chiếu chưa phân loại, cóthể lịch HuếCN thayđổi/ngừngquay/thiếu; không gọi tấtcả là mấtdata hay nghỉ.
Chia pháttriển đến09/11/2024,xácthực10/11/2024–09/11/2025,cuối10/11/2025–12/11/2026. Chọncôngthức trênxácthực, khôngtốiưu. Naytoànbộđãxem, chỉhồicứu, khôngdựbáothật.
2số chọnrecent20/window5: xácthực45,43%, cuối39,87% (893kỳ) vsfrequency5 43,67%,repeat5 42,44%,đồngđều42,19%. 3số chọngap1: cuối6,38% vsfrequency5 5,71%,repeat5 4,82%,đồngđều4,98%. CI95chênh3số-vsđồngđều[-0,17;+3,01]điểm%,vsfrequency5[-1,45;+2,80],vsrepeat5[-0,56;+3,70]. Holm6so sánh khôngđạt;chưaứngviênnàođạt tiêu chí. KhôngtuyênbốmiềnTrung dễdựbáohơn. BrierN/A điểmxếphạng.
Gói MR_AN_MIEN_TRUNG_10_NAM_2026_11_13.zip: Library libfile_1f5a3064c2308191a3743253a52280c3; báo cáo libfile_86719b31b0dc81918bc6d7b4243eff15. Gói giữHTML,manifestURL/hash/thờigian,protocol,mã,full36tổhợp,từngnăm/từngđài,dựbáotừngkỳ,CI,kiểmtoán. Sourcehash c99be01e43423667ef030ddee6528c563f4352e486e8c184402ec0c66ff674c2.
Chỉnghiêncứumộtlượt theo yêu cầu, khôngđổi app/quyền/mã đangchạy/lịch tựđộng, khôngchạm Sitecũ. Việctiếp: xácminhlịchsử/lỗhổng; nếu theođuổi ứngviên phải đăngkývàkhóadựbáotươnglai, khôngchọn lạicôngthứcthắng sauxemphầncuối.
Hoàn tất 2026-11-13T07:15:45.578095+00:00


## Hoàn tất xác minh tối 13/11/2026
Kết nối phục hồi. lastCheck 2026-11-13T13:15:17.731Z, errors=[]; 7561 bảng, không lỗi cấu trúc hoặc trùng khóa. Đủ bảng ngày12 và13/11. Không thay app/quyền/lịch.
MN12 hash không đổi, không cộng lại108 bản đã chấm. MB12 chấm mới36 bản1/3/5 và12 bản Site. MN13/MB13 chấm24 bản Site thực sự khóa trước quay; phân biệt2/3số và6công thức. Dữ liệu số0đầu giữ nguyên. Kiểm tra bảng phẳng không thay kiểm toán HTML/lịch lịch sử. Các480 vị trí lịch sử chưa phân loại vẫn còn.
Bộ1/3/5 gốc ngày13 chưa xác minh được bản khóa bền vững, không tạo lại hoặc chấm như dự báo thật. Nhánh MN→MB không có bản khóa được xác minh trước18h, không cảnh báo muộn.
MB-total50-v1 ngày13: total50 khớp53; presence50 khớp53; frequency1y khớp91;3y khớp32;5y khớp91. Mỗi bộ1số khác nhau. n=1, chưa kiểm định/CI để kết luận lợi thế; Brier N/A. MB12 frequency1/3năm không khớp,5năm khớp92,91. Không coi một kỳ là xác suất tương lai.
0thử nghiệm mới; giữ bộ đếm cũ và hai mốc xử lý độc lập. Tiếp tục khóa trước quay, xác minh kỳ thiếu, không tối ưu sau kết quả.

```json
{
  "date12": {
    "hashes": {
      "Tây Ninh": "c37e45e9e024079fa3e3dbbd086a56301e453232ae6bb8f1113c9fd937cb182f",
      "An Giang": "3b4bee59aefca30852df2ab7badfa2ad228ccd8d77d1f1133a5e7873530b1d58",
      "Bình Thuận": "d8acbe5c4436be08cdbe72c5a4d3f67e87f488250d48e30eb3c1e0a8982c6412",
      "XSMB": "7b919c0f868022006aa80eb2e46e177dc200187feb163739f0cf87d8b92c385b"
    },
    "stages": {
      "MN": "df64d7c9dc1e8a10f3e85a7c165f3afe4fffea23c74c2bcfc4ed348888fff862",
      "MB": "7b919c0f868022006aa80eb2e46e177dc200187feb163739f0cf87d8b92c385b"
    },
    "status": "MN previously scored; MB scored now"
  },
  "date13": {
    "hashes": {
      "Vĩnh Long": "ddc873c9b561e933ad3cbfe22a03c348ab493afe60565baab8ec1bf1575c1a95",
      "Bình Dương": "37c45a0696afbbc58bc67eade06123fa042f4084cbe0e6bd9c7c24cec7d85f2f",
      "Trà Vinh": "475c76158a326be94df532df075a77c8926b0a12bc45ce562130846410145f18",
      "XSMB": "df3b261f2afb02985ad531ace3bf40e380e6b173b4bd030b1dafae0caa6ae28c"
    },
    "stages": {
      "MN": "b92e62f535ba1ab5a07d2788c2b0906967a24f67893489cb0c7240a5de24503e",
      "MB": "df3b261f2afb02985ad531ace3bf40e380e6b173b4bd030b1dafae0caa6ae28c"
    },
    "status": "Site MN/MB scored; original windows lock unverified"
  },
  "total50": {
    "date": "2026-11-13",
    "matches": {
      "total50": [
        "53"
      ],
      "presence50": [
        "53"
      ],
      "frequency1y": [
        "91"
      ],
      "frequency3y": [
        "32"
      ],
      "frequency5y": [
        "91"
      ]
    },
    "uniform": 0.5652442795299939,
    "n": 1
  },
  "newTrials": 0
}
```
Gói nối tiếp: MR_AN_TOP3_DOI_CHIEU_2026_11_13.zip

## Nghiên cứu mở rộng ba miền 15/11/2026 — theo yêu cầu trực tiếp
Anh chốt MT loại Khánh Hòa/Đắk Nông/Quảng Bình; T2 Huế+PhúYên,T3 ĐắkLắk+QuảngNam,T4 ĐàNẵng riêng,T5 BìnhĐịnh+QuảngTrị,T6 GiaLai+NinhThuận,T7 ĐàNẵng+QuảngNgãi,CN Huế+KonTum. Top3 chung, trúng>=1số ở>=1đài. Ba cửa sổ1/3/5; theo đài/cặp/chuỗi ngày. Chỉ nghiên cứu, chưa sửa app/lịch/quyền.
Đã chạy459.072 dựbáo tổchức dữliệu;27.285 dựbáo ML2số(Logistic,Ridge,LinearSVC,DecisionTree,RandomForest);65.484 dựbáo quy tắc Markov,cold,reverse,shadow5,sum_shift,position(2/3số). Tổng551.841 dòng, không là số kỳ độc lập. Mốc10/11/2021–11/11/2026; không cập nhật nguồn tới15/11. Bản nguồn/hash,tham số,cách chia,mọi kếtquả,năm/đài vàcode trong gói. 130.896 đối chứng khớp chính xác mã nghiên cứu cũ. 252cấu hìnhđợt1 có đối chứng trùng;15ML+36rules; cộng lịch sử cũ, không reset tổng.
MN2repeat5:pair67,83%,members66,68%,daily66,79%(1828kỳ). MT2frequency5 haiđài:68,55/68,29/66,43%(1558kỳ);ĐàNẵngT4:42,75/41,60/37,79%(262kỳ). Members dùng Borda, không xácsuất; MTfrequency là đối chứng nghiên cứu, không mặc định app hiệnhành.
MB2tree57,69%vsfrequency1y57,08%(1808kỳ),chênh0,61điểm%,p0,728; so5y54,37%chênh3,32điểm%nhưng Holmkhôngđạt. 1284so sánh McNemarexact/Holm trong lượt:0chênhdương đạt0,05. MonteCarlo5000chuỗi mỗi phạmvi/chếđộ với mốcđồngđều điều kiệnU, không giả dữliệu thật. CIbootstrapkhối7quan sát1000lần mô tả, khôngCIđồngthời; chưahiệuchỉnh tổng lịch sử thử. Chưaứngviênnàođủbằngchứngđềxuấtápdụng.
MN0/MT7/MB20 ngàyđích thiếu bảng theo lịch nghiên cứu,chưa gán ngàynghỉ;MTcó thêm1ngày thiếu khởi tạo ởmột cấu hình. Chưa kiểmtoán lạiHTMLtoànbộ,480vịtrí cũ chưa phânloại đủ. Không đánhdấu các ngày nguồn này đã xử lý dựbáothật. Toàn bộ hồi cứu đã xem; Brier/hiệuchỉnh chưa tính cho ML. Không đổi dựbáođãkhóa.
Chưa chạy:RNN/LSTM,GA,bạcnhớtổhợp,cầuđộng,tamgiác/quảtrám,lịchâm,hoánvịtoànpipeline;ML3số vàso đủ1/3/5/theođài cũng chờ. Sổmơ thiếu đầu vào ghi trước;Martingale không dựbáo. Cầnđịnhtrước cấu hình/ngânsách cho từngđợt tiếp,kiểmtoán/âm tính trước chọn ứngviên vàkhóa tươnglai. Không hứa đã nghiên cứu hết danh sách.
Gói: MR_AN_NGHIEN_CUU_BA_MIEN_DOT1_2026_11_15.zip — Library libfile_1975919c4b688191aeb17515d9c38c7c.

## Đợt bổ sung ngay theo yêu cầu — 15/11/2026
Đã chạy RNN/LSTM(12cấu hình,72fit,12checkpointvalidation/fit);GA6cấu hình,36fit,pop12×8gen=3456fitness;6rules bổsung×3miền×2chếđộ=36cấu hình(bạcnhớcặp,cầuđộng12vịtrí,tamgiác,quảtrám,lịchâmVN,theothứ);MLcổđiển2/3sốtrain1/3/5năm với max20.000hàng train/fit=90cấu hình. Tổng144cấu hình bổsung,261936dựbáo hồi cứu(21828NN,10914GA,65484rules,163710ML). Cộngđợt1là813777dòng,447cấu hình mô tả cóđốichứngtrùng;khôngreset lịchsử nghiêncứu trước vàkhôngcoi các dòng cùngkỳ độc lập.
Tất cả dùngchuỗi ngày củađàiđãchọn mỗi miền,cùnglịchMTmới. Chưa thửmọicấuhình NN/GA theođài và1/3/5;khôngtuyênbố thử hết khônggian thuậttoán. Giaiđoạnđích10/11/2021–11/11/2026 đãxem,hồi cứu chứkhôngtươnglai;nguồn chưa cậpnhật15/11. Giữ nguyênapp,quyền,lịch,bảnkhóa.
NN:lookback8,hidden8,Adam.003,weight_decay.001,12epochs,validation180ngày trướcmốc,train3năm,táifithàngnăm. Kiểmtra144dựbáo từcheckpointkhớpTop3/hit. Brier tính theo kỳ sođồngđều,chưacalibrationtoàndiện;đặcbiệtMTthứTưNNkhôngnhận rõsốgiảiđích làmfeature,calibrationkém. GA chỉblend6scores,giớihạncandidate top/bottom20,mọiweight/fitnessđãlưu. MLmởrộng cósubsample20k,khácđợt1trainđầyđủ,khôngtrộnthànhcùngphiênbản.
Kếtquả2số chính:MNrepeat5đốichứng67,83%,RNN65,92%,LSTM67,34%,GA68,22%(1828kỳ);MTcặpfrequency5đốichứng68,55%,RNN66,37%,LSTM66,56%,GA66,69%(1558kỳ);ĐàNẵngT4đốichứng42,75%,GA46,56%,CIchênh[-3,82;+11,07]điểm%(262kỳ);MBRNN57,41%,LSTM57,30%,GA57,02%vsfrequency1y57,08%,5y54,37%(1808kỳ). KhôngchỉsoMBvới5năm.
1860so sánhghépcặp của2đợt,McNemarexact/Holm:0chênhdương đạt.05. CIblock7/1000lần mô tả;Holmchưabaogồm mọithửnghiệmcũ ngoài2đợt. 99hoánvị bảng trongcùngđài/cặp/năm cho144bộdựbáo cốđịnh làdiagnostic,khôngrefitpipeline,khônggọilàbằngchứngđộclập. Chưaứngviênnàođủbằngchứngđềxuấtđổiapp.
LịchâmVNvnlunar1.0.5 UTC+7 kiểmtra2mốcTết,khôngdùnglịchTrungQuốc,kiểmtoánlịchsửlịchâmtoànbộcònthiếu. Sổmơkhôngcóinputghi trước,nênkhôngbacktestgiả. Martingaleđãphântíchcấpsốnhânchi phí,khôngtăngxácsuất,khôngcóquytắctrảthưởng/vốn đểchấmlợinhuận. Cácquytắcdângian làbiếnthểrõràngtrongcode,khôngđạidiệnmọicách.
Gói đầyđủ code/checkpoint/source/hash/protocol/kếtquả/năm/đài/giới hạn:MR_AN_NGHIEN_CUU_BA_MIEN_DOT2_2026_11_15.zip,Library libfile_8f5ca91bd0b08191ac9e8c895258a1ce.
Bước tiếp:kiểmtoán lịch/bảngthiếu,độhiệuchỉnh vàkiểmtraâm tínhtoànpipeline nếuđịnhtrước;ứngviênmuốnxácnhậnphảikhóakỳtươnglai. Khôngtựtốiưutiếpđểtìm%đẹp;mọithayđổiappcầnanhđồngý.


## Lượt sáng 16/11/2026 — cập nhật và khóa nghiên cứu
Đúng project appgprj_6af51d80fedc819194e8a2e4ae84dfbd. get_site hiện trả access_mode=public, không phải owner-private; vấn đề đã được báo trong phiên trực tiếp. Lượt này giữ nguyên quyền theo giới hạn nhiệm vụ; không sửa mã/xuất bản/Site cũ/lịch. Không lưu token.
POST /api/update và GET /api/status,/data.json,/api/tracking HTTP200; lastCheck=2026-11-16T01:53:45.729Z; errors=[]; dữ liệu7570bảng,10/11/2021–15/11/2026. Cờ draws29 trong status là phản hồi cập nhật,không phải tổng dữ liệu7570. Ngày16/11 đang chờTP.HCM/ĐồngTháp/CàMau/XSMB,khôngkếtluận thiếu ngày chưaquay.
Kiểmtra sốlượng/phânbốđộdài/chuỗiASCII số:0bảngsai,0trùngđàingày;giữ15235giátrịcó0đầu. Đây làkiểmtra JSON,khôngtái xácminh từngvịtrígiải củaHTML. Cả7ngày09–15/11 đủtấtcảđàiMNtheolịch vàMB. Khoảnglịchsử480vịtrícũ vẫnchưa phânloạiđủ;không tuyênbố bùhết.
Ngày14và15/11 mới so với trạngthái đã ghi13/11:chấmhai giaiđoạnMN/MBriêng. Tấtcảscores khớp endpoint. Tổngtíchlũy sảnphẩm12–15/11=4kỳ mỗi miền/phươngpháp/chếđộ;12–13 đãchấm giữlịch sử,phầncộngmới14–15. MNrepeat2 ngày14trúng62,ngày15trúng52;MBfrequency2 ngày14trúng91,ngày15khôngtrúng. Cònđủ6côngthức/2–3số vàchấmriêng thànhviên bên dưới. N=4 chưađủkếtluậnlợithế;Brier/hiệuchỉnhN/A điểmhạng.
Không tìm được bảnnghiêncứu1/3/5 haytotal50 ngày14–15 đãlưu trướcquay trong các bản đãxácminh;ghi chưa xácminh,khôngtạolạivàkhôngchấmnhưdựbáothật. Bảntotal50ngày13 đãchấm1số53giữnguyên. NhánhMN→MBchưa cócảnhbáokhóa đãxácminh cho14–15,khôngtạocảnhbáohồitố. Chưa cókếtquảchiều16/11đểnghiêncứunhánhB.
Đãtra tênngày16/11 trongLibrary2lần vànhậtkýhiệnhành,khôngtìmthấybảnkhóahômnay. Tạomới window-study-v1 144records lúc08:55:02VN;MBtotal50-v1 lúc08:55:02VN. Côngthức vàmãkhóa giữnguyênbảnđãđịnhtrước,hashđínhkèm. TP.HCMkỳgầnnhất14/11,ĐồngTháp09/11,cặp09/11,XSMB15/11 phùhợplịch;50kỳMB27/09–15/11liêntụcđủ27giải. Ba cửa sổMB361/1084/1806kỳ;cặpMN52/156/260kỳ;giới hạnngàynghỉlịchsử vẫnghi.
Hai snapshot dưới đây được lưu trực tiếp trong phiên bản nhật ký này để giữbềnvững trước16hMN/18hMB;khôngđưa nghiêncứu vàoapi/tracking. Các bảnnghiêncứucũ không sửa. Trạngthái unscored/durable required bêntrongJSON là trạngthái lúc tạofile;thờiđiểmlưuLibrary của phiênbảnnhậtký là chứngcứhoàntấtkhóa. Khôngtạo giảthuyếtmới vàkhôngresetbộđếm447cấuhìnhđãbáo15/11 haynghiêncứutrước.
### Trạng thái xử lý/hash/cộng dồn
```json
{
  "rows": 7570,
  "min": "2021-11-10",
  "max": "2026-11-15",
  "bad": [],
  "duplicates": [],
  "leading_zero_values": 15235,
  "recent": {
    "2026-11-15": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Đà Lạt": "67a44e14bbea2d0d1873415e7d07f2ca6228592c33ae1ada6587d37e0e3268aa",
        "Kiên Giang": "0ce9bc69fdafb845825ff0e6cb73348cf4d822b824ce233443d1fd303a3676d0",
        "Tiền Giang": "cdff9e39b7b43594122ebf9f71f6990ae2b740533d39f09bfaf1b89f6038d6d0",
        "XSMB": "fbfd32cbd8f8d832478098ebbab784b6dca6381fd78211f04c7811848b4dfe92"
      },
      "MN": "b6437f042687fdd2cdc8a105bd6a34293c80f6cb5a98445ebf288aa495a0a587",
      "MB": "fbfd32cbd8f8d832478098ebbab784b6dca6381fd78211f04c7811848b4dfe92",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-14": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bình Phước": "bf35f2fb1fb388c85eade0205052c61e619b681f2c5d600c8c769f5c6ee6672f",
        "Hậu Giang": "7e8ac0349b5cab9dc7bd3fa222fad6efee1fefe4ab1a0cd4b61ed88e26433128",
        "Long An": "af136f5152505cf0731b62bb4c5dcef68e2db07b91d210dbecc78f1c18c0374c",
        "TP. HCM": "2087883ef36ff16b310c248446f4e6d350db3002c7708d470752fbfc9dc6bbd2",
        "XSMB": "cefe2d9e32ddb1628e2250a6038d9b0609a80d2585ea6ef016ef661746f43837"
      },
      "MN": "5c720bdcd759f12ff92577ca159f53e4adeb6ba3586d20c7cdcc7021a1c6d841",
      "MB": "cefe2d9e32ddb1628e2250a6038d9b0609a80d2585ea6ef016ef661746f43837",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-13": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bình Dương": "37c45a0696afbbc58bc67eade06123fa042f4084cbe0e6bd9c7c24cec7d85f2f",
        "Trà Vinh": "475c76158a326be94df532df075a77c8926b0a12bc45ce562130846410145f18",
        "Vĩnh Long": "ddc873c9b561e933ad3cbfe22a03c348ab493afe60565baab8ec1bf1575c1a95",
        "XSMB": "df3b261f2afb02985ad531ace3bf40e380e6b173b4bd030b1dafae0caa6ae28c"
      },
      "MN": "b92e62f535ba1ab5a07d2788c2b0906967a24f67893489cb0c7240a5de24503e",
      "MB": "df3b261f2afb02985ad531ace3bf40e380e6b173b4bd030b1dafae0caa6ae28c",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-12": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "An Giang": "3b4bee59aefca30852df2ab7badfa2ad228ccd8d77d1f1133a5e7873530b1d58",
        "Bình Thuận": "d8acbe5c4436be08cdbe72c5a4d3f67e87f488250d48e30eb3c1e0a8982c6412",
        "Tây Ninh": "c37e45e9e024079fa3e3dbbd086a56301e453232ae6bb8f1113c9fd937cb182f",
        "XSMB": "7b919c0f868022006aa80eb2e46e177dc200187feb163739f0cf87d8b92c385b"
      },
      "MN": "df64d7c9dc1e8a10f3e85a7c165f3afe4fffea23c74c2bcfc4ed348888fff862",
      "MB": "7b919c0f868022006aa80eb2e46e177dc200187feb163739f0cf87d8b92c385b",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-11": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Cần Thơ": "2dd025e23c57d040e8a12e4e0ceacec233fe21b884099cff04a648d2ff0dd2fb",
        "Đồng Nai": "292d5f9417f69d32ac2b0a62bc9634a2a8bce78b00904849d01637711c583f4e",
        "Sóc Trăng": "c61b057d7f256e5c669dd92252fb3e34a283458c23aebd9bb56a80d31849f857",
        "XSMB": "d4c5d811b43d8e12326f4d88caa74747eb889e542de1c814109068ae13b35af7"
      },
      "MN": "f7c98168867ebf614f0c071279e9c63feb6d8c1c41acfad592fef8de676a66eb",
      "MB": "d4c5d811b43d8e12326f4d88caa74747eb889e542de1c814109068ae13b35af7",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-10": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bạc Liêu": "f1c10fc29dd6119aefeb8d1207405c363001e5274920f7bbd8785d748f6bb5c6",
        "Bến Tre": "7eccefecd74e34b9254c5743663cc9c9921f1677a8ec07fc3dd66ecf9906e006",
        "Vũng Tàu": "dfe93281adea01145edf4ee6fcf8d1e649a7551a014c2ad8f504ade24d0ed479",
        "XSMB": "bcc33c53569afd5e887fd3c9b4721a4c625733ca7b55716162d6efd8ed2efe06"
      },
      "MN": "eb067ac5a67694f5448820dcc287418c9da6ecfdc9f90409026b9e43a71bb503",
      "MB": "bcc33c53569afd5e887fd3c9b4721a4c625733ca7b55716162d6efd8ed2efe06",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-09": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Cà Mau": "e1c3773d2476ecc3df80f68994b866a1a180bc139db89fea43f1cfb4350116b6",
        "Đồng Tháp": "6c2106005ec2f87b2df713d2a296758d3dadcf517be002a93ab39136f525c64b",
        "TP. HCM": "f841ed36dbb26fa4cd895e252073abc2c5b8ce9e76f7d74fdf9ae72a9051217b",
        "XSMB": "2140201d8c26b3ef414abf310367bc61f0b0571acfe78407fbbdb2d36d15d333"
      },
      "MN": "45766f6bd08828e33b3a2a456d6de9240cb55ed4a60291f0940b9e00dfb89575",
      "MB": "2140201d8c26b3ef414abf310367bc61f0b0571acfe78407fbbdb2d36d15d333",
      "hash_version": "canonical-json-sorted-v1"
    }
  },
  "scores_match_endpoint": true,
  "mismatch": [],
  "new_dates_vs_journal": [
    "2026-11-14",
    "2026-11-15"
  ],
  "scored_records": [
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "71",
        "43",
        "23"
      ],
      "matches": [
        "23"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": [
          "23"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "43",
        "80"
      ],
      "matches": [
        "85"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": [
          "85"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "78",
        "26",
        "65"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "96",
        "11",
        "64"
      ],
      "matches": [
        "96",
        "11",
        "64"
      ],
      "distinct": 3,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [
          "96"
        ],
        "Kiên Giang": [
          "11",
          "64"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "gap",
      "top3": [
        "30",
        "71",
        "94"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "04",
        "52",
        "10"
      ],
      "matches": [
        "52"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [
          "52"
        ],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "479",
        "568",
        "171"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "443",
        "286",
        "582"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "796",
        "478",
        "582"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "745",
        "064",
        "478"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "gap",
      "top3": [
        "171",
        "354",
        "788"
      ],
      "matches": [
        "788"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [
          "788"
        ],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "152",
        "480",
        "004"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "53",
        "12",
        "34"
      ],
      "matches": [
        "12"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": [
          "12"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "53"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "66",
        "21",
        "42"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "90",
        "48",
        "91"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "479",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "697"
      ],
      "matches": [
        "697"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": [
          "697"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "964"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "620",
        "916",
        "556"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "14",
        "42",
        "35"
      ],
      "matches": [
        "42"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "42"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "13",
        "56",
        "37"
      ],
      "matches": [
        "13"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "13"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "13",
        "37",
        "47"
      ],
      "matches": [
        "13"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "13"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "14",
        "37",
        "69"
      ],
      "matches": [
        "69"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [
          "69"
        ],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "gap",
      "top3": [
        "80",
        "30",
        "64"
      ],
      "matches": [
        "30"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "30"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "07",
        "58",
        "62"
      ],
      "matches": [
        "62"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [
          "62"
        ],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "435",
        "717",
        "014"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "765",
        "285",
        "337"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "285",
        "517",
        "947"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "014",
        "551",
        "285"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "gap",
      "top3": [
        "932",
        "636",
        "733"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "007",
        "058",
        "408"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "91"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "53",
        "04",
        "92"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "matches": [
        "34"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "34"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "53",
        "34",
        "75"
      ],
      "matches": [
        "34"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "34"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [
        "15"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "15"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "12",
        "99",
        "00"
      ],
      "matches": [
        "12"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "12"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "479",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "434",
        "724",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "492"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "712",
        "479",
        "562"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "21",
        "69"
      ],
      "matches": [
        "22"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "22"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "08",
        "59",
        "16"
      ],
      "matches": [
        "16"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "16"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "58",
        "67",
        "42"
      ],
      "matches": [
        "58"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": [
          "58"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "38",
        "22",
        "21"
      ],
      "matches": [
        "22"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "22"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "gap",
      "top3": [
        "87",
        "44",
        "12"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "83",
        "04",
        "88"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "131",
        "777",
        "302"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "108",
        "023",
        "416"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "108",
        "052",
        "638"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "395",
        "638",
        "023"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "gap",
      "top3": [
        "063",
        "403",
        "101"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "015",
        "023",
        "225"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "91"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "90",
        "34",
        "56"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "52"
      ],
      "matches": [
        "24"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "24"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "53",
        "34",
        "75"
      ],
      "matches": [
        "53"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "53"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "92",
        "01",
        "91"
      ],
      "matches": [
        "01",
        "91"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "01",
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "724",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "434",
        "724",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "492"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "601",
        "492",
        "532"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "95",
        "13",
        "14"
      ],
      "matches": [
        "95"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "95"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "86",
        "13",
        "24"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "86",
        "54",
        "85"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "13",
        "85",
        "54"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "gap",
      "top3": [
        "44",
        "11",
        "56"
      ],
      "matches": [
        "56"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "56"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "69",
        "70",
        "26"
      ],
      "matches": [
        "69",
        "26"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "69",
          "26"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "895",
        "305",
        "359"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "895",
        "013",
        "638"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "895",
        "786",
        "742"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "895",
        "586",
        "913"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "gap",
      "top3": [
        "359",
        "171",
        "420"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "975",
        "895",
        "013"
      ],
      "matches": [
        "975"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "975"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "92",
        "91"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "92",
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "34",
        "90",
        "10"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "88"
      ],
      "matches": [
        "24"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "24"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "75",
        "53"
      ],
      "matches": [
        "53"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "53"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "60",
        "93",
        "79"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "724",
        "434",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "724",
        "434",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "697"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "724",
        "676",
        "910"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    }
  ],
  "cumulative": [
    {
      "region": "MN",
      "digits": 2,
      "method": "frequency",
      "n": 4,
      "hits": 4,
      "distinct": [
        0,
        4,
        0,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent10",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        3,
        0,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent20",
      "n": 4,
      "hits": 2,
      "distinct": [
        2,
        2,
        0,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent50",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        2,
        0,
        1
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "gap",
      "n": 4,
      "hits": 2,
      "distinct": [
        2,
        2,
        0,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "repeat",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        2,
        1,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "frequency",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent10",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent20",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent50",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "gap",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "repeat",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "frequency",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        2,
        1,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent10",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent20",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        3,
        0,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent50",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        3,
        0,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "gap",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "repeat",
      "n": 4,
      "hits": 2,
      "distinct": [
        2,
        1,
        1,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "frequency",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent10",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent20",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent50",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "gap",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "repeat",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    }
  ],
  "pending_today": [
    "TP. HCM",
    "Đồng Tháp",
    "Cà Mau",
    "XSMB"
  ],
  "research_no_verified_lock_dates": [
    "2026-11-14",
    "2026-11-15"
  ],
  "Brier": "N/A: rank-only methods",
  "new_hypotheses": 0
}
```
### Bản khóa bất biến window-study-v1 — 16/11/2026
```json
{
  "schema": "window-study-v1",
  "createdAt": "2026-11-16T01:55:02.182Z",
  "timezone": "Asia/Ho_Chi_Minh",
  "date": "2026-11-16",
  "sourceDataHash": "6001a9ce2ed1aad7e07fa9be3bf7820e77f920125157f281998c8e4d3196d348",
  "algorithmHash": "0643807f691d7c084ec8f040896ecd7cc9cd9a206e9bba091df2fa7988d87f5a",
  "cutoffs": {
    "south": "16:00",
    "north": "18:00"
  },
  "purpose": "Research only. No changes to live apps. Never overwrite locked predictions.",
  "rule": "calendar-year windows [target minus years,target); same formulas, same targets, Top3, any hit within target member(s); all six methods retained; no per-number probability claimed",
  "records": [
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "80",
        "30"
      ],
      "top3Details": [
        {
          "number": "22",
          "hits": 29,
          "total": 36,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 3,
          "recent20": 9,
          "recent50": 29,
          "repeat": 0,
          "count": 52,
          "score": 29
        },
        {
          "number": "80",
          "hits": 27,
          "total": 37,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 11,
          "recent50": 26,
          "repeat": 0,
          "count": 52,
          "score": 27
        },
        {
          "number": "30",
          "hits": 25,
          "total": 30,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 3,
          "recent20": 6,
          "recent50": 23,
          "repeat": 0,
          "count": 52,
          "score": 25
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "21",
        "33",
        "87"
      ],
      "top3Details": [
        {
          "number": "21",
          "hits": 21,
          "total": 27,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 7,
          "recent20": 11,
          "recent50": 20,
          "repeat": 1,
          "count": 52,
          "score": 7
        },
        {
          "number": "33",
          "hits": 16,
          "total": 18,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 7,
          "recent20": 10,
          "recent50": 16,
          "repeat": 1,
          "count": 52,
          "score": 7
        },
        {
          "number": "87",
          "hits": 22,
          "total": 27,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 6,
          "recent20": 7,
          "recent50": 21,
          "repeat": 1,
          "count": 52,
          "score": 6
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "52",
        "99"
      ],
      "top3Details": [
        {
          "number": "80",
          "hits": 27,
          "total": 37,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 11,
          "recent50": 26,
          "repeat": 0,
          "count": 52,
          "score": 11
        },
        {
          "number": "52",
          "hits": 25,
          "total": 30,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 11,
          "recent50": 24,
          "repeat": 3,
          "count": 52,
          "score": 11
        },
        {
          "number": "99",
          "hits": 22,
          "total": 26,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 6,
          "recent20": 11,
          "recent50": 21,
          "repeat": 0,
          "count": 52,
          "score": 11
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "top3Details": [
        {
          "number": "22",
          "hits": 29,
          "total": 36,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 3,
          "recent20": 9,
          "recent50": 29,
          "repeat": 0,
          "count": 52,
          "score": 29
        },
        {
          "number": "80",
          "hits": 27,
          "total": 37,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 11,
          "recent50": 26,
          "repeat": 0,
          "count": 52,
          "score": 26
        },
        {
          "number": "52",
          "hits": 25,
          "total": 30,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 11,
          "recent50": 24,
          "repeat": 3,
          "count": 52,
          "score": 24
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "06",
        "65"
      ],
      "top3Details": [
        {
          "number": "25",
          "hits": 9,
          "total": 10,
          "gap": 20,
          "last": "2026-06-22",
          "recent10": 0,
          "recent20": 0,
          "recent50": 9,
          "repeat": 0,
          "count": 52,
          "score": 9
        },
        {
          "number": "06",
          "hits": 17,
          "total": 19,
          "gap": 9,
          "last": "2026-09-07",
          "recent10": 1,
          "recent20": 4,
          "recent50": 16,
          "repeat": 0,
          "count": 52,
          "score": 7.65
        },
        {
          "number": "65",
          "hits": 15,
          "total": 15,
          "gap": 9,
          "last": "2026-09-07",
          "recent10": 1,
          "recent20": 4,
          "recent50": 14,
          "repeat": 0,
          "count": 52,
          "score": 6.75
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "11",
        "40"
      ],
      "top3Details": [
        {
          "number": "52",
          "hits": 25,
          "total": 30,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 11,
          "recent50": 24,
          "repeat": 3,
          "count": 52,
          "score": 3
        },
        {
          "number": "11",
          "hits": 16,
          "total": 23,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 4,
          "recent20": 7,
          "recent50": 15,
          "repeat": 2,
          "count": 52,
          "score": 2
        },
        {
          "number": "40",
          "hits": 15,
          "total": 20,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 4,
          "recent20": 8,
          "recent50": 14,
          "repeat": 2,
          "count": 52,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "452",
        "044",
        "086"
      ],
      "top3Details": [
        {
          "number": "452",
          "hits": 8,
          "total": 8,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 3,
          "recent50": 8,
          "repeat": 0,
          "count": 52,
          "score": 8
        },
        {
          "number": "044",
          "hits": 7,
          "total": 7,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 1,
          "recent20": 2,
          "recent50": 6,
          "repeat": 0,
          "count": 52,
          "score": 7
        },
        {
          "number": "086",
          "hits": 7,
          "total": 7,
          "gap": 7,
          "last": "2026-09-21",
          "recent10": 1,
          "recent20": 1,
          "recent50": 7,
          "repeat": 0,
          "count": 52,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "446",
        "986"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 7,
          "total": 8,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 52,
          "score": 3
        },
        {
          "number": "446",
          "hits": 4,
          "total": 4,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 3,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 3
        },
        {
          "number": "986",
          "hits": 4,
          "total": 4,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 7,
          "total": 8,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 52,
          "score": 4
        },
        {
          "number": "566",
          "hits": 4,
          "total": 4,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 2,
          "recent20": 4,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 4
        },
        {
          "number": "452",
          "hits": 8,
          "total": 8,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 3,
          "recent50": 8,
          "repeat": 0,
          "count": 52,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "top3Details": [
        {
          "number": "452",
          "hits": 8,
          "total": 8,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 3,
          "recent50": 8,
          "repeat": 0,
          "count": 52,
          "score": 8
        },
        {
          "number": "086",
          "hits": 7,
          "total": 7,
          "gap": 7,
          "last": "2026-09-21",
          "recent10": 1,
          "recent20": 1,
          "recent50": 7,
          "repeat": 0,
          "count": 52,
          "score": 7
        },
        {
          "number": "680",
          "hits": 7,
          "total": 8,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 52,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 3,
      "method": "gap",
      "top3": [
        "430",
        "622",
        "229"
      ],
      "top3Details": [
        {
          "number": "430",
          "hits": 6,
          "total": 7,
          "gap": 23,
          "last": "2026-06-01",
          "recent10": 0,
          "recent20": 0,
          "recent50": 5,
          "repeat": 0,
          "count": 52,
          "score": 6
        },
        {
          "number": "622",
          "hits": 6,
          "total": 6,
          "gap": 31,
          "last": "2026-04-06",
          "recent10": 0,
          "recent20": 0,
          "recent50": 6,
          "repeat": 0,
          "count": 52,
          "score": 6
        },
        {
          "number": "229",
          "hits": 6,
          "total": 6,
          "gap": 19,
          "last": "2026-06-29",
          "recent10": 0,
          "recent20": 1,
          "recent50": 6,
          "repeat": 0,
          "count": 52,
          "score": 5.7
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "a7082d8e7099fc75042c5bf3bdba56c6a5cb01c630514159b470c226e346a220",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "311",
        "433",
        "652"
      ],
      "top3Details": [
        {
          "number": "311",
          "hits": 5,
          "total": 5,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 52,
          "score": 1
        },
        {
          "number": "433",
          "hits": 5,
          "total": 5,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 52,
          "score": 1
        },
        {
          "number": "652",
          "hits": 5,
          "total": 5,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 52,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "01",
        "58",
        "19"
      ],
      "top3Details": [
        {
          "number": "01",
          "hits": 63,
          "total": 77,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 1,
          "recent20": 4,
          "recent50": 20,
          "repeat": 0,
          "count": 156,
          "score": 63
        },
        {
          "number": "58",
          "hits": 61,
          "total": 75,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 4,
          "recent20": 8,
          "recent50": 22,
          "repeat": 0,
          "count": 156,
          "score": 61
        },
        {
          "number": "19",
          "hits": 60,
          "total": 75,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 8,
          "recent50": 21,
          "repeat": 0,
          "count": 156,
          "score": 60
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "33",
        "21",
        "99"
      ],
      "top3Details": [
        {
          "number": "33",
          "hits": 55,
          "total": 60,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 7,
          "recent20": 10,
          "recent50": 16,
          "repeat": 1,
          "count": 156,
          "score": 7
        },
        {
          "number": "21",
          "hits": 54,
          "total": 66,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 7,
          "recent20": 11,
          "recent50": 20,
          "repeat": 1,
          "count": 156,
          "score": 7
        },
        {
          "number": "99",
          "hits": 60,
          "total": 73,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 6,
          "recent20": 11,
          "recent50": 21,
          "repeat": 0,
          "count": 156,
          "score": 6
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "99",
        "80",
        "21"
      ],
      "top3Details": [
        {
          "number": "99",
          "hits": 60,
          "total": 73,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 6,
          "recent20": 11,
          "recent50": 21,
          "repeat": 0,
          "count": 156,
          "score": 11
        },
        {
          "number": "80",
          "hits": 55,
          "total": 67,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 11,
          "recent50": 26,
          "repeat": 0,
          "count": 156,
          "score": 11
        },
        {
          "number": "21",
          "hits": 54,
          "total": 66,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 7,
          "recent20": 11,
          "recent50": 20,
          "repeat": 1,
          "count": 156,
          "score": 11
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "top3Details": [
        {
          "number": "22",
          "hits": 58,
          "total": 71,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 3,
          "recent20": 9,
          "recent50": 29,
          "repeat": 0,
          "count": 156,
          "score": 29
        },
        {
          "number": "80",
          "hits": 55,
          "total": 67,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 11,
          "recent50": 26,
          "repeat": 0,
          "count": 156,
          "score": 26
        },
        {
          "number": "52",
          "hits": 52,
          "total": 64,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 11,
          "recent50": 24,
          "repeat": 3,
          "count": 156,
          "score": 24
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "06",
        "65"
      ],
      "top3Details": [
        {
          "number": "25",
          "hits": 36,
          "total": 41,
          "gap": 20,
          "last": "2026-06-22",
          "recent10": 0,
          "recent20": 0,
          "recent50": 9,
          "repeat": 0,
          "count": 156,
          "score": 36
        },
        {
          "number": "06",
          "hits": 44,
          "total": 50,
          "gap": 9,
          "last": "2026-09-07",
          "recent10": 1,
          "recent20": 4,
          "recent50": 16,
          "repeat": 0,
          "count": 156,
          "score": 19.8
        },
        {
          "number": "65",
          "hits": 43,
          "total": 48,
          "gap": 9,
          "last": "2026-09-07",
          "recent10": 1,
          "recent20": 4,
          "recent50": 14,
          "repeat": 0,
          "count": 156,
          "score": 19.35
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "43",
        "11"
      ],
      "top3Details": [
        {
          "number": "52",
          "hits": 52,
          "total": 64,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 11,
          "recent50": 24,
          "repeat": 3,
          "count": 156,
          "score": 3
        },
        {
          "number": "43",
          "hits": 47,
          "total": 57,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 4,
          "recent50": 10,
          "repeat": 2,
          "count": 156,
          "score": 2
        },
        {
          "number": "11",
          "hits": 42,
          "total": 57,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 4,
          "recent20": 7,
          "recent50": 15,
          "repeat": 2,
          "count": 156,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "086",
        "901",
        "044"
      ],
      "top3Details": [
        {
          "number": "086",
          "hits": 14,
          "total": 14,
          "gap": 7,
          "last": "2026-09-21",
          "recent10": 1,
          "recent20": 1,
          "recent50": 7,
          "repeat": 0,
          "count": 156,
          "score": 14
        },
        {
          "number": "901",
          "hits": 14,
          "total": 14,
          "gap": 27,
          "last": "2026-05-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 2,
          "repeat": 0,
          "count": 156,
          "score": 14
        },
        {
          "number": "044",
          "hits": 13,
          "total": 13,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 1,
          "recent20": 2,
          "recent50": 6,
          "repeat": 0,
          "count": 156,
          "score": 13
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "187",
        "446"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 11,
          "total": 12,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 156,
          "score": 3
        },
        {
          "number": "187",
          "hits": 7,
          "total": 7,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 3,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 156,
          "score": 3
        },
        {
          "number": "446",
          "hits": 7,
          "total": 8,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 3,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 156,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 11,
          "total": 12,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 156,
          "score": 4
        },
        {
          "number": "566",
          "hits": 7,
          "total": 7,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 2,
          "recent20": 4,
          "recent50": 4,
          "repeat": 0,
          "count": 156,
          "score": 4
        },
        {
          "number": "452",
          "hits": 13,
          "total": 14,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 3,
          "recent50": 8,
          "repeat": 0,
          "count": 156,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "top3Details": [
        {
          "number": "452",
          "hits": 13,
          "total": 14,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 3,
          "recent50": 8,
          "repeat": 0,
          "count": 156,
          "score": 8
        },
        {
          "number": "086",
          "hits": 14,
          "total": 14,
          "gap": 7,
          "last": "2026-09-21",
          "recent10": 1,
          "recent20": 1,
          "recent50": 7,
          "repeat": 0,
          "count": 156,
          "score": 7
        },
        {
          "number": "680",
          "hits": 11,
          "total": 12,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 156,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 3,
      "method": "gap",
      "top3": [
        "901",
        "290",
        "622"
      ],
      "top3Details": [
        {
          "number": "901",
          "hits": 14,
          "total": 14,
          "gap": 27,
          "last": "2026-05-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 2,
          "repeat": 0,
          "count": 156,
          "score": 14
        },
        {
          "number": "290",
          "hits": 11,
          "total": 11,
          "gap": 29,
          "last": "2026-04-20",
          "recent10": 0,
          "recent20": 0,
          "recent50": 4,
          "repeat": 0,
          "count": 156,
          "score": 11
        },
        {
          "number": "622",
          "hits": 11,
          "total": 11,
          "gap": 31,
          "last": "2026-04-06",
          "recent10": 0,
          "recent20": 0,
          "recent50": 6,
          "repeat": 0,
          "count": 156,
          "score": 11
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "ad33b4462c67adad3dc82bf4b01a705421fb03a191e386606d874042d8045603",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "412",
        "462",
        "500"
      ],
      "top3Details": [
        {
          "number": "412",
          "hits": 9,
          "total": 9,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 4,
          "repeat": 1,
          "count": 156,
          "score": 1
        },
        {
          "number": "462",
          "hits": 9,
          "total": 9,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 3,
          "repeat": 1,
          "count": 156,
          "score": 1
        },
        {
          "number": "500",
          "hits": 9,
          "total": 9,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 3,
          "repeat": 1,
          "count": 156,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "19",
        "30",
        "43"
      ],
      "top3Details": [
        {
          "number": "19",
          "hits": 96,
          "total": 113,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 8,
          "recent50": 21,
          "repeat": 0,
          "count": 260,
          "score": 96
        },
        {
          "number": "30",
          "hits": 96,
          "total": 111,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 3,
          "recent20": 6,
          "recent50": 23,
          "repeat": 0,
          "count": 260,
          "score": 96
        },
        {
          "number": "43",
          "hits": 92,
          "total": 113,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 4,
          "recent50": 10,
          "repeat": 2,
          "count": 260,
          "score": 92
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "33",
        "21",
        "92"
      ],
      "top3Details": [
        {
          "number": "33",
          "hits": 80,
          "total": 90,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 7,
          "recent20": 10,
          "recent50": 16,
          "repeat": 1,
          "count": 260,
          "score": 7
        },
        {
          "number": "21",
          "hits": 79,
          "total": 94,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 7,
          "recent20": 11,
          "recent50": 20,
          "repeat": 1,
          "count": 260,
          "score": 7
        },
        {
          "number": "92",
          "hits": 90,
          "total": 107,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 6,
          "recent20": 10,
          "recent50": 18,
          "repeat": 0,
          "count": 260,
          "score": 6
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "52",
        "80",
        "99"
      ],
      "top3Details": [
        {
          "number": "52",
          "hits": 91,
          "total": 110,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 11,
          "recent50": 24,
          "repeat": 3,
          "count": 260,
          "score": 11
        },
        {
          "number": "80",
          "hits": 90,
          "total": 113,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 11,
          "recent50": 26,
          "repeat": 0,
          "count": 260,
          "score": 11
        },
        {
          "number": "99",
          "hits": 86,
          "total": 105,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 6,
          "recent20": 11,
          "recent50": 21,
          "repeat": 0,
          "count": 260,
          "score": 11
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "top3Details": [
        {
          "number": "22",
          "hits": 89,
          "total": 109,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 3,
          "recent20": 9,
          "recent50": 29,
          "repeat": 0,
          "count": 260,
          "score": 29
        },
        {
          "number": "80",
          "hits": 90,
          "total": 113,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 11,
          "recent50": 26,
          "repeat": 0,
          "count": 260,
          "score": 26
        },
        {
          "number": "52",
          "hits": 91,
          "total": 110,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 11,
          "recent50": 24,
          "repeat": 3,
          "count": 260,
          "score": 24
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "65",
        "06"
      ],
      "top3Details": [
        {
          "number": "25",
          "hits": 56,
          "total": 67,
          "gap": 20,
          "last": "2026-06-22",
          "recent10": 0,
          "recent20": 0,
          "recent50": 9,
          "repeat": 0,
          "count": 260,
          "score": 56
        },
        {
          "number": "65",
          "hits": 83,
          "total": 97,
          "gap": 9,
          "last": "2026-09-07",
          "recent10": 1,
          "recent20": 4,
          "recent50": 14,
          "repeat": 0,
          "count": 260,
          "score": 37.35
        },
        {
          "number": "06",
          "hits": 76,
          "total": 88,
          "gap": 9,
          "last": "2026-09-07",
          "recent10": 1,
          "recent20": 4,
          "recent50": 16,
          "repeat": 0,
          "count": 260,
          "score": 34.2
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "43",
        "40"
      ],
      "top3Details": [
        {
          "number": "52",
          "hits": 91,
          "total": 110,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 11,
          "recent50": 24,
          "repeat": 3,
          "count": 260,
          "score": 3
        },
        {
          "number": "43",
          "hits": 92,
          "total": 113,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 4,
          "recent50": 10,
          "repeat": 2,
          "count": 260,
          "score": 2
        },
        {
          "number": "40",
          "hits": 71,
          "total": 87,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 4,
          "recent20": 8,
          "recent50": 14,
          "repeat": 2,
          "count": 260,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.6659723381249052,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "044",
        "430",
        "901"
      ],
      "top3Details": [
        {
          "number": "044",
          "hits": 19,
          "total": 19,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 1,
          "recent20": 2,
          "recent50": 6,
          "repeat": 0,
          "count": 260,
          "score": 19
        },
        {
          "number": "430",
          "hits": 19,
          "total": 20,
          "gap": 23,
          "last": "2026-06-01",
          "recent10": 0,
          "recent20": 0,
          "recent50": 5,
          "repeat": 0,
          "count": 260,
          "score": 19
        },
        {
          "number": "901",
          "hits": 19,
          "total": 19,
          "gap": 27,
          "last": "2026-05-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 2,
          "repeat": 0,
          "count": 260,
          "score": 19
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "063",
        "187"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 15,
          "total": 16,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 260,
          "score": 3
        },
        {
          "number": "063",
          "hits": 9,
          "total": 9,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 260,
          "score": 3
        },
        {
          "number": "187",
          "hits": 9,
          "total": 9,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 3,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 260,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 15,
          "total": 16,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 260,
          "score": 4
        },
        {
          "number": "566",
          "hits": 11,
          "total": 11,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 2,
          "recent20": 4,
          "recent50": 4,
          "repeat": 0,
          "count": 260,
          "score": 4
        },
        {
          "number": "452",
          "hits": 18,
          "total": 19,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 3,
          "recent50": 8,
          "repeat": 0,
          "count": 260,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "top3Details": [
        {
          "number": "452",
          "hits": 18,
          "total": 19,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 3,
          "recent50": 8,
          "repeat": 0,
          "count": 260,
          "score": 8
        },
        {
          "number": "086",
          "hits": 17,
          "total": 17,
          "gap": 7,
          "last": "2026-09-21",
          "recent10": 1,
          "recent20": 1,
          "recent50": 7,
          "repeat": 0,
          "count": 260,
          "score": 7
        },
        {
          "number": "680",
          "hits": 15,
          "total": 16,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 4,
          "recent50": 7,
          "repeat": 0,
          "count": 260,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 3,
      "method": "gap",
      "top3": [
        "430",
        "901",
        "089"
      ],
      "top3Details": [
        {
          "number": "430",
          "hits": 19,
          "total": 20,
          "gap": 23,
          "last": "2026-06-01",
          "recent10": 0,
          "recent20": 0,
          "recent50": 5,
          "repeat": 0,
          "count": 260,
          "score": 19
        },
        {
          "number": "901",
          "hits": 19,
          "total": 19,
          "gap": 27,
          "last": "2026-05-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 2,
          "repeat": 0,
          "count": 260,
          "score": 19
        },
        {
          "number": "089",
          "hits": 16,
          "total": 16,
          "gap": 45,
          "last": "2025-12-29",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 260,
          "score": 16
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "members": [
        "TP. HCM",
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "729fea74ea0e2d4ea49f845e93205d3aa419cea430948e731b000be24f735e77",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "052",
        "178",
        "309"
      ],
      "top3Details": [
        {
          "number": "052",
          "hits": 13,
          "total": 13,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 2,
          "recent50": 2,
          "repeat": 1,
          "count": 260,
          "score": 1
        },
        {
          "number": "178",
          "hits": 13,
          "total": 13,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 3,
          "repeat": 1,
          "count": 260,
          "score": 1
        },
        {
          "number": "309",
          "hits": 13,
          "total": 13,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 2,
          "repeat": 1,
          "count": 260,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.09710887819142022,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "42",
        "37"
      ],
      "top3Details": [
        {
          "number": "22",
          "hits": 30,
          "total": 34,
          "gap": 5,
          "last": "2026-10-26",
          "recent10": 1,
          "recent20": 4,
          "recent50": 14,
          "repeat": 0,
          "count": 104,
          "score": 30
        },
        {
          "number": "42",
          "hits": 27,
          "total": 30,
          "gap": 2,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 12,
          "repeat": 0,
          "count": 104,
          "score": 27
        },
        {
          "number": "37",
          "hits": 24,
          "total": 24,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 104,
          "score": 24
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 24,
          "total": 29,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 104,
          "score": 5
        },
        {
          "number": "87",
          "hits": 24,
          "total": 28,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 7,
          "recent50": 12,
          "repeat": 0,
          "count": 104,
          "score": 5
        },
        {
          "number": "37",
          "hits": 24,
          "total": 24,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 104,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "87",
        "59"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 24,
          "total": 29,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 104,
          "score": 8
        },
        {
          "number": "87",
          "hits": 24,
          "total": 28,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 7,
          "recent50": 12,
          "repeat": 0,
          "count": 104,
          "score": 7
        },
        {
          "number": "59",
          "hits": 20,
          "total": 21,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 3,
          "recent20": 7,
          "recent50": 12,
          "repeat": 1,
          "count": 104,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 24,
          "total": 29,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 104,
          "score": 15
        },
        {
          "number": "22",
          "hits": 30,
          "total": 34,
          "gap": 5,
          "last": "2026-10-26",
          "recent10": 1,
          "recent20": 4,
          "recent50": 14,
          "repeat": 0,
          "count": 104,
          "score": 14
        },
        {
          "number": "53",
          "hits": 16,
          "total": 17,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 3,
          "recent50": 14,
          "repeat": 1,
          "count": 104,
          "score": 14
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 2,
      "method": "gap",
      "top3": [
        "64",
        "04",
        "06"
      ],
      "top3Details": [
        {
          "number": "64",
          "hits": 20,
          "total": 20,
          "gap": 19,
          "last": "2026-09-07",
          "recent10": 0,
          "recent20": 1,
          "recent50": 11,
          "repeat": 0,
          "count": 104,
          "score": 19
        },
        {
          "number": "04",
          "hits": 19,
          "total": 20,
          "gap": 20,
          "last": "2026-09-05",
          "recent10": 0,
          "recent20": 0,
          "recent50": 6,
          "repeat": 0,
          "count": 104,
          "score": 19
        },
        {
          "number": "06",
          "hits": 17,
          "total": 19,
          "gap": 22,
          "last": "2026-08-29",
          "recent10": 0,
          "recent20": 0,
          "recent50": 4,
          "repeat": 0,
          "count": 104,
          "score": 17
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "62"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 24,
          "total": 29,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 104,
          "score": 2
        },
        {
          "number": "96",
          "hits": 19,
          "total": 22,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 6,
          "recent50": 12,
          "repeat": 2,
          "count": 104,
          "score": 2
        },
        {
          "number": "62",
          "hits": 22,
          "total": 24,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 5,
          "recent50": 12,
          "repeat": 1,
          "count": 104,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "342",
        "037",
        "104"
      ],
      "top3Details": [
        {
          "number": "342",
          "hits": 8,
          "total": 8,
          "gap": 20,
          "last": "2026-09-05",
          "recent10": 0,
          "recent20": 0,
          "recent50": 3,
          "repeat": 0,
          "count": 104,
          "score": 8
        },
        {
          "number": "037",
          "hits": 6,
          "total": 6,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 1,
          "recent20": 1,
          "recent50": 4,
          "repeat": 0,
          "count": 104,
          "score": 6
        },
        {
          "number": "104",
          "hits": 6,
          "total": 6,
          "gap": 24,
          "last": "2026-08-22",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 104,
          "score": 6
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "949",
        "452",
        "765"
      ],
      "top3Details": [
        {
          "number": "949",
          "hits": 6,
          "total": 6,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 3,
          "recent50": 3,
          "repeat": 1,
          "count": 104,
          "score": 2
        },
        {
          "number": "452",
          "hits": 5,
          "total": 5,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 2,
          "recent50": 2,
          "repeat": 0,
          "count": 104,
          "score": 2
        },
        {
          "number": "765",
          "hits": 5,
          "total": 5,
          "gap": 2,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 104,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "949",
        "986",
        "393"
      ],
      "top3Details": [
        {
          "number": "949",
          "hits": 6,
          "total": 6,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 3,
          "recent50": 3,
          "repeat": 1,
          "count": 104,
          "score": 3
        },
        {
          "number": "986",
          "hits": 6,
          "total": 6,
          "gap": 9,
          "last": "2026-10-12",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 104,
          "score": 3
        },
        {
          "number": "393",
          "hits": 5,
          "total": 5,
          "gap": 9,
          "last": "2026-10-12",
          "recent10": 1,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 104,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "285"
      ],
      "top3Details": [
        {
          "number": "986",
          "hits": 6,
          "total": 6,
          "gap": 9,
          "last": "2026-10-12",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 104,
          "score": 5
        },
        {
          "number": "037",
          "hits": 6,
          "total": 6,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 1,
          "recent20": 1,
          "recent50": 4,
          "repeat": 0,
          "count": 104,
          "score": 4
        },
        {
          "number": "285",
          "hits": 5,
          "total": 5,
          "gap": 10,
          "last": "2026-10-10",
          "recent10": 0,
          "recent20": 2,
          "recent50": 4,
          "repeat": 0,
          "count": 104,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 3,
      "method": "gap",
      "top3": [
        "342",
        "104",
        "044"
      ],
      "top3Details": [
        {
          "number": "342",
          "hits": 8,
          "total": 8,
          "gap": 20,
          "last": "2026-09-05",
          "recent10": 0,
          "recent20": 0,
          "recent50": 3,
          "repeat": 0,
          "count": 104,
          "score": 8
        },
        {
          "number": "104",
          "hits": 6,
          "total": 6,
          "gap": 24,
          "last": "2026-08-22",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 104,
          "score": 6
        },
        {
          "number": "044",
          "hits": 5,
          "total": 5,
          "gap": 23,
          "last": "2026-08-24",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 104,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 104,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-14",
      "historyHash": "3f791a685d8d61c8552950dc60a5f2d9538918bbce61984e9f45b53f859cbad0",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "949",
        "662"
      ],
      "top3Details": [
        {
          "number": "485",
          "hits": 4,
          "total": 5,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 2,
          "count": 104,
          "score": 2
        },
        {
          "number": "949",
          "hits": 6,
          "total": 6,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 3,
          "recent50": 3,
          "repeat": 1,
          "count": 104,
          "score": 1
        },
        {
          "number": "662",
          "hits": 5,
          "total": 5,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 1,
          "count": 104,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "42",
        "94",
        "22"
      ],
      "top3Details": [
        {
          "number": "42",
          "hits": 75,
          "total": 81,
          "gap": 2,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 12,
          "repeat": 0,
          "count": 313,
          "score": 75
        },
        {
          "number": "94",
          "hits": 68,
          "total": 72,
          "gap": 23,
          "last": "2026-08-24",
          "recent10": 0,
          "recent20": 0,
          "recent50": 6,
          "repeat": 0,
          "count": 313,
          "score": 68
        },
        {
          "number": "22",
          "hits": 64,
          "total": 71,
          "gap": 5,
          "last": "2026-10-26",
          "recent10": 1,
          "recent20": 4,
          "recent50": 14,
          "repeat": 0,
          "count": 313,
          "score": 64
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 56,
          "total": 65,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 313,
          "score": 5
        },
        {
          "number": "87",
          "hits": 53,
          "total": 58,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 7,
          "recent50": 12,
          "repeat": 0,
          "count": 313,
          "score": 5
        },
        {
          "number": "37",
          "hits": 59,
          "total": 63,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 313,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "36",
        "87"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 56,
          "total": 65,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 313,
          "score": 8
        },
        {
          "number": "36",
          "hits": 61,
          "total": 65,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 7,
          "recent50": 8,
          "repeat": 0,
          "count": 313,
          "score": 7
        },
        {
          "number": "87",
          "hits": 53,
          "total": 58,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 7,
          "recent50": 12,
          "repeat": 0,
          "count": 313,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 56,
          "total": 65,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 313,
          "score": 15
        },
        {
          "number": "22",
          "hits": 64,
          "total": 71,
          "gap": 5,
          "last": "2026-10-26",
          "recent10": 1,
          "recent20": 4,
          "recent50": 14,
          "repeat": 0,
          "count": 313,
          "score": 14
        },
        {
          "number": "53",
          "hits": 56,
          "total": 61,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 3,
          "recent50": 14,
          "repeat": 1,
          "count": 313,
          "score": 14
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 2,
      "method": "gap",
      "top3": [
        "94",
        "64",
        "06"
      ],
      "top3Details": [
        {
          "number": "94",
          "hits": 68,
          "total": 72,
          "gap": 23,
          "last": "2026-08-24",
          "recent10": 0,
          "recent20": 0,
          "recent50": 6,
          "repeat": 0,
          "count": 313,
          "score": 68
        },
        {
          "number": "64",
          "hits": 63,
          "total": 66,
          "gap": 19,
          "last": "2026-09-07",
          "recent10": 0,
          "recent20": 1,
          "recent50": 11,
          "repeat": 0,
          "count": 313,
          "score": 59.85
        },
        {
          "number": "06",
          "hits": 47,
          "total": 53,
          "gap": 22,
          "last": "2026-08-29",
          "recent10": 0,
          "recent20": 0,
          "recent50": 4,
          "repeat": 0,
          "count": 313,
          "score": 47
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "62"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 56,
          "total": 65,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 313,
          "score": 2
        },
        {
          "number": "96",
          "hits": 53,
          "total": 58,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 6,
          "recent50": 12,
          "repeat": 2,
          "count": 313,
          "score": 2
        },
        {
          "number": "62",
          "hits": 58,
          "total": 62,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 5,
          "recent50": 12,
          "repeat": 1,
          "count": 313,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "158",
        "044",
        "086"
      ],
      "top3Details": [
        {
          "number": "158",
          "hits": 14,
          "total": 14,
          "gap": 5,
          "last": "2026-10-26",
          "recent10": 1,
          "recent20": 1,
          "recent50": 2,
          "repeat": 0,
          "count": 313,
          "score": 14
        },
        {
          "number": "044",
          "hits": 13,
          "total": 13,
          "gap": 23,
          "last": "2026-08-24",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 313,
          "score": 13
        },
        {
          "number": "086",
          "hits": 13,
          "total": 13,
          "gap": 62,
          "last": "2026-04-11",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 313,
          "score": 13
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "485",
        "452",
        "056"
      ],
      "top3Details": [
        {
          "number": "485",
          "hits": 11,
          "total": 12,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 2,
          "count": 313,
          "score": 2
        },
        {
          "number": "452",
          "hits": 10,
          "total": 11,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 2,
          "recent50": 2,
          "repeat": 0,
          "count": 313,
          "score": 2
        },
        {
          "number": "056",
          "hits": 9,
          "total": 9,
          "gap": 4,
          "last": "2026-10-31",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 0,
          "count": 313,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "393",
        "736",
        "949"
      ],
      "top3Details": [
        {
          "number": "393",
          "hits": 10,
          "total": 10,
          "gap": 9,
          "last": "2026-10-12",
          "recent10": 1,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 313,
          "score": 3
        },
        {
          "number": "736",
          "hits": 9,
          "total": 9,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 313,
          "score": 3
        },
        {
          "number": "949",
          "hits": 9,
          "total": 9,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 3,
          "recent50": 3,
          "repeat": 1,
          "count": 313,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "285"
      ],
      "top3Details": [
        {
          "number": "986",
          "hits": 9,
          "total": 9,
          "gap": 9,
          "last": "2026-10-12",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 313,
          "score": 5
        },
        {
          "number": "037",
          "hits": 11,
          "total": 11,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 1,
          "recent20": 1,
          "recent50": 4,
          "repeat": 0,
          "count": 313,
          "score": 4
        },
        {
          "number": "285",
          "hits": 10,
          "total": 10,
          "gap": 10,
          "last": "2026-10-10",
          "recent10": 0,
          "recent20": 2,
          "recent50": 4,
          "repeat": 0,
          "count": 313,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 3,
      "method": "gap",
      "top3": [
        "044",
        "086",
        "132"
      ],
      "top3Details": [
        {
          "number": "044",
          "hits": 13,
          "total": 13,
          "gap": 23,
          "last": "2026-08-24",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 313,
          "score": 13
        },
        {
          "number": "086",
          "hits": 13,
          "total": 13,
          "gap": 62,
          "last": "2026-04-11",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 313,
          "score": 13
        },
        {
          "number": "132",
          "hits": 12,
          "total": 12,
          "gap": 36,
          "last": "2026-07-11",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 313,
          "score": 12
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 313,
      "historyFirst": "2023-11-18",
      "historyLast": "2026-11-14",
      "historyHash": "c4b46b621a090b91410c63fc45421ad53d1ec6bfec40d7f37945df3cdaf2dc55",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "662",
        "949"
      ],
      "top3Details": [
        {
          "number": "485",
          "hits": 11,
          "total": 12,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 2,
          "count": 313,
          "score": 2
        },
        {
          "number": "662",
          "hits": 10,
          "total": 10,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 1,
          "count": 313,
          "score": 1
        },
        {
          "number": "949",
          "hits": 9,
          "total": 9,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 3,
          "recent50": 3,
          "repeat": 1,
          "count": 313,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "42",
        "94",
        "78"
      ],
      "top3Details": [
        {
          "number": "42",
          "hits": 112,
          "total": 121,
          "gap": 2,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 12,
          "repeat": 0,
          "count": 521,
          "score": 112
        },
        {
          "number": "94",
          "hits": 106,
          "total": 113,
          "gap": 23,
          "last": "2026-08-24",
          "recent10": 0,
          "recent20": 0,
          "recent50": 6,
          "repeat": 0,
          "count": 521,
          "score": 106
        },
        {
          "number": "78",
          "hits": 105,
          "total": 115,
          "gap": 4,
          "last": "2026-10-31",
          "recent10": 1,
          "recent20": 2,
          "recent50": 7,
          "repeat": 0,
          "count": 521,
          "score": 105
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 92,
          "total": 102,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 521,
          "score": 5
        },
        {
          "number": "87",
          "hits": 84,
          "total": 92,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 7,
          "recent50": 12,
          "repeat": 0,
          "count": 521,
          "score": 5
        },
        {
          "number": "37",
          "hits": 102,
          "total": 111,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 521,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "36",
        "87"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 92,
          "total": 102,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 521,
          "score": 8
        },
        {
          "number": "36",
          "hits": 92,
          "total": 97,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 7,
          "recent50": 8,
          "repeat": 0,
          "count": 521,
          "score": 7
        },
        {
          "number": "87",
          "hits": 84,
          "total": 92,
          "gap": 1,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 7,
          "recent50": 12,
          "repeat": 0,
          "count": 521,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 92,
          "total": 102,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 521,
          "score": 15
        },
        {
          "number": "22",
          "hits": 103,
          "total": 112,
          "gap": 5,
          "last": "2026-10-26",
          "recent10": 1,
          "recent20": 4,
          "recent50": 14,
          "repeat": 0,
          "count": 521,
          "score": 14
        },
        {
          "number": "53",
          "hits": 83,
          "total": 90,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 3,
          "recent50": 14,
          "repeat": 1,
          "count": 521,
          "score": 14
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 2,
      "method": "gap",
      "top3": [
        "94",
        "64",
        "06"
      ],
      "top3Details": [
        {
          "number": "94",
          "hits": 106,
          "total": 113,
          "gap": 23,
          "last": "2026-08-24",
          "recent10": 0,
          "recent20": 0,
          "recent50": 6,
          "repeat": 0,
          "count": 521,
          "score": 106
        },
        {
          "number": "64",
          "hits": 99,
          "total": 108,
          "gap": 19,
          "last": "2026-09-07",
          "recent10": 0,
          "recent20": 1,
          "recent50": 11,
          "repeat": 0,
          "count": 521,
          "score": 94.05
        },
        {
          "number": "06",
          "hits": 88,
          "total": 96,
          "gap": 22,
          "last": "2026-08-29",
          "recent10": 0,
          "recent20": 0,
          "recent50": 4,
          "repeat": 0,
          "count": 521,
          "score": 88
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "26"
      ],
      "top3Details": [
        {
          "number": "85",
          "hits": 92,
          "total": 102,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 5,
          "recent20": 8,
          "recent50": 15,
          "repeat": 2,
          "count": 521,
          "score": 2
        },
        {
          "number": "96",
          "hits": 89,
          "total": 99,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 6,
          "recent50": 12,
          "repeat": 2,
          "count": 521,
          "score": 2
        },
        {
          "number": "26",
          "hits": 99,
          "total": 106,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 1,
          "recent50": 6,
          "repeat": 1,
          "count": 521,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "773",
        "494",
        "716"
      ],
      "top3Details": [
        {
          "number": "773",
          "hits": 19,
          "total": 19,
          "gap": 54,
          "last": "2026-05-09",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 521,
          "score": 19
        },
        {
          "number": "494",
          "hits": 18,
          "total": 18,
          "gap": 58,
          "last": "2026-04-25",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 521,
          "score": 18
        },
        {
          "number": "716",
          "hits": 18,
          "total": 18,
          "gap": 32,
          "last": "2026-07-25",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 521,
          "score": 18
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "485",
        "987",
        "056"
      ],
      "top3Details": [
        {
          "number": "485",
          "hits": 13,
          "total": 14,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 2,
          "count": 521,
          "score": 2
        },
        {
          "number": "987",
          "hits": 13,
          "total": 13,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 0,
          "count": 521,
          "score": 2
        },
        {
          "number": "056",
          "hits": 12,
          "total": 12,
          "gap": 4,
          "last": "2026-10-31",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 0,
          "count": 521,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "393",
        "765",
        "986"
      ],
      "top3Details": [
        {
          "number": "393",
          "hits": 14,
          "total": 14,
          "gap": 9,
          "last": "2026-10-12",
          "recent10": 1,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 521,
          "score": 3
        },
        {
          "number": "765",
          "hits": 12,
          "total": 13,
          "gap": 2,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 521,
          "score": 3
        },
        {
          "number": "986",
          "hits": 12,
          "total": 12,
          "gap": 9,
          "last": "2026-10-12",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 521,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "662"
      ],
      "top3Details": [
        {
          "number": "986",
          "hits": 12,
          "total": 12,
          "gap": 9,
          "last": "2026-10-12",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 521,
          "score": 5
        },
        {
          "number": "037",
          "hits": 15,
          "total": 15,
          "gap": 3,
          "last": "2026-11-02",
          "recent10": 1,
          "recent20": 1,
          "recent50": 4,
          "repeat": 0,
          "count": 521,
          "score": 4
        },
        {
          "number": "662",
          "hits": 15,
          "total": 15,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 1,
          "count": 521,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 3,
      "method": "gap",
      "top3": [
        "773",
        "494",
        "716"
      ],
      "top3Details": [
        {
          "number": "773",
          "hits": 19,
          "total": 19,
          "gap": 54,
          "last": "2026-05-09",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 521,
          "score": 19
        },
        {
          "number": "494",
          "hits": 18,
          "total": 18,
          "gap": 58,
          "last": "2026-04-25",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 521,
          "score": 18
        },
        {
          "number": "716",
          "hits": 18,
          "total": 18,
          "gap": 32,
          "last": "2026-07-25",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 521,
          "score": 18
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "TP. HCM",
      "members": [
        "TP. HCM"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 521,
      "historyFirst": "2021-11-20",
      "historyLast": "2026-11-14",
      "historyHash": "05230761cf53a55786cbaf0f172f233c12d517d81d39bc3bf552f3a0ba874e16",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "426",
        "662"
      ],
      "top3Details": [
        {
          "number": "485",
          "hits": 13,
          "total": 14,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 2,
          "count": 521,
          "score": 2
        },
        {
          "number": "426",
          "hits": 16,
          "total": 16,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 1,
          "recent50": 1,
          "repeat": 1,
          "count": 521,
          "score": 1
        },
        {
          "number": "662",
          "hits": 15,
          "total": 15,
          "gap": 0,
          "last": "2026-11-14",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 1,
          "count": 521,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "top3Details": [
        {
          "number": "80",
          "hits": 18,
          "total": 23,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 9,
          "recent50": 18,
          "repeat": 0,
          "count": 52,
          "score": 18
        },
        {
          "number": "52",
          "hits": 16,
          "total": 17,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 52,
          "score": 16
        },
        {
          "number": "50",
          "hits": 15,
          "total": 16,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 52,
          "score": 15
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "top3Details": [
        {
          "number": "92",
          "hits": 14,
          "total": 17,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 52,
          "score": 5
        },
        {
          "number": "21",
          "hits": 13,
          "total": 15,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 6,
          "recent50": 12,
          "repeat": 1,
          "count": 52,
          "score": 5
        },
        {
          "number": "33",
          "hits": 8,
          "total": 8,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 6,
          "recent50": 8,
          "repeat": 0,
          "count": 52,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "top3Details": [
        {
          "number": "80",
          "hits": 18,
          "total": 23,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 9,
          "recent50": 18,
          "repeat": 0,
          "count": 52,
          "score": 9
        },
        {
          "number": "99",
          "hits": 14,
          "total": 15,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 3,
          "recent20": 8,
          "recent50": 14,
          "repeat": 0,
          "count": 52,
          "score": 8
        },
        {
          "number": "52",
          "hits": 16,
          "total": 17,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 52,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "top3Details": [
        {
          "number": "80",
          "hits": 18,
          "total": 23,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 9,
          "recent50": 18,
          "repeat": 0,
          "count": 52,
          "score": 18
        },
        {
          "number": "52",
          "hits": 16,
          "total": 17,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 52,
          "score": 15
        },
        {
          "number": "50",
          "hits": 15,
          "total": 16,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 52,
          "score": 14
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 2,
      "method": "gap",
      "top3": [
        "67",
        "32",
        "68"
      ],
      "top3Details": [
        {
          "number": "67",
          "hits": 9,
          "total": 9,
          "gap": 23,
          "last": "2026-06-01",
          "recent10": 0,
          "recent20": 0,
          "recent50": 9,
          "repeat": 0,
          "count": 52,
          "score": 9
        },
        {
          "number": "32",
          "hits": 8,
          "total": 8,
          "gap": 16,
          "last": "2026-07-20",
          "recent10": 0,
          "recent20": 2,
          "recent50": 8,
          "repeat": 0,
          "count": 52,
          "score": 6.4
        },
        {
          "number": "68",
          "hits": 6,
          "total": 8,
          "gap": 19,
          "last": "2026-06-29",
          "recent10": 0,
          "recent20": 1,
          "recent50": 6,
          "repeat": 0,
          "count": 52,
          "score": 5.7
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "52",
        "50"
      ],
      "top3Details": [
        {
          "number": "11",
          "hits": 11,
          "total": 14,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 4,
          "recent50": 10,
          "repeat": 2,
          "count": 52,
          "score": 2
        },
        {
          "number": "52",
          "hits": 16,
          "total": 17,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 52,
          "score": 1
        },
        {
          "number": "50",
          "hits": 15,
          "total": 16,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 52,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "680",
        "086",
        "122"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 6,
          "total": 6,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 52,
          "score": 6
        },
        {
          "number": "086",
          "hits": 4,
          "total": 4,
          "gap": 7,
          "last": "2026-09-21",
          "recent10": 1,
          "recent20": 1,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 4
        },
        {
          "number": "122",
          "hits": 4,
          "total": 4,
          "gap": 6,
          "last": "2026-09-28",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "051"
      ],
      "top3Details": [
        {
          "number": "063",
          "hits": 3,
          "total": 3,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 52,
          "score": 3
        },
        {
          "number": "680",
          "hits": 6,
          "total": 6,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 52,
          "score": 2
        },
        {
          "number": "051",
          "hits": 3,
          "total": 3,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 1,
          "count": 52,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "163",
        "980"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 6,
          "total": 6,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 52,
          "score": 3
        },
        {
          "number": "163",
          "hits": 4,
          "total": 4,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 1,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 3
        },
        {
          "number": "980",
          "hits": 4,
          "total": 4,
          "gap": 8,
          "last": "2026-09-14",
          "recent10": 1,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "086",
        "122"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 6,
          "total": 6,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 52,
          "score": 6
        },
        {
          "number": "086",
          "hits": 4,
          "total": 4,
          "gap": 7,
          "last": "2026-09-21",
          "recent10": 1,
          "recent20": 1,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 4
        },
        {
          "number": "122",
          "hits": 4,
          "total": 4,
          "gap": 6,
          "last": "2026-09-28",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "193",
        "452"
      ],
      "top3Details": [
        {
          "number": "592",
          "hits": 4,
          "total": 4,
          "gap": 26,
          "last": "2026-05-11",
          "recent10": 0,
          "recent20": 0,
          "recent50": 3,
          "repeat": 0,
          "count": 52,
          "score": 4
        },
        {
          "number": "193",
          "hits": 4,
          "total": 4,
          "gap": 19,
          "last": "2026-06-29",
          "recent10": 0,
          "recent20": 1,
          "recent50": 3,
          "repeat": 0,
          "count": 52,
          "score": 3.8
        },
        {
          "number": "452",
          "hits": 4,
          "total": 4,
          "gap": 17,
          "last": "2026-07-13",
          "recent10": 0,
          "recent20": 1,
          "recent50": 4,
          "repeat": 0,
          "count": 52,
          "score": 3.4
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 52,
      "historyFirst": "2025-11-17",
      "historyLast": "2026-11-09",
      "historyHash": "01dd97d5aabb396f4eca9a8087be2268e8235a696f4c92f9bbb1f43c4a2f308e",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "051",
        "311",
        "500"
      ],
      "top3Details": [
        {
          "number": "051",
          "hits": 3,
          "total": 3,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 1,
          "count": 52,
          "score": 1
        },
        {
          "number": "311",
          "hits": 3,
          "total": 3,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 3,
          "repeat": 1,
          "count": 52,
          "score": 1
        },
        {
          "number": "500",
          "hits": 3,
          "total": 3,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 3,
          "repeat": 1,
          "count": 52,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "01",
        "92",
        "50"
      ],
      "top3Details": [
        {
          "number": "01",
          "hits": 37,
          "total": 43,
          "gap": 2,
          "last": "2026-10-26",
          "recent10": 1,
          "recent20": 3,
          "recent50": 11,
          "repeat": 0,
          "count": 156,
          "score": 37
        },
        {
          "number": "92",
          "hits": 37,
          "total": 41,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 156,
          "score": 37
        },
        {
          "number": "50",
          "hits": 36,
          "total": 37,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 156,
          "score": 36
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "top3Details": [
        {
          "number": "92",
          "hits": 37,
          "total": 41,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 156,
          "score": 5
        },
        {
          "number": "21",
          "hits": 33,
          "total": 38,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 6,
          "recent50": 12,
          "repeat": 1,
          "count": 156,
          "score": 5
        },
        {
          "number": "33",
          "hits": 33,
          "total": 34,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 6,
          "recent50": 8,
          "repeat": 0,
          "count": 156,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "top3Details": [
        {
          "number": "80",
          "hits": 33,
          "total": 38,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 9,
          "recent50": 18,
          "repeat": 0,
          "count": 156,
          "score": 9
        },
        {
          "number": "99",
          "hits": 32,
          "total": 35,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 3,
          "recent20": 8,
          "recent50": 14,
          "repeat": 0,
          "count": 156,
          "score": 8
        },
        {
          "number": "52",
          "hits": 30,
          "total": 31,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 156,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "top3Details": [
        {
          "number": "80",
          "hits": 33,
          "total": 38,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 9,
          "recent50": 18,
          "repeat": 0,
          "count": 156,
          "score": 18
        },
        {
          "number": "52",
          "hits": 30,
          "total": 31,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 156,
          "score": 15
        },
        {
          "number": "50",
          "hits": 36,
          "total": 37,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 156,
          "score": 14
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 2,
      "method": "gap",
      "top3": [
        "68",
        "67",
        "76"
      ],
      "top3Details": [
        {
          "number": "68",
          "hits": 32,
          "total": 35,
          "gap": 19,
          "last": "2026-06-29",
          "recent10": 0,
          "recent20": 1,
          "recent50": 6,
          "repeat": 0,
          "count": 156,
          "score": 30.4
        },
        {
          "number": "67",
          "hits": 29,
          "total": 31,
          "gap": 23,
          "last": "2026-06-01",
          "recent10": 0,
          "recent20": 0,
          "recent50": 9,
          "repeat": 0,
          "count": 156,
          "score": 29
        },
        {
          "number": "76",
          "hits": 24,
          "total": 26,
          "gap": 21,
          "last": "2026-06-15",
          "recent10": 0,
          "recent20": 0,
          "recent50": 3,
          "repeat": 0,
          "count": 156,
          "score": 24
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "50",
        "21"
      ],
      "top3Details": [
        {
          "number": "11",
          "hits": 26,
          "total": 31,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 4,
          "recent50": 10,
          "repeat": 2,
          "count": 156,
          "score": 2
        },
        {
          "number": "50",
          "hits": 36,
          "total": 37,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 156,
          "score": 1
        },
        {
          "number": "21",
          "hits": 33,
          "total": 38,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 6,
          "recent50": 12,
          "repeat": 1,
          "count": 156,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "901",
        "038",
        "639"
      ],
      "top3Details": [
        {
          "number": "901",
          "hits": 10,
          "total": 10,
          "gap": 27,
          "last": "2026-05-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 2,
          "repeat": 0,
          "count": 156,
          "score": 10
        },
        {
          "number": "038",
          "hits": 8,
          "total": 8,
          "gap": 13,
          "last": "2026-08-10",
          "recent10": 0,
          "recent20": 1,
          "recent50": 1,
          "repeat": 0,
          "count": 156,
          "score": 8
        },
        {
          "number": "639",
          "hits": 8,
          "total": 8,
          "gap": 75,
          "last": "2025-06-02",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 156,
          "score": 8
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "294"
      ],
      "top3Details": [
        {
          "number": "063",
          "hits": 3,
          "total": 3,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 156,
          "score": 3
        },
        {
          "number": "680",
          "hits": 8,
          "total": 8,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 156,
          "score": 2
        },
        {
          "number": "294",
          "hits": 5,
          "total": 5,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 2,
          "recent50": 2,
          "repeat": 0,
          "count": 156,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "980",
        "163"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 8,
          "total": 8,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 156,
          "score": 3
        },
        {
          "number": "980",
          "hits": 8,
          "total": 8,
          "gap": 8,
          "last": "2026-09-14",
          "recent10": 1,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 156,
          "score": 3
        },
        {
          "number": "163",
          "hits": 5,
          "total": 5,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 1,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 156,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "980",
        "122"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 8,
          "total": 8,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 156,
          "score": 6
        },
        {
          "number": "980",
          "hits": 8,
          "total": 8,
          "gap": 8,
          "last": "2026-09-14",
          "recent10": 1,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 156,
          "score": 4
        },
        {
          "number": "122",
          "hits": 7,
          "total": 7,
          "gap": 6,
          "last": "2026-09-28",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 0,
          "count": 156,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 3,
      "method": "gap",
      "top3": [
        "901",
        "639",
        "922"
      ],
      "top3Details": [
        {
          "number": "901",
          "hits": 10,
          "total": 10,
          "gap": 27,
          "last": "2026-05-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 2,
          "repeat": 0,
          "count": 156,
          "score": 10
        },
        {
          "number": "639",
          "hits": 8,
          "total": 8,
          "gap": 75,
          "last": "2025-06-02",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 156,
          "score": 8
        },
        {
          "number": "922",
          "hits": 7,
          "total": 7,
          "gap": 20,
          "last": "2026-06-22",
          "recent10": 0,
          "recent20": 0,
          "recent50": 2,
          "repeat": 0,
          "count": 156,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 156,
      "historyFirst": "2023-11-20",
      "historyLast": "2026-11-09",
      "historyHash": "81f986d9faf976b17b59f040183f71e9fce7144c3c8c903f222fed2bb536c0c5",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "462",
        "500",
        "650"
      ],
      "top3Details": [
        {
          "number": "462",
          "hits": 5,
          "total": 5,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 2,
          "repeat": 1,
          "count": 156,
          "score": 1
        },
        {
          "number": "500",
          "hits": 5,
          "total": 5,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 3,
          "repeat": 1,
          "count": 156,
          "score": 1
        },
        {
          "number": "650",
          "hits": 5,
          "total": 5,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 2,
          "recent50": 2,
          "repeat": 1,
          "count": 156,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "50",
        "68"
      ],
      "top3Details": [
        {
          "number": "92",
          "hits": 58,
          "total": 65,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 260,
          "score": 58
        },
        {
          "number": "50",
          "hits": 56,
          "total": 58,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 260,
          "score": 56
        },
        {
          "number": "68",
          "hits": 55,
          "total": 62,
          "gap": 19,
          "last": "2026-06-29",
          "recent10": 0,
          "recent20": 1,
          "recent50": 6,
          "repeat": 0,
          "count": 260,
          "score": 55
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "top3Details": [
        {
          "number": "92",
          "hits": 58,
          "total": 65,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 5,
          "recent50": 13,
          "repeat": 0,
          "count": 260,
          "score": 5
        },
        {
          "number": "21",
          "hits": 44,
          "total": 50,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 5,
          "recent20": 6,
          "recent50": 12,
          "repeat": 1,
          "count": 260,
          "score": 5
        },
        {
          "number": "33",
          "hits": 44,
          "total": 46,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 5,
          "recent20": 6,
          "recent50": 8,
          "repeat": 0,
          "count": 260,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "top3Details": [
        {
          "number": "80",
          "hits": 53,
          "total": 59,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 9,
          "recent50": 18,
          "repeat": 0,
          "count": 260,
          "score": 9
        },
        {
          "number": "99",
          "hits": 43,
          "total": 46,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 3,
          "recent20": 8,
          "recent50": 14,
          "repeat": 0,
          "count": 260,
          "score": 8
        },
        {
          "number": "52",
          "hits": 54,
          "total": 58,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 260,
          "score": 7
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "top3Details": [
        {
          "number": "80",
          "hits": 53,
          "total": 59,
          "gap": 1,
          "last": "2026-11-02",
          "recent10": 4,
          "recent20": 9,
          "recent50": 18,
          "repeat": 0,
          "count": 260,
          "score": 18
        },
        {
          "number": "52",
          "hits": 54,
          "total": 58,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 260,
          "score": 15
        },
        {
          "number": "50",
          "hits": 56,
          "total": 58,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 260,
          "score": 14
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 2,
      "method": "gap",
      "top3": [
        "68",
        "67",
        "76"
      ],
      "top3Details": [
        {
          "number": "68",
          "hits": 55,
          "total": 62,
          "gap": 19,
          "last": "2026-06-29",
          "recent10": 0,
          "recent20": 1,
          "recent50": 6,
          "repeat": 0,
          "count": 260,
          "score": 52.25
        },
        {
          "number": "67",
          "hits": 51,
          "total": 54,
          "gap": 23,
          "last": "2026-06-01",
          "recent10": 0,
          "recent20": 0,
          "recent50": 9,
          "repeat": 0,
          "count": 260,
          "score": 51
        },
        {
          "number": "76",
          "hits": 45,
          "total": 49,
          "gap": 21,
          "last": "2026-06-15",
          "recent10": 0,
          "recent20": 0,
          "recent50": 3,
          "repeat": 0,
          "count": 260,
          "score": 45
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "50",
        "52"
      ],
      "top3Details": [
        {
          "number": "11",
          "hits": 41,
          "total": 50,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 4,
          "recent50": 10,
          "repeat": 2,
          "count": 260,
          "score": 2
        },
        {
          "number": "50",
          "hits": 56,
          "total": 58,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 6,
          "recent50": 14,
          "repeat": 1,
          "count": 260,
          "score": 1
        },
        {
          "number": "52",
          "hits": 54,
          "total": 58,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 3,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 260,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.42204873745695926,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "175",
        "543",
        "592"
      ],
      "top3Details": [
        {
          "number": "175",
          "hits": 11,
          "total": 11,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 1,
          "recent20": 1,
          "recent50": 2,
          "repeat": 0,
          "count": 260,
          "score": 11
        },
        {
          "number": "543",
          "hits": 11,
          "total": 11,
          "gap": 51,
          "last": "2025-11-17",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 260,
          "score": 11
        },
        {
          "number": "592",
          "hits": 11,
          "total": 11,
          "gap": 26,
          "last": "2026-05-11",
          "recent10": 0,
          "recent20": 0,
          "recent50": 3,
          "repeat": 0,
          "count": 260,
          "score": 11
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "294"
      ],
      "top3Details": [
        {
          "number": "063",
          "hits": 3,
          "total": 3,
          "gap": 4,
          "last": "2026-10-12",
          "recent10": 3,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 260,
          "score": 3
        },
        {
          "number": "680",
          "hits": 9,
          "total": 9,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 260,
          "score": 2
        },
        {
          "number": "294",
          "hits": 8,
          "total": 8,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 2,
          "recent50": 2,
          "repeat": 0,
          "count": 260,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "163",
        "980"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 9,
          "total": 9,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 260,
          "score": 3
        },
        {
          "number": "163",
          "hits": 8,
          "total": 8,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 1,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 260,
          "score": 3
        },
        {
          "number": "980",
          "hits": 8,
          "total": 8,
          "gap": 8,
          "last": "2026-09-14",
          "recent10": 1,
          "recent20": 3,
          "recent50": 4,
          "repeat": 0,
          "count": 260,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "162",
        "284"
      ],
      "top3Details": [
        {
          "number": "680",
          "hits": 9,
          "total": 9,
          "gap": 5,
          "last": "2026-10-05",
          "recent10": 2,
          "recent20": 3,
          "recent50": 6,
          "repeat": 0,
          "count": 260,
          "score": 6
        },
        {
          "number": "162",
          "hits": 9,
          "total": 9,
          "gap": 9,
          "last": "2026-09-07",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 0,
          "count": 260,
          "score": 4
        },
        {
          "number": "284",
          "hits": 9,
          "total": 9,
          "gap": 3,
          "last": "2026-10-19",
          "recent10": 1,
          "recent20": 2,
          "recent50": 4,
          "repeat": 0,
          "count": 260,
          "score": 4
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 3,
      "method": "gap",
      "top3": [
        "543",
        "592",
        "901"
      ],
      "top3Details": [
        {
          "number": "543",
          "hits": 11,
          "total": 11,
          "gap": 51,
          "last": "2025-11-17",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 260,
          "score": 11
        },
        {
          "number": "592",
          "hits": 11,
          "total": 11,
          "gap": 26,
          "last": "2026-05-11",
          "recent10": 0,
          "recent20": 0,
          "recent50": 3,
          "repeat": 0,
          "count": 260,
          "score": 11
        },
        {
          "number": "901",
          "hits": 11,
          "total": 11,
          "gap": 27,
          "last": "2026-05-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 2,
          "repeat": 0,
          "count": 260,
          "score": 11
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "Đồng Tháp",
      "members": [
        "Đồng Tháp"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 260,
      "historyFirst": "2021-11-22",
      "historyLast": "2026-11-09",
      "historyHash": "783561ffa1cd50200dfb5022d73bfb37d17e09f3e3e8252886edd3737d48d01d",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "252",
        "311",
        "462"
      ],
      "top3Details": [
        {
          "number": "252",
          "hits": 8,
          "total": 9,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 1,
          "repeat": 1,
          "count": 260,
          "score": 1
        },
        {
          "number": "311",
          "hits": 7,
          "total": 8,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 3,
          "repeat": 1,
          "count": 260,
          "score": 1
        },
        {
          "number": "462",
          "hits": 7,
          "total": 7,
          "gap": 0,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 1,
          "recent50": 2,
          "repeat": 1,
          "count": 260,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.04979416871470432,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "52",
        "14",
        "91"
      ],
      "top3Details": [
        {
          "number": "52",
          "hits": 108,
          "total": 125,
          "gap": 6,
          "last": "2026-11-09",
          "recent10": 2,
          "recent20": 7,
          "recent50": 15,
          "repeat": 0,
          "count": 361,
          "score": 108
        },
        {
          "number": "14",
          "hits": 106,
          "total": 126,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 7,
          "recent50": 18,
          "repeat": 0,
          "count": 361,
          "score": 106
        },
        {
          "number": "91",
          "hits": 104,
          "total": 123,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 3,
          "recent20": 5,
          "recent50": 15,
          "repeat": 0,
          "count": 361,
          "score": 104
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "93"
      ],
      "top3Details": [
        {
          "number": "12",
          "hits": 89,
          "total": 99,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 6,
          "recent20": 7,
          "recent50": 12,
          "repeat": 1,
          "count": 361,
          "score": 6
        },
        {
          "number": "72",
          "hits": 89,
          "total": 102,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 5,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 361,
          "score": 5
        },
        {
          "number": "93",
          "hits": 84,
          "total": 95,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 5,
          "recent20": 7,
          "recent50": 10,
          "repeat": 1,
          "count": 361,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "06"
      ],
      "top3Details": [
        {
          "number": "34",
          "hits": 96,
          "total": 112,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 10,
          "recent50": 21,
          "repeat": 0,
          "count": 361,
          "score": 10
        },
        {
          "number": "24",
          "hits": 93,
          "total": 104,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 3,
          "recent20": 10,
          "recent50": 18,
          "repeat": 0,
          "count": 361,
          "score": 10
        },
        {
          "number": "06",
          "hits": 85,
          "total": 93,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 3,
          "recent20": 8,
          "recent50": 16,
          "repeat": 0,
          "count": 361,
          "score": 8
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "top3Details": [
        {
          "number": "34",
          "hits": 96,
          "total": 112,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 10,
          "recent50": 21,
          "repeat": 0,
          "count": 361,
          "score": 21
        },
        {
          "number": "53",
          "hits": 80,
          "total": 93,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 4,
          "recent20": 8,
          "recent50": 20,
          "repeat": 0,
          "count": 361,
          "score": 20
        },
        {
          "number": "75",
          "hits": 92,
          "total": 103,
          "gap": 6,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 4,
          "recent50": 19,
          "repeat": 0,
          "count": 361,
          "score": 19
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 2,
      "method": "gap",
      "top3": [
        "21",
        "66",
        "42"
      ],
      "top3Details": [
        {
          "number": "21",
          "hits": 89,
          "total": 101,
          "gap": 20,
          "last": "2026-10-26",
          "recent10": 0,
          "recent20": 0,
          "recent50": 7,
          "repeat": 0,
          "count": 361,
          "score": 89
        },
        {
          "number": "66",
          "hits": 78,
          "total": 87,
          "gap": 19,
          "last": "2026-10-27",
          "recent10": 0,
          "recent20": 1,
          "recent50": 13,
          "repeat": 0,
          "count": 361,
          "score": 74.1
        },
        {
          "number": "42",
          "hits": 83,
          "total": 93,
          "gap": 16,
          "last": "2026-10-30",
          "recent10": 0,
          "recent20": 1,
          "recent50": 8,
          "repeat": 0,
          "count": 361,
          "score": 66.4
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "83",
        "80",
        "23"
      ],
      "top3Details": [
        {
          "number": "83",
          "hits": 101,
          "total": 117,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 3,
          "recent20": 7,
          "recent50": 9,
          "repeat": 2,
          "count": 361,
          "score": 2
        },
        {
          "number": "80",
          "hits": 81,
          "total": 92,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 7,
          "repeat": 2,
          "count": 361,
          "score": 2
        },
        {
          "number": "23",
          "hits": 75,
          "total": 85,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 4,
          "recent20": 7,
          "recent50": 13,
          "repeat": 2,
          "count": 361,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "697",
        "114",
        "150"
      ],
      "top3Details": [
        {
          "number": "697",
          "hits": 21,
          "total": 21,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 361,
          "score": 21
        },
        {
          "number": "114",
          "hits": 17,
          "total": 18,
          "gap": 15,
          "last": "2026-10-31",
          "recent10": 0,
          "recent20": 1,
          "recent50": 3,
          "repeat": 0,
          "count": 361,
          "score": 17
        },
        {
          "number": "150",
          "hits": 17,
          "total": 17,
          "gap": 72,
          "last": "2026-09-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 361,
          "score": 17
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "606",
        "517"
      ],
      "top3Details": [
        {
          "number": "697",
          "hits": 21,
          "total": 21,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 361,
          "score": 2
        },
        {
          "number": "606",
          "hits": 16,
          "total": 16,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 2,
          "recent20": 2,
          "recent50": 2,
          "repeat": 0,
          "count": 361,
          "score": 2
        },
        {
          "number": "517",
          "hits": 13,
          "total": 13,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 4,
          "recent50": 4,
          "repeat": 0,
          "count": 361,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "top3Details": [
        {
          "number": "517",
          "hits": 13,
          "total": 13,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 4,
          "recent50": 4,
          "repeat": 0,
          "count": 361,
          "score": 4
        },
        {
          "number": "434",
          "hits": 12,
          "total": 13,
          "gap": 8,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 6,
          "repeat": 0,
          "count": 361,
          "score": 4
        },
        {
          "number": "724",
          "hits": 17,
          "total": 17,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 361,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "top3Details": [
        {
          "number": "434",
          "hits": 12,
          "total": 13,
          "gap": 8,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 6,
          "repeat": 0,
          "count": 361,
          "score": 6
        },
        {
          "number": "697",
          "hits": 21,
          "total": 21,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 361,
          "score": 5
        },
        {
          "number": "724",
          "hits": 17,
          "total": 17,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 361,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 3,
      "method": "gap",
      "top3": [
        "150",
        "294",
        "691"
      ],
      "top3Details": [
        {
          "number": "150",
          "hits": 17,
          "total": 17,
          "gap": 72,
          "last": "2026-09-04",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 361,
          "score": 17
        },
        {
          "number": "294",
          "hits": 16,
          "total": 16,
          "gap": 44,
          "last": "2026-10-02",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 361,
          "score": 16
        },
        {
          "number": "691",
          "hits": 16,
          "total": 17,
          "gap": 19,
          "last": "2026-10-27",
          "recent10": 0,
          "recent20": 1,
          "recent50": 4,
          "repeat": 0,
          "count": 361,
          "score": 15.2
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 1,
      "windowStart": "2025-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 361,
      "historyFirst": "2025-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "121eeec8c60fa0a5615bbdd384187fd998be09b8f7068174235f4633e22c746e",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "582",
        "123"
      ],
      "top3Details": [
        {
          "number": "697",
          "hits": 21,
          "total": 21,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 361,
          "score": 1
        },
        {
          "number": "582",
          "hits": 15,
          "total": 15,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 1,
          "recent20": 1,
          "recent50": 2,
          "repeat": 1,
          "count": 361,
          "score": 1
        },
        {
          "number": "123",
          "hits": 13,
          "total": 13,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 1,
          "recent20": 3,
          "recent50": 4,
          "repeat": 1,
          "count": 361,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "13",
        "32",
        "90"
      ],
      "top3Details": [
        {
          "number": "13",
          "hits": 285,
          "total": 312,
          "gap": 9,
          "last": "2026-11-06",
          "recent10": 1,
          "recent20": 3,
          "recent50": 9,
          "repeat": 0,
          "count": 1084,
          "score": 285
        },
        {
          "number": "32",
          "hits": 285,
          "total": 338,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 4,
          "recent20": 6,
          "recent50": 10,
          "repeat": 0,
          "count": 1084,
          "score": 285
        },
        {
          "number": "90",
          "hits": 284,
          "total": 315,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 7,
          "recent50": 15,
          "repeat": 0,
          "count": 1084,
          "score": 284
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "26"
      ],
      "top3Details": [
        {
          "number": "12",
          "hits": 261,
          "total": 293,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 6,
          "recent20": 7,
          "recent50": 12,
          "repeat": 1,
          "count": 1084,
          "score": 6
        },
        {
          "number": "72",
          "hits": 261,
          "total": 295,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 5,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 1084,
          "score": 5
        },
        {
          "number": "26",
          "hits": 255,
          "total": 284,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 5,
          "recent20": 8,
          "recent50": 16,
          "repeat": 1,
          "count": 1084,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "top3Details": [
        {
          "number": "24",
          "hits": 266,
          "total": 294,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 3,
          "recent20": 10,
          "recent50": 18,
          "repeat": 0,
          "count": 1084,
          "score": 10
        },
        {
          "number": "34",
          "hits": 248,
          "total": 272,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 10,
          "recent50": 21,
          "repeat": 0,
          "count": 1084,
          "score": 10
        },
        {
          "number": "53",
          "hits": 269,
          "total": 311,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 4,
          "recent20": 8,
          "recent50": 20,
          "repeat": 0,
          "count": 1084,
          "score": 8
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "top3Details": [
        {
          "number": "34",
          "hits": 248,
          "total": 272,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 10,
          "recent50": 21,
          "repeat": 0,
          "count": 1084,
          "score": 21
        },
        {
          "number": "53",
          "hits": 269,
          "total": 311,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 4,
          "recent20": 8,
          "recent50": 20,
          "repeat": 0,
          "count": 1084,
          "score": 20
        },
        {
          "number": "75",
          "hits": 280,
          "total": 322,
          "gap": 6,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 4,
          "recent50": 19,
          "repeat": 0,
          "count": 1084,
          "score": 19
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 2,
      "method": "gap",
      "top3": [
        "21",
        "66",
        "42"
      ],
      "top3Details": [
        {
          "number": "21",
          "hits": 263,
          "total": 299,
          "gap": 20,
          "last": "2026-10-26",
          "recent10": 0,
          "recent20": 0,
          "recent50": 7,
          "repeat": 0,
          "count": 1084,
          "score": 263
        },
        {
          "number": "66",
          "hits": 270,
          "total": 308,
          "gap": 19,
          "last": "2026-10-27",
          "recent10": 0,
          "recent20": 1,
          "recent50": 13,
          "repeat": 0,
          "count": 1084,
          "score": 256.5
        },
        {
          "number": "42",
          "hits": 261,
          "total": 283,
          "gap": 16,
          "last": "2026-10-30",
          "recent10": 0,
          "recent20": 1,
          "recent50": 8,
          "repeat": 0,
          "count": 1084,
          "score": 208.8
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "25",
        "83",
        "23"
      ],
      "top3Details": [
        {
          "number": "25",
          "hits": 262,
          "total": 298,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 3,
          "recent20": 6,
          "recent50": 12,
          "repeat": 2,
          "count": 1084,
          "score": 2
        },
        {
          "number": "83",
          "hits": 255,
          "total": 301,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 3,
          "recent20": 7,
          "recent50": 9,
          "repeat": 2,
          "count": 1084,
          "score": 2
        },
        {
          "number": "23",
          "hits": 252,
          "total": 284,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 4,
          "recent20": 7,
          "recent50": 13,
          "repeat": 2,
          "count": 1084,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "662",
        "697",
        "053"
      ],
      "top3Details": [
        {
          "number": "662",
          "hits": 44,
          "total": 46,
          "gap": 32,
          "last": "2026-10-14",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 1084,
          "score": 44
        },
        {
          "number": "697",
          "hits": 43,
          "total": 44,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 1084,
          "score": 43
        },
        {
          "number": "053",
          "hits": 42,
          "total": 42,
          "gap": 13,
          "last": "2026-11-02",
          "recent10": 0,
          "recent20": 1,
          "recent50": 3,
          "repeat": 0,
          "count": 1084,
          "score": 42
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "568",
        "606"
      ],
      "top3Details": [
        {
          "number": "697",
          "hits": 43,
          "total": 44,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 1084,
          "score": 2
        },
        {
          "number": "568",
          "hits": 32,
          "total": 33,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 0,
          "count": 1084,
          "score": 2
        },
        {
          "number": "606",
          "hits": 32,
          "total": 33,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 2,
          "recent20": 2,
          "recent50": 2,
          "repeat": 0,
          "count": 1084,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "top3Details": [
        {
          "number": "517",
          "hits": 31,
          "total": 31,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 4,
          "recent50": 4,
          "repeat": 0,
          "count": 1084,
          "score": 4
        },
        {
          "number": "434",
          "hits": 20,
          "total": 21,
          "gap": 8,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 6,
          "repeat": 0,
          "count": 1084,
          "score": 4
        },
        {
          "number": "724",
          "hits": 38,
          "total": 38,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 1084,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "top3Details": [
        {
          "number": "434",
          "hits": 20,
          "total": 21,
          "gap": 8,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 6,
          "repeat": 0,
          "count": 1084,
          "score": 6
        },
        {
          "number": "697",
          "hits": 43,
          "total": 44,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 1084,
          "score": 5
        },
        {
          "number": "724",
          "hits": 38,
          "total": 38,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 1084,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 3,
      "method": "gap",
      "top3": [
        "662",
        "432",
        "572"
      ],
      "top3Details": [
        {
          "number": "662",
          "hits": 44,
          "total": 46,
          "gap": 32,
          "last": "2026-10-14",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 1084,
          "score": 44
        },
        {
          "number": "432",
          "hits": 39,
          "total": 40,
          "gap": 55,
          "last": "2026-09-21",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 1084,
          "score": 39
        },
        {
          "number": "572",
          "hits": 40,
          "total": 41,
          "gap": 19,
          "last": "2026-10-27",
          "recent10": 0,
          "recent20": 1,
          "recent50": 2,
          "repeat": 0,
          "count": 1084,
          "score": 38
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 3,
      "windowStart": "2023-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1084,
      "historyFirst": "2023-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "c375caa5f22f91fa335f90f8321dccdae1ebf19a77bf60a891992fa8501b839d",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "645",
        "225"
      ],
      "top3Details": [
        {
          "number": "697",
          "hits": 43,
          "total": 44,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 1084,
          "score": 1
        },
        {
          "number": "645",
          "hits": 37,
          "total": 37,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 1,
          "recent20": 1,
          "recent50": 1,
          "repeat": 1,
          "count": 1084,
          "score": 1
        },
        {
          "number": "225",
          "hits": 29,
          "total": 29,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 1,
          "recent20": 1,
          "recent50": 3,
          "repeat": 1,
          "count": 1084,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "top3Details": [
        {
          "number": "92",
          "hits": 483,
          "total": 557,
          "gap": 3,
          "last": "2026-11-12",
          "recent10": 3,
          "recent20": 5,
          "recent50": 10,
          "repeat": 0,
          "count": 1806,
          "score": 483
        },
        {
          "number": "13",
          "hits": 468,
          "total": 518,
          "gap": 9,
          "last": "2026-11-06",
          "recent10": 1,
          "recent20": 3,
          "recent50": 9,
          "repeat": 0,
          "count": 1806,
          "score": 468
        },
        {
          "number": "91",
          "hits": 464,
          "total": 531,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 3,
          "recent20": 5,
          "recent50": 15,
          "repeat": 0,
          "count": 1806,
          "score": 464
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "26"
      ],
      "top3Details": [
        {
          "number": "12",
          "hits": 434,
          "total": 489,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 6,
          "recent20": 7,
          "recent50": 12,
          "repeat": 1,
          "count": 1806,
          "score": 6
        },
        {
          "number": "72",
          "hits": 445,
          "total": 508,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 5,
          "recent20": 7,
          "recent50": 15,
          "repeat": 1,
          "count": 1806,
          "score": 5
        },
        {
          "number": "26",
          "hits": 437,
          "total": 494,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 5,
          "recent20": 8,
          "recent50": 16,
          "repeat": 1,
          "count": 1806,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "top3Details": [
        {
          "number": "24",
          "hits": 432,
          "total": 491,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 3,
          "recent20": 10,
          "recent50": 18,
          "repeat": 0,
          "count": 1806,
          "score": 10
        },
        {
          "number": "34",
          "hits": 431,
          "total": 480,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 10,
          "recent50": 21,
          "repeat": 0,
          "count": 1806,
          "score": 10
        },
        {
          "number": "53",
          "hits": 440,
          "total": 503,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 4,
          "recent20": 8,
          "recent50": 20,
          "repeat": 0,
          "count": 1806,
          "score": 8
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "top3Details": [
        {
          "number": "34",
          "hits": 431,
          "total": 480,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 4,
          "recent20": 10,
          "recent50": 21,
          "repeat": 0,
          "count": 1806,
          "score": 21
        },
        {
          "number": "53",
          "hits": 440,
          "total": 503,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 4,
          "recent20": 8,
          "recent50": 20,
          "repeat": 0,
          "count": 1806,
          "score": 20
        },
        {
          "number": "75",
          "hits": 444,
          "total": 499,
          "gap": 6,
          "last": "2026-11-09",
          "recent10": 1,
          "recent20": 4,
          "recent50": 19,
          "repeat": 0,
          "count": 1806,
          "score": 19
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 2,
      "method": "gap",
      "top3": [
        "66",
        "21",
        "42"
      ],
      "top3Details": [
        {
          "number": "66",
          "hits": 453,
          "total": 515,
          "gap": 19,
          "last": "2026-10-27",
          "recent10": 0,
          "recent20": 1,
          "recent50": 13,
          "repeat": 0,
          "count": 1806,
          "score": 430.35
        },
        {
          "number": "21",
          "hits": 428,
          "total": 484,
          "gap": 20,
          "last": "2026-10-26",
          "recent10": 0,
          "recent20": 0,
          "recent50": 7,
          "repeat": 0,
          "count": 1806,
          "score": 428
        },
        {
          "number": "42",
          "hits": 435,
          "total": 490,
          "gap": 16,
          "last": "2026-10-30",
          "recent10": 0,
          "recent20": 1,
          "recent50": 8,
          "repeat": 0,
          "count": 1806,
          "score": 348
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "25",
        "83",
        "23"
      ],
      "top3Details": [
        {
          "number": "25",
          "hits": 432,
          "total": 481,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 3,
          "recent20": 6,
          "recent50": 12,
          "repeat": 2,
          "count": 1806,
          "score": 2
        },
        {
          "number": "83",
          "hits": 423,
          "total": 490,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 3,
          "recent20": 7,
          "recent50": 9,
          "repeat": 2,
          "count": 1806,
          "score": 2
        },
        {
          "number": "23",
          "hits": 413,
          "total": 464,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 4,
          "recent20": 7,
          "recent50": 13,
          "repeat": 2,
          "count": 1806,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.5606234998261617,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "697"
      ],
      "top3Details": [
        {
          "number": "592",
          "hits": 70,
          "total": 70,
          "gap": 62,
          "last": "2026-09-14",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 1806,
          "score": 70
        },
        {
          "number": "662",
          "hits": 63,
          "total": 65,
          "gap": 32,
          "last": "2026-10-14",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 1806,
          "score": 63
        },
        {
          "number": "697",
          "hits": 63,
          "total": 64,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 1806,
          "score": 63
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "479",
        "190"
      ],
      "top3Details": [
        {
          "number": "697",
          "hits": 63,
          "total": 64,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 1806,
          "score": 2
        },
        {
          "number": "479",
          "hits": 51,
          "total": 52,
          "gap": 2,
          "last": "2026-11-13",
          "recent10": 2,
          "recent20": 2,
          "recent50": 3,
          "repeat": 0,
          "count": 1806,
          "score": 2
        },
        {
          "number": "190",
          "hits": 50,
          "total": 50,
          "gap": 7,
          "last": "2026-11-08",
          "recent10": 2,
          "recent20": 3,
          "recent50": 3,
          "repeat": 0,
          "count": 1806,
          "score": 2
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "top3Details": [
        {
          "number": "517",
          "hits": 43,
          "total": 43,
          "gap": 1,
          "last": "2026-11-14",
          "recent10": 2,
          "recent20": 4,
          "recent50": 4,
          "repeat": 0,
          "count": 1806,
          "score": 4
        },
        {
          "number": "434",
          "hits": 31,
          "total": 32,
          "gap": 8,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 6,
          "repeat": 0,
          "count": 1806,
          "score": 4
        },
        {
          "number": "724",
          "hits": 56,
          "total": 56,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 1806,
          "score": 3
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "top3Details": [
        {
          "number": "434",
          "hits": 31,
          "total": 32,
          "gap": 8,
          "last": "2026-11-07",
          "recent10": 2,
          "recent20": 4,
          "recent50": 6,
          "repeat": 0,
          "count": 1806,
          "score": 6
        },
        {
          "number": "697",
          "hits": 63,
          "total": 64,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 1806,
          "score": 5
        },
        {
          "number": "724",
          "hits": 56,
          "total": 56,
          "gap": 4,
          "last": "2026-11-11",
          "recent10": 1,
          "recent20": 3,
          "recent50": 5,
          "repeat": 0,
          "count": 1806,
          "score": 5
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "964"
      ],
      "top3Details": [
        {
          "number": "592",
          "hits": 70,
          "total": 70,
          "gap": 62,
          "last": "2026-09-14",
          "recent10": 0,
          "recent20": 0,
          "recent50": 0,
          "repeat": 0,
          "count": 1806,
          "score": 70
        },
        {
          "number": "662",
          "hits": 63,
          "total": 65,
          "gap": 32,
          "last": "2026-10-14",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 1806,
          "score": 63
        },
        {
          "number": "964",
          "hits": 61,
          "total": 62,
          "gap": 21,
          "last": "2026-10-25",
          "recent10": 0,
          "recent20": 0,
          "recent50": 1,
          "repeat": 0,
          "count": 1806,
          "score": 61
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    },
    {
      "targetDate": "2026-11-16",
      "station": "XSMB",
      "members": [
        "XSMB"
      ],
      "years": 5,
      "windowStart": "2021-11-16",
      "windowEndExclusive": "2026-11-16",
      "historyCount": 1806,
      "historyFirst": "2021-11-16",
      "historyLast": "2026-11-15",
      "historyHash": "a3f7d0fe22f8786ee681a0a2b493b8f8630c7cf972b5f3bf026af7ec04752961",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "438",
        "645"
      ],
      "top3Details": [
        {
          "number": "697",
          "hits": 63,
          "total": 64,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 2,
          "recent20": 2,
          "recent50": 5,
          "repeat": 1,
          "count": 1806,
          "score": 1
        },
        {
          "number": "438",
          "hits": 52,
          "total": 53,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 1,
          "recent20": 1,
          "recent50": 1,
          "repeat": 1,
          "count": 1806,
          "score": 1
        },
        {
          "number": "645",
          "hits": 51,
          "total": 51,
          "gap": 0,
          "last": "2026-11-15",
          "recent10": 1,
          "recent20": 1,
          "recent50": 1,
          "repeat": 1,
          "count": 1806,
          "score": 1
        }
      ],
      "uniformTop3Baseline": 0.06677010784864967,
      "probabilityModel": null
    }
  ],
  "skipped": []
}
```
### Bản khóa bất biến mb-total50-v1 — 16/11/2026
```json
{
  "version": "mb-total50-v1",
  "target_date": "2026-11-16",
  "created_at": "2026-11-16T08:55:02.542756+07:00",
  "source_sha256": "6001a9ce2ed1aad7e07fa9be3bf7820e77f920125157f281998c8e4d3196d348",
  "formula_sha256": "8cc483c85a47cd08a2f07acf20415898699b48856222e3ae2beb1f08a9bbaf5c",
  "predictions": {
    "total50": {
      "top3": [
        "75",
        "34",
        "53"
      ],
      "n": 50,
      "first": "2026-09-27",
      "last": "2026-11-15"
    },
    "presence50": {
      "top3": [
        "34",
        "53",
        "75"
      ],
      "n": 50,
      "first": "2026-09-27",
      "last": "2026-11-15"
    },
    "frequency1y": {
      "top3": [
        "52",
        "14",
        "91"
      ],
      "n": 361,
      "first": "2025-11-16",
      "last": "2026-11-15"
    },
    "frequency3y": {
      "top3": [
        "13",
        "32",
        "90"
      ],
      "n": 1084,
      "first": "2023-11-16",
      "last": "2026-11-15"
    },
    "frequency5y": {
      "top3": [
        "92",
        "13",
        "91"
      ],
      "n": 1806,
      "first": "2021-11-16",
      "last": "2026-11-15"
    }
  },
  "limitations": [
    "Historical calendar gaps outside last50 remain unclassified; do not assume holidays."
  ],
  "status": "unscored; durable save required before18h"
}
```
Lượt sau:chấm đúngbảnkhóa nghiêncứu trên khi đủkếtquảMN/MBriêng;sohash canonical-json-sorted-v1;chỉchấm lại nếunguồnsửa. Tiếptục xửlývấnđềquyềnriêngtư trongphiênđượcphépthayquyền,khôngthayởlượtnghiêncứunày.


## 16/11/2026 — Triển khai tự chọn theo đồng ý trực tiếp của anh
- Anh đồng ý tự chọn và tự chuyển phương pháp hiển thị chính, sau đó yêu cầu “OK TRIỂN KHAI”. Đây là lượt sửa sản phẩm được phép, không phải thay đổi tự ý trong lượt nghiên cứu.
- Site mới đã xuất bản version 3, commit 06799703e02d10f5013aea17a6e88ef6533ac434, deployment appgdep_6afa79ca13c481919f3fed55e237bfdf succeeded lúc 2026-11-16T03:34:57Z. Site cũ và lịch không đổi.
- Khôi phục quyền custom chỉ owner, revision 3, không có viewer/editor/group khác.
- auto-prospective-v1: màn hình chính tự lấy kỳ kế tiếp riêng MN/MT/MB, 2/3 chữ số. MN cặp đã thống nhất; MT bỏ Khánh Hòa/Đắk Nông/Quảng Bình, Đà Nẵng thứ Tư riêng. Chi tiết thủ công 1/3/5 năm còn nguyên.
- Nhánh khóa riêng automatic/v1: 18 phương án (6 công thức gốc x 3 cửa sổ) mỗi chế độ; không ghi đè forecasts/ hay bản khóa Library. POST /api/automatic và /api/update tạo khóa khi đủ kỳ gần nhất trước giờ MN16h/MT17h/MB18h. Kiểm tra thời gian thật ngay trước ghi, conditional create. Thiếu bảng thì chờ.
- Mặc định repeat5 MN, frequency5 MT/MB là phương án nền, không tuyên bố thắng. Bộ chọn không dùng kết quả hồi cứu để chuyển. Chấm riêng MN-pair/MT-pair/MT-single/MB-single và 2/3 số, gom các ngày cùng phạm vi.
- Định trước: từng khối 365 kỳ đã khóa đủ kết quả, không chồng lấn; yêu cầu gain>=0.03, hai nửa khối đều dương, tỷ lệ>=mốc đồng đều điều kiện theo số đuôi khác nhau; gain vượt sqrt(2*log(1/alpha)/365), alpha=.05/(8*18*epoch*(epoch+1)). Biên Hoeffding bảo thủ cần giả định độc lập theo kỳ; không chứng minh mọi dạng phụ thuộc được xử lý. Chưa có lần chuyển hay lợi thế được chứng minh.
- Snapshot lưu lựa chọn, lý do, hash nguồn/công thức, số kỳ và toàn bộ ứng viên. Hiển thị không đổi số đã khóa dù nguồn cập nhật; kết quả chấm đọc dữ liệu hiện hành. Theo dõi thay đổi nguồn trong nghiên cứu vẫn cần journal hash.
- Tests pass: parser, cặp đủ, bất biến dự báo, cutoff cũ, công thức MB, union; mới: leap-year, singleton MT, bảng sai, không rò tương lai, ngưỡng365, promotion bảo thủ, thiếu lịch sử không hiện số, snapshot đã lưu không đổi. Build và syntax pass. Chưa kiểm tra giao diện bằng trình duyệt.
- Không đưa ML/GA/LSTM/nhánh MN->MB vào sản phẩm. Không báo điểm hạng thành %. Mã triển khai lưu trong repo Site; các thí nghiệm Library và bộ đếm giữ nguyên.


## Lượt chiều 16/11/2026 — kiểm tra cập nhật và chấm bản khóa
Quyền custom owner-only hiện hành được giữ. Đã gọi update/status/data/tracking. MN và MB ghi trạng thái riêng. Bộ khóa nghiên cứu 1/3/5 và total50 sáng 16/11 đã lưu trong phiên bản13, giữ nguyên. Chưa đủ dữ liệu thì chờ, không tạo dự báo bù. Chưa có giả thuyết mới đủ căn cứ để phát cảnh báo MB. Brier N/A do chỉ xếp hạng. Giữ tổng thử nghiệm trước.
Kiểm tra chất lượng dưới đây dùng số lượng và phân bố độ dài, không thay thế kiểm toán từng vị trí giải HTML. Vẫn còn480vị trí lịch sử cần xác minh. Kết quả bổ sung chỉ chấm khi đủ bảng.

```json
{
  "rows": 7570,
  "min": "2021-11-10",
  "max": "2026-11-16",
  "bad": [],
  "duplicates": [],
  "leading_zero_values": 15235,
  "recent": {
    "2026-11-16": {
      "missing": [
        "TP. HCM",
        "Đồng Tháp",
        "Cà Mau",
        "XSMB"
      ],
      "complete": false,
      "station_hashes": {},
      "MN": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945",
      "MB": "74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-15": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Đà Lạt": "67a44e14bbea2d0d1873415e7d07f2ca6228592c33ae1ada6587d37e0e3268aa",
        "Kiên Giang": "0ce9bc69fdafb845825ff0e6cb73348cf4d822b824ce233443d1fd303a3676d0",
        "Tiền Giang": "cdff9e39b7b43594122ebf9f71f6990ae2b740533d39f09bfaf1b89f6038d6d0",
        "XSMB": "fbfd32cbd8f8d832478098ebbab784b6dca6381fd78211f04c7811848b4dfe92"
      },
      "MN": "b6437f042687fdd2cdc8a105bd6a34293c80f6cb5a98445ebf288aa495a0a587",
      "MB": "fbfd32cbd8f8d832478098ebbab784b6dca6381fd78211f04c7811848b4dfe92",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-14": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bình Phước": "bf35f2fb1fb388c85eade0205052c61e619b681f2c5d600c8c769f5c6ee6672f",
        "Hậu Giang": "7e8ac0349b5cab9dc7bd3fa222fad6efee1fefe4ab1a0cd4b61ed88e26433128",
        "Long An": "af136f5152505cf0731b62bb4c5dcef68e2db07b91d210dbecc78f1c18c0374c",
        "TP. HCM": "2087883ef36ff16b310c248446f4e6d350db3002c7708d470752fbfc9dc6bbd2",
        "XSMB": "cefe2d9e32ddb1628e2250a6038d9b0609a80d2585ea6ef016ef661746f43837"
      },
      "MN": "5c720bdcd759f12ff92577ca159f53e4adeb6ba3586d20c7cdcc7021a1c6d841",
      "MB": "cefe2d9e32ddb1628e2250a6038d9b0609a80d2585ea6ef016ef661746f43837",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-13": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bình Dương": "37c45a0696afbbc58bc67eade06123fa042f4084cbe0e6bd9c7c24cec7d85f2f",
        "Trà Vinh": "475c76158a326be94df532df075a77c8926b0a12bc45ce562130846410145f18",
        "Vĩnh Long": "ddc873c9b561e933ad3cbfe22a03c348ab493afe60565baab8ec1bf1575c1a95",
        "XSMB": "df3b261f2afb02985ad531ace3bf40e380e6b173b4bd030b1dafae0caa6ae28c"
      },
      "MN": "b92e62f535ba1ab5a07d2788c2b0906967a24f67893489cb0c7240a5de24503e",
      "MB": "df3b261f2afb02985ad531ace3bf40e380e6b173b4bd030b1dafae0caa6ae28c",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-12": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "An Giang": "3b4bee59aefca30852df2ab7badfa2ad228ccd8d77d1f1133a5e7873530b1d58",
        "Bình Thuận": "d8acbe5c4436be08cdbe72c5a4d3f67e87f488250d48e30eb3c1e0a8982c6412",
        "Tây Ninh": "c37e45e9e024079fa3e3dbbd086a56301e453232ae6bb8f1113c9fd937cb182f",
        "XSMB": "7b919c0f868022006aa80eb2e46e177dc200187feb163739f0cf87d8b92c385b"
      },
      "MN": "df64d7c9dc1e8a10f3e85a7c165f3afe4fffea23c74c2bcfc4ed348888fff862",
      "MB": "7b919c0f868022006aa80eb2e46e177dc200187feb163739f0cf87d8b92c385b",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-11": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Cần Thơ": "2dd025e23c57d040e8a12e4e0ceacec233fe21b884099cff04a648d2ff0dd2fb",
        "Đồng Nai": "292d5f9417f69d32ac2b0a62bc9634a2a8bce78b00904849d01637711c583f4e",
        "Sóc Trăng": "c61b057d7f256e5c669dd92252fb3e34a283458c23aebd9bb56a80d31849f857",
        "XSMB": "d4c5d811b43d8e12326f4d88caa74747eb889e542de1c814109068ae13b35af7"
      },
      "MN": "f7c98168867ebf614f0c071279e9c63feb6d8c1c41acfad592fef8de676a66eb",
      "MB": "d4c5d811b43d8e12326f4d88caa74747eb889e542de1c814109068ae13b35af7",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-10": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bạc Liêu": "f1c10fc29dd6119aefeb8d1207405c363001e5274920f7bbd8785d748f6bb5c6",
        "Bến Tre": "7eccefecd74e34b9254c5743663cc9c9921f1677a8ec07fc3dd66ecf9906e006",
        "Vũng Tàu": "dfe93281adea01145edf4ee6fcf8d1e649a7551a014c2ad8f504ade24d0ed479",
        "XSMB": "bcc33c53569afd5e887fd3c9b4721a4c625733ca7b55716162d6efd8ed2efe06"
      },
      "MN": "eb067ac5a67694f5448820dcc287418c9da6ecfdc9f90409026b9e43a71bb503",
      "MB": "bcc33c53569afd5e887fd3c9b4721a4c625733ca7b55716162d6efd8ed2efe06",
      "hash_version": "canonical-json-sorted-v1"
    }
  },
  "scores_match_endpoint": true,
  "mismatch": [],
  "new_dates_vs_journal": [
    "2026-11-16"
  ],
  "scored_records": [
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "71",
        "43",
        "23"
      ],
      "matches": [
        "23"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": [
          "23"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "43",
        "80"
      ],
      "matches": [
        "85"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": [
          "85"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "78",
        "26",
        "65"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "96",
        "11",
        "64"
      ],
      "matches": [
        "96",
        "11",
        "64"
      ],
      "distinct": 3,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [
          "96"
        ],
        "Kiên Giang": [
          "11",
          "64"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "gap",
      "top3": [
        "30",
        "71",
        "94"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "04",
        "52",
        "10"
      ],
      "matches": [
        "52"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [
          "52"
        ],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "479",
        "568",
        "171"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "443",
        "286",
        "582"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "796",
        "478",
        "582"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "745",
        "064",
        "478"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "gap",
      "top3": [
        "171",
        "354",
        "788"
      ],
      "matches": [
        "788"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [
          "788"
        ],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "152",
        "480",
        "004"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "53",
        "12",
        "34"
      ],
      "matches": [
        "12"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": [
          "12"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "53"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "66",
        "21",
        "42"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "90",
        "48",
        "91"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "479",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "697"
      ],
      "matches": [
        "697"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": [
          "697"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "964"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "620",
        "916",
        "556"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "14",
        "42",
        "35"
      ],
      "matches": [
        "42"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "42"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "13",
        "56",
        "37"
      ],
      "matches": [
        "13"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "13"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "13",
        "37",
        "47"
      ],
      "matches": [
        "13"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "13"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "14",
        "37",
        "69"
      ],
      "matches": [
        "69"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [
          "69"
        ],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "gap",
      "top3": [
        "80",
        "30",
        "64"
      ],
      "matches": [
        "30"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "30"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "07",
        "58",
        "62"
      ],
      "matches": [
        "62"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [
          "62"
        ],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "435",
        "717",
        "014"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "765",
        "285",
        "337"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "285",
        "517",
        "947"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "014",
        "551",
        "285"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "gap",
      "top3": [
        "932",
        "636",
        "733"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "007",
        "058",
        "408"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "91"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "53",
        "04",
        "92"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "matches": [
        "34"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "34"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "53",
        "34",
        "75"
      ],
      "matches": [
        "34"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "34"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [
        "15"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "15"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "12",
        "99",
        "00"
      ],
      "matches": [
        "12"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "12"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "479",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "434",
        "724",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "492"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "712",
        "479",
        "562"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "21",
        "69"
      ],
      "matches": [
        "22"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "22"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "08",
        "59",
        "16"
      ],
      "matches": [
        "16"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "16"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "58",
        "67",
        "42"
      ],
      "matches": [
        "58"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": [
          "58"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "38",
        "22",
        "21"
      ],
      "matches": [
        "22"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "22"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "gap",
      "top3": [
        "87",
        "44",
        "12"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "83",
        "04",
        "88"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "131",
        "777",
        "302"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "108",
        "023",
        "416"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "108",
        "052",
        "638"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "395",
        "638",
        "023"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "gap",
      "top3": [
        "063",
        "403",
        "101"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "015",
        "023",
        "225"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "91"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "90",
        "34",
        "56"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "52"
      ],
      "matches": [
        "24"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "24"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "53",
        "34",
        "75"
      ],
      "matches": [
        "53"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "53"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "92",
        "01",
        "91"
      ],
      "matches": [
        "01",
        "91"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "01",
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "724",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "434",
        "724",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "492"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "601",
        "492",
        "532"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "95",
        "13",
        "14"
      ],
      "matches": [
        "95"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "95"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "86",
        "13",
        "24"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "86",
        "54",
        "85"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "13",
        "85",
        "54"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "gap",
      "top3": [
        "44",
        "11",
        "56"
      ],
      "matches": [
        "56"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "56"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "69",
        "70",
        "26"
      ],
      "matches": [
        "69",
        "26"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "69",
          "26"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "895",
        "305",
        "359"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "895",
        "013",
        "638"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "895",
        "786",
        "742"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "895",
        "586",
        "913"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "gap",
      "top3": [
        "359",
        "171",
        "420"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "975",
        "895",
        "013"
      ],
      "matches": [
        "975"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "975"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "92",
        "91"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "92",
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "34",
        "90",
        "10"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "88"
      ],
      "matches": [
        "24"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "24"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "75",
        "53"
      ],
      "matches": [
        "53"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "53"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "60",
        "93",
        "79"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "724",
        "434",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "724",
        "434",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "697"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "724",
        "676",
        "910"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    }
  ],
  "cumulative": [
    {
      "region": "MN",
      "digits": 2,
      "method": "frequency",
      "n": 4,
      "hits": 4,
      "distinct": [
        0,
        4,
        0,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent10",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        3,
        0,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent20",
      "n": 4,
      "hits": 2,
      "distinct": [
        2,
        2,
        0,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent50",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        2,
        0,
        1
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "gap",
      "n": 4,
      "hits": 2,
      "distinct": [
        2,
        2,
        0,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "repeat",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        2,
        1,
        0
      ],
      "uniform_sum": 2.6706431663574524
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "frequency",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent10",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent20",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent50",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "gap",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "repeat",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 0.38063586030920715
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "frequency",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        2,
        1,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent10",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent20",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        3,
        0,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent50",
      "n": 4,
      "hits": 3,
      "distinct": [
        1,
        3,
        0,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "gap",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "repeat",
      "n": 4,
      "hits": 2,
      "distinct": [
        2,
        1,
        1,
        0
      ],
      "uniform_sum": 2.277674706246135
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "frequency",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent10",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent20",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent50",
      "n": 4,
      "hits": 1,
      "distinct": [
        3,
        1,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "gap",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "repeat",
      "n": 4,
      "hits": 0,
      "distinct": [
        4,
        0,
        0,
        0
      ],
      "uniform_sum": 0.2642260376609076
    }
  ],
  "pending_today": [
    "TP. HCM",
    "Đồng Tháp",
    "Cà Mau",
    "XSMB"
  ],
  "research_no_verified_lock_dates": [
    "2026-11-14",
    "2026-11-15"
  ],
  "Brier": "N/A: rank-only methods",
  "new_hypotheses": 0,
  "windows_today": [
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "80",
        "30"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "21",
        "33",
        "87"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "52",
        "99"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "06",
        "65"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "11",
        "40"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "452",
        "044",
        "086"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "446",
        "986"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "gap",
      "top3": [
        "430",
        "622",
        "229"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "311",
        "433",
        "652"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "01",
        "58",
        "19"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "33",
        "21",
        "99"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "99",
        "80",
        "21"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "06",
        "65"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "43",
        "11"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "086",
        "901",
        "044"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "187",
        "446"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "gap",
      "top3": [
        "901",
        "290",
        "622"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "412",
        "462",
        "500"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "19",
        "30",
        "43"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "33",
        "21",
        "92"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "52",
        "80",
        "99"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "65",
        "06"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "43",
        "40"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "044",
        "430",
        "901"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "063",
        "187"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "gap",
      "top3": [
        "430",
        "901",
        "089"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "052",
        "178",
        "309"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "42",
        "37"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "87",
        "59"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "gap",
      "top3": [
        "64",
        "04",
        "06"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "62"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "342",
        "037",
        "104"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "949",
        "452",
        "765"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "949",
        "986",
        "393"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "285"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "gap",
      "top3": [
        "342",
        "104",
        "044"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "949",
        "662"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "42",
        "94",
        "22"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "36",
        "87"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "gap",
      "top3": [
        "94",
        "64",
        "06"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "62"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "158",
        "044",
        "086"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "485",
        "452",
        "056"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "393",
        "736",
        "949"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "285"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "gap",
      "top3": [
        "044",
        "086",
        "132"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "662",
        "949"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "42",
        "94",
        "78"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "36",
        "87"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "gap",
      "top3": [
        "94",
        "64",
        "06"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "26"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "773",
        "494",
        "716"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "485",
        "987",
        "056"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "393",
        "765",
        "986"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "662"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "gap",
      "top3": [
        "773",
        "494",
        "716"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "426",
        "662"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "gap",
      "top3": [
        "67",
        "32",
        "68"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "52",
        "50"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "680",
        "086",
        "122"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "051"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "163",
        "980"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "086",
        "122"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "193",
        "452"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "051",
        "311",
        "500"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "01",
        "92",
        "50"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "gap",
      "top3": [
        "68",
        "67",
        "76"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "50",
        "21"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "901",
        "038",
        "639"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "294"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "980",
        "163"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "980",
        "122"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "gap",
      "top3": [
        "901",
        "639",
        "922"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "462",
        "500",
        "650"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "50",
        "68"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "gap",
      "top3": [
        "68",
        "67",
        "76"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "50",
        "52"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "175",
        "543",
        "592"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "294"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "163",
        "980"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "162",
        "284"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "gap",
      "top3": [
        "543",
        "592",
        "901"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "252",
        "311",
        "462"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "52",
        "14",
        "91"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "93"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "06"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "gap",
      "top3": [
        "21",
        "66",
        "42"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "83",
        "80",
        "23"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "697",
        "114",
        "150"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "606",
        "517"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "gap",
      "top3": [
        "150",
        "294",
        "691"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "582",
        "123"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "13",
        "32",
        "90"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "26"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "gap",
      "top3": [
        "21",
        "66",
        "42"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "25",
        "83",
        "23"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "662",
        "697",
        "053"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "568",
        "606"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "gap",
      "top3": [
        "662",
        "432",
        "572"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "645",
        "225"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "26"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "gap",
      "top3": [
        "66",
        "21",
        "42"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "25",
        "83",
        "23"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "697"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "479",
        "190"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "964"
      ],
      "complete": false,
      "matches": null
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "438",
        "645"
      ],
      "complete": false,
      "matches": null
    }
  ],
  "mn_stage": "waiting",
  "mb_stage": "waiting",
  "mn_to_mb": "No new candidate fixed or alert issued; retain prior research without inventing predictive evidence.",
  "status": {
    "lastCheck": "2026-11-16T09:36:19.675Z",
    "draws": 29,
    "errors": [],
    "latestDate": "2026-11-15",
    "forecastsSaved": [],
    "pending": [
      "TP. HCM",
      "Đồng Tháp",
      "Cà Mau",
      "XSMB"
    ],
    "message": "Đang chờ bảng đủ giải của ngày hôm nay.",
    "central": {
      "lastCheck": "2026-11-16T09:36:58.943Z",
      "errors": [],
      "saved": [],
      "latestDate": "2026-11-15",
      "pending": [
        "Phú Yên",
        "Huế"
      ]
    }
  }
}
```


## Lượt tối 16/11/2026 — chấm MN và MB riêng
POST update, GET status/data/tracking thành công. Quyền custom owner-only giữ nguyên. Chỉ hash ngày mới hoặc sửa được thêm vào sổ; các tổng hợp dưới đây là trạng thái tích lũy thay thế, không cộng lại kỳ cũ. Số max trong lượt chiều bị tạo khóa ngày rỗng khi kiểm tra lịch; dữ liệu thật lúc đó đến15/11, lần này max lấy trực tiếp bảng thật.
Đối chiếu bản khóa sáng16/11 trong phiên bản13 với kết quả thật, đủ sáu công thức/2–3số và ba cửa sổ/từng đài/cặp/MB. Giữ nguyên bản khóa. MB total50 chấm riêng. Không xác nhận được cảnh báo MN→MB lưu trước18h trong nhật ký nên không tái tạo cảnh báo sau quay. Không thêm giả thuyết hoặc tối ưu; tổng thử nghiệm giữ nguyên. Chưa đủ mẫu để kết luận vượt đối chứng; Brier N/A cho phương pháp chỉ xếp hạng.
480vị trí lịch sử vẫn cần phân loại. Kiểm tra JSON theo độ dài chưa thay đối chiếu từng giải HTML. Theo dõi tiếp tương lai đúng PROTOCOL; không dừng sớm.

```json
{
  "rows": 7574,
  "min": "2021-11-10",
  "max": "2026-11-16",
  "bad": [],
  "duplicates": [],
  "leading_zero_values": 15241,
  "recent": {
    "2026-11-16": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Cà Mau": "ffdc87cc2106ec5f973b17da39c57c51fa3349f072e8bea2171278b53b6c944e",
        "Đồng Tháp": "28b1cbd883b0656af08ba6e7c6b74d219b47fd049168bade9e5242095c6c473a",
        "TP. HCM": "3ba617bab52824ec26723ddccf38f50e3e8d81409c3aecd1fe0e32b324a93245",
        "XSMB": "25c46cc94e41aeeaaa651d3def1da2d6f78479a3f78ebd6d8f23a7680ebb0591"
      },
      "MN": "f1ab729d245965edb7ac774a44d66896baff81dc7b0829f3df23ca7162f19ca7",
      "MB": "25c46cc94e41aeeaaa651d3def1da2d6f78479a3f78ebd6d8f23a7680ebb0591",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-15": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Đà Lạt": "67a44e14bbea2d0d1873415e7d07f2ca6228592c33ae1ada6587d37e0e3268aa",
        "Kiên Giang": "0ce9bc69fdafb845825ff0e6cb73348cf4d822b824ce233443d1fd303a3676d0",
        "Tiền Giang": "cdff9e39b7b43594122ebf9f71f6990ae2b740533d39f09bfaf1b89f6038d6d0",
        "XSMB": "fbfd32cbd8f8d832478098ebbab784b6dca6381fd78211f04c7811848b4dfe92"
      },
      "MN": "b6437f042687fdd2cdc8a105bd6a34293c80f6cb5a98445ebf288aa495a0a587",
      "MB": "fbfd32cbd8f8d832478098ebbab784b6dca6381fd78211f04c7811848b4dfe92",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-14": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bình Phước": "bf35f2fb1fb388c85eade0205052c61e619b681f2c5d600c8c769f5c6ee6672f",
        "Hậu Giang": "7e8ac0349b5cab9dc7bd3fa222fad6efee1fefe4ab1a0cd4b61ed88e26433128",
        "Long An": "af136f5152505cf0731b62bb4c5dcef68e2db07b91d210dbecc78f1c18c0374c",
        "TP. HCM": "2087883ef36ff16b310c248446f4e6d350db3002c7708d470752fbfc9dc6bbd2",
        "XSMB": "cefe2d9e32ddb1628e2250a6038d9b0609a80d2585ea6ef016ef661746f43837"
      },
      "MN": "5c720bdcd759f12ff92577ca159f53e4adeb6ba3586d20c7cdcc7021a1c6d841",
      "MB": "cefe2d9e32ddb1628e2250a6038d9b0609a80d2585ea6ef016ef661746f43837",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-13": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bình Dương": "37c45a0696afbbc58bc67eade06123fa042f4084cbe0e6bd9c7c24cec7d85f2f",
        "Trà Vinh": "475c76158a326be94df532df075a77c8926b0a12bc45ce562130846410145f18",
        "Vĩnh Long": "ddc873c9b561e933ad3cbfe22a03c348ab493afe60565baab8ec1bf1575c1a95",
        "XSMB": "df3b261f2afb02985ad531ace3bf40e380e6b173b4bd030b1dafae0caa6ae28c"
      },
      "MN": "b92e62f535ba1ab5a07d2788c2b0906967a24f67893489cb0c7240a5de24503e",
      "MB": "df3b261f2afb02985ad531ace3bf40e380e6b173b4bd030b1dafae0caa6ae28c",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-12": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "An Giang": "3b4bee59aefca30852df2ab7badfa2ad228ccd8d77d1f1133a5e7873530b1d58",
        "Bình Thuận": "d8acbe5c4436be08cdbe72c5a4d3f67e87f488250d48e30eb3c1e0a8982c6412",
        "Tây Ninh": "c37e45e9e024079fa3e3dbbd086a56301e453232ae6bb8f1113c9fd937cb182f",
        "XSMB": "7b919c0f868022006aa80eb2e46e177dc200187feb163739f0cf87d8b92c385b"
      },
      "MN": "df64d7c9dc1e8a10f3e85a7c165f3afe4fffea23c74c2bcfc4ed348888fff862",
      "MB": "7b919c0f868022006aa80eb2e46e177dc200187feb163739f0cf87d8b92c385b",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-11": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Cần Thơ": "2dd025e23c57d040e8a12e4e0ceacec233fe21b884099cff04a648d2ff0dd2fb",
        "Đồng Nai": "292d5f9417f69d32ac2b0a62bc9634a2a8bce78b00904849d01637711c583f4e",
        "Sóc Trăng": "c61b057d7f256e5c669dd92252fb3e34a283458c23aebd9bb56a80d31849f857",
        "XSMB": "d4c5d811b43d8e12326f4d88caa74747eb889e542de1c814109068ae13b35af7"
      },
      "MN": "f7c98168867ebf614f0c071279e9c63feb6d8c1c41acfad592fef8de676a66eb",
      "MB": "d4c5d811b43d8e12326f4d88caa74747eb889e542de1c814109068ae13b35af7",
      "hash_version": "canonical-json-sorted-v1"
    },
    "2026-11-10": {
      "missing": [],
      "complete": true,
      "station_hashes": {
        "Bạc Liêu": "f1c10fc29dd6119aefeb8d1207405c363001e5274920f7bbd8785d748f6bb5c6",
        "Bến Tre": "7eccefecd74e34b9254c5743663cc9c9921f1677a8ec07fc3dd66ecf9906e006",
        "Vũng Tàu": "dfe93281adea01145edf4ee6fcf8d1e649a7551a014c2ad8f504ade24d0ed479",
        "XSMB": "bcc33c53569afd5e887fd3c9b4721a4c625733ca7b55716162d6efd8ed2efe06"
      },
      "MN": "eb067ac5a67694f5448820dcc287418c9da6ecfdc9f90409026b9e43a71bb503",
      "MB": "bcc33c53569afd5e887fd3c9b4721a4c625733ca7b55716162d6efd8ed2efe06",
      "hash_version": "canonical-json-sorted-v1"
    }
  },
  "scores_match_endpoint": true,
  "mismatch": [],
  "new_dates_vs_journal": [
    "2026-11-16"
  ],
  "scored_records": [
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "19",
        "30",
        "43"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "33",
        "21",
        "92"
      ],
      "matches": [
        "21"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": [
          "21"
        ]
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "52",
        "80",
        "99"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "matches": [
        "22"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "TP. HCM": [
          "22"
        ],
        "Đồng Tháp": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "65",
        "06"
      ],
      "matches": [
        "65",
        "06"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "TP. HCM": [
          "65"
        ],
        "Đồng Tháp": [
          "65",
          "06"
        ]
      },
      "both": [
        "65"
      ],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "43",
        "40"
      ],
      "matches": [
        "40"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": [
          "40"
        ]
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "044",
        "430",
        "901"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "063",
        "187"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "matches": [
        "086"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.09586166326647294,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": [
          "086"
        ]
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 3,
      "method": "gap",
      "top3": [
        "430",
        "901",
        "089"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM + Đồng Tháp",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "052",
        "178",
        "309"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "TP. HCM": [],
        "Đồng Tháp": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-09"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "91"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "26"
      ],
      "matches": [
        "12",
        "26"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "12",
          "26"
        ]
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "53"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "66",
        "21",
        "42"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "25",
        "83",
        "23"
      ],
      "matches": [
        "23"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "23"
        ]
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "697"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "479",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "964"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "438",
        "645"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-16T01:54:16.842Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-15"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "71",
        "43",
        "23"
      ],
      "matches": [
        "23"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": [
          "23"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "43",
        "80"
      ],
      "matches": [
        "85"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": [
          "85"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "78",
        "26",
        "65"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "96",
        "11",
        "64"
      ],
      "matches": [
        "96",
        "11",
        "64"
      ],
      "distinct": 3,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [
          "96"
        ],
        "Kiên Giang": [
          "11",
          "64"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "gap",
      "top3": [
        "30",
        "71",
        "94"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "04",
        "52",
        "10"
      ],
      "matches": [
        "52"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6900680272108843,
      "by_member": {
        "Tiền Giang": [
          "52"
        ],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "479",
        "568",
        "171"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "443",
        "286",
        "582"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "796",
        "478",
        "582"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "745",
        "064",
        "478"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "gap",
      "top3": [
        "171",
        "354",
        "788"
      ],
      "matches": [
        "788"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [
          "788"
        ],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang + Kiên Giang",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "152",
        "480",
        "004"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tiền Giang": [],
        "Kiên Giang": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-08"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "53",
        "12",
        "34"
      ],
      "matches": [
        "12"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": [
          "12"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "53"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "66",
        "21",
        "42"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "90",
        "48",
        "91"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5476190476190477,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "479",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "697"
      ],
      "matches": [
        "697"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": [
          "697"
        ]
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "964"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "620",
        "916",
        "556"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-15T05:33:55.283Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-14"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "14",
        "42",
        "35"
      ],
      "matches": [
        "42"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "42"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "13",
        "56",
        "37"
      ],
      "matches": [
        "13"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "13"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "13",
        "37",
        "47"
      ],
      "matches": [
        "13"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "13"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "14",
        "37",
        "69"
      ],
      "matches": [
        "69"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [
          "69"
        ],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "gap",
      "top3": [
        "80",
        "30",
        "64"
      ],
      "matches": [
        "30"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [],
        "Long An": [
          "30"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "07",
        "58",
        "62"
      ],
      "matches": [
        "62"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.7037414965986395,
      "by_member": {
        "TP. HCM": [
          "62"
        ],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "435",
        "717",
        "014"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "765",
        "285",
        "337"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "285",
        "517",
        "947"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "014",
        "551",
        "285"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "gap",
      "top3": [
        "932",
        "636",
        "733"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM + Long An",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "007",
        "058",
        "408"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09305087050978833,
      "by_member": {
        "TP. HCM": [],
        "Long An": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-07"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "91"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "53",
        "04",
        "92"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "matches": [
        "34"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "34"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "53",
        "34",
        "75"
      ],
      "matches": [
        "34"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "34"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [
        "15"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "15"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "12",
        "99",
        "00"
      ],
      "matches": [
        "12"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "12"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "479",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "434",
        "724",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "492"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "712",
        "479",
        "562"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06749113843302224,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T17:32:26.207Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-13"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "21",
        "69"
      ],
      "matches": [
        "22"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "22"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "08",
        "59",
        "16"
      ],
      "matches": [
        "16"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "16"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "58",
        "67",
        "42"
      ],
      "matches": [
        "58"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": [
          "58"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "38",
        "22",
        "21"
      ],
      "matches": [
        "22"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [
          "22"
        ],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "gap",
      "top3": [
        "87",
        "44",
        "12"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "83",
        "04",
        "88"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6153617810760668,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "131",
        "777",
        "302"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "108",
        "023",
        "416"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "108",
        "052",
        "638"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "395",
        "638",
        "023"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "gap",
      "top3": [
        "063",
        "403",
        "101"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "Vĩnh Long + Bình Dương",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "015",
        "023",
        "225"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Vĩnh Long": [],
        "Bình Dương": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-06"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "91"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "90",
        "34",
        "56"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "52"
      ],
      "matches": [
        "24"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "24"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "53",
        "34",
        "75"
      ],
      "matches": [
        "53"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "53"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "92",
        "01",
        "91"
      ],
      "matches": [
        "01",
        "91"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.5652442795299939,
      "by_member": {
        "XSMB": [
          "01",
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "434",
        "724",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "434",
        "724",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "492"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-13",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "601",
        "492",
        "532"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-13T00:31:21.941Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-12"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "95",
        "13",
        "14"
      ],
      "matches": [
        "95"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "95"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "86",
        "13",
        "24"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "86",
        "54",
        "85"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "13",
        "85",
        "54"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "gap",
      "top3": [
        "44",
        "11",
        "56"
      ],
      "matches": [
        "56"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "56"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "69",
        "70",
        "26"
      ],
      "matches": [
        "69",
        "26"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.6614718614718615,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "69",
          "26"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "895",
        "305",
        "359"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "895",
        "013",
        "638"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "895",
        "786",
        "742"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "895",
        "586",
        "913"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "gap",
      "top3": [
        "359",
        "171",
        "420"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "Tây Ninh + An Giang",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "975",
        "895",
        "013"
      ],
      "matches": [
        "975"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.09586166326647294,
      "by_member": {
        "Tây Ninh": [],
        "An Giang": [
          "975"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "pair-six-v1",
      "input_through": "2026-11-05"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "92",
        "91"
      ],
      "distinct": 2,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "92",
          "91"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent10",
      "top3": [
        "34",
        "90",
        "10"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "88"
      ],
      "matches": [
        "24"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "24"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "75",
        "53"
      ],
      "matches": [
        "53"
      ],
      "distinct": 1,
      "hit": 1,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": [
          "53"
        ]
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "gap",
      "top3": [
        "15",
        "21",
        "66"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 2,
      "method": "repeat",
      "top3": [
        "60",
        "93",
        "79"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.5824056895485468,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "572"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent10",
      "top3": [
        "724",
        "434",
        "190"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent20",
      "top3": [
        "724",
        "434",
        "452"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "724",
        "697"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "294"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    },
    {
      "date": "2026-11-12",
      "station": "XSMB",
      "digits": 3,
      "method": "repeat",
      "top3": [
        "724",
        "676",
        "910"
      ],
      "matches": [],
      "distinct": 0,
      "hit": 0,
      "uniform": 0.06462188039743155,
      "by_member": {
        "XSMB": []
      },
      "both": [],
      "createdAt": "2026-11-12T02:08:37.581Z",
      "version": "six-methods-v1",
      "input_through": "2026-11-11"
    }
  ],
  "cumulative": [
    {
      "region": "MN",
      "digits": 2,
      "method": "frequency",
      "n": 5,
      "hits": 4,
      "distinct": [
        1,
        4,
        0,
        0
      ],
      "uniform_sum": 3.332115027829314,
      "wilson95_descriptive": [
        0.3755346297625348,
        0.9637758913675682
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent10",
      "n": 5,
      "hits": 4,
      "distinct": [
        1,
        4,
        0,
        0
      ],
      "uniform_sum": 3.332115027829314,
      "wilson95_descriptive": [
        0.3755346297625348,
        0.9637758913675682
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent20",
      "n": 5,
      "hits": 2,
      "distinct": [
        3,
        2,
        0,
        0
      ],
      "uniform_sum": 3.332115027829314,
      "wilson95_descriptive": [
        0.11762077423265177,
        0.7692757187239805
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "recent50",
      "n": 5,
      "hits": 4,
      "distinct": [
        1,
        3,
        0,
        1
      ],
      "uniform_sum": 3.332115027829314,
      "wilson95_descriptive": [
        0.3755346297625348,
        0.9637758913675682
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "gap",
      "n": 5,
      "hits": 3,
      "distinct": [
        2,
        2,
        1,
        0
      ],
      "uniform_sum": 3.332115027829314,
      "wilson95_descriptive": [
        0.23072428127601946,
        0.8823792257673482
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 2,
      "method": "repeat",
      "n": 5,
      "hits": 4,
      "distinct": [
        1,
        3,
        1,
        0
      ],
      "uniform_sum": 3.332115027829314,
      "wilson95_descriptive": [
        0.3755346297625348,
        0.9637758913675682
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "frequency",
      "n": 5,
      "hits": 0,
      "distinct": [
        5,
        0,
        0,
        0
      ],
      "uniform_sum": 0.4764975235756801,
      "wilson95_descriptive": [
        5.551115123125783e-17,
        0.4344824647831612
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent10",
      "n": 5,
      "hits": 0,
      "distinct": [
        5,
        0,
        0,
        0
      ],
      "uniform_sum": 0.4764975235756801,
      "wilson95_descriptive": [
        5.551115123125783e-17,
        0.4344824647831612
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent20",
      "n": 5,
      "hits": 0,
      "distinct": [
        5,
        0,
        0,
        0
      ],
      "uniform_sum": 0.4764975235756801,
      "wilson95_descriptive": [
        5.551115123125783e-17,
        0.4344824647831612
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "recent50",
      "n": 5,
      "hits": 1,
      "distinct": [
        4,
        1,
        0,
        0
      ],
      "uniform_sum": 0.4764975235756801,
      "wilson95_descriptive": [
        0.036224108632431695,
        0.6244653702374652
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "gap",
      "n": 5,
      "hits": 1,
      "distinct": [
        4,
        1,
        0,
        0
      ],
      "uniform_sum": 0.4764975235756801,
      "wilson95_descriptive": [
        0.036224108632431695,
        0.6244653702374652
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MN",
      "digits": 3,
      "method": "repeat",
      "n": 5,
      "hits": 1,
      "distinct": [
        4,
        1,
        0,
        0
      ],
      "uniform_sum": 0.4764975235756801,
      "wilson95_descriptive": [
        0.036224108632431695,
        0.6244653702374652
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "frequency",
      "n": 5,
      "hits": 4,
      "distinct": [
        1,
        3,
        1,
        0
      ],
      "uniform_sum": 2.8429189857761292,
      "wilson95_descriptive": [
        0.3755346297625348,
        0.9637758913675682
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent10",
      "n": 5,
      "hits": 2,
      "distinct": [
        3,
        1,
        1,
        0
      ],
      "uniform_sum": 2.8429189857761292,
      "wilson95_descriptive": [
        0.11762077423265177,
        0.7692757187239805
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent20",
      "n": 5,
      "hits": 3,
      "distinct": [
        2,
        3,
        0,
        0
      ],
      "uniform_sum": 2.8429189857761292,
      "wilson95_descriptive": [
        0.23072428127601946,
        0.8823792257673482
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "recent50",
      "n": 5,
      "hits": 3,
      "distinct": [
        2,
        3,
        0,
        0
      ],
      "uniform_sum": 2.8429189857761292,
      "wilson95_descriptive": [
        0.23072428127601946,
        0.8823792257673482
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "gap",
      "n": 5,
      "hits": 1,
      "distinct": [
        4,
        1,
        0,
        0
      ],
      "uniform_sum": 2.8429189857761292,
      "wilson95_descriptive": [
        0.036224108632431695,
        0.6244653702374652
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 2,
      "method": "repeat",
      "n": 5,
      "hits": 3,
      "distinct": [
        2,
        2,
        1,
        0
      ],
      "uniform_sum": 2.8429189857761292,
      "wilson95_descriptive": [
        0.23072428127601946,
        0.8823792257673482
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "frequency",
      "n": 5,
      "hits": 0,
      "distinct": [
        5,
        0,
        0,
        0
      ],
      "uniform_sum": 0.3317171760939298,
      "wilson95_descriptive": [
        5.551115123125783e-17,
        0.4344824647831612
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent10",
      "n": 5,
      "hits": 0,
      "distinct": [
        5,
        0,
        0,
        0
      ],
      "uniform_sum": 0.3317171760939298,
      "wilson95_descriptive": [
        5.551115123125783e-17,
        0.4344824647831612
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent20",
      "n": 5,
      "hits": 0,
      "distinct": [
        5,
        0,
        0,
        0
      ],
      "uniform_sum": 0.3317171760939298,
      "wilson95_descriptive": [
        5.551115123125783e-17,
        0.4344824647831612
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "recent50",
      "n": 5,
      "hits": 1,
      "distinct": [
        4,
        1,
        0,
        0
      ],
      "uniform_sum": 0.3317171760939298,
      "wilson95_descriptive": [
        0.036224108632431695,
        0.6244653702374652
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "gap",
      "n": 5,
      "hits": 0,
      "distinct": [
        5,
        0,
        0,
        0
      ],
      "uniform_sum": 0.3317171760939298,
      "wilson95_descriptive": [
        5.551115123125783e-17,
        0.4344824647831612
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    },
    {
      "region": "MB",
      "digits": 3,
      "method": "repeat",
      "n": 5,
      "hits": 0,
      "distinct": [
        5,
        0,
        0,
        0
      ],
      "uniform_sum": 0.3317171760939298,
      "wilson95_descriptive": [
        5.551115123125783e-17,
        0.4344824647831612
      ],
      "limitation": "Very few draws; interval assumes independent days; no edge established."
    }
  ],
  "pending_today": [],
  "research_no_verified_lock_dates": [
    "2026-11-14",
    "2026-11-15"
  ],
  "Brier": "N/A: rank-only methods",
  "new_hypotheses": 0,
  "windows_today": [
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "80",
        "30"
      ],
      "complete": true,
      "matches": [
        "22"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "21",
        "33",
        "87"
      ],
      "complete": true,
      "matches": [
        "21"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "52",
        "99"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "complete": true,
      "matches": [
        "22"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "06",
        "65"
      ],
      "complete": true,
      "matches": [
        "06",
        "65"
      ],
      "distinct": 2
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "11",
        "40"
      ],
      "complete": true,
      "matches": [
        "40"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "452",
        "044",
        "086"
      ],
      "complete": true,
      "matches": [
        "086"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "446",
        "986"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "complete": true,
      "matches": [
        "086"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "gap",
      "top3": [
        "430",
        "622",
        "229"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "311",
        "433",
        "652"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "01",
        "58",
        "19"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "33",
        "21",
        "99"
      ],
      "complete": true,
      "matches": [
        "21"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "99",
        "80",
        "21"
      ],
      "complete": true,
      "matches": [
        "21"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "complete": true,
      "matches": [
        "22"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "06",
        "65"
      ],
      "complete": true,
      "matches": [
        "06",
        "65"
      ],
      "distinct": 2
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "43",
        "11"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "086",
        "901",
        "044"
      ],
      "complete": true,
      "matches": [
        "086"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "187",
        "446"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "complete": true,
      "matches": [
        "086"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "gap",
      "top3": [
        "901",
        "290",
        "622"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "412",
        "462",
        "500"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "19",
        "30",
        "43"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "33",
        "21",
        "92"
      ],
      "complete": true,
      "matches": [
        "21"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "52",
        "80",
        "99"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "22",
        "80",
        "52"
      ],
      "complete": true,
      "matches": [
        "22"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "gap",
      "top3": [
        "25",
        "65",
        "06"
      ],
      "complete": true,
      "matches": [
        "65",
        "06"
      ],
      "distinct": 2
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "52",
        "43",
        "40"
      ],
      "complete": true,
      "matches": [
        "40"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "044",
        "430",
        "901"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "680",
        "063",
        "187"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "566",
        "452"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "452",
        "086",
        "680"
      ],
      "complete": true,
      "matches": [
        "086"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "gap",
      "top3": [
        "430",
        "901",
        "089"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "052",
        "178",
        "309"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "22",
        "42",
        "37"
      ],
      "complete": true,
      "matches": [
        "22"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "87",
        "59"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "complete": true,
      "matches": [
        "22",
        "53"
      ],
      "distinct": 2
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "gap",
      "top3": [
        "64",
        "04",
        "06"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "62"
      ],
      "complete": true,
      "matches": [
        "96"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "342",
        "037",
        "104"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "949",
        "452",
        "765"
      ],
      "complete": true,
      "matches": [
        "765"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "949",
        "986",
        "393"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "285"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "gap",
      "top3": [
        "342",
        "104",
        "044"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 1,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "949",
        "662"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "42",
        "94",
        "22"
      ],
      "complete": true,
      "matches": [
        "22"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "36",
        "87"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "complete": true,
      "matches": [
        "22",
        "53"
      ],
      "distinct": 2
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "gap",
      "top3": [
        "94",
        "64",
        "06"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "62"
      ],
      "complete": true,
      "matches": [
        "96"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "158",
        "044",
        "086"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "485",
        "452",
        "056"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "393",
        "736",
        "949"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "285"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "gap",
      "top3": [
        "044",
        "086",
        "132"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 3,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "662",
        "949"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "42",
        "94",
        "78"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "85",
        "87",
        "37"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "85",
        "36",
        "87"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "85",
        "22",
        "53"
      ],
      "complete": true,
      "matches": [
        "22",
        "53"
      ],
      "distinct": 2
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "gap",
      "top3": [
        "94",
        "64",
        "06"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "85",
        "96",
        "26"
      ],
      "complete": true,
      "matches": [
        "96"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "773",
        "494",
        "716"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "485",
        "987",
        "056"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "393",
        "765",
        "986"
      ],
      "complete": true,
      "matches": [
        "765"
      ],
      "distinct": 1
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "986",
        "037",
        "662"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "gap",
      "top3": [
        "773",
        "494",
        "716"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "TP. HCM",
      "years": 5,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "485",
        "426",
        "662"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "complete": true,
      "matches": [
        "21"
      ],
      "distinct": 1
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "gap",
      "top3": [
        "67",
        "32",
        "68"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "52",
        "50"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "680",
        "086",
        "122"
      ],
      "complete": true,
      "matches": [
        "086"
      ],
      "distinct": 1
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "051"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "163",
        "980"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "086",
        "122"
      ],
      "complete": true,
      "matches": [
        "086"
      ],
      "distinct": 1
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "193",
        "452"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 1,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "051",
        "311",
        "500"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "01",
        "92",
        "50"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "complete": true,
      "matches": [
        "21"
      ],
      "distinct": 1
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "gap",
      "top3": [
        "68",
        "67",
        "76"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "50",
        "21"
      ],
      "complete": true,
      "matches": [
        "21"
      ],
      "distinct": 1
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "901",
        "038",
        "639"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "294"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "980",
        "163"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "980",
        "122"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "gap",
      "top3": [
        "901",
        "639",
        "922"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 3,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "462",
        "500",
        "650"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "50",
        "68"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "92",
        "21",
        "33"
      ],
      "complete": true,
      "matches": [
        "21"
      ],
      "distinct": 1
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "80",
        "99",
        "52"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "80",
        "52",
        "50"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "gap",
      "top3": [
        "68",
        "67",
        "76"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "11",
        "50",
        "52"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "175",
        "543",
        "592"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "063",
        "680",
        "294"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "680",
        "163",
        "980"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "680",
        "162",
        "284"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "gap",
      "top3": [
        "543",
        "592",
        "901"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "Đồng Tháp",
      "years": 5,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "252",
        "311",
        "462"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "52",
        "14",
        "91"
      ],
      "complete": true,
      "matches": [
        "14",
        "91"
      ],
      "distinct": 2
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "93"
      ],
      "complete": true,
      "matches": [
        "12"
      ],
      "distinct": 1
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "34",
        "24",
        "06"
      ],
      "complete": true,
      "matches": [
        "06"
      ],
      "distinct": 1
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "gap",
      "top3": [
        "21",
        "66",
        "42"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "83",
        "80",
        "23"
      ],
      "complete": true,
      "matches": [
        "23"
      ],
      "distinct": 1
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "697",
        "114",
        "150"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "606",
        "517"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "gap",
      "top3": [
        "150",
        "294",
        "691"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 1,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "582",
        "123"
      ],
      "complete": true,
      "matches": [
        "123"
      ],
      "distinct": 1
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "13",
        "32",
        "90"
      ],
      "complete": true,
      "matches": [
        "32"
      ],
      "distinct": 1
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "26"
      ],
      "complete": true,
      "matches": [
        "12",
        "26"
      ],
      "distinct": 2
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "gap",
      "top3": [
        "21",
        "66",
        "42"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "25",
        "83",
        "23"
      ],
      "complete": true,
      "matches": [
        "23"
      ],
      "distinct": 1
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "662",
        "697",
        "053"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "568",
        "606"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "gap",
      "top3": [
        "662",
        "432",
        "572"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 3,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "645",
        "225"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "frequency",
      "top3": [
        "92",
        "13",
        "91"
      ],
      "complete": true,
      "matches": [
        "91"
      ],
      "distinct": 1
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "recent10",
      "top3": [
        "12",
        "72",
        "26"
      ],
      "complete": true,
      "matches": [
        "12",
        "26"
      ],
      "distinct": 2
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "recent20",
      "top3": [
        "24",
        "34",
        "53"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "recent50",
      "top3": [
        "34",
        "53",
        "75"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "gap",
      "top3": [
        "66",
        "21",
        "42"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 2,
      "method": "repeat",
      "top3": [
        "25",
        "83",
        "23"
      ],
      "complete": true,
      "matches": [
        "23"
      ],
      "distinct": 1
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "frequency",
      "top3": [
        "592",
        "662",
        "697"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "recent10",
      "top3": [
        "697",
        "479",
        "190"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "recent20",
      "top3": [
        "517",
        "434",
        "724"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "recent50",
      "top3": [
        "434",
        "697",
        "724"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "gap",
      "top3": [
        "592",
        "662",
        "964"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    },
    {
      "station": "XSMB",
      "years": 5,
      "digits": 3,
      "method": "repeat",
      "top3": [
        "697",
        "438",
        "645"
      ],
      "complete": true,
      "matches": [],
      "distinct": 0
    }
  ],
  "total50_today": {
    "total50": {
      "top3": [
        "75",
        "34",
        "53"
      ],
      "matches": []
    },
    "presence50": {
      "top3": [
        "34",
        "53",
        "75"
      ],
      "matches": []
    },
    "frequency1y": {
      "top3": [
        "52",
        "14",
        "91"
      ],
      "matches": [
        "14",
        "91"
      ]
    },
    "frequency3y": {
      "top3": [
        "13",
        "32",
        "90"
      ],
      "matches": [
        "32"
      ]
    },
    "frequency5y": {
      "top3": [
        "92",
        "13",
        "91"
      ],
      "matches": [
        "91"
      ]
    }
  },
  "mn_stage": "complete",
  "mb_stage": "complete",
  "status": {
    "lastCheck": "2026-11-16T14:21:28.542Z",
    "draws": 29,
    "errors": [],
    "latestDate": "2026-11-16",
    "forecastsSaved": [],
    "pending": [],
    "message": "Đã đủ bảng của ngày hôm nay.",
    "central": {
      "lastCheck": "2026-11-16T14:21:56.063Z",
      "errors": [],
      "saved": [],
      "latestDate": "2026-11-16",
      "pending": []
    }
  },
  "mn_to_mb": {
    "alert_before18h_verified": false,
    "reason": "No locked candidate found in current journal; after18h do not reconstruct an alert."
  },
  "windows_main_paired_today": [
    {
      "station": "TP. HCM + Đồng Tháp",
      "comparison": "1 vs5",
      "n_added": 1,
      "hit_difference": 0,
      "inference": "Single new paired day; no efficacy conclusion or early stopping."
    },
    {
      "station": "TP. HCM + Đồng Tháp",
      "comparison": "3 vs5",
      "n_added": 1,
      "hit_difference": -1,
      "inference": "Single new paired day; no efficacy conclusion or early stopping."
    },
    {
      "station": "XSMB",
      "comparison": "1 vs5",
      "n_added": 1,
      "hit_difference": 0,
      "inference": "Single new paired day; no efficacy conclusion or early stopping."
    },
    {
      "station": "XSMB",
      "comparison": "3 vs5",
      "n_added": 1,
      "hit_difference": 0,
      "inference": "Single new paired day; no efficacy conclusion or early stopping."
    }
  ]
}
```
