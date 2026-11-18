# XO_SO_MR_AN_NHAT_KY_NGHIEN_CUU

## Trạng thái hiện hành — 11/11/2026

Nhật ký được khởi tạo lần đầu sau hai lượt tìm theo tên đầy đủ và tên rút gọn không thấy bản hiện hành. Không khẳng định các lượt cũ đã được ghi nhật ký. Lần này khởi tạo lại các tổng hợp hồi cứu từ kho hiện hành, đồng thời nhập các kết luận nghiên cứu đã có trong cuộc trao đổi.

- Site: appgprj_6af1d8d13b7c8191a45dca193e1823c3. URL: https://mr-an-thong-ke-xo-so.pariduly308.chatgpt.site. Quyền custom và các người xem được giữ nguyên; không gọi thay quyền, sửa mã hoặc xuất bản.

- Thuật toán sản phẩm: six-methods-v1, sáu công thức frequency/recent10/recent20/recent50/gap/repeat. Phiên bản đánh giá nội bộ: daily-audit-v1. Không áp dụng phương pháp mới.

- Thời điểm kiểm tra nguồn do endpoint trả: 2026-11-11T12:01:09.248Z = 19:01:09 ngày 11/11/2026 giờ Việt Nam; errors = []. POST /api/update thành công; GET /api/status, /data.json, /api/tracking thành công. Không có token trong nhật ký.

- Kho hiện hành: 7553 bảng, mới nhất 2026-11-11; 1.808 ngày có đủ mọi đài miền Nam theo lịch và XSMB. Đã kiểm tra thực tế đủ Cần Thơ, Đồng Nai, Sóc Trăng và XSMB ngày 11/11; không suy ra đủ ngày chỉ từ latestDate.

- So bản nghiên cứu đóng băng đến 09/11: thêm 8 bảng cho 10/11 và 11/11. Ngày 10/11 không có dự báo khóa trong /api/tracking, không tính thành dự báo đúng. Ngày 11/11 có bốn bản trước quay và đã chấm riêng.

- Dữ liệu hợp lệ về khóa đài/ngày, số bảng, số giải theo độ dài, chuỗi chữ số, số 0 đầu và lịch đài; không phát hiện trùng hay sai cấu trúc. Đây là kiểm tra kho, không tái tải đối chiếu từng bảng lịch sử với nguồn.

- Còn 20 ngày lịch sử thiếu XSMB, khớp các cụm dịp Tết; chưa đưa bằng chứng nghỉ chính thức vào nhật ký này nên vẫn để chờ xác minh, không coi tự động là ngày đủ và không tạo số thay thế. Các ngày mới 10/11 và 11/11 đều đủ.

## Kết luận lượt này

Vận hành cập nhật thành công và đã lưu kết quả chấm dự báo khóa. Chưa đủ mẫu dự báo thực tế để kết luận lợi thế hoặc thuật toán hoàn thiện: mỗi đài hiện chỉ một kỳ có bản khóa. Không đổi phần trăm hiển thị hoặc mô hình.

Ứng viên xác suất tần suất làm trơn prior 20 kỳ được đánh giá hồi cứu có Brier cao hơn mức đồng đều ở cả 44 tổ hợp đài × loại đuôi. Do vậy không dùng phép làm trơn này để tuyên bố xác suất chính xác hơn. Đây là phép kiểm tra tiếp nối, không phải phát hiện mô hình mới mỗi ngày.

## Quy tắc phân tích và chống chấm lại

- Lưu dấu vân tay từng ngày đủ trong phụ lục. Lượt sau chỉ xử lý ngày mới hoặc ngày có hash thay đổi; khi hash thay đổi, ghi bản sửa và lý do, tính lại các chỉ số lịch sử chịu ảnh hưởng nhưng giữ nguyên dự báo khóa gốc.

- Trước 10/11/2022: lịch sử ban đầu, chỉ kiểm tra chất lượng. Từ 10/11/2022 đến 11/11/2026: kiểm tra cuốn chiếu theo đài, mọi đặc trưng lấy trước ngày mục tiêu. Tổng hợp theo kỳ của từng đài sử dụng cả những bảng miền Nam hợp lệ thuộc ngày lịch sử chưa xác minh nghỉ Bắc; chúng không được đánh dấu là một ngày đủ cả nước.

- Mỗi số có mặt tối đa một lần cho hits; riêng repeat tính số lần xuất hiện. Đuôi 3 chỉ lấy giải có đủ ít nhất 3 chữ số. Miền Nam 18 vị trí cho 2 số, 17 cho 3 số; XSMB 27 và 23.

- Sáu phương pháp xếp hạng đúng mã app: frequency=hits; recent10/20/50=hits trong cửa sổ; gap=hits×min(khoảng vắng,20)/20; repeat=số lần ra kỳ liền trước; phá hòa hits giảm rồi số tăng. Top 3 từng đài, đạt nếu có ít nhất một số trong giải đài đó.

- Mốc đồng đều cho bộ ba: 1−(1−3/M)^K, M=100/1000 và K=số vị trí phù hợp; giả định các vị trí độc lập, đồng đều. Phép tính nội bộ có thêm đối chứng tổ hợp trên số khác nhau thực tế từng kỳ. Không gọi xác suất bộ ba là xác suất riêng một số.

- Xác suất từng số để đánh giá: p=(hits+20*p0)/(n+20), p0=1−(1−1/M)^K. Tham số 20 cố định, không tối ưu trên ngày kiểm tra. Brier tính trung bình trên các số trong mỗi kỳ, sau đó trung bình kỳ. Bins hiệu chỉnh chia 0,1,...,1. Khoảng bất định lấy mẫu lại theo tuần lịch 2.000 lần; không coi 100/1.000 số cùng kỳ là mẫu độc lập. Khoảng này mang tính mô tả, chưa hiệu chỉnh mọi thử nghiệm trước đây.

- Các năm bắt đầu ngày 10/11. Dòng năm 2026 mới gồm 10–11/11/2026, không so với một năm trọn vẹn. Không chọn phương pháp mới từ hai ngày này.

## Dự báo thực sự khóa trước quay ngày 11/11/2026

Đã kiểm tra createdAt trước 16:00 cho miền Nam, trước 18:00 cho Bắc và historyThrough < ngày quay. Đã tính lại kết quả từ bảng thật, khớp scores endpoint. Không thay dự báo đã lưu.

| Đài | Đuôi | frequency | recent10 | recent20 | recent50 | gap | repeat |

|---|---:|---|---|---|---|---|---|

| Cần Thơ | 2 | 86 | Không trúng | 96 | Không trúng | Không trúng | 43 |

| Cần Thơ | 3 | Không trúng | Không trúng | Không trúng | Không trúng | Không trúng | Không trúng |

| Sóc Trăng | 2 | 63 | Không trúng | Không trúng | 63 | Không trúng | Không trúng |

| Sóc Trăng | 3 | Không trúng | Không trúng | Không trúng | Không trúng | Không trúng | Không trúng |

| XSMB | 2 | Không trúng | 34 | 34, 24 | 34 | 80 | 68, 94, 14 |

| XSMB | 3 | Không trúng | 724 | 724 | 724 | Không trúng | Không trúng |

| Đồng Nai | 2 | Không trúng | Không trúng | Không trúng | Không trúng | 71 | Không trúng |

| Đồng Nai | 3 | Không trúng | Không trúng | Không trúng | Không trúng | Không trúng | Không trúng |

## Tổng hợp hồi cứu theo đài, tất cả kỳ chấm

Các cột sáu công thức là số kỳ đạt / n, không phải số dự báo thực tế đã khóa. Brier nhỏ hơn là tốt hơn.

| Đài | Đuôi | n | frequency | recent10 | recent20 | recent50 | gap | repeat | Mốc bộ 3 | Brier ứng viên | Brier đồng đều | CI95 chênh Brier |

|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|

| An Giang | 2 | 209 | 78 | 90 | 79 | 88 | 81 | 96 | 42.205% | 0.13925953 | 0.13849548 | [0.0005169135173484347, 0.0010297698342211367] |

| An Giang | 3 | 209 | 14 | 10 | 9 | 9 | 8 | 14 | 4.979% | 0.01670449 | 0.01660931 | [8.345743867122269e-05, 0.00010686365514237862] |

| Bình Dương | 2 | 209 | 93 | 90 | 83 | 85 | 92 | 90 | 42.205% | 0.13904249 | 0.13823939 | [0.0005363728079806958, 0.0010617961315682347] |

| Bình Dương | 3 | 209 | 10 | 9 | 13 | 7 | 7 | 13 | 4.979% | 0.01672426 | 0.01663242 | [8.058039178177367e-05, 0.00010302446506565597] |

| Bình Phước | 2 | 209 | 88 | 85 | 90 | 78 | 83 | 76 | 42.205% | 0.13841812 | 0.13775923 | [0.00038442656491831644, 0.000923972059458865] |

| Bình Phước | 3 | 209 | 9 | 6 | 5 | 9 | 13 | 6 | 4.979% | 0.01667260 | 0.01658157 | [7.84649008948134e-05, 0.00010336408624783256] |

| Bình Thuận | 2 | 209 | 84 | 87 | 86 | 88 | 87 | 88 | 42.205% | 0.13893225 | 0.13817537 | [0.0005048166865024665, 0.0010166767755558357] |

| Bình Thuận | 3 | 209 | 14 | 10 | 8 | 10 | 13 | 13 | 4.979% | 0.01669065 | 0.01660006 | [7.967522935611872e-05, 0.00010085199807952367] |

| Bạc Liêu | 2 | 209 | 98 | 99 | 112 | 103 | 81 | 87 | 42.205% | 0.13931567 | 0.13871956 | [0.00031010260924329083, 0.0008863030595330972] |

| Bạc Liêu | 3 | 209 | 15 | 15 | 15 | 16 | 10 | 9 | 4.979% | 0.01668684 | 0.01659544 | [7.974662933305564e-05, 0.00010257217491432258] |

| Bến Tre | 2 | 209 | 80 | 99 | 87 | 85 | 97 | 93 | 42.205% | 0.13675052 | 0.13638276 | [5.963569161773468e-05, 0.0006861205298261856] |

| Bến Tre | 3 | 209 | 7 | 12 | 12 | 11 | 15 | 9 | 4.979% | 0.01659006 | 0.01650759 | [7.061382463730253e-05, 9.523296559073062e-05] |

| Cà Mau | 2 | 209 | 90 | 89 | 92 | 79 | 94 | 84 | 42.205% | 0.13826657 | 0.13753515 | [0.0004633768428920506, 0.000991381506359234] |

| Cà Mau | 3 | 209 | 12 | 10 | 13 | 9 | 12 | 10 | 4.979% | 0.01667128 | 0.01657694 | [8.283238617158054e-05, 0.00010637807330883187] |

| Cần Thơ | 2 | 209 | 92 | 77 | 93 | 80 | 79 | 86 | 42.205% | 0.13962688 | 0.13887961 | [0.00046310333120950137, 0.001014923006323917] |

| Cần Thơ | 3 | 209 | 8 | 8 | 9 | 10 | 12 | 7 | 4.979% | 0.01671281 | 0.01661855 | [8.361027678994648e-05, 0.00010586531769573218] |

| Hậu Giang | 2 | 209 | 93 | 80 | 91 | 91 | 99 | 78 | 42.205% | 0.13938479 | 0.13865554 | [0.00048461408488004886, 0.0010007322050316592] |

| Hậu Giang | 3 | 209 | 6 | 6 | 9 | 4 | 8 | 11 | 4.979% | 0.01666661 | 0.01657232 | [8.387916528143122e-05, 0.00010575940656334643] |

| Kiên Giang | 2 | 209 | 77 | 91 | 83 | 89 | 104 | 89 | 42.205% | 0.13904341 | 0.13823939 | [0.0005381197064341666, 0.0010731981121781071] |

| Kiên Giang | 3 | 209 | 12 | 8 | 12 | 11 | 14 | 11 | 4.979% | 0.01668502 | 0.01658619 | [8.778599562181954e-05, 0.0001097550505519331] |

| Long An | 2 | 209 | 94 | 90 | 82 | 84 | 73 | 95 | 42.205% | 0.13877170 | 0.13791929 | [0.0005537782567506647, 0.0011299983690833022] |

| Long An | 3 | 209 | 8 | 6 | 13 | 8 | 8 | 14 | 4.979% | 0.01667357 | 0.01658157 | [7.845807998514542e-05, 0.00010495373883779045] |

| Sóc Trăng | 2 | 209 | 99 | 77 | 93 | 101 | 80 | 103 | 42.205% | 0.13921916 | 0.13852749 | [0.0004085686679299966, 0.0009739003701365877] |

| Sóc Trăng | 3 | 209 | 14 | 9 | 18 | 17 | 10 | 10 | 4.979% | 0.01669440 | 0.01660468 | [7.865018955602376e-05, 0.00010204168335471874] |

| TP. HCM | 2 | 418 | 195 | 171 | 181 | 185 | 181 | 168 | 42.205% | 0.13838568 | 0.13796730 | [0.0002472765968942298, 0.0005871195913270143] |

| TP. HCM | 3 | 418 | 21 | 25 | 17 | 18 | 19 | 16 | 4.979% | 0.01660954 | 0.01655845 | [4.526214782471338e-05, 5.690503810712498e-05] |

| Tiền Giang | 2 | 209 | 73 | 74 | 84 | 81 | 87 | 75 | 42.205% | 0.13954660 | 0.13868755 | [0.0006067665411756171, 0.0011190604956700504] |

| Tiền Giang | 3 | 209 | 10 | 13 | 10 | 11 | 19 | 10 | 4.979% | 0.01668413 | 0.01659081 | [8.29997673058684e-05, 0.00010330507829479605] |

| Trà Vinh | 2 | 209 | 86 | 86 | 90 | 82 | 80 | 83 | 42.205% | 0.14002526 | 0.13913570 | [0.0006344971846359226, 0.001148209825950378] |

| Trà Vinh | 3 | 209 | 8 | 8 | 11 | 6 | 6 | 9 | 4.979% | 0.01668647 | 0.01659081 | [8.424423392856798e-05, 0.00010727689783975153] |

| Tây Ninh | 2 | 209 | 84 | 78 | 95 | 95 | 83 | 88 | 42.205% | 0.13843276 | 0.13779124 | [0.0003781527156459638, 0.0009338882540061112] |

| Tây Ninh | 3 | 209 | 9 | 11 | 12 | 9 | 7 | 13 | 4.979% | 0.01666489 | 0.01657232 | [8.255082807362589e-05, 0.0001032569040605107] |

| Vĩnh Long | 2 | 209 | 88 | 88 | 86 | 94 | 85 | 95 | 42.205% | 0.13883633 | 0.13807934 | [0.0004662579788349418, 0.0010174208080061336] |

| Vĩnh Long | 3 | 209 | 10 | 7 | 9 | 12 | 2 | 12 | 4.979% | 0.01662838 | 0.01653533 | [8.137983087705396e-05, 0.00010493312656378307] |

| Vũng Tàu | 2 | 209 | 103 | 96 | 87 | 94 | 89 | 90 | 42.205% | 0.13818589 | 0.13763119 | [0.000256969365918998, 0.0008408317988431903] |

| Vũng Tàu | 3 | 209 | 12 | 10 | 11 | 11 | 14 | 14 | 4.979% | 0.01667598 | 0.01658619 | [7.873091230477738e-05, 0.00010102606193182962] |

| XSMB | 2 | 1447 | 807 | 795 | 822 | 800 | 819 | 811 | 56.062% | 0.18155339 | 0.18131406 | [0.00017564186824501672, 0.000299724583823051] |

| XSMB | 3 | 1447 | 119 | 81 | 88 | 100 | 98 | 106 | 6.677% | 0.02226474 | 0.02224217 | [1.975585488644068e-05, 2.529279568596526e-05] |

| Đà Lạt | 2 | 209 | 97 | 98 | 98 | 97 | 83 | 84 | 42.205% | 0.13845974 | 0.13772722 | [0.000488409912302162, 0.0009902078368289318] |

| Đà Lạt | 3 | 209 | 8 | 11 | 7 | 12 | 15 | 9 | 4.979% | 0.01669632 | 0.01660006 | [8.522719458383933e-05, 0.00010644615738484648] |

| Đồng Nai | 2 | 209 | 81 | 87 | 93 | 90 | 93 | 83 | 42.205% | 0.13954876 | 0.13859151 | [0.0006832853678260745, 0.0012354202093343898] |

| Đồng Nai | 3 | 209 | 5 | 9 | 11 | 11 | 14 | 14 | 4.979% | 0.01670463 | 0.01661393 | [7.997336946137015e-05, 0.00010130500764694935] |

| Đồng Tháp | 2 | 209 | 92 | 93 | 91 | 93 | 92 | 91 | 42.205% | 0.14009892 | 0.13919972 | [0.0006461234248067605, 0.0011593647222078775] |

| Đồng Tháp | 3 | 209 | 7 | 11 | 8 | 10 | 6 | 11 | 4.979% | 0.01667755 | 0.01658619 | [8.091174147929021e-05, 0.0001022666374765236] |

## Sổ giả thuyết đã có và quyết định

1. Theo từng đài so với chuỗi thứ Hai–thứ Sáu miền Nam: giữ sáu công thức và 2/3 số, khởi tạo một năm, chấm bốn năm sau trên cùng kỳ đích. Báo cáo HAI_GIA_THUYET_5_NAM_2026-11-11.zip. Chưa chứng minh cải thiện sau xét bất định/nhiều thử nghiệm. Không áp dụng.

2. Báo cáo NGHIEN_CUU_XSMB_THU_TRONG_TUAN_2026-11-11.md là hiểu nhầm yêu cầu, không dùng kết luận cho giả thuyết chuỗi ngày miền Nam.

3. NGHIEN_CUU_CAP_DAI_2026_11_11.zip có tiêu chí cùng số ra cả hai đài. Người dùng đã sửa: tiêu chí mong muốn là bộ ba chung, trúng ở bất kỳ đài nào. Kết quả 9,86% không trả lời mục tiêu mới. Không dùng nó để quyết định đổi app.

4. Báo cáo sửa đúng tiêu chí SO_SANH_TOP3_CHUNG_2026_11_11.zip: 19 hướng gộp miền Nam × 2 loại đuôi so 6 phương pháp riêng. Khởi tạo năm đầu; ba năm phát triển chọn; năm cuối đã từng xem chỉ mang tính hồi cứu. 2 số: cũ chọn trước 253/365=69,32%, mới 257/365=70,41%, +1,10 điểm %, CI95 −4,46 đến +6,74. Chưa bằng chứng tăng ổn định. 3 số: 6,03% so 8,77%, mới dưới ngẫu nhiên ~9,70%. Hướng 10 kỳ gộp đạt 72,88% năm cuối nhưng cả bốn năm 65,30%, kém riêng 66,46%; không lấy riêng năm đẹp.

5. Nhánh thêm Nam chiều → Bắc tối đã được người dùng yêu cầu nghiên cứu riêng trong hội thoại: ứng viên là hợp hai đài, chọn đúng ba, không bắt buộc trùng hai đài; 10 hướng mới × 2 loại đuôi so sáu công thức Bắc. Năm sau: 2 số 52,91% mới so 56,23% cũ; 3 số 8,03% so 8,86%. Không đổi Bắc trên app. Nhánh này không phải dùng Bắc dự báo Nam; không trộn với giả thuyết chuỗi ngày miền Nam.

6. Trong lượt nhật ký này không mở thêm cách tính hoặc dò tham số. Tiếp tục sáu phương pháp và prior 20 đã có; ưu tiên chất lượng dữ liệu và tích lũy các bản khóa. Các bộ trước có nhiều cấu hình trùng nhau: ghi 38 so sánh chính nhánh Nam và 20 nhánh Bắc của báo cáo mới nhất; không gọi tổng cộng các lượt xếp hạng là số giả thuyết độc lập. Tổng số cấu hình duy nhất qua mọi phiên cũ chưa được kiểm kê đầy đủ.

## Giả thuyết theo dõi tiếp — chưa áp dụng

- Quan sát: các công thức đứng đầu thay đổi giữa các năm; prior 20 vẫn có Brier cao hơn đồng đều. Trực giác: nhiễu do ít kỳ mỗi đài có thể lớn hơn tín hiệu. Đây không phải bằng chứng số đang vắng sẽ dễ ra.

- Biến đo được: tỷ lệ Top 3 có ít nhất một số ra, Brier trung bình theo kỳ, sai lệch p−tần suất theo bins, độ ổn định qua giai đoạn và từng đài.

- Căn cứ: toàn bộ bảng tổng hợp theo năm/đài trong phụ lục; mẫu dự báo khóa hiện chỉ một kỳ mỗi đài ngày 11/11. Không đủ để kiểm chứng lợi thế.

- Đối chứng: cùng ngày, đài, loại đuôi, ba lựa chọn; công thức đang có và mốc đồng đều. Đuôi 3 không đệm giải 2 số. Nếu thử gộp cặp, cả cũ và mới phải có 6 lượt số–đài, tiêu chí bất kỳ đài nào.

- Tiêu chí định trước cho lần xác nhận tương lai: chỉ xem xét ứng viên sau một giai đoạn cố định, đủ số kỳ theo từng phạm vi đài; Brier phải không kém mức đồng đều, chênh Top 3 dương có khoảng bất định loại 0 sau điều chỉnh các ứng viên đã đăng ký. Chưa ấn định mốc đủ mẫu hoặc khóa ứng viên mới, nên chưa được gọi là thử nghiệm xác nhận đang chạy. Không tự ghi dự báo mới thay đổi mô hình; phải xin phép trước khi áp dụng vào app/web.

- Bước tiếp: tiếp tục thu thập/chấm những bản khóa six-methods-v1 hiện có. Không thay công thức mỗi ngày. Xác minh ngày nghỉ Bắc lịch sử. Chỉ thông báo người dùng khi có lỗi cần xử lý hoặc bằng chứng quan trọng; một ngày tốt không đủ.

## Các ngày chờ xác minh dữ liệu/nghỉ XSMB

```json

{
  "2022-01-31": [
    "XSMB"
  ],
  "2022-02-01": [
    "XSMB"
  ],
  "2022-02-02": [
    "XSMB"
  ],
  "2022-02-03": [
    "XSMB"
  ],
  "2023-01-21": [
    "XSMB"
  ],
  "2023-01-22": [
    "XSMB"
  ],
  "2023-01-23": [
    "XSMB"
  ],
  "2023-01-24": [
    "XSMB"
  ],
  "2024-02-09": [
    "XSMB"
  ],
  "2024-02-10": [
    "XSMB"
  ],
  "2024-02-11": [
    "XSMB"
  ],
  "2024-02-12": [
    "XSMB"
  ],
  "2025-01-28": [
    "XSMB"
  ],
  "2025-01-29": [
    "XSMB"
  ],
  "2025-01-30": [
    "XSMB"
  ],
  "2025-01-31": [
    "XSMB"
  ],
  "2026-02-16": [
    "XSMB"
  ],
  "2026-02-17": [
    "XSMB"
  ],
  "2026-02-18": [
    "XSMB"
  ],
  "2026-02-19": [
    "XSMB"
  ]
}

```

## Phụ lục máy đọc — tổng hợp theo năm và đài

```json

[{"year":2022,"station":"An Giang","digits":2,"n":53,"hits":{"frequency":21,"recent10":24,"recent20":21,"recent50":19,"gap":18,"repeat":22}},{"year":2022,"station":"An Giang","digits":3,"n":53,"hits":{"frequency":5,"recent10":4,"recent20":1,"recent50":4,"gap":0,"repeat":7}},{"year":2022,"station":"Bình Dương","digits":2,"n":52,"hits":{"frequency":19,"recent10":24,"recent20":19,"recent50":20,"gap":26,"repeat":24}},{"year":2022,"station":"Bình Dương","digits":3,"n":52,"hits":{"frequency":3,"recent10":2,"recent20":2,"recent50":3,"gap":1,"repeat":4}},{"year":2022,"station":"Bình Phước","digits":2,"n":52,"hits":{"frequency":19,"recent10":22,"recent20":23,"recent50":14,"gap":22,"repeat":21}},{"year":2022,"station":"Bình Phước","digits":3,"n":52,"hits":{"frequency":6,"recent10":0,"recent20":1,"recent50":2,"gap":3,"repeat":1}},{"year":2022,"station":"Bình Thuận","digits":2,"n":53,"hits":{"frequency":27,"recent10":18,"recent20":14,"recent50":25,"gap":22,"repeat":21}},{"year":2022,"station":"Bình Thuận","digits":3,"n":53,"hits":{"frequency":2,"recent10":1,"recent20":1,"recent50":0,"gap":4,"repeat":2}},{"year":2022,"station":"Bạc Liêu","digits":2,"n":52,"hits":{"frequency":23,"recent10":27,"recent20":28,"recent50":20,"gap":21,"repeat":22}},{"year":2022,"station":"Bạc Liêu","digits":3,"n":52,"hits":{"frequency":4,"recent10":4,"recent20":5,"recent50":4,"gap":4,"repeat":1}},{"year":2022,"station":"Bến Tre","digits":2,"n":52,"hits":{"frequency":24,"recent10":25,"recent20":21,"recent50":22,"gap":27,"repeat":26}},{"year":2022,"station":"Bến Tre","digits":3,"n":52,"hits":{"frequency":2,"recent10":3,"recent20":1,"recent50":5,"gap":8,"repeat":3}},{"year":2022,"station":"Cà Mau","digits":2,"n":52,"hits":{"frequency":22,"recent10":20,"recent20":16,"recent50":15,"gap":23,"repeat":18}},{"year":2022,"station":"Cà Mau","digits":3,"n":52,"hits":{"frequency":4,"recent10":5,"recent20":5,"recent50":2,"gap":4,"repeat":4}},{"year":2022,"station":"Cần Thơ","digits":2,"n":52,"hits":{"frequency":22,"recent10":20,"recent20":27,"recent50":22,"gap":15,"repeat":24}},{"year":2022,"station":"Cần Thơ","digits":3,"n":52,"hits":{"frequency":0,"recent10":2,"recent20":1,"recent50":0,"gap":1,"repeat":0}},{"year":2022,"station":"Hậu Giang","digits":2,"n":52,"hits":{"frequency":27,"recent10":22,"recent20":22,"recent50":28,"gap":26,"repeat":19}},{"year":2022,"station":"Hậu Giang","digits":3,"n":52,"hits":{"frequency":0,"recent10":1,"recent20":1,"recent50":1,"gap":1,"repeat":0}},{"year":2022,"station":"Kiên Giang","digits":2,"n":52,"hits":{"frequency":19,"recent10":25,"recent20":18,"recent50":22,"gap":26,"repeat":23}},{"year":2022,"station":"Kiên Giang","digits":3,"n":52,"hits":{"frequency":2,"recent10":1,"recent20":3,"recent50":4,"gap":3,"repeat":2}},{"year":2022,"station":"Long An","digits":2,"n":52,"hits":{"frequency":27,"recent10":18,"recent20":27,"recent50":14,"gap":17,"repeat":24}},{"year":2022,"station":"Long An","digits":3,"n":52,"hits":{"frequency":2,"recent10":1,"recent20":3,"recent50":1,"gap":1,"repeat":2}},{"year":2022,"station":"Sóc Trăng","digits":2,"n":52,"hits":{"frequency":22,"recent10":20,"recent20":23,"recent50":24,"gap":22,"repeat":24}},{"year":2022,"station":"Sóc Trăng","digits":3,"n":52,"hits":{"frequency":3,"recent10":0,"recent20":3,"recent50":3,"gap":3,"repeat":0}},{"year":2022,"station":"TP. HCM","digits":2,"n":104,"hits":{"frequency":55,"recent10":43,"recent20":45,"recent50":49,"gap":46,"repeat":42}},{"year":2022,"station":"TP. HCM","digits":3,"n":104,"hits":{"frequency":5,"recent10":7,"recent20":3,"recent50":4,"gap":5,"repeat":2}},{"year":2022,"station":"Tiền Giang","digits":2,"n":52,"hits":{"frequency":14,"recent10":15,"recent20":21,"recent50":21,"gap":20,"repeat":15}},{"year":2022,"station":"Tiền Giang","digits":3,"n":52,"hits":{"frequency":2,"recent10":2,"recent20":3,"recent50":1,"gap":4,"repeat":1}},{"year":2022,"station":"Trà Vinh","digits":2,"n":52,"hits":{"frequency":19,"recent10":20,"recent20":21,"recent50":17,"gap":21,"repeat":17}},{"year":2022,"station":"Trà Vinh","digits":3,"n":52,"hits":{"frequency":2,"recent10":2,"recent20":3,"recent50":2,"gap":1,"repeat":0}},{"year":2022,"station":"Tây Ninh","digits":2,"n":53,"hits":{"frequency":22,"recent10":22,"recent20":21,"recent50":26,"gap":21,"repeat":21}},{"year":2022,"station":"Tây Ninh","digits":3,"n":53,"hits":{"frequency":2,"recent10":4,"recent20":2,"recent50":3,"gap":2,"repeat":5}},{"year":2022,"station":"Vĩnh Long","digits":2,"n":52,"hits":{"frequency":24,"recent10":24,"recent20":24,"recent50":25,"gap":20,"repeat":25}},{"year":2022,"station":"Vĩnh Long","digits":3,"n":52,"hits":{"frequency":4,"recent10":4,"recent20":2,"recent50":5,"gap":1,"repeat":4}},{"year":2022,"station":"Vũng Tàu","digits":2,"n":52,"hits":{"frequency":28,"recent10":26,"recent20":21,"recent50":26,"gap":18,"repeat":24}},{"year":2022,"station":"Vũng Tàu","digits":3,"n":52,"hits":{"frequency":4,"recent10":4,"recent20":1,"recent50":4,"gap":4,"repeat":4}},{"year":2022,"station":"XSMB","digits":2,"n":361,"hits":{"frequency":193,"recent10":180,"recent20":196,"recent50":201,"gap":199,"repeat":203}},{"year":2022,"station":"XSMB","digits":3,"n":361,"hits":{"frequency":31,"recent10":19,"recent20":21,"recent50":28,"gap":29,"repeat":31}},{"year":2022,"station":"Đà Lạt","digits":2,"n":52,"hits":{"frequency":28,"recent10":22,"recent20":25,"recent50":25,"gap":25,"repeat":20}},{"year":2022,"station":"Đà Lạt","digits":3,"n":52,"hits":{"frequency":1,"recent10":1,"recent20":1,"recent50":3,"gap":5,"repeat":2}},{"year":2022,"station":"Đồng Nai","digits":2,"n":52,"hits":{"frequency":18,"recent10":16,"recent20":18,"recent50":19,"gap":27,"repeat":15}},{"year":2022,"station":"Đồng Nai","digits":3,"n":52,"hits":{"frequency":2,"recent10":2,"recent20":3,"recent50":3,"gap":6,"repeat":2}},{"year":2022,"station":"Đồng Tháp","digits":2,"n":52,"hits":{"frequency":23,"recent10":23,"recent20":21,"recent50":24,"gap":27,"repeat":19}},{"year":2022,"station":"Đồng Tháp","digits":3,"n":52,"hits":{"frequency":5,"recent10":6,"recent20":3,"recent50":4,"gap":2,"repeat":4}},{"year":2023,"station":"An Giang","digits":2,"n":52,"hits":{"frequency":16,"recent10":15,"recent20":16,"recent50":20,"gap":24,"repeat":24}},{"year":2023,"station":"An Giang","digits":3,"n":52,"hits":{"frequency":5,"recent10":2,"recent20":2,"recent50":3,"gap":6,"repeat":0}},{"year":2023,"station":"Bình Dương","digits":2,"n":53,"hits":{"frequency":22,"recent10":26,"recent20":22,"recent50":20,"gap":17,"repeat":25}},{"year":2023,"station":"Bình Dương","digits":3,"n":53,"hits":{"frequency":1,"recent10":1,"recent20":2,"recent50":1,"gap":2,"repeat":5}},{"year":2023,"station":"Bình Phước","digits":2,"n":53,"hits":{"frequency":27,"recent10":28,"recent20":25,"recent50":25,"gap":27,"repeat":17}},{"year":2023,"station":"Bình Phước","digits":3,"n":53,"hits":{"frequency":0,"recent10":3,"recent20":1,"recent50":0,"gap":2,"repeat":2}},{"year":2023,"station":"Bình Thuận","digits":2,"n":52,"hits":{"frequency":20,"recent10":23,"recent20":20,"recent50":18,"gap":23,"repeat":24}},{"year":2023,"station":"Bình Thuận","digits":3,"n":52,"hits":{"frequency":1,"recent10":2,"recent20":1,"recent50":3,"gap":3,"repeat":4}},{"year":2023,"station":"Bạc Liêu","digits":2,"n":52,"hits":{"frequency":28,"recent10":21,"recent20":24,"recent50":27,"gap":21,"repeat":22}},{"year":2023,"station":"Bạc Liêu","digits":3,"n":52,"hits":{"frequency":4,"recent10":3,"recent20":2,"recent50":3,"gap":5,"repeat":1}},{"year":2023,"station":"Bến Tre","digits":2,"n":52,"hits":{"frequency":23,"recent10":26,"recent20":24,"recent50":17,"gap":27,"repeat":17}},{"year":2023,"station":"Bến Tre","digits":3,"n":52,"hits":{"frequency":2,"recent10":4,"recent20":4,"recent50":2,"gap":0,"repeat":0}},{"year":2023,"station":"Cà Mau","digits":2,"n":52,"hits":{"frequency":22,"recent10":27,"recent20":28,"recent50":21,"gap":24,"repeat":25}},{"year":2023,"station":"Cà Mau","digits":3,"n":52,"hits":{"frequency":3,"recent10":3,"recent20":1,"recent50":3,"gap":2,"repeat":2}},{"year":2023,"station":"Cần Thơ","digits":2,"n":52,"hits":{"frequency":25,"recent10":20,"recent20":23,"recent50":24,"gap":26,"repeat":17}},{"year":2023,"station":"Cần Thơ","digits":3,"n":52,"hits":{"frequency":1,"recent10":3,"recent20":3,"recent50":4,"gap":3,"repeat":1}},{"year":2023,"station":"Hậu Giang","digits":2,"n":53,"hits":{"frequency":17,"recent10":18,"recent20":20,"recent50":19,"gap":27,"repeat":18}},{"year":2023,"station":"Hậu Giang","digits":3,"n":53,"hits":{"frequency":3,"recent10":3,"recent20":3,"recent50":1,"gap":3,"repeat":4}},{"year":2023,"station":"Kiên Giang","digits":2,"n":52,"hits":{"frequency":19,"recent10":20,"recent20":23,"recent50":21,"gap":27,"repeat":23}},{"year":2023,"station":"Kiên Giang","digits":3,"n":52,"hits":{"frequency":5,"recent10":4,"recent20":4,"recent50":5,"gap":2,"repeat":2}},{"year":2023,"station":"Long An","digits":2,"n":53,"hits":{"frequency":26,"recent10":26,"recent20":18,"recent50":24,"gap":19,"repeat":23}},{"year":2023,"station":"Long An","digits":3,"n":53,"hits":{"frequency":2,"recent10":3,"recent20":3,"recent50":1,"gap":1,"repeat":3}},{"year":2023,"station":"Sóc Trăng","digits":2,"n":52,"hits":{"frequency":24,"recent10":18,"recent20":25,"recent50":23,"gap":16,"repeat":25}},{"year":2023,"station":"Sóc Trăng","digits":3,"n":52,"hits":{"frequency":3,"recent10":2,"recent20":5,"recent50":3,"gap":2,"repeat":2}},{"year":2023,"station":"TP. HCM","digits":2,"n":105,"hits":{"frequency":40,"recent10":44,"recent20":35,"recent50":44,"gap":53,"repeat":37}},{"year":2023,"station":"TP. HCM","digits":3,"n":105,"hits":{"frequency":10,"recent10":3,"recent20":3,"recent50":6,"gap":5,"repeat":3}},{"year":2023,"station":"Tiền Giang","digits":2,"n":52,"hits":{"frequency":19,"recent10":21,"recent20":20,"recent50":18,"gap":22,"repeat":17}},{"year":2023,"station":"Tiền Giang","digits":3,"n":52,"hits":{"frequency":4,"recent10":3,"recent20":3,"recent50":2,"gap":4,"repeat":4}},{"year":2023,"station":"Trà Vinh","digits":2,"n":53,"hits":{"frequency":23,"recent10":23,"recent20":19,"recent50":23,"gap":23,"repeat":19}},{"year":2023,"station":"Trà Vinh","digits":3,"n":53,"hits":{"frequency":1,"recent10":3,"recent20":2,"recent50":1,"gap":2,"repeat":4}},{"year":2023,"station":"Tây Ninh","digits":2,"n":52,"hits":{"frequency":20,"recent10":18,"recent20":24,"recent50":17,"gap":15,"repeat":22}},{"year":2023,"station":"Tây Ninh","digits":3,"n":52,"hits":{"frequency":1,"recent10":3,"recent20":3,"recent50":1,"gap":2,"repeat":3}},{"year":2023,"station":"Vĩnh Long","digits":2,"n":53,"hits":{"frequency":26,"recent10":21,"recent20":15,"recent50":23,"gap":20,"repeat":26}},{"year":2023,"station":"Vĩnh Long","digits":3,"n":53,"hits":{"frequency":1,"recent10":2,"recent20":0,"recent50":3,"gap":1,"repeat":2}},{"year":2023,"station":"Vũng Tàu","digits":2,"n":52,"hits":{"frequency":27,"recent10":23,"recent20":22,"recent50":24,"gap":26,"repeat":24}},{"year":2023,"station":"Vũng Tàu","digits":3,"n":52,"hits":{"frequency":5,"recent10":1,"recent20":2,"recent50":1,"gap":5,"repeat":4}},{"year":2023,"station":"XSMB","digits":2,"n":362,"hits":{"frequency":209,"recent10":216,"recent20":206,"recent50":200,"gap":213,"repeat":196}},{"year":2023,"station":"XSMB","digits":3,"n":362,"hits":{"frequency":28,"recent10":22,"recent20":18,"recent50":14,"gap":16,"repeat":19}},{"year":2023,"station":"Đà Lạt","digits":2,"n":52,"hits":{"frequency":22,"recent10":24,"recent20":25,"recent50":26,"gap":19,"repeat":17}},{"year":2023,"station":"Đà Lạt","digits":3,"n":52,"hits":{"frequency":0,"recent10":2,"recent20":1,"recent50":4,"gap":3,"repeat":1}},{"year":2023,"station":"Đồng Nai","digits":2,"n":52,"hits":{"frequency":20,"recent10":25,"recent20":21,"recent50":27,"gap":27,"repeat":19}},{"year":2023,"station":"Đồng Nai","digits":3,"n":52,"hits":{"frequency":0,"recent10":0,"recent20":3,"recent50":2,"gap":1,"repeat":1}},{"year":2023,"station":"Đồng Tháp","digits":2,"n":52,"hits":{"frequency":25,"recent10":25,"recent20":26,"recent50":24,"gap":22,"repeat":25}},{"year":2023,"station":"Đồng Tháp","digits":3,"n":52,"hits":{"frequency":0,"recent10":3,"recent20":1,"recent50":1,"gap":0,"repeat":3}},{"year":2024,"station":"An Giang","digits":2,"n":52,"hits":{"frequency":22,"recent10":23,"recent20":19,"recent50":23,"gap":14,"repeat":26}},{"year":2024,"station":"An Giang","digits":3,"n":52,"hits":{"frequency":2,"recent10":4,"recent20":4,"recent50":0,"gap":2,"repeat":5}},{"year":2024,"station":"Bình Dương","digits":2,"n":52,"hits":{"frequency":24,"recent10":18,"recent20":20,"recent50":21,"gap":24,"repeat":24}},{"year":2024,"station":"Bình Dương","digits":3,"n":52,"hits":{"frequency":3,"recent10":2,"recent20":3,"recent50":2,"gap":1,"repeat":2}},{"year":2024,"station":"Bình Phước","digits":2,"n":52,"hits":{"frequency":23,"recent10":20,"recent20":16,"recent50":14,"gap":18,"repeat":18}},{"year":2024,"station":"Bình Phước","digits":3,"n":52,"hits":{"frequency":2,"recent10":2,"recent20":0,"recent50":4,"gap":3,"repeat":1}},{"year":2024,"station":"Bình Thuận","digits":2,"n":52,"hits":{"frequency":20,"recent10":21,"recent20":20,"recent50":24,"gap":22,"repeat":18}},{"year":2024,"station":"Bình Thuận","digits":3,"n":52,"hits":{"frequency":4,"recent10":4,"recent20":4,"recent50":4,"gap":2,"repeat":4}},{"year":2024,"station":"Bạc Liêu","digits":2,"n":52,"hits":{"frequency":25,"recent10":26,"recent20":28,"recent50":27,"gap":18,"repeat":23}},{"year":2024,"station":"Bạc Liêu","digits":3,"n":52,"hits":{"frequency":1,"recent10":3,"recent20":3,"recent50":4,"gap":0,"repeat":3}},{"year":2024,"station":"Bến Tre","digits":2,"n":52,"hits":{"frequency":17,"recent10":25,"recent20":24,"recent50":27,"gap":21,"repeat":21}},{"year":2024,"station":"Bến Tre","digits":3,"n":52,"hits":{"frequency":0,"recent10":3,"recent20":3,"recent50":2,"gap":4,"repeat":2}},{"year":2024,"station":"Cà Mau","digits":2,"n":52,"hits":{"frequency":26,"recent10":22,"recent20":26,"recent50":27,"gap":20,"repeat":24}},{"year":2024,"station":"Cà Mau","digits":3,"n":52,"hits":{"frequency":4,"recent10":0,"recent20":3,"recent50":3,"gap":6,"repeat":3}},{"year":2024,"station":"Cần Thơ","digits":2,"n":52,"hits":{"frequency":25,"recent10":18,"recent20":18,"recent50":14,"gap":18,"repeat":22}},{"year":2024,"station":"Cần Thơ","digits":3,"n":52,"hits":{"frequency":3,"recent10":1,"recent20":2,"recent50":2,"gap":7,"repeat":3}},{"year":2024,"station":"Hậu Giang","digits":2,"n":52,"hits":{"frequency":19,"recent10":17,"recent20":23,"recent50":19,"gap":25,"repeat":20}},{"year":2024,"station":"Hậu Giang","digits":3,"n":52,"hits":{"frequency":3,"recent10":1,"recent20":1,"recent50":0,"gap":3,"repeat":3}},{"year":2024,"station":"Kiên Giang","digits":2,"n":53,"hits":{"frequency":21,"recent10":21,"recent20":21,"recent50":25,"gap":24,"repeat":21}},{"year":2024,"station":"Kiên Giang","digits":3,"n":53,"hits":{"frequency":4,"recent10":2,"recent20":3,"recent50":1,"gap":8,"repeat":2}},{"year":2024,"station":"Long An","digits":2,"n":52,"hits":{"frequency":19,"recent10":26,"recent20":20,"recent50":22,"gap":20,"repeat":20}},{"year":2024,"station":"Long An","digits":3,"n":52,"hits":{"frequency":3,"recent10":1,"recent20":3,"recent50":3,"gap":5,"repeat":4}},{"year":2024,"station":"Sóc Trăng","digits":2,"n":52,"hits":{"frequency":22,"recent10":20,"recent20":22,"recent50":23,"gap":19,"repeat":22}},{"year":2024,"station":"Sóc Trăng","digits":3,"n":52,"hits":{"frequency":4,"recent10":4,"recent20":5,"recent50":6,"gap":3,"repeat":5}},{"year":2024,"station":"TP. HCM","digits":2,"n":104,"hits":{"frequency":44,"recent10":40,"recent20":47,"recent50":50,"gap":43,"repeat":40}},{"year":2024,"station":"TP. HCM","digits":3,"n":104,"hits":{"frequency":4,"recent10":7,"recent20":6,"recent50":6,"gap":6,"repeat":8}},{"year":2024,"station":"Tiền Giang","digits":2,"n":53,"hits":{"frequency":20,"recent10":19,"recent20":19,"recent50":18,"gap":21,"repeat":18}},{"year":2024,"station":"Tiền Giang","digits":3,"n":53,"hits":{"frequency":1,"recent10":2,"recent20":1,"recent50":4,"gap":8,"repeat":2}},{"year":2024,"station":"Trà Vinh","digits":2,"n":52,"hits":{"frequency":22,"recent10":22,"recent20":24,"recent50":20,"gap":19,"repeat":25}},{"year":2024,"station":"Trà Vinh","digits":3,"n":52,"hits":{"frequency":2,"recent10":1,"recent20":3,"recent50":2,"gap":2,"repeat":3}},{"year":2024,"station":"Tây Ninh","digits":2,"n":52,"hits":{"frequency":24,"recent10":21,"recent20":28,"recent50":28,"gap":24,"repeat":20}},{"year":2024,"station":"Tây Ninh","digits":3,"n":52,"hits":{"frequency":2,"recent10":3,"recent20":5,"recent50":3,"gap":2,"repeat":1}},{"year":2024,"station":"Vĩnh Long","digits":2,"n":52,"hits":{"frequency":18,"recent10":21,"recent20":23,"recent50":22,"gap":17,"repeat":25}},{"year":2024,"station":"Vĩnh Long","digits":3,"n":52,"hits":{"frequency":4,"recent10":0,"recent20":3,"recent50":1,"gap":0,"repeat":2}},{"year":2024,"station":"Vũng Tàu","digits":2,"n":52,"hits":{"frequency":23,"recent10":25,"recent20":25,"recent50":25,"gap":22,"repeat":19}},{"year":2024,"station":"Vũng Tàu","digits":3,"n":52,"hits":{"frequency":2,"recent10":2,"recent20":1,"recent50":1,"gap":4,"repeat":4}},{"year":2024,"station":"XSMB","digits":2,"n":361,"hits":{"frequency":198,"recent10":201,"recent20":208,"recent50":190,"gap":203,"repeat":213}},{"year":2024,"station":"XSMB","digits":3,"n":361,"hits":{"frequency":28,"recent10":24,"recent20":22,"recent50":26,"gap":24,"repeat":23}},{"year":2024,"station":"Đà Lạt","digits":2,"n":53,"hits":{"frequency":28,"recent10":26,"recent20":25,"recent50":25,"gap":20,"repeat":26}},{"year":2024,"station":"Đà Lạt","digits":3,"n":53,"hits":{"frequency":4,"recent10":4,"recent20":2,"recent50":3,"gap":4,"repeat":4}},{"year":2024,"station":"Đồng Nai","digits":2,"n":52,"hits":{"frequency":17,"recent10":26,"recent20":27,"recent50":18,"gap":19,"repeat":23}},{"year":2024,"station":"Đồng Nai","digits":3,"n":52,"hits":{"frequency":1,"recent10":3,"recent20":1,"recent50":2,"gap":4,"repeat":5}},{"year":2024,"station":"Đồng Tháp","digits":2,"n":52,"hits":{"frequency":22,"recent10":27,"recent20":20,"recent50":20,"gap":22,"repeat":25}},{"year":2024,"station":"Đồng Tháp","digits":3,"n":52,"hits":{"frequency":1,"recent10":2,"recent20":2,"recent50":4,"gap":2,"repeat":3}},{"year":2025,"station":"An Giang","digits":2,"n":52,"hits":{"frequency":19,"recent10":28,"recent20":23,"recent50":26,"gap":25,"repeat":24}},{"year":2025,"station":"An Giang","digits":3,"n":52,"hits":{"frequency":2,"recent10":0,"recent20":2,"recent50":2,"gap":0,"repeat":2}},{"year":2025,"station":"Bình Dương","digits":2,"n":52,"hits":{"frequency":28,"recent10":22,"recent20":22,"recent50":24,"gap":25,"repeat":17}},{"year":2025,"station":"Bình Dương","digits":3,"n":52,"hits":{"frequency":3,"recent10":4,"recent20":6,"recent50":1,"gap":3,"repeat":2}},{"year":2025,"station":"Bình Phước","digits":2,"n":52,"hits":{"frequency":19,"recent10":15,"recent20":26,"recent50":25,"gap":16,"repeat":20}},{"year":2025,"station":"Bình Phước","digits":3,"n":52,"hits":{"frequency":1,"recent10":1,"recent20":3,"recent50":3,"gap":5,"repeat":2}},{"year":2025,"station":"Bình Thuận","digits":2,"n":52,"hits":{"frequency":17,"recent10":25,"recent20":32,"recent50":21,"gap":20,"repeat":25}},{"year":2025,"station":"Bình Thuận","digits":3,"n":52,"hits":{"frequency":7,"recent10":3,"recent20":2,"recent50":3,"gap":4,"repeat":3}},{"year":2025,"station":"Bạc Liêu","digits":2,"n":52,"hits":{"frequency":22,"recent10":25,"recent20":31,"recent50":28,"gap":21,"repeat":19}},{"year":2025,"station":"Bạc Liêu","digits":3,"n":52,"hits":{"frequency":6,"recent10":5,"recent20":5,"recent50":5,"gap":1,"repeat":4}},{"year":2025,"station":"Bến Tre","digits":2,"n":52,"hits":{"frequency":15,"recent10":23,"recent20":18,"recent50":19,"gap":22,"repeat":29}},{"year":2025,"station":"Bến Tre","digits":3,"n":52,"hits":{"frequency":3,"recent10":2,"recent20":4,"recent50":2,"gap":3,"repeat":4}},{"year":2025,"station":"Cà Mau","digits":2,"n":53,"hits":{"frequency":20,"recent10":20,"recent20":22,"recent50":16,"gap":27,"repeat":17}},{"year":2025,"station":"Cà Mau","digits":3,"n":53,"hits":{"frequency":1,"recent10":2,"recent20":4,"recent50":1,"gap":0,"repeat":1}},{"year":2025,"station":"Cần Thơ","digits":2,"n":52,"hits":{"frequency":19,"recent10":19,"recent20":24,"recent50":20,"gap":20,"repeat":22}},{"year":2025,"station":"Cần Thơ","digits":3,"n":52,"hits":{"frequency":4,"recent10":2,"recent20":3,"recent50":4,"gap":1,"repeat":3}},{"year":2025,"station":"Hậu Giang","digits":2,"n":52,"hits":{"frequency":30,"recent10":23,"recent20":26,"recent50":25,"gap":21,"repeat":21}},{"year":2025,"station":"Hậu Giang","digits":3,"n":52,"hits":{"frequency":0,"recent10":1,"recent20":4,"recent50":2,"gap":1,"repeat":4}},{"year":2025,"station":"Kiên Giang","digits":2,"n":52,"hits":{"frequency":18,"recent10":25,"recent20":21,"recent50":21,"gap":27,"repeat":22}},{"year":2025,"station":"Kiên Giang","digits":3,"n":52,"hits":{"frequency":1,"recent10":1,"recent20":2,"recent50":1,"gap":1,"repeat":5}},{"year":2025,"station":"Long An","digits":2,"n":52,"hits":{"frequency":22,"recent10":20,"recent20":17,"recent50":24,"gap":17,"repeat":28}},{"year":2025,"station":"Long An","digits":3,"n":52,"hits":{"frequency":1,"recent10":1,"recent20":4,"recent50":3,"gap":1,"repeat":5}},{"year":2025,"station":"Sóc Trăng","digits":2,"n":52,"hits":{"frequency":30,"recent10":19,"recent20":23,"recent50":30,"gap":23,"repeat":32}},{"year":2025,"station":"Sóc Trăng","digits":3,"n":52,"hits":{"frequency":4,"recent10":3,"recent20":5,"recent50":5,"gap":2,"repeat":3}},{"year":2025,"station":"TP. HCM","digits":2,"n":105,"hits":{"frequency":56,"recent10":44,"recent20":54,"recent50":42,"gap":39,"repeat":49}},{"year":2025,"station":"TP. HCM","digits":3,"n":105,"hits":{"frequency":2,"recent10":8,"recent20":5,"recent50":2,"gap":3,"repeat":3}},{"year":2025,"station":"Tiền Giang","digits":2,"n":52,"hits":{"frequency":20,"recent10":19,"recent20":24,"recent50":24,"gap":24,"repeat":25}},{"year":2025,"station":"Tiền Giang","digits":3,"n":52,"hits":{"frequency":3,"recent10":6,"recent20":3,"recent50":4,"gap":3,"repeat":3}},{"year":2025,"station":"Trà Vinh","digits":2,"n":52,"hits":{"frequency":22,"recent10":21,"recent20":26,"recent50":22,"gap":17,"repeat":22}},{"year":2025,"station":"Trà Vinh","digits":3,"n":52,"hits":{"frequency":3,"recent10":2,"recent20":3,"recent50":1,"gap":1,"repeat":2}},{"year":2025,"station":"Tây Ninh","digits":2,"n":52,"hits":{"frequency":18,"recent10":17,"recent20":22,"recent50":24,"gap":23,"repeat":25}},{"year":2025,"station":"Tây Ninh","digits":3,"n":52,"hits":{"frequency":4,"recent10":1,"recent20":2,"recent50":2,"gap":1,"repeat":4}},{"year":2025,"station":"Vĩnh Long","digits":2,"n":52,"hits":{"frequency":20,"recent10":22,"recent20":24,"recent50":24,"gap":28,"repeat":19}},{"year":2025,"station":"Vĩnh Long","digits":3,"n":52,"hits":{"frequency":1,"recent10":1,"recent20":4,"recent50":3,"gap":0,"repeat":4}},{"year":2025,"station":"Vũng Tàu","digits":2,"n":52,"hits":{"frequency":24,"recent10":21,"recent20":19,"recent50":18,"gap":23,"repeat":22}},{"year":2025,"station":"Vũng Tàu","digits":3,"n":52,"hits":{"frequency":1,"recent10":3,"recent20":7,"recent50":4,"gap":1,"repeat":2}},{"year":2025,"station":"XSMB","digits":2,"n":361,"hits":{"frequency":206,"recent10":197,"recent20":211,"recent50":208,"gap":203,"repeat":198}},{"year":2025,"station":"XSMB","digits":3,"n":361,"hits":{"frequency":32,"recent10":15,"recent20":26,"recent50":31,"gap":29,"repeat":33}},{"year":2025,"station":"Đà Lạt","digits":2,"n":52,"hits":{"frequency":19,"recent10":26,"recent20":23,"recent50":21,"gap":19,"repeat":21}},{"year":2025,"station":"Đà Lạt","digits":3,"n":52,"hits":{"frequency":3,"recent10":4,"recent20":3,"recent50":2,"gap":3,"repeat":2}},{"year":2025,"station":"Đồng Nai","digits":2,"n":52,"hits":{"frequency":26,"recent10":20,"recent20":27,"recent50":26,"gap":19,"repeat":26}},{"year":2025,"station":"Đồng Nai","digits":3,"n":52,"hits":{"frequency":2,"recent10":4,"recent20":4,"recent50":4,"gap":3,"repeat":6}},{"year":2025,"station":"Đồng Tháp","digits":2,"n":53,"hits":{"frequency":22,"recent10":18,"recent20":24,"recent50":25,"gap":21,"repeat":22}},{"year":2025,"station":"Đồng Tháp","digits":3,"n":53,"hits":{"frequency":1,"recent10":0,"recent20":2,"recent50":1,"gap":2,"repeat":1}},{"year":2026,"station":"Bạc Liêu","digits":2,"n":1,"hits":{"frequency":0,"recent10":0,"recent20":1,"recent50":1,"gap":0,"repeat":1}},{"year":2026,"station":"Bạc Liêu","digits":3,"n":1,"hits":{"frequency":0,"recent10":0,"recent20":0,"recent50":0,"gap":0,"repeat":0}},{"year":2026,"station":"Bến Tre","digits":2,"n":1,"hits":{"frequency":1,"recent10":0,"recent20":0,"recent50":0,"gap":0,"repeat":0}},{"year":2026,"station":"Bến Tre","digits":3,"n":1,"hits":{"frequency":0,"recent10":0,"recent20":0,"recent50":0,"gap":0,"repeat":0}},{"year":2026,"station":"Cần Thơ","digits":2,"n":1,"hits":{"frequency":1,"recent10":0,"recent20":1,"recent50":0,"gap":0,"repeat":1}},{"year":2026,"station":"Cần Thơ","digits":3,"n":1,"hits":{"frequency":0,"recent10":0,"recent20":0,"recent50":0,"gap":0,"repeat":0}},{"year":2026,"station":"Sóc Trăng","digits":2,"n":1,"hits":{"frequency":1,"recent10":0,"recent20":0,"recent50":1,"gap":0,"repeat":0}},{"year":2026,"station":"Sóc Trăng","digits":3,"n":1,"hits":{"frequency":0,"recent10":0,"recent20":0,"recent50":0,"gap":0,"repeat":0}},{"year":2026,"station":"Vũng Tàu","digits":2,"n":1,"hits":{"frequency":1,"recent10":1,"recent20":0,"recent50":1,"gap":0,"repeat":1}},{"year":2026,"station":"Vũng Tàu","digits":3,"n":1,"hits":{"frequency":0,"recent10":0,"recent20":0,"recent50":1,"gap":0,"repeat":0}},{"year":2026,"station":"XSMB","digits":2,"n":2,"hits":{"frequency":1,"recent10":1,"recent20":1,"recent50":1,"gap":1,"repeat":1}},{"year":2026,"station":"XSMB","digits":3,"n":2,"hits":{"frequency":0,"recent10":1,"recent20":1,"recent50":1,"gap":0,"repeat":0}},{"year":2026,"station":"Đồng Nai","digits":2,"n":1,"hits":{"frequency":0,"recent10":0,"recent20":0,"recent50":0,"gap":1,"repeat":0}},{"year":2026,"station":"Đồng Nai","digits":3,"n":1,"hits":{"frequency":0,"recent10":0,"recent20":0,"recent50":0,"gap":0,"repeat":0}}]

```

## Phụ lục máy đọc — hiệu chỉnh xác suất

Mỗi hàng bin gồm [số trường hợp, tổng p dự báo, tổng kết quả 0/1]; chia hai tổng cho số trường hợp để lấy p trung bình và tỷ lệ thực. Không dùng số trường hợp này làm số mẫu độc lập cho khoảng tin cậy.

```json

[{"station":"An Giang","digits":2,"bins":[[22.0,2.163845105513298,6.0],[18673.0,2995.084026500319,3099.0],[2205.0,471.06280200247386,366.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"An Giang","digits":3,"bins":[[208979.0,3528.470587598506,3530.0],[21.0,2.271174560023652,1.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bình Dương","digits":2,"bins":[[33.0,3.022011259356031,10.0],[18832.0,3028.9594935123146,3114.0],[2035.0,440.3606959924762,339.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bình Dương","digits":3,"bins":[[209000.0,3532.2650403734274,3536.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bình Phước","digits":2,"bins":[[126.0,11.718947189562567,22.0],[18451.0,2935.0638148893013,3022.0],[2323.0,500.8150817330325,404.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bình Phước","digits":3,"bins":[[209000.0,3526.860147907172,3525.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bình Thuận","digits":2,"bins":[[79.0,7.530762250167434,13.0],[19028.0,3056.3564745782824,3158.0],[1785.0,385.5223076635804,290.0],[8.0,2.431492941312242,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bình Thuận","digits":3,"bins":[[209000.0,3527.930339606445,3529.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bạc Liêu","digits":2,"bins":[[218.0,20.440914820078945,37.0],[18244.0,2930.2376883003835,3017.0],[2438.0,528.5421256383662,424.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bạc Liêu","digits":3,"bins":[[209000.0,3533.1383423060342,3528.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bến Tre","digits":2,"bins":[[603.0,54.953232008097125,78.0],[17851.0,2847.7240077651863,2888.0],[2446.0,530.8214269971625,439.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Bến Tre","digits":3,"bins":[[209000.0,3514.0625964789533,3509.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Cà Mau","digits":2,"bins":[[110.0,10.116467798449511,24.0],[19282.0,3101.7145903051883,3185.0],[1508.0,324.61092330096363,232.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Cà Mau","digits":3,"bins":[[209000.0,3518.601977782665,3524.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Cần Thơ","digits":2,"bins":[[147.0,13.630663468781949,27.0],[18527.0,2979.699151965121,3080.0],[2226.0,477.463815643683,376.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Cần Thơ","digits":3,"bins":[[209000.0,3530.3763835552686,3533.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Hậu Giang","digits":2,"bins":[[167.0,15.55359441549065,29.0],[18828.0,3044.184900335444,3139.0],[1905.0,408.1853826721925,308.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Hậu Giang","digits":3,"bins":[[209000.0,3516.9176454133108,3523.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Kiên Giang","digits":2,"bins":[[119.0,9.673763422945527,18.0],[18591.0,3004.253828391864,3097.0],[2190.0,469.3427915652563,348.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Kiên Giang","digits":3,"bins":[[209000.0,3529.9814648695965,3526.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Long An","digits":2,"bins":[[128.0,12.141423616595864,27.0],[18304.0,2923.093144489214,3014.0],[2468.0,536.1418090597451,412.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Long An","digits":3,"bins":[[209000.0,3518.274636086231,3525.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Sóc Trăng","digits":2,"bins":[[138.0,12.948363847118367,27.0],[18543.0,2998.5571868994866,3069.0],[2219.0,478.3631277737507,376.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Sóc Trăng","digits":3,"bins":[[209000.0,3530.6352344277743,3530.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"TP. HCM","digits":2,"bins":[[114.0,9.861058050509202,17.0],[39744.0,6450.910535438288,6542.0],[1942.0,412.9750494822716,350.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"TP. HCM","digits":3,"bins":[[418000.0,7035.559892599786,7040.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Tiền Giang","digits":2,"bins":[[178.0,16.07137878033636,32.0],[18718.0,3019.230709647547,3143.0],[2004.0,422.28100099218847,302.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Tiền Giang","digits":3,"bins":[[209000.0,3522.796309493998,3527.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Trà Vinh","digits":2,"bins":[[376.0,33.631017423882696,50.0],[18712.0,3034.85168987827,3169.0],[1805.0,389.06774367046603,270.0],[7.0,2.1568347195581126,2.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Trà Vinh","digits":3,"bins":[[209000.0,3520.28708227171,3527.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Tây Ninh","digits":2,"bins":[[177.0,16.355434737696225,26.0],[18902.0,3050.0021848648985,3135.0],[1821.0,386.46832820657755,288.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Tây Ninh","digits":3,"bins":[[209000.0,3523.8929939065015,3523.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Vĩnh Long","digits":2,"bins":[[4.0,0.393562885333387,2.0],[18721.0,2990.467107708187,3064.0],[2175.0,470.8396766466109,392.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Vĩnh Long","digits":3,"bins":[[209000.0,3521.301023230766,3515.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Vũng Tàu","digits":2,"bins":[[244.0,21.92355947983048,37.0],[18293.0,2915.291167913523,3000.0],[2363.0,512.517462259053,407.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Vũng Tàu","digits":3,"bins":[[209000.0,3526.9791722697014,3526.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"XSMB","digits":2,"bins":[[0.0,0.0,0.0],[1054.0,199.83466743818855,243.0],[143515.0,34157.35471653824,34152.0],[131.0,40.07363050130301,32.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"XSMB","digits":3,"bins":[[1447000.0,32909.91860589506,32934.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Đà Lạt","digits":2,"bins":[[139.0,12.437168265941535,23.0],[18811.0,3016.4210564009095,3096.0],[1950.0,418.63434185680785,328.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Đà Lạt","digits":3,"bins":[[209000.0,3524.807017630966,3529.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Đồng Nai","digits":2,"bins":[[241.0,21.78616308184722,37.0],[19038.0,3109.1988928878627,3193.0],[1621.0,342.192386362159,244.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Đồng Nai","digits":3,"bins":[[209000.0,3527.9431237573426,3532.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Đồng Tháp","digits":2,"bins":[[130.0,11.223192646812317,21.0],[18895.0,3083.9055543490335,3172.0],[1875.0,401.9381115718516,300.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]},{"station":"Đồng Tháp","digits":3,"bins":[[209000.0,3528.4296550877625,3526.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0],[0.0,0.0,0.0]]}]

```

## Phụ lục máy đọc — dự báo khóa đã chấm

```json

[{"date":"2026-11-11","station":"Đồng Nai","digits":2,"method":"frequency","selected":["17","83","23"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":2,"method":"recent10","selected":["42","86","83"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":2,"method":"recent20","selected":["93","10","61"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":2,"method":"recent50","selected":["83","88","13"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":2,"method":"gap","selected":["64","62","71"],"matched":["71"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":2,"method":"repeat","selected":["51","23","60"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":3,"method":"frequency","selected":["402","112","351"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":3,"method":"recent10","selected":["993","186","324"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":3,"method":"recent20","selected":["993","537","324"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":3,"method":"recent50","selected":["413","402","288"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":3,"method":"gap","selected":["112","130","416"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Đồng Nai","digits":3,"method":"repeat","selected":["351","460","133"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":2,"method":"frequency","selected":["86","31","65"],"matched":["86"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":2,"method":"recent10","selected":["90","99","45"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":2,"method":"recent20","selected":["45","96","13"],"matched":["96"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":2,"method":"recent50","selected":["31","04","45"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":2,"method":"gap","selected":["94","49","26"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":2,"method":"repeat","selected":["43","77","98"],"matched":["43"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":3,"method":"frequency","selected":["665","099","976"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":3,"method":"recent10","selected":["174","205","086"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":3,"method":"recent20","selected":["203","661","468"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":3,"method":"recent50","selected":["235","295","203"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":3,"method":"gap","selected":["305","477","767"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Cần Thơ","digits":3,"method":"repeat","selected":["336","453","961"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":2,"method":"frequency","selected":["63","28","93"],"matched":["63"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":2,"method":"recent10","selected":["28","04","91"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":2,"method":"recent20","selected":["04","96","80"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":2,"method":"recent50","selected":["01","63","28"],"matched":["63"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":2,"method":"gap","selected":["41","89","31"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":2,"method":"repeat","selected":["76","28","04"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":3,"method":"frequency","selected":["167","328","400"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":3,"method":"recent10","selected":["328","704","857"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":3,"method":"recent20","selected":["328","857","704"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":3,"method":"recent50","selected":["328","857","263"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":3,"method":"gap","selected":["263","390","977"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"Sóc Trăng","digits":3,"method":"repeat","selected":["704","376","876"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":2,"method":"frequency","selected":["92","13","91"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":2,"method":"recent10","selected":["90","26","34"],"matched":["34"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":2,"method":"recent20","selected":["34","24","52"],"matched":["34","24"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":2,"method":"recent50","selected":["34","75","53"],"matched":["34"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":2,"method":"gap","selected":["80","15","21"],"matched":["80"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":2,"method":"repeat","selected":["68","94","14"],"matched":["68","94","14"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":3,"method":"frequency","selected":["592","662","572"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":3,"method":"recent10","selected":["434","724","190"],"matched":["724"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":3,"method":"recent20","selected":["434","697","724"],"matched":["724"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":3,"method":"recent50","selected":["434","697","724"],"matched":["724"],"hit":1,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":3,"method":"gap","selected":["592","662","294"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"},{"date":"2026-11-11","station":"XSMB","digits":3,"method":"repeat","selected":["370","957","683"],"matched":[],"hit":0,"createdAt":"2026-11-11T02:01:05.684Z"}]

```

## Phụ lục máy đọc — ngày đủ đã kiểm tra và dấu vân tay

Ngày trước 10/11/2022 chỉ là lịch sử ban đầu/kiểm tra chất lượng; các ngày sau đã đưa vào tổng hợp cuốn chiếu. Dùng hash để phát hiện sửa dữ liệu, không chấm trùng dự báo khóa.

```json

{
  "2021-11-10": "da982e829d39165fc24e449ea56167f1267390be276214a97a7d3502c764ba4c",
  "2021-11-11": "13195227c344b91bc3eca7f1c2b39d400c302a469b41a6de08155206d9060e0c",
  "2021-11-12": "928dd6c912888be52afaa95108c8e8e0ffb818e1db6146b609ff54f4fa000a7b",
  "2021-11-13": "96b08140d2a25b280ca5ea238915a16c39e68afa1a14a664a9e2327675ed452a",
  "2021-11-14": "82272d7c4278bd56a06d0a89de040885b380e6352b585460a0482b2279fee0f7",
  "2021-11-15": "79b6e8afa7351cd57c6a5cb75f5f04d432858b46c5e9ac8028d417de7eea64cb",
  "2021-11-16": "16e6aa468511c64541f655a7b5b2732d6819ac673eae0b310c42a3bf290c0823",
  "2021-11-17": "99b12637c2bd57259a5bb1f55a00e5f3e35f228fe4de4d1af15bfd4658504332",
  "2021-11-18": "09a2e8470ad27576531e3a80aa1a189867d52c30e316c2c5be6327c95c460e27",
  "2021-11-19": "086fcc6da2cc89ff90716316b9fd2f525ee638253229b744276ce619079daaab",
  "2021-11-20": "7a3a40707b04bf90a4f60a3220592654e8cbb9ead00bac303d83a83e793c8b42",
  "2021-11-21": "7cc0f97097609b0b5288da59a02df917c0497fb62c7d04f8f78301d25be304a7",
  "2021-11-22": "03d66e6c5d1095eaf2990d25be6cc33e0c577547c82aee1b580d9fdb480a02e8",
  "2021-11-23": "1326f7d073a9f5ba753969a612bdb3dd4dcc15bdcfce2d1894c9465535fc10b5",
  "2021-11-24": "657af4d73f85d7647f973c08f942a5e4c553ef68e5bb2df121a44b970d51b1e1",
  "2021-11-25": "60a15e2268b158687296bfa582d769d593cdf92fd95eac9d232ee6b40377d261",
  "2021-11-26": "1481c48205856f0e930564e3801d53eb248e3e3e738e26b1d4307c63c21c0724",
  "2021-11-27": "7d9337b124da1bfa1ac1266991cb09b0989d7c71c70257e1babf755915c8da4c",
  "2021-11-28": "a82e49efa431e4157c99566a2215a9385c20e4abde710b9b2b46f69aed812859",
  "2021-11-29": "c15f0c32e2b641882e20423d4cc0d68f25903e2aa568eabbd58b49bc59646837",
  "2021-11-30": "cbb8524ffc8ef9d8fafb55fdccecfe2bddd9c4e80cb02b3226bfc6ad13c49aac",
  "2021-12-01": "acdfb23f5ef8f0331c0994a1c03a7e634110c98a7da5393760adef6bbd4a05ef",
  "2021-12-02": "d7f65daf3a52be85bd965821260b79c0d6ed1e9fd38c7fdb87ffcdbd3ae7e8de",
  "2021-12-03": "da72b94990eefe1b3ebbd7c44dc388521dacac367fce8118923ba2e198369af1",
  "2021-12-04": "4e56619e018ef7c45df99beb3725b16049d1ee404494baa29f887b63d85b32be",
  "2021-12-05": "208c57a6636e4b4321b4b55098bd62c753d1877cd8d8e12508a9dd96e529ca6e",
  "2021-12-06": "6554b191617a17708216156eb5d5d4997e700369bdbbf38735ab6f3c4448c680",
  "2021-12-07": "95fd99d5bc5a454aa26371986f6f308361142cc70e1ed6817327a48cb5c14570",
  "2021-12-08": "eaacf1613ec7da8ef3f1d760b94a4df1bf1dcec6eb81ea83429df4affd052388",
  "2021-12-09": "9545d0d8c069164343378b43fdc0a227d9d5bff1114122b685c8b7effc898c24",
  "2021-12-10": "2c6f15816481ad598523e61ef1ee7549164dafa737ea13f0fa6a1f4313b5093a",
  "2021-12-11": "bbf2b4485ececd1e9eb938917d7d122339ed61736b1a72fce5fcb2915fa9a887",
  "2021-12-12": "a7938e8e53c62388679b4db3a9a44ef14371fddfa3a84f909661b21cb95d2dff",
  "2021-12-13": "38de9ed68fac483876449dfab0dccec539d89f075febcf536c70dbe267bee4f2",
  "2021-12-14": "d70b5bea3795b4e93bb7d91b22b77b8545953476a9266eda91dc32b2b75333f0",
  "2021-12-15": "8c6f44a27e44980a696848dee89d4e3db9a7cb1d20155036292c3faebf376922",
  "2021-12-16": "3061ba7dd9adaaf7b41dcbabfefd4bc94e69b4c3ffa20eb0b475487fd21478c2",
  "2021-12-17": "0f966076852d09ee497e42786ab0668e56412e21a458bf27aad67b8c5864db56",
  "2021-12-18": "e1548f153c52d82d4cc7ee485cbb5c24c249ee5b71c287775efcb9feb3c94130",
  "2021-12-19": "926c3222880d0c0c6fdfaa96be894a44ad7a3ba7075edf44ce11f3bee792362f",
  "2021-12-20": "847f6a4a1c8ef1c6ac6dc0e2391dc9f13d801620af588796189d14280927f5bc",
  "2021-12-21": "860fcc6ad5e8512dd99360389416e145c9da5ec2e98d955e641a271a3179899c",
  "2021-12-22": "6cb5d5038d2e705390556bb697e4b42acb5bfbdd1601197299f52d53f20f90e9",
  "2021-12-23": "b7c562ad6c3d0cecee341463ace240227be2617229fa4a1844824cf5dc14d0c6",
  "2021-12-24": "9e9175b5f08116b4f3928518f917848378c4716e9effccbb3539324b06d33205",
  "2021-12-25": "91af8cd848b6064972837d5a9cfae7a949716d0b22f7a106d277d6c0a954502f",
  "2021-12-26": "58d0d573c970cbae3c8323c12a96f8a257dcd9836f8757beac1a537b20f57b50",
  "2021-12-27": "a23fe8c7812008286734290757c0a83f81343bb1465d8842cd88a4456572544d",
  "2021-12-28": "0527f7694fed296fc9567632c9e00404d6a5f4478111f86735274304ba5c38f8",
  "2021-12-29": "e04527a9b8d66b7f36ed309cdbd51c2d450cf5ba54fc02e4cb7cdc92169fe639",
  "2021-12-30": "867a94ce65a2f798ff0f32b3ed4b9c13b02e602fcb09a8ae7d54c260ecb2161a",
  "2021-12-31": "6d0fe0dfd8d146726b0275aea1d3e680db6453ac0556ed4ba3cc8fbf8eeecba6",
  "2022-01-01": "700b9e7ebd4081f0d4359ed4e1dcf3259d2f6045e2e41153132edfac175e9519",
  "2022-01-02": "0b9f39219f94e594de860c4e0de7c07b05b2c9556ee9e682dc357a6e0f2052be",
  "2022-01-03": "d54b81306514a41e060849681042513cfd26474e6aff97de2a34a747e09165fc",
  "2022-01-04": "4cbfde3165eae9d3cf74481a0611b55394184d5e735c1a43348a5006a6a0126d",
  "2022-01-05": "47d727c6e2f54e95f4aa41ee00ecb541f6b44112b6f23479b9f7815892660323",
  "2022-01-06": "8fac59de9aec8e4a3f360ca4fd803a2a8869c4bf0f06d8cc9e0ab1d9ca4038fd",
  "2022-01-07": "0d25f21a9e227ddb10c31e3243a93403719b45355c09c57137c008da2bcd3150",
  "2022-01-08": "d658c2ea5a3ecf82cd85ea4273a8fe2018227e9e2857d22215ec4ee663d45fdc",
  "2022-01-09": "b1b85ca01dba4232e3c7c4bcb93ed4acbbbc7150900d51052f31e829ce1edec2",
  "2022-01-10": "917ee69616f1d78d5bb745539f57f4c43cac73ae91ef2ece78f0ee4c43c055dd",
  "2022-01-11": "8799c8dae54152efa6c11ed325d956f4a576b2fa1b5b92c1234b0dac17014ad8",
  "2022-01-12": "67ceeb5bf8050552894729b3cf749eb6f1902eac2a2868e71ea0fb621621a084",
  "2022-01-13": "67026a808c26f758f14f66ccc0b5357a7c7cc0938a84f9bce142014f8e14a6a9",
  "2022-01-14": "adebd269729b568bff6b5f14147d25e3f937a1e3550240a35fa7f5369a22d05f",
  "2022-01-15": "bc05a90d67dbb5ef067bc029a9343ecb868cdac23c006c83af534903ca27fdec",
  "2022-01-16": "fecd2760f82ac3275f5d45e1375f912e45eb1d0c7dd7c682724a6fb63cb214b2",
  "2022-01-17": "f74d6b5ec395358bbcaeca65c37cd4545f2f5a37a522a2c58df721a428eba028",
  "2022-01-18": "c456219287b3010fefa36024a2989cce32c7b7113b5d3814050f44d8a40c1948",
  "2022-01-19": "3454663604a03864624166c2aeaba7fb052b2c72aa25737b315a5a517c6db1ca",
  "2022-01-20": "b299f54845de2dbe7f1954cd8f3a682ed5b9c7b3b8d314bbaddc4fba144f92f1",
  "2022-01-21": "9c84e0c91d83b518c8c32e59113a8b6aee805cad59a70567b1a5844604f3daa9",
  "2022-01-22": "1783be162308edb06cc0e3f3839969f88ce02ea518dd412d42708f2bd137bdb0",
  "2022-01-23": "c8d57bca02c5d82bb28b3db4fa8628324ccc23a0038eed16651b2aba5bd971a7",
  "2022-01-24": "b74a6f9922fae5d8d3738a4017a640beeeacb411223533c866eba86c109225d2",
  "2022-01-25": "ef318052fa7c8399778fbdd9753e37677dea1eea766517ba17177b91e072789a",
  "2022-01-26": "763d5576fdff9d5a10251d95502c5117aef0ee8859ce865f0fdb0df4c7bb87d3",
  "2022-01-27": "91f38207a10170f2b8a350419d6563aa30eefde5ba56d18af7558d583d45fd36",
  "2022-01-28": "9cbb8a6f4172abf57c653e244caa6ae4271259e2ecc68d073cfdf777d95cc796",
  "2022-01-29": "19620abc0cf57ab014b32387b26233d56839b7be4fd63609ca671a826ead6388",
  "2022-01-30": "b05e3ff3dd8e9bb60de165947ae3007dbd36fb959b65fc6c8c3ce7bea50838cc",
  "2022-02-04": "732bfcb408540823779b73d63fddbe17539a1cbd1c07c825b76065a20feed14c",
  "2022-02-05": "7523d8579fd3f0d48b8fd7f190109a1469b123321bbcb44817b6e8509c3540c9",
  "2022-02-06": "3bccc38d5931359bf53807896250a553a76e54d74ea9b6f1ff03696c0d8aebd1",
  "2022-02-07": "9ee8da7f9c4131a5ed4956ac2d96709ee6b219fe3b697881a60725cda4760dc9",
  "2022-02-08": "f7bbcc1e320c7e3888cdd5cabbd498fcebd02fcff3ca8b8e8b25d68832e967b2",
  "2022-02-09": "e3d3d57e7cbba95e19807b15e87ed8eacd476b151acedbb23dfa3239559d9f8d",
  "2022-02-10": "82e86cd91c9224e2615139e8685c8b36a46d02c5a16639fa2aa879053a3566cf",
  "2022-02-11": "16df8f23a7ef31d2e855e6f129bcb4042639be1856dd3e5c4dbf2b1339cb709a",
  "2022-02-12": "68bee3fb27109bf5e719aa94f814f8505a26bc7edd289a73972c60e965dd72b2",
  "2022-02-13": "09213492944e4945a3ea5f91a15b6e609d9675b0fba9b00883d9fbd683bad3ef",
  "2022-02-14": "3cece84490258d4f78b30594aeffa0083a214355113992cd613e626154e64a44",
  "2022-02-15": "565ea176f5e1f6da99bc5aadf54da887f26cc71fb4e36f140b7cab535a961772",
  "2022-02-16": "a1089b279dfb7e49068f4ea39519fb9055aabb49ccee781a0dda98457ece7dcf",
  "2022-02-17": "64a084385ffd431189a9bcd7367a817b6c8c5d3ae2610c91e430c9098ba04da8",
  "2022-02-18": "854f1705111b0a63c7f7318c4fd130be9711a1cb2966c8b9eee019f2532d8686",
  "2022-02-19": "4fa4ce437ab76e05d39c2d7a4809db51b50d7b8c18d95336f1afc5db81dd0261",
  "2022-02-20": "84db9fbc8109cde36b558ef57a59a2a0049d609678a1bd1c1126c2badfc8cf0a",
  "2022-02-21": "310a8f411172bc47a7dc155877e6c964d7e2b89e05b6eac0a306b71efbea369f",
  "2022-02-22": "456db87e8aeda544c002032f5f22189a8ed59cba2331995e9bcb4b072ce14884",
  "2022-02-23": "3b757ce8fe90b73826bb72cc8b68e17f4046ab902712cd9f2bc7d98dafdd6505",
  "2022-02-24": "43d6059a9b25e79489e05c9d21fdf90831e98649b38399cf11324682f4309c4e",
  "2022-02-25": "0928bbe1f4402eb0eeea1f790a7f164b866a0fe3647bf76874119c070eab23e9",
  "2022-02-26": "acafcc9041484ee3eaaddda42bfbaf39ba526931f9b6b72276d3b196174b5fe2",
  "2022-02-27": "061f6f0b2166e7e07f6acd498e58876e72e0ee10fa19475d1fd65e2cf20ac7e0",
  "2022-02-28": "141073ab853a8291adfe5d9e59e5f2c5c285c28e0e89b76a203bf4c0debdadce",
  "2022-03-01": "0c30a83d44c561c3b06d4eb025061b413a1a4ebcd77b46236a26058bf23cf506",
  "2022-03-02": "8f52c712edce8b742fbec0deafba67ceedddac679a97d502b8cff346f5413f1e",
  "2022-03-03": "d6fcbcec69ef6b861e86728700f1d2a11f259c8feaca3f5c2df2b3c14d57f763",
  "2022-03-04": "800ef6ff5c8e961229faddbadd5d2067ae996c569b68405f161417af9f53dcc0",
  "2022-03-05": "a16377d5bdae40b6ddc00402042d767f5cec8a051422643a3bf8f362436aaf36",
  "2022-03-06": "dc63e62ffaa3a391cd3e6489b9c0ecb354cfa1efa0caedfc44ec711ec9fd28ae",
  "2022-03-07": "6a4016f901b8397c29f20192bb087db474bea710da41b97136463264b5230576",
  "2022-03-08": "dca2c29006f6f40de7f18963a128ee61dd0f2aaa816e783a91d81625446ba6e2",
  "2022-03-09": "6d0ff30007be93561f656a02b97545084a43d92cb48fe79d39bdec4442413e26",
  "2022-03-10": "f942ce573c2137effebccf699ca4fcfd8504f5404095b221b8fa8c069b7d5f92",
  "2022-03-11": "347a41dfe140e140b62c577b86179e4ca850c1b50fb1521c7ae2020a99fb8016",
  "2022-03-12": "8936b74288f8b3a8266b9a989393e20cf016c2d582950ab8fb832ad9aca51df7",
  "2022-03-13": "2168ea95f6a1e5434078e7531c6cb87c0688b0521e24be060a09ac5dc5d5ac30",
  "2022-03-14": "6f57566bd949e06354d4d83a6f9310697305845828427bf232de4aed510321b2",
  "2022-03-15": "6bf2520dd22587e4fb0c421911cc2e7b9cd00b8d8be6787a0f09741be9f650a8",
  "2022-03-16": "3f9736b3f8dce2f25c99408a28a8868bc9319b9a03d0799c866dcb6a2385ecf8",
  "2022-03-17": "1c5e78d8032b5787c07d93627927d76a00ed8933884b5d58933a5cc8d4a20d4f",
  "2022-03-18": "53995b7f9195720b01f4d15960a0aa87ebec7d639f261bf19b413401c1eed443",
  "2022-03-19": "6fd665d95f88ab78d0e5f27bf54e2b262f6ef564553aa43ed062190d00d23ed7",
  "2022-03-20": "56cf2b7dafd974bf237900cb91a690eaee2bb79b1caffb7fcb2a7fe36359776e",
  "2022-03-21": "81102b7c9c9453962cba08b164714bfc5302f9ca0948c31400803c4c642a7873",
  "2022-03-22": "239663f80b69379ba6361c43092d84456560afba2e2ad6ce4a873e956cd588ee",
  "2022-03-23": "b262e045e21f5f08b080907b434fce2a1a2a7191a31de3ef577e499a341ebc3d",
  "2022-03-24": "2d2a4020d34856034ed35e62812a6185b48334119421fb93632148bc6e247397",
  "2022-03-25": "19093d4222e183c2884177c7c211109b6cd60d397fa6554468d8c509e7a313e3",
  "2022-03-26": "430cec9c872c227ac880fd3720c335eb547c657382d8077d2936546715d10d25",
  "2022-03-27": "99d8419face0bc33e1586ce15808cab1cfb89aefba4db62481fabff45a1d87ce",
  "2022-03-28": "443d6987ed14d11ded198aef7912989df6b637ace74d6a921d262bf2249084f9",
  "2022-03-29": "4185469de6d05e07eea8e0c14e41b216b0033307ff515af963ebef5dca309d28",
  "2022-03-30": "4fe97619fd1b42172643836073f994fd561d1521c0143ff9a86f7d58211c88ed",
  "2022-03-31": "333d593ac5c4f87a4ee747b017530b49c2993d8413cf2eaa40da7cb1f8ac7195",
  "2022-04-01": "c282f9b0a77eac2395eeac45a648e1c996b5b73b4d021a3a1705413d576cae0d",
  "2022-04-02": "a5453da7b779134996a027c07499b99dd0700a328328d677191e7739c9288eaa",
  "2022-04-03": "6e0c60c4b72cea1281157ff9302ddd3ab1e8b3fe988363003f9d5d1dbf46d9bb",
  "2022-04-04": "b423f8dfbf6ba536fd752e89bab25cf0a75e24fc99bd512ab12c7c6d0995df54",
  "2022-04-05": "750cc4f269bee998daf91a7c0d7f675883e5f2a41a1e8ee9030802684ac83a7b",
  "2022-04-06": "b23658109cde1c46ed97146fe19ad9390ab95c31a16f209b49840a55ca3144ff",
  "2022-04-07": "32ce8db85453eaecaeaf11fb054442baf09f165679a27c71b28f749f3fcdbe0d",
  "2022-04-08": "44b09cab88c5f4355cdc619b6eedccb9acae9f2b429f82447426e99e3faa7ac0",
  "2022-04-09": "187dab75b3516433e4a4d4baf9cfe5649746c9268a46d705a1c9c17fadfd31e4",
  "2022-04-10": "8fd65a78334f8164f1b0bc071a3ee37d87aee78288b64d81845e32b1de2656aa",
  "2022-04-11": "f3ebac08b2b3ee41b251e69c98cda9251a8fd202a594bfdc6fd2b2485b64da7b",
  "2022-04-12": "ca7d64fe72acebbe85eda4d6f1b985713dc5478d405be4f5b1da3ec8054c3146",
  "2022-04-13": "ec17b5cd993de2c1a7e13294463c256582bdc9671cd81fcfda878ce638424a0b",
  "2022-04-14": "74dd97a6320d1636594e636514b1cd8a5f231c59549b159eecd8602fe34e62ff",
  "2022-04-15": "84df525f7ba2e435314cba406c94aa0bf30394cdfaceaab349a2d4dc49fcfca3",
  "2022-04-16": "1906ef82fc08288385eca4ad1a98f7782d877c2df14e0d4c01109f27fa0356e5",
  "2022-04-17": "58478e2dacfa408362b65dd40c6c09f814056d5540b67756851922b3f22fa654",
  "2022-04-18": "4e283046211cd63746bdefc6bc99724f69c16eb31813a5cb919ade29b03bd7d2",
  "2022-04-19": "c41962dd7cebd4a64e1ff4011a99d196b7e98ca8efadf85055b8031a9105ea45",
  "2022-04-20": "9accdb6b6654536d1f4d473828446af0f59ea96e45b8c78efd49e7d4d9f60e93",
  "2022-04-21": "2ccf791813cce9cc3e422c33e431adae4f6ae9aa9055bc748a1176abac8b24a6",
  "2022-04-22": "470f099898122de977c85d85cf9c104b0c4c57cd47a6bfa8d7a1762cd0c023b3",
  "2022-04-23": "d57c78930397752fc4c6203f1b57e3115582766a0d51cb2b4e59e90bad4838ac",
  "2022-04-24": "b9dd40d55bf4812efebe3d6912d9fd413f993a116bbd49a281f7d79b601d4920",
  "2022-04-25": "212cdbaadd08adaaa366d31406edacf069cc4d3415c0864bf1345964b2341ac2",
  "2022-04-26": "a3e409963fbb531a69eb06840fa853f92dced36087a5673f75ee6656d9ac222b",
  "2022-04-27": "a3d0d7ca93077de5838aeea0b2f7fd13a263550e9622dbcb89ed3b68cace2504",
  "2022-04-28": "75592d1b455f3fdf6c8812d83ba471518c51e0335663f35f00c1a3be4276c57a",
  "2022-04-29": "bddd1c89800c4c92dbb1954df8b823bb52c4f0fdb9409a64b66879b46d565fd8",
  "2022-04-30": "9d314b774252d1a081a923692f6fec991d396c114262711ccd3770ecdeead5ae",
  "2022-05-01": "08fa46b2fc4221e9fa14cf0810d8d04c591defdb0fb86e519f030139e995390b",
  "2022-05-02": "109f82134b52cc370ae26f19e1c34b9aae5909efdf16de96455a4e8da5752b1f",
  "2022-05-03": "a917e4d6af37c8fca3661393fe843db4ea7f8a7d17d6c25199cc91cf9f1b776b",
  "2022-05-04": "fd0b880f7df90aa0daa37315d2a52761df5b882b09aa5746479649f4a152c285",
  "2022-05-05": "79e59c37eb96a95fe92821392854ac69b93f7655a623037fae16764175a022e2",
  "2022-05-06": "e54b7cd798cc8acf59ce8239a181680b8822bbea7d9a98714811cc3047e1d63b",
  "2022-05-07": "af68b8199e1298e1147947a023d414dd41318ddf95acfde19b091eafa37d261c",
  "2022-05-08": "41027c3ed864beac7ddf5086092e720ca1da34ebb295bf0784bfd1690a0b2594",
  "2022-05-09": "0bdcbfd726e27c3ecf563b02a66fc14b95eeb040f436c078c6783f68c924c587",
  "2022-05-10": "e29d1402a82e54cf698708d7857e9677812afc7b9878b8ad542079906b41b83a",
  "2022-05-11": "766e1ebba81aeef618b063a7552ea7a0e5d6235357fbcbc1d2d86b0f26b3ed96",
  "2022-05-12": "d914625b9770a323ada0a512985ba37f7adb6aaf76d014ebfe454dbb1f37abd0",
  "2022-05-13": "134ed734c09e0da6a6850d58b97b7d4f067f4d618af256ab6ba022943b97838e",
  "2022-05-14": "1059f2707e0205d69bd84aeda9f28261e9aac037af478c6d1a41ed5c65029b1d",
  "2022-05-15": "e52c5a136151461818b768b616b0644ee0b8e8eaacd353dde6ca8bea107a4115",
  "2022-05-16": "5f0819a748ac04e779373c04bf74d81b15fd186f42d8e198ce19ebc3f023fe0f",
  "2022-05-17": "e7e69b198902dd796743abc72685cb1434e21d791abb0c24cae1247cf9f30c02",
  "2022-05-18": "27da26ee2695954920b4b8a6479a39ea173a5bec9e7a06f7ddd50698e0b5b7a9",
  "2022-05-19": "549fc6560f36376da37c32de36e325c5dd7197f0d422d19381a2363a3cafea67",
  "2022-05-20": "d94126d2d3db9ebbf3d30f0912b9f8752c7bccd500643f8b6855551e1ed2cc2f",
  "2022-05-21": "48fec2900dfeb4ee3f6bbf610f72755fffe51af65d0d9d0ac839cfe3b0e57589",
  "2022-05-22": "955ca42c44ae8990c4f973ed3f5184c14c9b66e9c9dccbe5115b646cdd1fd69f",
  "2022-05-23": "b676d7d58d6cb22359fdc90c30978a1464e7cf7ff47390ba773b0647610f5a16",
  "2022-05-24": "192c58b747f7d3dbe3ddcba793356bb42333494dd4b5e3976764dc116de0154e",
  "2022-05-25": "90ee78e621e5bdbb85106451a8168ddd7d4cd98bce93dae8ef78a39f0bf8cd81",
  "2022-05-26": "22aacd2e42b1156857846e28eaf9f02c03a84e7cec3e5db8568deb268b80d0ff",
  "2022-05-27": "d9724cac33f645737eb98f4a1fb49aa428b31771a9b1b887bfc45db6cf8c3b3e",
  "2022-05-28": "6fb0b7bc2e0eff717838847252f871045d8ac77cf6ccfa068fa55aaf2daef3f8",
  "2022-05-29": "2721992a7d83208c674fb48ea960b340262b29852ad2bb81d86b9b46901a8167",
  "2022-05-30": "0cada59b8326547573c902c68a867e178d785f02f36ff60255899e8f9ad06fc9",
  "2022-05-31": "4de6092104f4a1db1f5d10a6270d8c3ac8a544117dab6f7f99d0441749c16007",
  "2022-06-01": "ae0a4dddbe03548d8c617fcfb623a068af6e585dd9a0f688c1754ba065bf946e",
  "2022-06-02": "ea69d15f9a0fd20cf9bd89b39b51ef1de997dc0877f21245d85602ac6583cf5f",
  "2022-06-03": "6e418355c330ff0cec7b7a21a18fbf08752630acce530a6344e32d1213517753",
  "2022-06-04": "e6af7549acda6de71abcfa24f23d2bf5a2002a8d5102fed99bf4344eb5c2bb96",
  "2022-06-05": "51649dad91191bb92e254df769c2375984832e8d0e2502de8cad1678bc9abe1f",
  "2022-06-06": "90bd06bb671c57b0b017aa83d6cb3b2ecf5c9ed26f936a01d3bb8b9687ae80a3",
  "2022-06-07": "40c221a0e29702e175ee97196410b0fdebbef9f5cffc358907fd98380230e893",
  "2022-06-08": "c675234b140c5384fd6a173b7f3ff5c1df04f1f822f63d049381720ebe74a65b",
  "2022-06-09": "463fb85e53bad20c686314c4c892848323b57b7ff3ad6a2f4876848338ffce1e",
  "2022-06-10": "c4b1457a65435c3b10331016319f8ac8dba3c89007b242fea42b8ab6952222eb",
  "2022-06-11": "81539055b40fabd8f1643002e496ae60976690cf5984ac11ca50d03c0195699d",
  "2022-06-12": "07ab851f84469801429d129396ce124be36e8b3bf4ed96330824366c6fc3bc02",
  "2022-06-13": "0f457b441f3b3d524a1bd5e432ea5727d0a5f6b4e381a6713022acb5040c5059",
  "2022-06-14": "82149e3e09bcc443e505d9fe33b453606795075b309d94361b31e417831c0d48",
  "2022-06-15": "9cd83e39a2219c2e6da66e932c8269371122e41a1948313b01b8b5fc43aac0fb",
  "2022-06-16": "39c5dffcbb251adf092d7a9f277c491597288325f74093bd4608b48c8722736d",
  "2022-06-17": "847dde1712db22f14b1b1aa5a0c1bb0ba7b24e16205586530c130f2f64ef8cdb",
  "2022-06-18": "0595f80ead7085b804db6d3ff6a3709f0ffc92c83b73d7b59f01b12acffbb937",
  "2022-06-19": "88bc4b4efc019e715d2200dc52c295a0ad40faf6d8875bdf2647ee64c2a96691",
  "2022-06-20": "a5d903625baa4e58b009e50d01eb17c2629aa28d1556f638ddcd5101d654dc8d",
  "2022-06-21": "569ff5b006204bc0f0db4d97f9d017422397fada5b80620e855e4c0b26afab1b",
  "2022-06-22": "ac259905fd3ed61e7f39bd19d40def777b65fb7eeb5c4bd332d02f44cc369d44",
  "2022-06-23": "fba7ee41dc2794d9b032729039e00c66d21307aa5d4f089980fb9e7a47be6260",
  "2022-06-24": "313918ab1a718196a00d6616fd736cf5c87e77c026e3a378536d41ee07c24df9",
  "2022-06-25": "0fd9a52938a03d9b1ba61a6399a82d1c2178dda9e2fdc6ff639a31d998baf24b",
  "2022-06-26": "abc8269b2340fa6beb70dd2a3bdcf2151c69517a9070943309ed52083b191f98",
  "2022-06-27": "4fb3ab69500ce342bf5108193faa771ea7c6ee89230f747d2972d42b8ccc7a81",
  "2022-06-28": "c5aee31c044f8637544cffdf530ce54ebac4ac671c82dba0ad8398b476e77631",
  "2022-06-29": "9ffc8df16122055bbde875761b5c73bdc1d739441cf798ca69a854774467c5b9",
  "2022-06-30": "0927fdca2eda579d17ae05893418023cb5b8a9038f0e5e3e2ec4d7bba5409abb",
  "2022-07-01": "f40bc6179a3462065b6f3a10a6b3d9f50ae57501c8a95b7f83d340a5fe530b88",
  "2022-07-02": "46c98226c0ceac30ae25c518ea75c32fd24b03d343de9090775e838dd09d59ed",
  "2022-07-03": "5a2c3d9004900c8ac992b7b490a79b967b3a4f8f2e241d97f95675fd74b8b4d0",
  "2022-07-04": "2766b61851e75ccc4b0e8b4dead0d6e73566e1488477a495c4e308d9e9668d73",
  "2022-07-05": "d434f1b96b7e76e14a645fb219e6db5bb042433593669f2ce1c56c22c2b418b6",
  "2022-07-06": "91065c9af7f6daa26b14ea1f91a91a0302d348d23ea02752ed853243413cd0b9",
  "2022-07-07": "e0c586234cbab778c166ba936bbbb7f6425f1653fb6d18b1aa72c902301b1ac0",
  "2022-07-08": "84cca0c823081ccb5add6325a381ac2d2a6f4706ce521a7ceab15b6257cf5071",
  "2022-07-09": "ee8e1a1ddabbc6e5b73edc7bf18d6e768ab01c79f913586fda9864b7907e073a",
  "2022-07-10": "97eca8e66334afd8c59c7842a4810ee0d71486ca63f8b2c1be2b1091a866d7b3",
  "2022-07-11": "06ac31e14bfc957c8697324c6654d732dea4848fdd080eb136b9baba5a6eb469",
  "2022-07-12": "d2d0c6e855791641d73856d2aa293c22bd067a8bfccd0c136de9dd8daabe21c4",
  "2022-07-13": "35bf5e7befd68566d52ef70318e8bbff1cb2b9dadd363b6fad69ccc60b4a6f56",
  "2022-07-14": "304fd396867bc661aa3f0e4601827ba6665588fd93bb96fc728123a52c882400",
  "2022-07-15": "04624f86f254610de6a202b57a7c4c1a2ccc74e4a2c6812cb7a96326bb765842",
  "2022-07-16": "f85b9f117f5558c620e1fa82bccab2a886be964ec705b6a7c0233429268dd384",
  "2022-07-17": "2e1f5dfb2be325f7445a3e755c2103b897b9bf5d865231a94e3e29700922693e",
  "2022-07-18": "8570d9840fc51a8001f9dd405d2cf70706735d1b3d84ba47638ef3ff78f5b6f3",
  "2022-07-19": "7c52764eba358ef209623f8e3e78c83db2e006bf0644053aeaffe76d94e9156f",
  "2022-07-20": "ccbe8b8dbee2f4f5916209a31f6f3c68396d11ef004a03cb544c15616e4a9870",
  "2022-07-21": "dae2404d17784ed76cb7dbb6e261bfdfe52a05f817d1773fe7ce30c3f2c282a8",
  "2022-07-22": "f6157af3a4e213da0d571d03e195bcdddbc02382a041faa1717bc8f387d6d9c8",
  "2022-07-23": "627c1d84e74936948678358966cc58246efc8890c85583740f88c0fb97e41b5c",
  "2022-07-24": "a16c48ae16edb06305ff2c69ea9f5b6d58d8bc5576971860fa57934bbc5e14cc",
  "2022-07-25": "c04f2d543ad925dd020522c93402da1a5e037ac85387a5f5b33dae07eea0a495",
  "2022-07-26": "a7be038ae4526b15b81ef812590dedaa9024c8aafa983925577bde8ce019deab",
  "2022-07-27": "e24935caa23d1c58ec85eb654077e6e07afc98b5a081e5c6d6ac6f7150613992",
  "2022-07-28": "f28fe39cac0cb3b9ab1492ee24ff4a6fdbbe227c86b0bb53006e90b5ec71f39d",
  "2022-07-29": "6db4b0479fb7f2a497fe1c1bb4dc600f4777f09aa5779754c41a5b52874a09bd",
  "2022-07-30": "4fb47498851a325e49ccb80ba83f11b8d8efe1609575d9dab7eb57882f32e778",
  "2022-07-31": "1095ec2bb081c464d3ef5abe59fe0fed9c5c14e5a9fcdbc1911ab3755da46782",
  "2022-08-01": "6f6af41e037ece6a5069597ea446393afc9874a5df43f2001500145008e763cf",
  "2022-08-02": "bd72c804982cb874745bb042ca2b8fb315f979b9126bf5e591b7dd620c432271",
  "2022-08-03": "cfc9ab3076eee99f63796089bdb4e3e73f1c3fc73aba21560d44f3043c65420d",
  "2022-08-04": "8d693b37cb60ea412687ef593cca29692ed66a84f1a41c2d51c8373654e09548",
  "2022-08-05": "eb75f2558753c6301a5e24a85cfe799f3ad941f3485fce82f02ab93d0ce1ca5c",
  "2022-08-06": "5ef7bd9d89697beeb3089d760e6b0b2e0abb858192693b137b686195b0e0390f",
  "2022-08-07": "b8e9183fa2c20e5883c95a82aa5c9e4c679f082a78872e97e5bddde70ab39e4e",
  "2022-08-08": "5c25d9898a408902fb97d6122863a05439e23ff78b4b8e822800a98051a48edd",
  "2022-08-09": "9602ccaad9f80a080492d2360cafdeb36dc96db2212cc59810741b874b6def35",
  "2022-08-10": "092cef674f0d89d7ade8c8250588ee33a08e389563d6e42630c5d13b402e0000",
  "2022-08-11": "e403263155e0057b85276cf76f24ff6dddf09fbd0aab66a1d4a65cc196a7c67e",
  "2022-08-12": "762670fc667545402f1bfb571fe5e9e5a40086912a6dd67babb0ad2bcd65bea7",
  "2022-08-13": "9486d8c2ac568851aaa5f0efa215c1415cb6ab271fb240c763a1d61d2440734d",
  "2022-08-14": "31cb322722d6f37d0bfb4616bf9df4adff6ea2ac65a20e31cb46dbb999a933f0",
  "2022-08-15": "2106451df8d932ce3e0203c08eb6af677f10a935768f66fa7f73049214fb2eb1",
  "2022-08-16": "8a4dc85985b7a982132adc1748ce5a7221a73598d08d23fc63637adf9da1c92f",
  "2022-08-17": "56b795a2369417aa20df2954e25540710dfc9a083a8ae8eab371e601c627d681",
  "2022-08-18": "ebafbcb91f2703a3f793e0ee84a89fc43eaa527b51d438e44c916c3fb3ef400d",
  "2022-08-19": "6f1b956205928b3b75f51463eefec6974b66c11cc5e3cd433d7493f891340817",
  "2022-08-20": "6f8a5704f140405d1e106c1118e03449e145d461eeb2130aa840ab88a5cfdb6e",
  "2022-08-21": "2658985e995769c6693f3ed964cd5889f02f6e8c2da1c18d9bf74d655ff2e0ba",
  "2022-08-22": "ffb2e3665b19f395b129b9d06993e386d9ce2afebc879beeed6cf6a1fa530aba",
  "2022-08-23": "cce19ec689a47bb2be800766d5ecb282c636955996549c378057632c7c2cfa0a",
  "2022-08-24": "f597a01d03620f4b73ae43abef8f5dbdec5f6eee81a60ad2ed15c0565d4e4517",
  "2022-08-25": "b64ce34e1b3b9d6621fbc62c911717c65a3d1e6680a3e8fa3392b8cc252e193f",
  "2022-08-26": "ba1ff8e48abfddc8c5b445083c6351237b8b832a137048ae316c80ced36560db",
  "2022-08-27": "9a0c9a531504f51d21ea410e0a7ae530755a188aaf4b864c88484e9431c52319",
  "2022-08-28": "e1cef352672313f45361580afa82d586e5d8745966afdb4a8908b14fffae31fb",
  "2022-08-29": "9774d9607e8a4684b555676d494529249c3d9868ba93b2a0afa0aa0c36b11c63",
  "2022-08-30": "9c3aa862ea9745bdfcece4b9386d1c079642998c3ca023e6f27dff856acbcaab",
  "2022-08-31": "236e9f19b67bb2a5fbbe9e355dc94471becf0322872cb1c5d88a3f1cd69e752a",
  "2022-09-01": "012965b79b9a93faf3a5c00d1977da34d20672e378547af86409bb9033ec0517",
  "2022-09-02": "3330909b23d3da76dffc01a6d999b30b8723c8db165d15b3623e7efd2313c7dd",
  "2022-09-03": "2fca59bd5c9dc7fad9874384cdc7d7fc99927dbe8d2c04c5cb26b66cfe404a74",
  "2022-09-04": "6c7a5d0245f64b03d0d20fd6efe3527dd012f9691ccb7133322b7d09e75763ca",
  "2022-09-05": "291ee29693cfea23f0f16916e7d90db101aaf64a47ab6c2a9a6df29e7e2ab953",
  "2022-09-06": "744518d15b865905a6130fa80e65addfbf195a3ee144fc7a8a6e7b403b49b14b",
  "2022-09-07": "976d5e2f9889176d9e438005ae1d9dc6da6aa35f49cd342a50c001b3714064cb",
  "2022-09-08": "b86c999e759aad0c8b068fa9bece22cc4d1f625244ac46f1428ff7e6620b373e",
  "2022-09-09": "21cf4911b2d5ed7f4088eb7665201abfba53c510075da99e7d079a1b691fcc4c",
  "2022-09-10": "e68b93fe8a177ff595e44ba750cd6fb6d8542a844e62649a117b0ba97234762d",
  "2022-09-11": "1e2a5ebcb6d52c663f528a7ea353534fa9dde6d84f0ef574b42306207e039f08",
  "2022-09-12": "9260ce6d858b21cc078e58449fd82df2352dafb4cb24a385a6e67418c1619856",
  "2022-09-13": "0cb19be5087981a48e439f7266621009e2ffde031d399ff77d364b39a059d82d",
  "2022-09-14": "8ba029abe29b4ded52c604e76400a9ef16f2413e351e6a44d988f9a6759d0fa2",
  "2022-09-15": "81f815fb78072a09212fd5dd221233ecd8cbafe22e499f12b49ef9053f145d90",
  "2022-09-16": "c35dd913afcfdef8960c96cccba8ddbaa9d8eae6b7ac3b5357dfb013fdd53fec",
  "2022-09-17": "6f55eddb7682ec54304605d919ba5982c9e674c43f0148592f6ed8a42d24f86b",
  "2022-09-18": "b023e362b21979e88d404cbbf38542da2e1a8e86763543d4fd536253d0c4d60a",
  "2022-09-19": "2bd448d9ab6eec68604aa627e6d58e40ae1848611a48ee9da41c8c78a708d040",
  "2022-09-20": "b4d5070dc92cb6ac922be950c488f24675d0b502967f3c1e04eed9f98b3db368",
  "2022-09-21": "490f07811ee97409c30d8a8125158e4565b0b27421dadae192b481b0c044d793",
  "2022-09-22": "72a8981941a9d2432da6a6513232d513c9e32260d46ce0f8732c3a6a8d181efe",
  "2022-09-23": "eb76ddbc214f55676bf425bb2a9f97f437fe7fe62887295ebddde3c453fa524a",
  "2022-09-24": "a0822eb23d56773fcbf7efda9b1b16842f9231b53a5deebd668a558fd51de874",
  "2022-09-25": "c694716f5d74d7a55cf25ae019043c0eb8755b36197cb18d692418a6c6593da7",
  "2022-09-26": "78febfc9890ccac40310f9dcc3fcf25b96ba8d6a75c4ca3a81d620d99fe2a965",
  "2022-09-27": "6329151a2381779b4dfacc8da0c047a47fefb1f53a45e299857b13b64267ad0f",
  "2022-09-28": "88fd893dd10ce09928aaef0588f1de01d6cce57ab63bb16b882618fc9ae792c5",
  "2022-09-29": "45894f5492eda1f452bf6b3edfad529547b2494409b7129a48878826ee1ec943",
  "2022-09-30": "e47e3f9d149a3b39f09b6e5083aac49696857724f128b103c3c5fd01e412de67",
  "2022-10-01": "ffc27050f09ce39edb263a6fac833571a35bc05dc06b84a5e637cc1ba3d627f1",
  "2022-10-02": "42d79690e426d614c840270ad7c7f8e76449a0efbdbf3c396f0aa5d4ed997100",
  "2022-10-03": "062fd78c664972541f96dd78def7029635560b524265d0827e5d2f3defb212b9",
  "2022-10-04": "c2d8ad798b38d9fd89a48f4b9c740e4cf3319832a5c8d3d4ef2053b37b5a8f52",
  "2022-10-05": "5fbcb7b6ce6fb792847420b4404f02c1668fbaa0d979b1b626897267a8e128a6",
  "2022-10-06": "8f2751780e388dcabeffdf5c7bb0b300b2100ed3d2add172d0446895dadd9ace",
  "2022-10-07": "d5273a8633f54cdd58f0126f5850dd9db464479cb9a500cb6a0946624829d838",
  "2022-10-08": "48b177fb263ba29757cbcbd7149da013eaf8cfcb8a13423290490ed07691b804",
  "2022-10-09": "3ed4b827b26188d8d06b2f103572b34658192d86695e5c964fc4bf505f5295b5",
  "2022-10-10": "0be60be966f21d448564fce6764507a8f620e11e98d6545e9f0cedbf8d8109ee",
  "2022-10-11": "6d47bde45031e5ca72f1cd68dedbda9b467b7efee9d7409ba0e4c4aa8f6d2d79",
  "2022-10-12": "ba7c1daaf1d2a626f28124d9b7c521beb1e84b0de1a97dfbb119c23c254d33e4",
  "2022-10-13": "356bca7616cf3c3b2277d8a1468e9c2ec8ea7f5b038475be51ac148a9f6a026e",
  "2022-10-14": "fb12663eaeb777106bc2bb11c2f8cd16556870994ede4f410b66b5733e4d62f1",
  "2022-10-15": "5b99dc23d4392fcaa1aab99a54e3c528c36537042d008cafadc17881d5230b36",
  "2022-10-16": "b2dd389481bb8ad6f6b29df06bfc5057d9629424f5d558f026dd3efd1ccb784b",
  "2022-10-17": "3855e62b0c26039513ef70c3d7bec4fe2a94deb3c7a2bf4e1577b01de6bd36d7",
  "2022-10-18": "706fdfee6794a623c29c118af99084b570950e4375f5c1cbb0c6069369f8be43",
  "2022-10-19": "0a439090e60b6458ab72bfe5702b7173d053c8a60caf549604cb599ba50157c1",
  "2022-10-20": "ec55cd806c7b7d94b59da122f3ef0a078f23f18fac2bbb3aa321ff69a7543c4c",
  "2022-10-21": "598fc2e13babb9e5f8df8a146a6694974d62c35166f7a9ba774633ae8a45bed4",
  "2022-10-22": "6aa743a7eef6df5663ffa1608283db4b036c056f1ceb79c344b77913bf3c2f12",
  "2022-10-23": "11ce5084acdd070c9f4ec055fef9f0c779bd1257d89b379430dac2ed00cbfda7",
  "2022-10-24": "ece6d1fc177e1de10503a14173db43c1cacc02ee9eb4b693dda8a35a18cce6a2",
  "2022-10-25": "a8f909aa1ad1b55118e830cb6e61bb4fee000bd13aacd048f7987dd4acc5a2c5",
  "2022-10-26": "6db041453bc577f74c012820cb2dc35eb06fc716384554b44ccedf5dd94bd739",
  "2022-10-27": "0651da6dec39428e8a5206ce129246a0ef31414829c5d623d02fbe38b7fa3e83",
  "2022-10-28": "88340a682337a6a9c9599bb7db608af759da17ed5eac8257bb93f19068f3f220",
  "2022-10-29": "b0a0674371008318339718418ebf973b32e0ab10dc2941d2b792fe838419878a",
  "2022-10-30": "753e82e2ccf50a74be57948cc63e03fb648af819617d5c2222bfdd3bc0bc78de",
  "2022-10-31": "60fb34f4460d6518125a4544e33475803c5274f3f49b38bde7a3e4d6fe8540c5",
  "2022-11-01": "7e0ed648cd51b559eb652ef2ab958b799298c2d38740901597232204a96f9b9c",
  "2022-11-02": "63bd68da14a82a717fa62c9a9a8a29663184a6899c09cb4753cea79154096de9",
  "2022-11-03": "319cb3f217a29be81a70184c8fa2d40d5b16862dfb946edf3888510a9f483c53",
  "2022-11-04": "1b1c967fd18654aeaff597e7645a42b813ac3f155ec91ccb11323b1160cd623c",
  "2022-11-05": "4a5c4d9117690b0827ce9708100935318b2496e603f7969b31f39259dc17634d",
  "2022-11-06": "5a9fa0a3378ff47dd1bae2d8690f05630d6df4bcbab2f022de94dd7e4303f946",
  "2022-11-07": "80e28bfd13126fa36c6a0d3746d82b547d3836a169192148c95cf2045137e4a7",
  "2022-11-08": "f7da7adb0719acc81ebf6cb663452955fd17ed6f1ce1f9c6522fce104526c263",
  "2022-11-09": "8ec02a761835f8224e35daa866d39db6825233b2d74e10ed14c688034532c3e2",
  "2022-11-10": "cdc09b2163972f952c2e6ae92871d446c57188fa1862fb484d80da398c8a75b1",
  "2022-11-11": "c36d370d524e6bc358c91b12e571da1f0ddd8d224ed705cb02d0b783fef3823c",
  "2022-11-12": "e56174c29c7f4c5e38d420417e7c3f004c1ea88ae543f5e52ccec0979c764893",
  "2022-11-13": "8e7c3838e24cdee3edb0e2e03d8c8ba75ea9c1054fe82d48d982316961400c54",
  "2022-11-14": "0a7957a44ac2fbe28f75de6f0ed3d5155a91d0ef4c86699de1ebbb76207204b2",
  "2022-11-15": "83a84502a792741e6528c664f0dbcbfbb1a9f6e24148329a65350d014e3d6e8d",
  "2022-11-16": "2be2c4d34dd1593ffb4964b5ceb214908d9513f306835dbd052a971955dc4e99",
  "2022-11-17": "62f580da9c461d73f915030f76d91b16cf60884ba75430e7702a5cc69c4bbbfc",
  "2022-11-18": "f7970d5346d3ed00941b4c5bfca98aea6b4f9c7d820aa3afa2527e0a55d984a9",
  "2022-11-19": "c7ad12825c4e9cd70104aab87ed893d797229d62dd9e06223944326b1b704e64",
  "2022-11-20": "f3894deb68d7ff250f7bbf97727a30283130d017ae3ecfc60b5c50ab926bdc4c",
  "2022-11-21": "c11f1bc6a33dfdfb8b0ada4a22534a30b349a477e54d7a40a983242c44dcbe6a",
  "2022-11-22": "dac8f5a0a83e4b4809f14b2a75749829647978a36e9c2d2372cdec6c34be89a4",
  "2022-11-23": "85772a48505070df6173fdd961c789812d7e0e321f2279fd3cc30714e5ea5f11",
  "2022-11-24": "8172b5a03d52968c327ced611740e9f4c6ab8a398113993b6edd11394cf24750",
  "2022-11-25": "e60c3451369a263b83fab887221e6d021ce884cfdf7b97125717b9fdf2a7c18c",
  "2022-11-26": "f6b761e719d92daa93dc07784c8ced8b225369cc51ff58214ca9e8134ae6c061",
  "2022-11-27": "132705655c7163ed9378efa1f97498c3c84b9645d8f53b23d7af96bf379a9352",
  "2022-11-28": "647ede45884e656d6c4b2a61578a42dac1d355e0920f803ee19645ed244ca80f",
  "2022-11-29": "32f313f0adfa92eefeb8405a353b6496bfd20cc8cf7d242934cc37455833f3ba",
  "2022-11-30": "a2065f09bd0f0f474209e625d4627e35ddcd026ebbea0de3ceba14f4ee679a86",
  "2022-12-01": "0baa1868bfcf418a58d8d45dca63a4277adf96b63fd2f0f7e579ae016ba9bd77",
  "2022-12-02": "1dcdb397ab75fd5d22693884d781a5be0f8d9b28255386790ffb0bcd58e44054",
  "2022-12-03": "6b3f9af92476f0cfeb9097366667f9ce98afec810d2583f1d05f4bd5db49ba7f",
  "2022-12-04": "cf8b2ffddb331ec47b6d977271743ff96c6688bcaecf4a0c0a9f8d7a1aeff0ed",
  "2022-12-05": "40ca480ee471cd82d8e44c9155f050ab95359058c45eefd5ff917a8aa74813ae",
  "2022-12-06": "932a21a902bd13aef9e030d729639a1693a8fec471af22343a93ca81321ce1b3",
  "2022-12-07": "0749ea8ae8f533e7d312cf7d758c24e1fe7fc38218bd0d41a4c77cecb3d28671",
  "2022-12-08": "9e5ba97f48e54cba47e49ccc526f130b96705b60ead55d3475dc5c0a1db75d42",
  "2022-12-09": "e6ef28e19d88f07ebb3005619e2b55e9e6b3ca1e305961c631c913c15a17f70d",
  "2022-12-10": "34ab485c6a38503264cadd2f1bec954c64a7d5cfb295c4a70082aa2c5f2dd62d",
  "2022-12-11": "18960fdc64b7bc774dc5d4690e4ec56c4c8ea1f9306b098df47a1424c388dd6d",
  "2022-12-12": "afc0528f30fab6741063425bb38d9c505e7217777a6bdebdb2ee89e1da0abe01",
  "2022-12-13": "d186c2b9e4dc0b28b12f7ac0eb3e2d9b14a4a74f4f3dd66a7af7db8ed1e96c8f",
  "2022-12-14": "220806fa1532967f31f5c91be8247af6915a1c4e54adff7f17d002df54d5d0de",
  "2022-12-15": "ed5ef904f9959b48adef1767c23d49e30b7372f310f038e2d22acedb80d2203f",
  "2022-12-16": "a5322ed29ed5b0d654cd4d5945a735c489c8b9586b1a710aac1d52875fa1dfc2",
  "2022-12-17": "33d26277928352a205bcb3859edc65c9ee02461bad42e4f4808062d5d0e56516",
  "2022-12-18": "68705fbc1b94ff0263f7aa15f7144a2a04869043fe23d0cd50d30a86debae0ca",
  "2022-12-19": "d2b1a6942de81576f043b803d2472931e13b5d131184e7290324e1d10682a62c",
  "2022-12-20": "1081203fe75ece44564da65238773260f4363ee020deab7c032a44a8f72315f8",
  "2022-12-21": "02dbaa8334352589f1e9d07b4518cbff687afde9aa6992f551fc758c393011f7",
  "2022-12-22": "7be58f2dbc210c98799019fcf1ca0f0b802a3218b44529e261f4835160d794c3",
  "2022-12-23": "0fd763d8990778f2c8cfe9a2220921dad1f54d501c318b7b56c0228e36a81876",
  "2022-12-24": "1bb073d5b3f7c8e61614e23e949a437bf4be45edf30bec38ba5e05148cc72117",
  "2022-12-25": "fa4fd1515b5051e3eaa1a3666b612b5ce25040cdf0c421d6d7889eb6c2b780cb",
  "2022-12-26": "9f07aa6ab6e1c5dde3f03c98e84af05ff05dacc08b5d271b0079b0b5fd6afde0",
  "2022-12-27": "0cc8813c6f288affb5e4963bedc82894de025f631e69ea088918e9b18ac24172",
  "2022-12-28": "9b33061ae5d456522cbc07455918e5732ed2d83aeb4b2b87dca3313bb4f27657",
  "2022-12-29": "fae955f861808d83bba19927a80cb34c848998b2f011e2c1afe94ad54d7ef7c6",
  "2022-12-30": "db74588d32a1e1e161ac285d14284a2cc0595d08b96b616fd739a991a38c9af2",
  "2022-12-31": "a714abedb60bb49bf863c9b3dd9c4229dcde0fd3b1257ea3f155ac64d70a0417",
  "2023-01-01": "6e142a625383ab0a6c4370478ff3305c55dc874ceba109e3994224d35cdf24b7",
  "2023-01-02": "e76bd578a4819a3f72362f43cdf7b9e3b1b2143b0648fea64188a1d8c3a633f4",
  "2023-01-03": "ee57e1783c3e5048296df2e1de0b23f8abc372e324b323099b84c830821fdaee",
  "2023-01-04": "5cec57e8ac814eee83f0c7afbf18ddf30685e897908c94db42e11ab542ee621d",
  "2023-01-05": "2de502007e1b454d9a5d2084e2bae83223712665b33a3e0b2bd27228e1f0e6a3",
  "2023-01-06": "8869da1b00e89affc2955ece4d1b2e600500c2b3adc48b20d39b8e28483d6efd",
  "2023-01-07": "7a384a35367aef3e098c67c32ca5f6a6fefcaef0a10fe192571217c68f17c0c6",
  "2023-01-08": "54f82cbd08e4a512432c341c56f520df79a9f46d517ddb5bd2b9e8b0ce788ede",
  "2023-01-09": "807d20917bf366bbf3748e3720b66e266a5547a9e53a31a83e210b3ec5263490",
  "2023-01-10": "58229ed30be432789cc16f296c651a74f378b715c9dcdacaaa3d4604366edcc6",
  "2023-01-11": "47cfa2e671ec01f00d83278e23f830230a27ae84436620356eddac464b457982",
  "2023-01-12": "5ce9812dbfaaff24ba3f238114c41768e90a6a1ca74b3438c144a0900a18994d",
  "2023-01-13": "9ac53dccc4149fbbc5c9405e5aad141213596ce9cada9441f6dcde13750dd5ee",
  "2023-01-14": "89136f9785e6dc3cbc491e1323c3dfe839fc8d2434405e7570a8ef36097e5564",
  "2023-01-15": "00dceae979bd9a15935a92609f9e219f0868f883ff45700c7b5357b6a3ac086c",
  "2023-01-16": "daf361b906182af762cc90d1861ec437b53138fc7b04685f2f8cb4556af715b0",
  "2023-01-17": "60490008a771c2feedbcc6919bafc7f0b9c94d259c2b2029065c2ab3d8253417",
  "2023-01-18": "2cf2d0dcd611d0aad45e45a44f250363ff57aae98b00c327f3897237adb0979d",
  "2023-01-19": "1c22a71cd04d7e50a4157e80241d3c3e2452796cb265b26471bf95f9889d93df",
  "2023-01-20": "f5f5c362ece5c9f0da0a5ec709d9abdfc8c1d616bb0c67dd991660f839bd09bc",
  "2023-01-25": "ae7ef5f7a86efa8ea0dfeb6c93733707ea2e6dab8e73336021d592a17b156597",
  "2023-01-26": "c21f62aeba655ac20788a913cb9bf8365047200b945f36d1bc7e05c6cf4de7ff",
  "2023-01-27": "f2ead73e2d1e97b75540e022169f64514bfac5e657ccacffbd402c64866a0709",
  "2023-01-28": "1115193346231a6cad459bb9d55b6e37f0dbf4501515b4f433b021816f8327fa",
  "2023-01-29": "168eadd6112c5aa825c7dd0673b0eaab5dc01b19610cbff03aa449806911dbe3",
  "2023-01-30": "9a1627fe9f361ea8bb5bc546b7848e94d1915d55be734016603e1eb7dd8b41ff",
  "2023-01-31": "362244baf0b03ce821a9936c85c5acea6285a43f0561df25d921a0f2ebb78b9d",
  "2023-02-01": "7c7acf7964e568438f30dc08cbb509838ad3e1f1425dff3da7819c536a6f07b0",
  "2023-02-02": "7cd364cea62589ae8c8cc0368f374a5585fa36b315a92d68d104898e17cd961e",
  "2023-02-03": "e6b4e72477a089211805be24f65fa7a56ba3f0e5079546e16153870594bd1767",
  "2023-02-04": "bbe34b0075bea8d5a78eb109481f7d82166dbeae69419377ba7c3ce79d180585",
  "2023-02-05": "2b953507cde8413ef932e3c3bed7f70bd20c8478ccbea46285ca117a9b9b5c3f",
  "2023-02-06": "1b2872281eb0efdcdf81a59c200ede39a17bdcff200509c2c6f5368db2e917fc",
  "2023-02-07": "77a5f8bececadafde17c86484f5ac0a99852e87629b660fca81de98fab8c668f",
  "2023-02-08": "8523f8287f8bf6207396f4344e7c582f342c463f4c310797ca5ea00d8368e1e1",
  "2023-02-09": "a2b37d5283d69d861edc9824e6aafd81b0102e95ad4c980c7fc259bc24375b9e",
  "2023-02-10": "2fdf9aabb0e09020b528088eb547455ce8cd38b57e6bf7bd46003d684a4b9c54",
  "2023-02-11": "4f3c1ec22cc60b61a3bd95cb88691f827f262bfa2d2dc22969cb29a1f15b0e10",
  "2023-02-12": "fe5f14f2b7c5b2882c7d001645025ca1cdc8468ae6115b250461f425c6d8f2b2",
  "2023-02-13": "2f68a81a559fac603bd2a6acd97b4e72d338df30a7ff78c5e54d06ad9b1d7630",
  "2023-02-14": "be82a2dc436b5776580b9c0c4280a4dce1f32688f517c4ccdfea5092c4c758f1",
  "2023-02-15": "7623aa793094144953151387ff4bd5ba08f50418fe2ed4472b845a7eb9e72592",
  "2023-02-16": "2c2225872b5a447cc6bfa1fd36d5c469a4855ca25c066b7cbdc2f77071d13bb4",
  "2023-02-17": "51fe950ff2bde1c50d0e6142d4d31c95936643cf4c27efba2264a7f27056d79a",
  "2023-02-18": "5a0d1bf4ae2b0802cdf8fb2c5efc68b0ae0eb11b0e735eb79b7b449e81b219bd",
  "2023-02-19": "426b45ccdd30cf7427b675bccac90be25a61b254ed17661c2a8a37aa128b01fa",
  "2023-02-20": "060efd13213e0408847988eeba56aa7768aee7701eead148556d1006e15dc4cd",
  "2023-02-21": "5234890b6a546e04dfc56ac4aacdd8f0d5e62f3348a961857b6a73059019825e",
  "2023-02-22": "3d179e1b2568d51e459363b9668bc26474770dd0cf9716e84df07b269cc40256",
  "2023-02-23": "1f784fc5e0fdcfc4f6d2e597676808642d695c136d198c330ad0eb9e6ea8aa74",
  "2023-02-24": "49f45a9617940ad6ae45c05d0de82de0ca2aa46a4de94f355d578dc106a20452",
  "2023-02-25": "889a76546c0da98115b9a42b3dab5899a79ecaa0f9b2232f0c9646ebc06d7572",
  "2023-02-26": "bf3376b0e2e3d9db4ee5e259b9f4f428988613513e6295cb27a6e0b83b664863",
  "2023-02-27": "99d8e17bd476dff6f8a0d43ca861c087720f8d5fcc7701330ad205451ba024d9",
  "2023-02-28": "3a6fa938cc61f9a4bc2688387dd9b82e18d2a2c519c035aaccb469adcb0c2d28",
  "2023-03-01": "76c65ddfcd3f5a4b9adc6525963652961eb79f6ffa98be4b96fae03b87998c0b",
  "2023-03-02": "36ca60dd4fb96178fc73c8115c2232c22b7add7eb047f70a7bdb00016b8b4040",
  "2023-03-03": "6df15bd24bb7dc890692a0b2fc6c9f6e34f5201b09845dd53a67382e9c5d4524",
  "2023-03-04": "5e62687e1900cee3390591f695f3ecbf975ee45bac15bea78325ddbcb00c230c",
  "2023-03-05": "f729b89722f57f0df3bde838687b340c1a4cb622a2ff10df48b0501ceb449b07",
  "2023-03-06": "88370ded40aa52362ac6b0f86b779e8a08e3e29e02d9a6380e855fbfecaf06f7",
  "2023-03-07": "4a028026719e68767ed2a1f5be20f30f1af6e0f47f41619f98598b65b025ee43",
  "2023-03-08": "db2b157f751934aede9db11a10714cd4c29b751ddf71c0768f9ee01df42711db",
  "2023-03-09": "7ba2708f7a8fa9f191f662321679d0a157b8cb178268e3e313158161a426b478",
  "2023-03-10": "35cdb777a254f6a971d5c1803a44375255f1eb95800ffbc605ce4824eba7806a",
  "2023-03-11": "52c803f53641dbc7e36eb416d12f9c2aa8f50ab97164bfbfc9c69772bac2fb72",
  "2023-03-12": "4c54d8be6b22c79ac77c6dd1a376610520c6fe905283549dba75faa70f18c3c9",
  "2023-03-13": "4918da44eadd094b0101b73d33e02fd1f21af08c97b8ca04d086eee793baacc9",
  "2023-03-14": "59aadd2f35b71a8d56d4810a175c95b09e64cb253e25e9f2451e8deb044f760e",
  "2023-03-15": "5f133b833385c7a1085031afc357dd1215113dfaf0b9efa2880430e593dabe1c",
  "2023-03-16": "3d743de3b8f6104ff7260e5ca5ef85b51541210f889ef03c0d9512a8dab967b9",
  "2023-03-17": "4395cf2199a580739d5c008a43c1d99ffdc8c9279bf895e2c8e0454936af37c3",
  "2023-03-18": "12cb15b4c80ca5c00fbfb2dc3b158eec474567c9cb3d489bd5cc9e7e5685f0dc",
  "2023-03-19": "dda7988e1e9eba45d25fb2b8f82b8c10c215107e3ffd990178bee3a13cf0115d",
  "2023-03-20": "a47b6f5a62a198285a84324a5d4936a28b92bf09c539bbd1b53c96685cafad23",
  "2023-03-21": "13f6d1aca22e31e60d1625cc13b2b2d8f8fa60531881cbb1751f68285c7ef91f",
  "2023-03-22": "62bfc3270568f902578e089d1e986f06cdf96cfc7c12fd3de974dbc28cf8fd0e",
  "2023-03-23": "8c899e39a4606fbcbe74f25bf17ac6e2bf379dfd4f27094dff7d7479c3351d22",
  "2023-03-24": "8854128fceabb8c5b28bf1abfef5be27e815a48327091879acabf335625cc0ab",
  "2023-03-25": "34aea7ea43453cc8ae2b073f01a9c727f23f7376640a0977b570678f69feb958",
  "2023-03-26": "c7b58459eff1bb3576285e88b5791400791e5ddddf5d29a2d8065a83397b0f99",
  "2023-03-27": "30b2347ee79148666c9159e2a39e868f6db6f76407807783c0ba2a96c06e8c98",
  "2023-03-28": "128af963c4dd4c1b35dbc228dc8e9615d3a9238479546c2af46dab2a99f63727",
  "2023-03-29": "2aa77850cd4618ee070f3c9f7802effccf3b63188c5860f14404e731cda0eee0",
  "2023-03-30": "e4f9f3a48a89ffa55286f8d9da70e37b47652eeee3bdc117a53314e0dfb49d77",
  "2023-03-31": "160395513b0696dfa065b70aec94c30fd8ed0cd2ead43a117f0e22bd41188eeb",
  "2023-04-01": "e50abcdbee565770fddaaf93c3b62f398bba8a0a5b35877e80548f6b6b84c65e",
  "2023-04-02": "285c97f90e58633e6e488ccd9e0841a366403184b201460c97b4d14d91019ca8",
  "2023-04-03": "a525138e614605c0f9104caee3c966a6b91cfe4183e81f2f91ade4790a5e851f",
  "2023-04-04": "60baa17b93cf67571c993ab1323b964be302f64dfd0d2c5c17249bc12b16f360",
  "2023-04-05": "c3d19f1b92314398193ae2f20bbe283e33fa3ba54171f8847d8f215113e50631",
  "2023-04-06": "328a2a9ced70ad9eed632dcb56fa6edc64791c47517d8c5a399aeada9dfa60d5",
  "2023-04-07": "00a6e2b22fe6f3f0b5033b184adb3cde66c5b1d7ecf78cf7560d9f24d619b12d",
  "2023-04-08": "dadcdf059f3a9a92e0c5e17d6eb4f9dab9dd8265d37d81d69b21f98729aca4ed",
  "2023-04-09": "cbca18ff7dbeff7e3ad0a08b71236e6a5f55a1950ff8ceec8d7d65bc84940aa3",
  "2023-04-10": "0cded3f577712f515fad61ca050292ee16e4bb435bf7d14834d9dc216a87aebd",
  "2023-04-11": "409cb4b565b61f6fd8999114ce3d7581d770b5cca39ad6f12032c3801d40d6b5",
  "2023-04-12": "9544a69ef11545e6a0d21764b63f3d51476571eac7a4a7bf555801dde25e9e35",
  "2023-04-13": "ded85ba64ed9e4b5de478f1e830f23bc25f334c305a25754742870cf8a3d81b2",
  "2023-04-14": "15c2769fc9b6cc87895f3c75e14236984a40e35ac5fa668a5f778a86c118e9bb",
  "2023-04-15": "eea460b9e392dfa91ccd1f2128ba2b9e09efc52f881dbfbbafec2056d807fd95",
  "2023-04-16": "d277b009b0237be558e5db5bd7b4937859c99c25b315f7f4ccb833f25f1af296",
  "2023-04-17": "c1b6f2fee1a4fb201e380a8710678d15601be37df81c82f9f71e69d0488f0a27",
  "2023-04-18": "16698c04957f39ec36eaacdfc531b5935deb9b59028818aeb3008aba0d40f5c2",
  "2023-04-19": "950c65e863f60054397004a05cad9b11200521d729859387b8ce41db0e66dfa6",
  "2023-04-20": "7a0c0982ebf61f38e813c5d5f8043f758f743f018400763b58c57b0269c73382",
  "2023-04-21": "7ddf460424842aa5e43c220d9273a51ac38bb2b3ab7804e16c9aadef4480d344",
  "2023-04-22": "cca785a55b211ec59c8a73320d09068c3c3753d0cf5f6ef954d35a098d096271",
  "2023-04-23": "10cd4f7e56a18fc9ef0edfbb6735e9148826851b3a157567220f8fd0865261ab",
  "2023-04-24": "266be273a508f862ea7d3aa178033a07059991726582b8d689bc1d20e7774208",
  "2023-04-25": "d1ac2a8e6a5d54c9765109d9591aa26e7413b36c8f1edefab2ba0e82c328b547",
  "2023-04-26": "a0ae50e7008b0550b64f131bbdd08ed3a61762cfb68970be656b1ce0ac3825dd",
  "2023-04-27": "65ccdba487139ab75f18abe212aecdb9a6ec45616013e1455c39a18fa5765c56",
  "2023-04-28": "587bb0ddaa3134a7560bd9120b12e9f0a6e7fd83e4d73d035ae977f02a99d4ff",
  "2023-04-29": "02167c31bfdc6f6b8aeb7a3be47b89529cdc3acd7ceec08e28ef021c0de3f652",
  "2023-04-30": "ca8f8aee10fec8d73e851b237e49297b5455b29cc7700da03f8a7af54e4fa4e0",
  "2023-05-01": "dbaa927564fe7ba27619644a5c63582021410f7a5744b9ad3ada48c8aacbbded",
  "2023-05-02": "714515c474d09495b175c31b636b6c000e9fc8114315d5de87c3f88872407fc0",
  "2023-05-03": "1496a21293aaf38be5cc909d951950596483680eee33f4d70901db7d9b67fb5c",
  "2023-05-04": "e88e04f6cb9440944393caa023ee6c4737c5a49e67c0dbd6f21ffca5874193ff",
  "2023-05-05": "90113cae19aaa8a98d970f3230930cad547ac1e862d7ed7551bf691af64e6124",
  "2023-05-06": "46514d62f0447105202e04b68e31bf96260b8906611594ef081edb9e98311017",
  "2023-05-07": "00ef532d65b86fcda5560ec795bd5afed8557572d900d3fa9b04d7ff51b0ca30",
  "2023-05-08": "b3fb13d3ed3a800f3fdcdc59d925fec1baa9f5f176a222d478b4b7a3ec6e1c75",
  "2023-05-09": "6744383e0853d29789e81053f53afaf4ab697dedbad28b4b258961236c69bdf1",
  "2023-05-10": "8691b84b7b37e027f7efc51ef4a02cc6026923a0187258b48a0ef36bad4a5b9c",
  "2023-05-11": "f1aa0a9c1acb18c06173df43cf80c3e5f4d8a5cba185d9a59eb4aff5ac1583b9",
  "2023-05-12": "7923080e8e0b05a74e3080b3fb86e0bb773d6aa449188776cdca5b0c54b4f483",
  "2023-05-13": "f82c7606e96d492e6d40eb46f000a947cdf68b96ee1ddc2e0fafc1c37e1a760e",
  "2023-05-14": "8aa10b7e893b280908ce88506aff28a5685d589037f359c4cde33d283d5d3b0b",
  "2023-05-15": "4410b42577b43a4408c5be323c83d92d20af885bf3075bd3d8421e576d678c8c",
  "2023-05-16": "78f6de72b5777e79d496903ab4b65f37ace38668e63b028881856526074fb146",
  "2023-05-17": "7cdbad48d5c9a4cf02ae64298ff38f5c7b5e6e662f7fd6f78709b37ac9ad93a3",
  "2023-05-18": "cea2d04f2753e8ed27298b03f7ab28e83a40b67dc941d0fd1ae1748ab665b697",
  "2023-05-19": "230db3a916d468b0b3dbef29d89ad5643ea85f3e70064c665f2373c7128ec980",
  "2023-05-20": "a08fbb40d9b048500d328d38d13a20e525706e2cb9bf9f335952081de64cb374",
  "2023-05-21": "fbc74df9a486d0fa9304b9d2ed95d27926619866377e7dc8dc53f3bcd13108d8",
  "2023-05-22": "e8448171dfc9930816d060e88baacd547ceb4b393f2d763982075389737d5bd4",
  "2023-05-23": "e7854d90d426a11596cfbe356168a9db1aef226415dee95405333228641b54aa",
  "2023-05-24": "75762fde811ab7b82195335556e039a8b4fe5f7915afc2b9125d9f37d8dc0788",
  "2023-05-25": "4978470c70abb0bb74651437e535ec56635efef0df9947271922cb60390ea006",
  "2023-05-26": "289c53624ddedfe589c057d2de7d291b064a697bd6ea09ecc2fc823d1f13212a",
  "2023-05-27": "df37d8ed6ad0c20ee28d24984adb8be65310dac3f8c28c5bb11b8114005a0a0e",
  "2023-05-28": "c63b02f355e055cea150f1e9e6f1b4153da1c3121ef74e322a606169f41e9ad8",
  "2023-05-29": "768ab36e40332a98a224e2a22367b776f0a1ec17735652f9f07770a2a205b3b7",
  "2023-05-30": "c4db9c45ac5e94698103899e6040b5ce647910551be405857f4dd0fad6838f28",
  "2023-05-31": "e4176f6c0780bd807105cdd22dc5bb5c618ff6e946a2bf7bf088fa1b3725ae5b",
  "2023-06-01": "7927a2af394264721d46470c4e85642c0b42342e268d7e92b2667fc44d752a8f",
  "2023-06-02": "e93b7f51a3456d698e69fd3f80b80bf2cf507abc4c49ba7cbb3ee0b4946d449b",
  "2023-06-03": "05c66d587314a15d18681981f5c378129cfab4dfd422f9890406a65680b515ef",
  "2023-06-04": "d4e902e784238f8bfda6ce264095cdce680d175049d9034c1fc40c9bfc963f7e",
  "2023-06-05": "24e9b2b7b6f66bbeb865b0c09bbafe945d9430aeac7b4156ee9fc9fa9753fa57",
  "2023-06-06": "b8ebc7343499551e60cdb7a6eefc052073b22ebea3095eaab6261b9a3c9db1e6",
  "2023-06-07": "85f2363d32681566af3a40885f397d74b5e5a9e78388d4d45f7378d3c3fc5dec",
  "2023-06-08": "745a8812b3195a813d2cae2b05a5cad9072afc960f1b7dd1fb6c1bf41e2453a8",
  "2023-06-09": "778c58eadf912ddd0766e2e04a736a80005a11ba2504dd3f2684c468ba9e55ca",
  "2023-06-10": "83f7e527a47b6caaf3967941c90c158a5a20faf2df02fcb9fe6bb59761b77204",
  "2023-06-11": "02e1daad285ac71ad4ed32a1a52426b4e19696f4df22f01d54d477f698c5a165",
  "2023-06-12": "5d0fefaa57e9eea79d3b7e79ef146dafea4bff004956af9d040592b446cc05a2",
  "2023-06-13": "3f4f54355113b723a12abb106c553f4f515dcc748c533a46c74de4749ba132ff",
  "2023-06-14": "cd01ef7e2dc4a85625cb3b027132850a0c0cb4ae3ae3e821b37d6bba2cd0a0bf",
  "2023-06-15": "ccb0fabf598d8a3b3f625a00ee00ad528087bcabb4b06442645b280afafef530",
  "2023-06-16": "d18d9aac800246465ac94c92282b85838df09e3180cd7ee945b6e35ee21b6925",
  "2023-06-17": "b9caa8fca13d5972aa49de398b2d9ce340d0b1897294dd1f111b08158a82d015",
  "2023-06-18": "cfab6882ce9e6ca88d21bebbf5a5b1d11afc9f901ebcbd8a7736bc65711b6945",
  "2023-06-19": "e9a5bf86b3eb825d2ad1ca3beb47b8452955dc166cce3ed45db3b608be6b5b30",
  "2023-06-20": "39330aecc36c8116b430cab2ca2e87c0ca7e7d03ebf623d8af5988900b891e24",
  "2023-06-21": "c254672e71252345477f095cfc886d84c05c189e460e14a6db5423454ff05a4e",
  "2023-06-22": "4d57c4f501c24e80cf69324c1c3ce5f109c648dab93694067a68cce07c489079",
  "2023-06-23": "53872ffc0a3ca8fa15897757462e739e646e388733e01bf4916d5808a78e0e13",
  "2023-06-24": "b5b4f003598bfb541cba4e8364f0944701bd0bbbee42c4a7afa3824ba016389f",
  "2023-06-25": "6d0fad7d89c112777d4929a0563ff25f2838e117c1fc5c0d50d19caa9e7d42ce",
  "2023-06-26": "e75fc7c38f44fbf85b4a31064139a5ef5e7c4360ade17b523efb7682afde0739",
  "2023-06-27": "4c200fc94d00c39653667524028e8e591533f440047426b36edd6d58d1a93138",
  "2023-06-28": "c36ce132fde5789847ef27926780bcfdd7de5c0860fecaa17fd66286fa2b5a3b",
  "2023-06-29": "1c96f729a04c9c3b3f7115cbcf91daf07a2b6b8d46687bf5c29d9484214eaa84",
  "2023-06-30": "b4c41801ced182443da7b9a6f6322f4a40f492f98a7e46c3fdcbab15411306b8",
  "2023-07-01": "22bb3b44cd6ebaa262330d91b297fa412f87340a34004e60b8bd80c0a47179ff",
  "2023-07-02": "9b355fd2388b6fdbf26615b55944c2a20b8b5e99f751ae946a4eef171d543b08",
  "2023-07-03": "1b72e8a5afcc8abc54ad693e23089dccb7c4be1046c3e982a3bae33dfe9d6dca",
  "2023-07-04": "51b3a1bb3b3df8685332ac8e507024115f7e1553cc5d0789a1b3c31ba3472974",
  "2023-07-05": "342feb3abd858497c6391ab87e8e4af34a3545d2daa6cc3f8a60e090bb46f895",
  "2023-07-06": "f36a36bd7ac0c3fc8a978dac7e1bb1bd3d226a27fbcea99bd5acc689c7157766",
  "2023-07-07": "8b1318fb145e550a004e6ef0ac1b4660d17cccb464917f2b8055220ecdab91bd",
  "2023-07-08": "8cfd2f683d85f2d1cf30b174b67645fd21e7c244790f01f22149a29e0823b5d6",
  "2023-07-09": "37c3711023d5aa3a37da02f3696026950de255299bacd580a97a1ca39121b10a",
  "2023-07-10": "769c54fa4be2ad7d2e92a2eaca3f827627949bc00a4c048f37d85f0a4e0b7c16",
  "2023-07-11": "f8e0ee9f741a6d6ba6a5c1df0fddafb49acb3abd635452a8019e78fa8c8bbedc",
  "2023-07-12": "11103a8bfe7a02fed2db3b8fed1031c51e24353ecd8ca78433079db3799a2847",
  "2023-07-13": "16520f043eee06a03c0ff122d879fd0400b21d5be5e43a2fb85116ae7a814760",
  "2023-07-14": "fe3c89e247f758eb84d643ac09b42581746a18a2ed8df25a7a6dafaea94620df",
  "2023-07-15": "9d740be15341db42c4ff5d1ed5394ef84aa81eb29c79cad7ef9dadc20ff0e02d",
  "2023-07-16": "8ef1446784b6b295aea8aaf9e4a9ba8efd6100e8acd954559071cc1dcedc37ce",
  "2023-07-17": "3416b5f88534821545814841052cdca62bc684f11ce432afe5740b540bdfa919",
  "2023-07-18": "e8babbc78a71e561c24b2930f636be652af04c17d873e9fcd5df0d1b2d0c5b08",
  "2023-07-19": "ef8d9876a8808b26d21f3c81a6383eb7efc65012887957cd6d692481bd305f84",
  "2023-07-20": "9000afaa2e1a4ef71127f976ad55af39537b3384cc946c48600c4aa1caa7b1a2",
  "2023-07-21": "3388c98ea322f73ccd6e16e552237e8e7432ff9a05da4e93cb296ff52fa90532",
  "2023-07-22": "7a527a93e8fd2c5b2c6baa0ec10f7eef45500bb20b524d61154713aa34db9d1f",
  "2023-07-23": "42fb935928779005337dfdd187636e66d32983255507d2764e5c4257dbf7a165",
  "2023-07-24": "e0f1c37c70ff9868f3d2cc6aba72a86c14e07a885e76ffd5e32c77333167a636",
  "2023-07-25": "51eaf1a828374e91ad92e60f5ac6cc2c19557865c4f5e30774d5217c6b0624a2",
  "2023-07-26": "05d3ae6c90b2398a85c476487ea26d6a3222c2f57b57a7b97f933e6691460d74",
  "2023-07-27": "cfa0fe715a6939a1dea64c774482fc68fb6dcb78c1ce7f1ea0af059e3e19414a",
  "2023-07-28": "efe5460b947de33b05ad2061c590773eeff23caeb27ee3a9adcd58ba329705f2",
  "2023-07-29": "9a9d3142852aee49c60b159205e84dc2d79191909c037cf3f0b4048c75e3ccc2",
  "2023-07-30": "8c2db32580c8067cf20a64e9cb0b123694b1393b5cb0425637fbd167f17d26ad",
  "2023-07-31": "17813e3f07ba53449ae08643d6a90706e505fff6cade693a098697787aba95ce",
  "2023-08-01": "b6454db9703cbadb46a987d0628065444a7cc709893b0fe8e98313db664e0212",
  "2023-08-02": "7b63ce8a761ef5ff5937773ae9acb2b98bf8ef1cde98a0aa95a4edc382d6ca82",
  "2023-08-03": "2a2433a75b35d0f45185da5c462c5e7d399378c24d1897b894b101f6fc150d64",
  "2023-08-04": "8576559a649f3a249d38600d5d877026820a6d46338603e0e5c083b73ffcf05e",
  "2023-08-05": "3aa3f904515f129c5d57b55008283d5c7a7799132f1fa18f632b88c63e6a5824",
  "2023-08-06": "17eb21ee851d06f7d89b7a34dadd9b1ef3fe72eae573bd01cfed10ac8e3cde58",
  "2023-08-07": "b9088cb598ad3ad4ca21c9b9b17c3b579be34a3f1098004f263d3b8766cedac0",
  "2023-08-08": "45ce081221ff284d05a8ecb46e7ea7722423fb1e17d1b1f39ab0b09a1af3b28e",
  "2023-08-09": "0152d6986e83ef3a5602af4ed7d58fe1a3b86a3c75dd7a7b6acf411d098d7a9f",
  "2023-08-10": "47ba252b92999ec3f4f999926717ebe38dabee6cf21c4e21612eb7013b75f5e3",
  "2023-08-11": "08fe50677864cd023f82b4951ccaeddc58f1855bc2c34a249acfd886a9bc2fdb",
  "2023-08-12": "b81b57d70f4728f1908d443b14df4c5a9665fdc1be9f66114d63379a665ae5c7",
  "2023-08-13": "e240abb8c5facbccd300160e9b5a7728e7521e5d839ebbad259e2ce1a9c99a49",
  "2023-08-14": "713a05975e4a8f79082ee3cef3e09eafbfbbdb2050f54a8b4f0982b5b8c12fdc",
  "2023-08-15": "2de2aba1c0b783ca285fdfbcfecbb5e81ef0318adb55c764b5ef5b87072c4483",
  "2023-08-16": "c89ac3de00e4596404c668053f6e3c62493808b1522c0bff14b98696597e1ccd",
  "2023-08-17": "1c23c8d8329bf5870098659daa5cc41efe9fc2aeeb16d6527cb754df3f6435b7",
  "2023-08-18": "01383a905bed02189ba5fcc664d8d2860f3e40f1010b78b0259da1e4dc952c4a",
  "2023-08-19": "ddcf527514cef9208478dce66bec73e9f79ba2caf1621923006884a68b30c267",
  "2023-08-20": "bb804b18a0735264f7be20d0d082c57173ec1547288a24d4b81b6e1a9db9f799",
  "2023-08-21": "dc0f52386d16fd86206b5334a0cd36f4c17b69716f94ce51da70211ca007639e",
  "2023-08-22": "e4d91c5c15c809446145c272bc96e0b1eb9cc857f85662b6c69199754c5fee9b",
  "2023-08-23": "ffc76d4689958dd2d2b4666992bedd9b4ffe53e91747669e181479256eed1363",
  "2023-08-24": "7a65a6940e57712ff67d780b49cc4c7284a60cc900aa6ca956afb531d3e5395f",
  "2023-08-25": "8a4c8b19caafab0c48381193ddbf7ed1c1c313563018b354c2558382d9bd773a",
  "2023-08-26": "767fd024ab86fdaa20ea5b21753787457a2537f544e062f63d9d42c45f249834",
  "2023-08-27": "d699f02bc207d6a6122eef821a93c9241d6e03162060d25ee04766945a8bf018",
  "2023-08-28": "45ffe964a5be3638686dd8e5b2cc45e8ca29033b0aed64114a1d2882c7887f10",
  "2023-08-29": "5164221c7056941124730629f4a9c4cb44c6a2b127b0d25a94586631bce30249",
  "2023-08-30": "afe830fc89b6aaeb451daf5730c87318ad808ed0a1339e936706f354d1bb9393",
  "2023-08-31": "2fb7ccfbd963473455edc717c8d42ab4b4f28e4a8836a6460cb5aa9c17f030a5",
  "2023-09-01": "e598be794a573590e9aa57efd4a3bd0f272876f13e80774a55a5f04da3f84d6d",
  "2023-09-02": "185dc68e9549404ef58720930d93dad1cbefbdb5414c3a9ea8febe4c4aff8988",
  "2023-09-03": "e5f73cc7a05727f8be643d6fb7f452c0c079a54e75ea617a8f5389f0abba1ab4",
  "2023-09-04": "6bf6fac597613add83432d5145578abd6dcc6acf9160971f06b7f6608dfc2070",
  "2023-09-05": "7c707fc7e11d857b9462fca081c25317a869822663ec602f0d8f2e6e30d9739c",
  "2023-09-06": "7c9e4514ef0e936a98f0a1b3dc986b9a97ccf9c0a2caf67ad211a119d5697480",
  "2023-09-07": "246f696d8cb534f7880eb71580fde434d3f78c26129c55260a76806b1778035b",
  "2023-09-08": "ca761bdd76d0ef57e179664cf507f1b9793738bb58ce0b37984ed3552faea9e5",
  "2023-09-09": "1f4bfff4450bbc3d7376d368d835a4fafdecb3684653a086de7daf60c03c526d",
  "2023-09-10": "c9549e9d6a4e0d4fa545a716b84908b07886fa1853575388b7824990f758c625",
  "2023-09-11": "4a15eeda2d1213b3565706adf819300c2918883a210279cd84d76d36621f0e2e",
  "2023-09-12": "3012ea1f0ba56e8bda585b90cd5b180c30fcb613599131aa2256eefcdef16d31",
  "2023-09-13": "38becb1356075dbfdc8d95f804e6d749adb5a5aa49a33a6043a8ad9e7ecd7686",
  "2023-09-14": "ca76f15f5ebe606f629a224323a2b1d67ee9b4f3f41ba802d7f11842f56a14a1",
  "2023-09-15": "633d24790f38b6c0adf27abc1c06714cf4e849e620692f7a59e30ade86e3b1be",
  "2023-09-16": "095d13ad6dc713d9adc4d6fc26244f84fddd377932b5dac1ab6922eaa8958fe1",
  "2023-09-17": "b2e73ac756abef6404d326727a62276a7804bcc8bc1bf6cf737eafa4e7b931b9",
  "2023-09-18": "75dfc21d2f49080706b50437fbb2bea69db15729fb725205a11c351373380ef5",
  "2023-09-19": "a175b20c87dc748cdf3fddcc258f29bd2159f5f1dbdb5f1c77063883fa946ced",
  "2023-09-20": "6e639f47c5d41733086e1797951ae3082d7bcb9eb59d92ca9b9b95929d6a3829",
  "2023-09-21": "24a32b4d2cea4e590c7be56ea6fe6949956fc824ab7db25ad3ba024db049591a",
  "2023-09-22": "250af86fe3ea55ea4463cae03c5cb11330e65ee9b40adda1a489aeb23fbe8e79",
  "2023-09-23": "947b9dcc32be336278e17195e85a99f6b8a1825d4cef58cb4a3c815ac7235ebd",
  "2023-09-24": "355bd121de8867c4e4de65d0400c164a3a5b4f1abfb484ef7fc1ca10ac6ccfed",
  "2023-09-25": "ab58532715fc005b223aff38808d9520782213473ae9fb0f6b36e56084838246",
  "2023-09-26": "0cff79a538368bc9f74b4d197dc4da78af4b37bfae658797afa7c737f073ba62",
  "2023-09-27": "7585edb99cca7fa517fee7dace0de891b5e352bbb4c29720dd887c3499529abc",
  "2023-09-28": "201d3e33a876737df0af58d33d466c3d775e6edabcae521a6a75ad7235ebbb10",
  "2023-09-29": "bf8340b489c6768df9874d891397b1ca5e77b840b9102c8f284528325703ee30",
  "2023-09-30": "3d5fabdd835358f33f16184bb28be3c027551608b9637431624f0e87583ab4b1",
  "2023-10-01": "ac2a2985ba2f2ac9b6648c9feff12e5c617110ae270393b3e5dadca6180a3825",
  "2023-10-02": "7f87f8ec33178ea22d55d6533e6f279414b0d9d28b133d1a924dcdc98885d498",
  "2023-10-03": "7db5721a64d239f9329bebcd4b6d51ba39719fb12cc256e6e7e631323d51a6c4",
  "2023-10-04": "e69b50b32f9078b93b19001a26b4c592299db3623718f9dc14cc06709e51bd6e",
  "2023-10-05": "aea2dd5491ba73da7b41fbe68107cdee26c87ef5382164620bd2f3cc5ca71b24",
  "2023-10-06": "1705920d11f119a73a96064b5b88d6c9ef864d7fd1926b94331523b8231303dd",
  "2023-10-07": "0cf4cc5dde393149eccf3838b2b1755f85adc4713f4f070ced014d3e8456515d",
  "2023-10-08": "3e1bda55c5c1f675b42f22adecb6cad33702893462eea927c30f4f76c895b8fc",
  "2023-10-09": "7b911165ae6c76ccc72ed440d6fce03f392c6619d46abae02ebc4f75a6f5a7d4",
  "2023-10-10": "ded9ca034144f2457b6e2aac62a04a0f0d251ff259ceaaa60d8b0371adfaf2df",
  "2023-10-11": "655e270ac8b59b11c41fb8c64d2798e2d43c40c0654b3e7af877dfd139dcc995",
  "2023-10-12": "f529cb6251f98ffada3dfa6ec82356cbfe2f0f328a8bc1a2a99b2c8eec4136b0",
  "2023-10-13": "915f7f7af57ed143c27462bd3ce209f8b61f54a62aa14d6f421d495dd8cea2dc",
  "2023-10-14": "8dca8afb0bcb66ca0a93d673e2c7b8a0c382b35c8a2bdf34b758802e0b22a0e3",
  "2023-10-15": "d29d8b786f783ceab9cbf51ea6dddc8de5ef18b7d31dad5a00449851e1f5be17",
  "2023-10-16": "f248f668a0853592af37da1a123f4dd8943556df5cf923f239af1c0c59d754bc",
  "2023-10-17": "bd507fbb405d3b86ec2b942eef902fd58e6da24fa0b7e21c4b74bbde3b517cc8",
  "2023-10-18": "71e5cf99ace83fea902851ace8c2384e8c3de6faf180aec843f01cab7336e9c2",
  "2023-10-19": "ab72322a24cf8fcf1acd3956685760b83fbdf72137bad96cf0d581e81cb29d56",
  "2023-10-20": "2e2d1b997196fa8e2057d6d2e6979bd2dc52b27c5e232df1c589ba400ed721c2",
  "2023-10-21": "7d3389534b4a4366100e5b1fd2f69b1b6141509b9fb13b06be0d0eba07118e65",
  "2023-10-22": "b78e163c634b94a8a21417ca2b4a09a73e65d7161be2738aaa04f7dc15d9c076",
  "2023-10-23": "ae948e165ba2f1c31c8dea5c1edfa5ebc35af8fc4a95a9edd1352ba73bebe906",
  "2023-10-24": "1ed2c02abb86f3082fc6957b8b09eae6e16167aaf8ad6fe99bdfa26180153d68",
  "2023-10-25": "caf33e65e6b196615864b95ee67c3dbe6393466cddf2f4521c477ee27caff90f",
  "2023-10-26": "74ddecc25e7adcd1064f06a997bf49fc5901ef700134e26c11d45721ddbc70f2",
  "2023-10-27": "74b3d70fcf46f4c24f36dd5248214812bb665622b053cea3015ecd1fd1d4d072",
  "2023-10-28": "a72e3541bac5b90054cecaee89f80ec6a27a2c1fd6c609ad76b6c65a9fe05dfd",
  "2023-10-29": "d07e8399537d7b06565a28f8fe6b6eba07ab2fd0252015b59e255b4f927aa079",
  "2023-10-30": "2caf6b7625e9c73e5361c092b7fcce5658e670da1f1b8a4d4a14578281b23f69",
  "2023-10-31": "1fc8cf549461d54bda7f26fbf9a71b9bec2638332676071da68d2a9262b3f82c",
  "2023-11-01": "8db2b7364b8476cee256b24a79fcbd3e9d67bad8d00273386c2c127cac8ef9a3",
  "2023-11-02": "37019ed0bac6e2b6afcbcb92b6cb56dc4f193541e631a40ccf8b5cf7695a548e",
  "2023-11-03": "f166c7ba9bf77e053a4e04c6925e07abb267f7ed991d698558989d3eb99e3d93",
  "2023-11-04": "ec7735d7e0b69c41a28b801482829deebd8f099b6841fbbd1603aa6ba2be639e",
  "2023-11-05": "c7a608f86d927c0458a1726d0bc68e9d1b3371d991da701c2b0b16182d5d82fe",
  "2023-11-06": "52c582f0ea43feee9e3a57155495e790e10499cbfb8a2c4c168d75bde61bbe85",
  "2023-11-07": "be06bf9b9827ab77afaad8c17e9ce61372b3911d4deedb1bdd3a2659fd6de28b",
  "2023-11-08": "2e987873c3391d6b0796ecfdb139f5ca85a42bcbe02304f9c69bdf13cb43a2a7",
  "2023-11-09": "79e36d83d4c109a950d70568372499818961e88399d6fcb89788e245b0393de9",
  "2023-11-10": "1ae22971873d123812e2aad1b899c40213cc76933e4a7cb92e3f7451ded52896",
  "2023-11-11": "5db5419c44a5dce8a1a8332323f16f1922e4a3291986d90586a613202faf5cab",
  "2023-11-12": "d9a4acfe2fd9763568000682df2a937360e49b95a23cbaa581ca4ddf06e8d280",
  "2023-11-13": "2cd570a54e4ecc9c0dd0d59d615ec182825ad2d50dff76736a978f2d8143aa34",
  "2023-11-14": "67631ae8b1708fc940f642fb97f5fe53b24722cc33148cfda78ccbe8f0a1bd6b",
  "2023-11-15": "660a31c7cfa43828e3f5169da760f7378d82e44b553aac6fdc0b3af398b9ae76",
  "2023-11-16": "abb7642b57f2b861624c06db8e533cb0817b3e6eb72ff89e8fca7194826ed13e",
  "2023-11-17": "3dacc7100268ba60603d7919134233e12ef74eccde48cea593781c05ea94aec8",
  "2023-11-18": "df3552d1635b444aad238b0cf69c925df1ff59dd24346c315aa98b65a184e777",
  "2023-11-19": "df39fef965fb97ce6324fb0c526e299ca468bf2012386fc7fe5178bdbc12f65b",
  "2023-11-20": "e419f53993f7884f0030271c793d711ea49080d498440f7c23a6d4f0e50cdcce",
  "2023-11-21": "cf6054f4bca6d68d3232c570be1164ecfbe4e2ebed4a1faf1691f9cb0c120311",
  "2023-11-22": "f3c56efa18d0b017f88f47d0f3f553739fed5a2f13965db77445380a186d29f8",
  "2023-11-23": "7119c98207d24e4125684e1e1ea57d4fe646c7f564da2ac59e89354bd05d2ce9",
  "2023-11-24": "75fc30938568bebb81aecd92c563b1b46e17e7ceddcc6fb7dc7e9eeadbab710d",
  "2023-11-25": "3a26d6edccf7b3a6fd2c9b0bfe2ef36e82da09e7612edc12e6f2e1aabf8d696d",
  "2023-11-26": "2ba25c6e42b73ab4f2c5510264979a5749d41d880fc38bcc899ce1c83a72228c",
  "2023-11-27": "77ea555df864eff5d28bbbefb4a75e9dccad0516d5681ff8e86507d76d1a7af4",
  "2023-11-28": "a377872bc12967794cba9a5ef00940ffdc6b09ab76d08db9e7b4056200885364",
  "2023-11-29": "c28d27cd5183981d8c4d24c7dd6b7e42acb6555cffc948729aae86cf4ccb7184",
  "2023-11-30": "b6247d36536ca6c3eb6f04f7829d832f728cca278b1999d03aebcab0e2f058e1",
  "2023-12-01": "9497e3d338c5538d8a24300c2d9e08367b5a66506ec6fac27810cf105b2d4f93",
  "2023-12-02": "10d1d278a2d08f3b14856bb40eb2119b6d081bae2a107d571d38f978e71fc24c",
  "2023-12-03": "f2af7eb0f27e9a780f6d98ba233ac0bb0366ea73173aa0f5cabd0177b2b9fdd5",
  "2023-12-04": "b2edf7a0c86e32befb802b88ac2d5aa3b06967bb24c640bd9b786a6343728dd6",
  "2023-12-05": "00c9fbb9e87f4991ec70e65d4851fcd56bb86cdf7561a59693a02ed9421a1570",
  "2023-12-06": "0c0bb990592ca903bb20f27366481ed249b8fc12cc2219ae1bab29ad9f684f3d",
  "2023-12-07": "5758fad7c0edd2145982234b11c6b8033a6bbdd409f0b18a53b7c0a22186edf9",
  "2023-12-08": "caed2353ca0f75816d05bb97c92dd24fdecbe92500ae035bb1a1ba430eaf0c81",
  "2023-12-09": "67058bd1598bc439e9d474b3ad31d960605171033d47171395bed8cf8f70ce51",
  "2023-12-10": "9910418746b826454507c202e0b14b273efe7fcdb1401d1eede6dfb93b182438",
  "2023-12-11": "546b8049593ce44f9cd8e15a21f086faf6842be07fc2c41857d3a8f9ca44690f",
  "2023-12-12": "bfc54190070f762aced3c892c5519a26f49042eed30b7bf78b74305b3d9a24e3",
  "2023-12-13": "2c30798b81154b3016664099c2da5845a6ab00c9381e3bba1141462e4ab0cceb",
  "2023-12-14": "26c4fe2cf1769e056bc99dbd90074aabece6200a4bb648722333afb6d4f16eb8",
  "2023-12-15": "f60c8142fefb5db4574d095d0e0136f373e7b85395c3a4c2e4578c6d074a6808",
  "2023-12-16": "83ffc59496027457d3a38ff290b9cca11eb4b8d322875f5c224ad96936b7eeae",
  "2023-12-17": "b3747caeb2b085000840956416774f312295423f5e0d5ad0dbec5a2706a0faa4",
  "2023-12-18": "b57fa26c7c46242aab3922383e720b0c695b959acae8f1fa2d1440c98d26cd7f",
  "2023-12-19": "c3831f0dbded142b7a6468fc5b0c77feeede94864a26c063b1524645f050a742",
  "2023-12-20": "1393c82c07e68b419a2937c87e5427b1df3c6461c3921914687aa191717397ca",
  "2023-12-21": "96528b7522d7a9f20efe2bfe86bf399b0dd1d228d248541cdc4d7ed6ced14fe8",
  "2023-12-22": "3f79e53d2608d3eb540fbd3b7014ddb386a36f33ae2d3ea9e6a4da1869794406",
  "2023-12-23": "ee038d0a36014d006f62f13a7bb5e054cb0dfeaab26affcdb10af8df98f05979",
  "2023-12-24": "7fbec9361101d8a2aec13205147194c6044226a3312eb02d7539ba686fc4ec14",
  "2023-12-25": "29c158e94dc437e0d57f3dbca6c563b6245effd04fdd55fcf6d38fa5060ea199",
  "2023-12-26": "aa4e454be9660dd75758e14d55ac833c33923f847bece90c4c3b6715f5e2da82",
  "2023-12-27": "c1a6d3982f2aeb9242828300cd7dd1e42d5021492faf74258e83e69509201561",
  "2023-12-28": "40d5ef5d6f4993ce0016171aa406e585307d8f082562e260204547731af3324f",
  "2023-12-29": "3fd1cf4bd8a68252c2d0b6cf759b06ba670b75b18625bdcb3528f02bccb29224",
  "2023-12-30": "229a254281ab1991cf35cf7008ff99d46c61d11549062b16a4bf98638438b588",
  "2023-12-31": "131c44296da58ac8c41dcb14b7097e4a26a7398a4ca5c581574837781f8a933a",
  "2024-01-01": "bbc7f1008747702336c24ed852c1619cde156673d66b7255a3c95931a4c04f98",
  "2024-01-02": "ad62d5ec0fbbbdf2d18fc145a3ae602c09ecf3871c25deb48525cd073377d224",
  "2024-01-03": "9b8dd780147fd0dbf6e99c58c11684b655e0e893a7d8a74169cc62914735bfbd",
  "2024-01-04": "a40b99fefd6408c7fb8af3227ea61558c3f946c6800d4cd2aaddf31f6e7989d7",
  "2024-01-05": "e4ebbf71b20d0f80f797a96b5e7cf4e95fc31e6b9ace3d08abb68d1473453017",
  "2024-01-06": "5fb025630ec4f66d76dee20c13197f4f008bb41c0ef6fc229c96678092fb2703",
  "2024-01-07": "831d38e3c47a1323da5588227f06634eb880c39fc1706a37baf268c62812cff7",
  "2024-01-08": "e513a44ef599434b1534738c84d90cb886974441085429aac63c2af3afa7b5bb",
  "2024-01-09": "bbbf2ebd894035a23c2433e1578b7046505595effd02abd91a0ac9e720d2e8dc",
  "2024-01-10": "9bdcf01bcdcd5c6407bc6879a9a98a3a11076652bff3459eb8f686efaeaeb375",
  "2024-01-11": "6632eba3305359bf43987c819ff0141339e884753815d7d4b9fdc4bad4dea9e7",
  "2024-01-12": "fa9bc7f07797ecd1067a8e2ae2c4124a1411e8cd212f39f715ee9407731c52c6",
  "2024-01-13": "2acce9cab6e22f8813dffd0f75e78b4267355f8654a4f9df80608232314c37f3",
  "2024-01-14": "810505de40d6cc43ab882ce49dbf699dc1d1856678cd1882c492eff05b8479c0",
  "2024-01-15": "dc409c7f61cdd96c9c74ad6beddb49831344d7feaa4d1d1c2e54f400067097bb",
  "2024-01-16": "97433bc4a9f6987363dabc63fe85233f0dd19b0583f7a74c80033c426ffd2bad",
  "2024-01-17": "3099dd3f3bec113ba1a6391552bc301c7f1b109bb87cab3a7611bd0ef8b714a4",
  "2024-01-18": "375a584f510f78c1387ea83f9ac12da2087fb9deccd3de235fe4b27093612e48",
  "2024-01-19": "5595d40b95d98b59915690304f3a110e4e3de34083d13be640ab736d368ed8f0",
  "2024-01-20": "22c696c3e070eba9d09e7774d0df53cf39c78beffdd8c5934517bda5a26d40ff",
  "2024-01-21": "235875c70c2ce9c05186ff046150fbffe5c76ff636e8b1bbc02b6f1ecad122b1",
  "2024-01-22": "da3ee7ee56691b24431708a44183c2f09c04af6599742eefe474d604f17262d4",
  "2024-01-23": "d01151b74a28c65f2109da110f23c69d443220315b2c1ec1894a9bbc4fbf9381",
  "2024-01-24": "cccb9ee7552fcbea0041789a6845e3b690f342c92872b7f02d102c615c22fad9",
  "2024-01-25": "f3f4e3c2a298460f8f5d3d1ba25a0af43c212d55ffbb5f4e4b47c02775d5abcc",
  "2024-01-26": "9b55c6f8256974ea527a54a9dc46c48abe17cff409a488388d646e033a7f4ac9",
  "2024-01-27": "b605139082b834aee0df0a81a26e1c5a27107d0208db3eac7fa3737fbc035156",
  "2024-01-28": "7cbe13bf42d25ec1ba1b10f1d52e0f2e8f31d60f53d870ad51032116eb5ce8a3",
  "2024-01-29": "953ab02efa7db8a64b21391ba75a8f7acdbc06041e1ca5a1363a7ce2916e22db",
  "2024-01-30": "72f1948128dfa8875cec5d15eaf2d158fc99216b6141c29a218ddb37c6e32208",
  "2024-01-31": "6a1b7f0099385db68ea46bd1546aa95bd1d14489c9cf96e6648affacda89a898",
  "2024-02-01": "4b0e037dd3bc19aa7a6658a78eff88828e949290bed1b3fc77ac125e532167a2",
  "2024-02-02": "5f242a54bdac3ac95c336834d1437e231690f23e718868f3c0c6619ea0642218",
  "2024-02-03": "a21283d6866605189985c2e55eebffb3667c81ef706d47ac8132d7cf3cc5c4d3",
  "2024-02-04": "dda948aae4a413f7fe347db47499fc77cd42c5a1dc540ec2de426250444b98ca",
  "2024-02-05": "d700ac265f0de60d9229ed4cb777d9e9bc75086cc3e848279d8d3e49b241d3cc",
  "2024-02-06": "89123b84cc1fc5ba6c79faaa881f50b29cd08351d71f6713b05159f75bdaa8ce",
  "2024-02-07": "1d1e8852248dd9effd746099fb2a776e6c0486158d29cc6fcd3a94b6f841b725",
  "2024-02-08": "e550b7a0e9d9ae22ad8ef379d0b29e13d17782dd10d45e8b3279886f1ad805db",
  "2024-02-13": "6727524b57ff6a890cff6e756333d791304727b0654f1055a34851e0b7fd89be",
  "2024-02-14": "1f29ade3df33b709e29f8101316860fa0ac3ddbbf2430a9c1e06c23d7c3a3fc6",
  "2024-02-15": "c103dbf6a4aed0a0c6a023d90668567f7b143fd4950d0d0eb40b5215620642e6",
  "2024-02-16": "c7b38bdafda739d9177c7292cf63e01ab9f4ebf2d416d96ad3627c51fee86a00",
  "2024-02-17": "79701f01938307bc96d85c7c8f68ce0a8a394e477f16d08b4d3a91be6b9a1b28",
  "2024-02-18": "9f71ecb73d4585d4ef717f3925a3d8666269c1bf471bc16de54e1d825aa8c522",
  "2024-02-19": "e5240cb338cd84e722c6c9d65fb7b21e1c6c4ab5bcc90b147019f7f3351ae0f0",
  "2024-02-20": "df78b841a58c59e628fbd113d481a15b220f2dd7fbe541b21d25edc1632e7b89",
  "2024-02-21": "396562fc675ce252ea28d000e932bf495d42468164c3162398476482c9f52a29",
  "2024-02-22": "2325475cfd571964d392cf9b00af08ce51a319fb80f913471fc8c1d1770a9753",
  "2024-02-23": "341e0d135ffb413e3313374b65fcf63b2726432d4795c2c51c025a99cc9b03ca",
  "2024-02-24": "7d3dec53686bcd09bb6aac1c32d4dd97c05feef3c14a629e00f89d3c0fc33377",
  "2024-02-25": "c05df11ae7783f89c42a684ab1b87974e4306da9bdf19f7a229b465b728eeeed",
  "2024-02-26": "743e4e88f2b9de68c73d5509bf274ef4b4ae1a4a38ab026135648970127818f6",
  "2024-02-27": "03962db2ee78d74aa2b72efaa665ba57a0726569c08b4a4d137346c68b535e6e",
  "2024-02-28": "7368c55c3cb705da40e5b49663c40d112ad12e434402631223b60bd0fe933657",
  "2024-02-29": "eed8a59140ea446a546cc6b28fad2279e4859192e37403bcbec429a3f66b99ab",
  "2024-03-01": "fd527e939b47452688a1a244f66a8ef6583f15fc0a33b72ef4bb1eaaabee07eb",
  "2024-03-02": "f4d2c55a583c9fd27541069be2c9efe2d8044d64f245f6c72510214b659d3e3a",
  "2024-03-03": "5a3977dca0a1a410b372a8b837f547f06a691f7a76f00e9c5bbd8585c1e174ae",
  "2024-03-04": "2a7270e70f32b1bbc71fa3b92bf57bde792015e572ba1f08332f8296c787446b",
  "2024-03-05": "68f698839a2a8663a2cb92cb5a095db008b28d444665e6593eb57eb1ce24af20",
  "2024-03-06": "836819c2d85def740cef3147b32c2c8974f00d3cb12f27b2f89490d21ae83de8",
  "2024-03-07": "6894b401a84015ab7fb5f0db3f066bfe8246d0d36f1a19b3cabc7750c2700a7b",
  "2024-03-08": "9351223e0edafd4f24e0d34d3528744e42e15343d089dc6a98a13198498fe49c",
  "2024-03-09": "ff659362abed0b6a3174aff06096ccff54a036c874529f2894eee23e0e2c60d7",
  "2024-03-10": "3532e7205c50952ef107e6e49b8494be4b88dc4d25c8f1cdd08cdbab51446b5a",
  "2024-03-11": "55a89fbe764a76afa2f7db2e75707c7c689f03ef28c60baf1d5f2542d796779a",
  "2024-03-12": "23e66098f35810113e419a5044c871d2812c76de94361ec13f515873cf04f51c",
  "2024-03-13": "efdb1f846ab1acfb783310e58aca93577d09f7c8e7609ee5e6bae6d16d710247",
  "2024-03-14": "b018108709366c1fa9b4ecc290c6fce468c77493211cd5ab7d6e3f3cfeaec364",
  "2024-03-15": "45c17a6ad6baf49417d7b1fc4776ea76e4553ca930cf94c01980da1b28386f21",
  "2024-03-16": "0901539cb62430c0891ee87b8faa6c042d3a64a02d1aa747890044d3a28e35c9",
  "2024-03-17": "a2406540310b8a846b64f77a88c53f22fafe229fae1330a0966c41fcfe390c6f",
  "2024-03-18": "87934d91af08b7c2a11bc60e83836475b4feef8afb3f6dd56612917ce9136c03",
  "2024-03-19": "0a34c2b29c519e88a56aa6c29bc453a1d6c931b059a101c6de55100907494c2e",
  "2024-03-20": "c03b08691ccf98ce3d3d2017edef33fdbd007a479f6b6c087d1e75b155b24929",
  "2024-03-21": "461d3f1260e348090ad2d7b28ad2a0ffca04ebe2aed330082213493ba3d77462",
  "2024-03-22": "cbdaca153aa4b1024da78e3591656ceac4f62c93732c545032a99e7bd50942fc",
  "2024-03-23": "a6a068ee4422fc6b80e033c9daf999afe08096089b874b1ef39c530e92de3a05",
  "2024-03-24": "eb113fd6479a790ff4314db85bcd044b0ece76edaa0f2f7177d7d8ab487b1ae5",
  "2024-03-25": "75a0e3439207e76cb9c1cad428918373d0b242d4680f26c464fcef1c9d730540",
  "2024-03-26": "8ec874ed0b20a1d8b2a36365449bd33a02cf726823b4bfcd8fb59bcdab768396",
  "2024-03-27": "c3d74f93a9cbfe8f545e8c56ae0d9a82bd9ad513f166a8c329a685532051902d",
  "2024-03-28": "814b9d02db4948e5a444d785112354498a68884eadd81fec6ff2ef4640966667",
  "2024-03-29": "6369782c1a1f0092bfa048beac2931930b146ea45a362acf95f0347c776bf517",
  "2024-03-30": "d7d82f93908b6b94e4bbafcac1ded9a3d55fe7e8db4f9f16124cffce08d556ad",
  "2024-03-31": "b59aee076930e7c80904c5100d8fe45474396112ab6513d0320f0a84e0ad8e39",
  "2024-04-01": "04aafa7c1bacbbf7e21fe107d9410d97da9d3564de0c1489b5d066d3a0af3e38",
  "2024-04-02": "61ac8e4c5379f99f8c4ae5a4565f2c6273e55bdc3d04204a7c5697d747b7d2ef",
  "2024-04-03": "216ae57f5c199e5559202e088c50cfb4c203fd59222f47eb801356876c2e263d",
  "2024-04-04": "830cdecf2d2701ade41cf07e44b6a1b24766e007e6183f7786c2ec22b527bb4d",
  "2024-04-05": "5dab88204354e13f8e5f24e25fdf63384264f66717bece47964ee54f1cd085dd",
  "2024-04-06": "44931175386a4bba2d779094f556c81722a236a86aad4e1f4731a0340726be66",
  "2024-04-07": "b18c9aa3c748d4e56658b21b7804fe5646fae9a500503490a6976451653f7ac9",
  "2024-04-08": "4ec5395e60cb1ebddee8314ea96a23fa5498ff4309ee6d865e81645521b84a18",
  "2024-04-09": "f6eb97594aa20d786401e0da06ad6fc474fbb9afb9533eeba8a2c2bbe37b173e",
  "2024-04-10": "de85d894e6cc9dfdacb80428da7fe090816bc9cc0f1dcb9552f2652a9eb8134a",
  "2024-04-11": "61f4cf76bab84ea12529ed4837b9ac1c7196c730ded3eb0c79d6c06d9c1ca1b7",
  "2024-04-12": "25da3b79b68bd5277f61f43ec989a6e1767b2f3c08744ffe01f118d9dd6bfba8",
  "2024-04-13": "b790489ca8f9576c72c5e6af880bf44d04fd9815cbaa24c45ed404170aab40af",
  "2024-04-14": "9109b667af56ffebc429b8f6de0e0801600fe3acb16b669c9fcfb57b129f90f0",
  "2024-04-15": "7922250b069aa38cd68c7be7ae4c493e9dd63da44b9c17140ca71b3a1a3b4f6b",
  "2024-04-16": "bc69a4d94eb54c07a8f113070672d1c12221f3ff06b6546a0bea506af20fb7d0",
  "2024-04-17": "f0237a6e590dbad2109eed30cd4475c663ffeef50091f5545f5be8a2751c096d",
  "2024-04-18": "f4b8c392406fd2ee90a1a36dcc2b02e95c4d54b05b8d12f13afdf4e400ad2ecc",
  "2024-04-19": "5b75149224b803963d6bbb15c51dea0eec5934bdf1f42e54b8c4d5fd3dc56782",
  "2024-04-20": "6af412cfb969f586da196687767d04245daf933762e6e0c9a5928ed7b1b45360",
  "2024-04-21": "a1fb90d6663cc6c007209329e09fcd07b987676e83b42dc53e68ce75252348bf",
  "2024-04-22": "8e768cfc6588676efbbc9a9761111282342892c5d80bbaf74df09f0ca5d9f1b7",
  "2024-04-23": "49cb083b8e15030854f719233bf94b35e15d2647a51123fd5add3b442ce5f011",
  "2024-04-24": "05f777c66480932aacd36c3b86344899f7cdd62ea8dfeb8c42d0a2324df6ee7e",
  "2024-04-25": "a142972cab39b7857c1c892510ec7326d6dee35d0840f35e944e9e8380e8514a",
  "2024-04-26": "27f2f9901c78a6be2da83cdd8ed194b320726fc7c94047fb4123cf5efce01cea",
  "2024-04-27": "1ad155887888ce57ba8627d6945db7ca06d0597d05eeb0eb9cf31f9d68924158",
  "2024-04-28": "abbfe5de8a53394d6bd91e8d8195cc64eb597fef2eb2513c60decb0a1944448d",
  "2024-04-29": "35ec1f74bd7c0b13743572fbe5edc12411e7fd90be13849ebb473768c0504796",
  "2024-04-30": "6c8595e13ffb4cbebf4c7e326c954536d26986d0bc22c72c6e383bbc2ed258cd",
  "2024-05-01": "e547592ad8517773964f020aa01ca95d52f7c206b064981d39548ef7b3205ee9",
  "2024-05-02": "c08e975786e935d4ee4f376cab8a01c0d77cf46c16b2c11cbaf3ececb63535cc",
  "2024-05-03": "8aabf33f8afea0f658f0b28802f88a11f91bd9b65ec0c44ec89cb946e75024f7",
  "2024-05-04": "848ae2f81017dd1499f34318174dee2d89c89ddf14c9e5312ecb59bcf04b96e5",
  "2024-05-05": "1b44e9214b1bf4ef616ed748f46d08c3e5bfa107eaa075c10de798f5f280549c",
  "2024-05-06": "c9807d6afae29a17b210debd01c09aaca8e7c49f28d0a9891277aba1d542d5d4",
  "2024-05-07": "a04f441bee9cdc3c72acac8724587bab92ceed893a81b9876ed40b1fdd296e12",
  "2024-05-08": "0bb005aac4c8a525362c171b52a821cccb02aaa2fb799a116d648596e22a7f74",
  "2024-05-09": "ac6f6b9357311fc572eab4f07d416d8f21c5e89a0ab7237883618077ea59d403",
  "2024-05-10": "3fe566122172746151e8fab8bafb1149a62426e0c786a9d1e9af3b9af49ecd12",
  "2024-05-11": "ab950abf39f8673c6ae8b5b9468445c1119280e97c2ce3a74d5251062e4268e5",
  "2024-05-12": "cfc1aa25e0b1148cf053f3446e44a63508a3cbc16f40b080d22ee274064e958a",
  "2024-05-13": "4b0e709e498aebb55ad9ffe50303762addf89179c737663445965be6c8e6b34e",
  "2024-05-14": "2924c2aeccaddc3f8ffe74c31e803e89882151436b4be337a10f8952afaf875f",
  "2024-05-15": "2c54b6c72df9c46c45e639340071ebe797257d4361f19d1855f942852e4e3d1e",
  "2024-05-16": "011dd37997d138e69d7cd1e44b85b2156559bc96f40574f65679f68bd34fd7b1",
  "2024-05-17": "647779f9f045f50cab578cc26f9c71de553dd1d932e7460ecdf389de33f8ad69",
  "2024-05-18": "2792da2960507d4992931400330fc93b16c129de9fb4cf66836984388719b798",
  "2024-05-19": "48867fdf3d530790aae3167bf2c55f93cc7fff37c6bfe611abbb8135d02d6f0d",
  "2024-05-20": "c661258e292a6e0518ad4ad7d902a2fb0d6abd178385cf8acd2cb6aee0ff8a0e",
  "2024-05-21": "17f57b62fdb9feb6d815d66ef33c8c615f7a2ad5a84066830a878ef303e10b6d",
  "2024-05-22": "b7a2a49ae208ff4b50095e804dd2ad992d694729772fd1a862b7906d42fab4ca",
  "2024-05-23": "7415ffe428f99a107c01e7543ff3682be5aaa1900b603026f54dd0ad9a08cc2c",
  "2024-05-24": "8abbb88cf33dfebc76f136862c735ef4cef7756d09c741ef4b85a991ffc40a91",
  "2024-05-25": "011d5ef970fd2e23b014e29e26b0765cdff4c946f7b72b5832e678790b33b4bd",
  "2024-05-26": "e4a33acb1e9814273e0195a2efe2339264ca9bfffe994d1190acb030e07093e9",
  "2024-05-27": "213cba8a570fe2f4775d0542c3a68b5d5feb65b9d59ffdd84c096411f9783529",
  "2024-05-28": "4d2a77f29ce77e5bf315879ddba2ba4e4f773cddf086ef1d6cd04e7f2d55ced8",
  "2024-05-29": "c463507e8626eb1f9ce84b639c8ff296b182f4cbec77f0d57f914d9abc0980e1",
  "2024-05-30": "2f1d74b14553fe022902158b5519c89e6ebb6c4d548f54698b23264bde3442f5",
  "2024-05-31": "fdfd49206dd3d38d4f14891307b67d031341c17a7bdf9e3666ca860802f419e4",
  "2024-06-01": "3b37f18085098538de9b24eec050544ec54c6ee765447d54db6993b2601a91bc",
  "2024-06-02": "30e1995145c8a9dcfff4451b30c36d682f5ec2638483addbca9eb5f86311cb9a",
  "2024-06-03": "52b1c5e09d046671fe9fa1d236d361f47c5247ff1f07433c0e75da15fabd5d9d",
  "2024-06-04": "94a79565d9f4f1e0cd28a25f17c7b30fc326dc57d8640f59cb1fb4443280373b",
  "2024-06-05": "eea3e95e9b51b9fb994f38e083f5217113ec86a5118e56007174741e9bb26f55",
  "2024-06-06": "557f8141b349c5a0e61c54cb0cc300f577acbc67924b3e4ac046a8f767af0339",
  "2024-06-07": "fc07c8b40c371202a46a9512d8fafa32491ecdfa9235c11ae9edd5f908cb5938",
  "2024-06-08": "d5762a089cee7e1ad0374808e41f3831300baa32a1252e98ab8e697aae5df5bf",
  "2024-06-09": "cc8ec08c19639f8fa07447eddfc97f6539dab3318081ba273732b8be2d280c2e",
  "2024-06-10": "d1da5d7fa10bb7c53ef0d1827639833232f7fcf2593ced98eb01dd583e70b52b",
  "2024-06-11": "f24d44c718582edbdef607c4c9e6deaa0fea3251decbd8f21254cbbab344ab66",
  "2024-06-12": "2ae3b65fc395353b96c2b682eb8365d9121f0208d5c13cd64ea55bb32f73f446",
  "2024-06-13": "340c0df6f1311b3dc1a91a4467716bd98d4f0b4100f1d10d4b1bd594afdf045c",
  "2024-06-14": "1ec76fc2b3b66981a43d01f0333439a7257e8a759183b16d477d45f1316a9344",
  "2024-06-15": "9a4288c62a47ea74627b701595ad8fd92f3039bf8c9afcca2cc2e61969d65cd9",
  "2024-06-16": "1a2cf46de522df53acff9f6a2c37ac7e2a27b716d4e23fc7ff4967c958ffb8d9",
  "2024-06-17": "e7eb8f969d59aa2122ff7e4484e77b0e350b32e7ff467c19e5296c4a9015af32",
  "2024-06-18": "da17e21fc6d9225b6748af884cd494165cb1ac3011901b7ba778de6eb0c4b5dd",
  "2024-06-19": "f7ab1aec34c0ea90c50f13846a483ad57364b4eb2d55d8602bef0244f1b348d4",
  "2024-06-20": "57493555c5b21a95bea063e31a3773a94dab6c69936e91e3b1927dac8aae65bb",
  "2024-06-21": "6b11d927861db86a2281a9dac34567bc07d12f15782dd5b045ec9f809efd1242",
  "2024-06-22": "a8bf14ade85376e6392784d4c946137c7a4d0a028a506b65f53910d42603b54b",
  "2024-06-23": "1f02ecc8caafcdee7ed946e1e2f1d67843612d31601a1a3802e836db65e91440",
  "2024-06-24": "093126c9f9bd5aa1778f5f890c1e32e5ef46702a7129ca1a47203abc5bf504ff",
  "2024-06-25": "61089be40ec5e666237bd594e28e78d78db11dc66ac4271f676a47dbe9cefbd5",
  "2024-06-26": "c8f4a58608c401ba45ad1040eb5779f46b6e3fcb12384964dc5a7f031af79ad6",
  "2024-06-27": "cc062d7bb82c41d3c53dfec9603b20db985f8c15e55c9f0f71794bf33b9da8a8",
  "2024-06-28": "647fa31a4538b293ab44535ebaec72c1269cb785265be63c62650f56786ef959",
  "2024-06-29": "1368743d34520ca4bb663878607e5f68d5ad7ae332b688648fe1893051b7bdbf",
  "2024-06-30": "bd96672289650bec87f4ec3528007e7d5dac2cb08ba8a3272b45b7e98ff6185b",
  "2024-07-01": "cbfa0da3c27680bec6e2291d72165f9abf27bbe216c4a02372d4661e45435379",
  "2024-07-02": "c72905b52ffd49dfd22187925039f7a450cab884aeb46e74ab32838e77f81424",
  "2024-07-03": "15b018c6dd65e935f73171a8483fb6b6d3214f22c9d808905c7add146f8adf29",
  "2024-07-04": "b1be98e4de64e847d4dc3f48f685b78f2e26cba1b78bfe59e47b916ea3b102ba",
  "2024-07-05": "7211627469b45ad6e1a150ba7a6d1066c8e0926bc483eddfdeed74f2783bc764",
  "2024-07-06": "7578bf0a4aeb7b39cb5a747f0b8a60e4aab22286e7e059fe3caf91437e2d648c",
  "2024-07-07": "4c7bcf9ddfde09e657d35d9a3ebe6105644cf60028d8043d6bb6772fee448d88",
  "2024-07-08": "09851935ca3a4b91a4482a213fe0f2c6f190230282e09f9ae15f04c375163285",
  "2024-07-09": "9c448cf27ada6054030bdcc52f580ea26de9f6508b04111d95e1310147e9e763",
  "2024-07-10": "ebcf25b65bdaa9b9d243d8b931d43f33b5c57a3ac03d40aee3d9bad0295fa331",
  "2024-07-11": "d45a403126b73e7465c064ba2b60dc34cfba6f80a4e7f04fb79853d926edee3f",
  "2024-07-12": "c3d3c7bd719c02a224df77c3e83e311431bf91900e9daea45a46ab0d36bf0d52",
  "2024-07-13": "253214e75de4060fb7f937eb00b0f81e6c46769d868adeb59b826e5f840c2a0a",
  "2024-07-14": "a6bbf5b0d4c8751d27b4e3cb97d53d8a7d83cf22c9bbcc67893806220743449f",
  "2024-07-15": "3c4905c2e5a8d38c08ac90a59f77b0f70e0e320bdf63d81fcd7f7a7374b76c5e",
  "2024-07-16": "71d41068e2189877dd34ad17becd95a88043672b463c78d48de7ac65870761b6",
  "2024-07-17": "cbeada48b933aafad68f1f3848c4fb6325f75c2f4ee2935517125be11d986ec2",
  "2024-07-18": "174666213b572322ad202368a40b213107842ce6b3b07cbfe3ec41aa30c90ebd",
  "2024-07-19": "ebbbdb0ff9565732c75666628ddfa9f44b5ef1a7ef3d8c7931d57d99fea3849e",
  "2024-07-20": "45edbc4d4f64bd0d95114b0e7fafbd6a0c94d2f6f0046f913328ab8b51803532",
  "2024-07-21": "c6b747dd5c642daa3df052a203cbbb7dd4aa1db49ce707cf738e2971f7402f5d",
  "2024-07-22": "475083c8125c7782760de94dc6a3672aa3f75f688f7c9f9e0bde10d394232a5c",
  "2024-07-23": "6ecbbbbcf310112f6098bb6a05db4faa7f7cb1c090aa3d11d2836e8fc56cf790",
  "2024-07-24": "3bb1f7cd40760915c72a00411737397640664e761608686e38d9e1121556ead0",
  "2024-07-25": "4eac04c9240da24cd38791d8694d54cde1cd19f7c04089246d6e11c991dd0340",
  "2024-07-26": "8c9dbbbf526c8594e06fccd411da68cd28478f4bf2fd0ea726d7577a4f32522b",
  "2024-07-27": "866d0076179e5b38978070ea28e6bd0dd4e3e1ee98e7b804baaf232a31eaea69",
  "2024-07-28": "a7bf5c38c9f69262d8eabbc47c9f4121f2432b4f74158a505c7669ae5ccf1b3b",
  "2024-07-29": "ed82a4a954f4a568e4a187858de3b89fc72e630f905b27caf21577e6c560f56e",
  "2024-07-30": "0f85b26e528b9774f3b1508fe387c92625670beeea3945ba2b547706848e3c2e",
  "2024-07-31": "1a5842dd14f51b58941f915a5a956d1d2ac22f6d6cf11dbc17a05ec7d9bc8f9d",
  "2024-08-01": "0c5c9c8c33e440de391ce6a86e3e30cc66dd810b6bad36aebff7b793f63c8219",
  "2024-08-02": "625ddcaf2a8055f1b76fcafe0bc26cbc155f33a00be02b12b66454366ec976d2",
  "2024-08-03": "a39cb27e28bf8375e7879e424d55234b135ab2b55849c3aeeb874e1f94396503",
  "2024-08-04": "2b17dac2bc582f993fa5b203fc0755b1839b11fb2f86b00b4283970160afb5f2",
  "2024-08-05": "c496d712684bd71b5653db294cb3af50267050758551c9f6e4a63c81ca444a5c",
  "2024-08-06": "4afd12e3d459057f7e06afc4a1d185ddede818e9f04d41f79bac0ef86f965f08",
  "2024-08-07": "8844d09b150fd8ad6b44eb3839cc89b65d4e7bb80925fa25a66599226a5119dc",
  "2024-08-08": "60ec7db3d8ac56ff8e37eea8e47ef74789b05b2a96649844e6657dab6b3f360b",
  "2024-08-09": "a7d843fc03775fe89e8d9255813dc62b3ed7e363a6eaa7ed3e46428861b77e88",
  "2024-08-10": "5b6c8225ea0422665316ca2c48f4ca42b112a5ef05ad8becff8cf13ce24a0e47",
  "2024-08-11": "37f7cdcdd56fca54f4316e6cb973b16cf0b0af461f2224c6ed655b6ec81aff9e",
  "2024-08-12": "580888971b1d6a81228ea9724b2d46f4643154460e25b0164fc2b98d99ca4cc6",
  "2024-08-13": "fc43e78da44d41c1ecb521e3bcec90fa218fd0840ad24cbc198822cf5914c5c6",
  "2024-08-14": "69c5230a83cb51aa7fb1324299b9cdb1fb120ed0eec320a20d77d5f3fc481272",
  "2024-08-15": "893657daaeb00b6262e7ad34dbf4cc584e6b425f01896b3af38d7a102649093d",
  "2024-08-16": "201502d61a7b53501692ecf8b314d0bfddad2e24954dcaa67fd190d3b1579fa6",
  "2024-08-17": "efe99f4cedc5306162e9ba07efb8d4643245547b08b072b1891763e03792fa22",
  "2024-08-18": "ec5100dbae81b45b89d07e2e6be6579796f23204a795534f9b7005bcfe9a6c77",
  "2024-08-19": "c57d47dfe04c88290dffaaf36afb11c5059a13c30ce9864752913944a98ff5de",
  "2024-08-20": "94e235b9ce70fc8c7154774ab49e5c7ca932b1bd2f36001aa2499a8cabc1613f",
  "2024-08-21": "c3a50335f549aa949f652345921d4476a1025440c6a6f5cd6923d85ec75ff474",
  "2024-08-22": "6555ca9ca9d7c89a163e0365660c53e909cbb7b5392f20212fb0f555207ebd93",
  "2024-08-23": "e48a2ad8e6da8bd821df1122a28e161550a3529cac219c80b88208585804a9ad",
  "2024-08-24": "b196cd7f8713bda1986c0d4b2e814937a6ee81d6ddfcc68b8a49dfd3b270614d",
  "2024-08-25": "8f18dda48b5123c2d25c86828fadc8603af22d4ad58596d77e0817329707e885",
  "2024-08-26": "90147baeb1df908b05efa59e6d49b24dfa893bb8a41408280335ba3f9d352903",
  "2024-08-27": "c90b75fb060fee69327a06f3970bbffc4645f05fb8f7156847e316d266526c3d",
  "2024-08-28": "f090112344bc15e2d114b0b012d9226bdf8377caffa6c3c0575aab7ddf9472e5",
  "2024-08-29": "58956b381ff1eaee36631bd9d31e4ca38a21b7c84fa70ac3cad6de98f0f5b9eb",
  "2024-08-30": "588d11f6d0cb7c0b1f7530cc46de2090e04c10de6aa39cc44cd5333299407394",
  "2024-08-31": "89607d0600bfb8709dab747e3652ac6a0eeffe2ac800b90bd384ead9948ceec7",
  "2024-09-01": "bd11ae2d7d0bd14ba2b79de50f24229f5cacb2d124c4ec53e5cbdc252c92f739",
  "2024-09-02": "3352655111d5ca5f14ce729e107c53526329e014dd83ae867389570652997c92",
  "2024-09-03": "9deb29960bece7c7a368446d30f2ff5af97af0ebbca4d00af5d630eb6e1258a9",
  "2024-09-04": "2149df7b2c305709f5607568017e8481cf7f3bc3598aaf7cfdc0d13dc6304582",
  "2024-09-05": "f408dc395f0c3c2bd5ca5a49074141309e60eb64ad378febaff6ad6e3d1fa90d",
  "2024-09-06": "2f33462a0b43b5c48f5c3d7d6681c0180043e1eea3997adf9bb62461a1f4aa11",
  "2024-09-07": "2a675fd6e3c7e9248fbe5e11f3a028ba8556b098e9863cbf202cd93b01e11357",
  "2024-09-08": "59b8463b1aa5aa44ddb8090169454f338c2781ae4d0fb013fe450439aa9899c0",
  "2024-09-09": "7ad71b69d2ab3716b923e8cfde40b874550b0b62f0e89e7d05fd72ed7eba6d8f",
  "2024-09-10": "9c8ab402585bdb756e179746fe72eb71db8937154b4e354fbd08b9faecfe7a64",
  "2024-09-11": "d5a99673fbc1875ec56125dca42837e30821acd49dee85591cccd2095794433e",
  "2024-09-12": "f2be3e0fd318965e65d142b410afcad9efabc03979d5474684132c30160a0201",
  "2024-09-13": "ab96a274aa11e72502a2e75fb09cdeac2c1d3b2a48a612e739c88c4a05e520c8",
  "2024-09-14": "781fe096e396deb4fb7e87aafb37eac380076afdf89b9432f0995e41ad24a621",
  "2024-09-15": "d3eaff4167e8207109b109baa312e2a0c9a6aca82d919d99f84f6815e42d8baa",
  "2024-09-16": "f35775b2bf89853cc504a4b49f84f865771b19a99fdad071801bb142caaa2163",
  "2024-09-17": "44e12a09cbceadd4b8abf053172f4240e6ca229fadce1f33786afa256875b499",
  "2024-09-18": "8534b151b4b47669cc4e8c60bf2ed3a6076665d91bf2dd76014048912e565c4a",
  "2024-09-19": "7681b180b86927284d540cd0d579fe59b999a1aad1971514efaa513626fd8158",
  "2024-09-20": "233f6f62b4e6035277f5f7d64c4fac9a8c99d70e751a45ae4e3d398c176c7893",
  "2024-09-21": "f8bd3547988eaf62ce99855e36ee2da927a37073681008cc2fcff37cd1594310",
  "2024-09-22": "9bcdd12d6e14e16b519c7e7aca9e80c85bab24748cf7fd607feae57bdbf79bc0",
  "2024-09-23": "4f4eb29a5d516e3b2f51be4297bc619f563129bde1b085ddc712dc9dc85e712e",
  "2024-09-24": "b7f54c266c8e1bec7fa8ad9c3f21b5001a4789e5fe4a608ffc83965f042a1102",
  "2024-09-25": "afe40c6c6a3b18709b2d3c5429d541fd29baf57cf567fe82130bd1bbecf3337d",
  "2024-09-26": "8073581044b9afd91321b0e391ae2041f09d07818072521dfd03621c8d1b344f",
  "2024-09-27": "44eaa9613c5bc00a502391ee80565960f3dc1954249d45a88156fda776610038",
  "2024-09-28": "ff26bde93e78c2ae0be9f163525d6a0f4fa2cc5c04cc8d9ea37b0a6c1f2b9d98",
  "2024-09-29": "8073c8f2ddc23910b9e24543a7b77628e6fbfeff1d8e5680aa19bd73dff57f70",
  "2024-09-30": "6c0555985b2887a1afa448b6ba69e789d6ea5560f0d6d8b9cd0d9c738c9adce3",
  "2024-10-01": "a8988d7dc5021f0e8a9bd5c9d3e723d200d1788483b356120a34e35f034374dd",
  "2024-10-02": "49e350274e2f7437891f20609c33b85e0a0d0683955d1da1e92e947136cea3ef",
  "2024-10-03": "9afeb677e0695dede6f481dd0113d4392f79ca98b72f6078bfb55f23dc271cc9",
  "2024-10-04": "ad2e6b1173a65270a7a27f65bf568032142c218099d687e2ee10e7b47e95844b",
  "2024-10-05": "dba5351a6352b62d067af211ded8a4d6307ae039d19d1e95570acb4b931c70ed",
  "2024-10-06": "1fe24b6775af219c07c4ec96736ada0ca0c3a4bcce6b6b0dcc3fc7e0f243d4e4",
  "2024-10-07": "5f3ad2b7acec7fdf7bee72fdc37d166bebd32b3ff2cbe397e33f8a010d4d266c",
  "2024-10-08": "acabe3fdb2bfb4418d7c13e92683f092780c4dde85036ca964f61e80c06189e3",
  "2024-10-09": "5a97e7bc702bb80bbb4e97d057f04a2d7f9f615ca61be5414ce4d063f1de2d42",
  "2024-10-10": "96c6ddbb90faf06d16bbf3b5cfd849dab180aa1c351fe41fef9a5704e9ef12cf",
  "2024-10-11": "47da7f88292e4b239423ca50c0cba9f5fc4f5f646aee06c4fe602eac50dcdc22",
  "2024-10-12": "de193e3428cd72cbbc912d639cdbe0e40d6cda32a84aeaa547f024cfcf9fba2b",
  "2024-10-13": "cefbd74374ae050e61de458beda940a0008dfab98f07def95e016c562dea2cd6",
  "2024-10-14": "4ea88641c5bbfdeb01d5d392e223b8a10991205a59d3615ad824e1f8b8fede3c",
  "2024-10-15": "0cf93419e89f7c0eb437f84f8f382dbe8013b46aa473ba0029f93c710c960a87",
  "2024-10-16": "f3e1fe6ae8d4c853f823be4812b9d5cef48b7c71605c10c4ed70141ff582c832",
  "2024-10-17": "5d65eaad5a01da32711909880a1efe08bb3d1c114a47b71c57ed37928bcdb1c9",
  "2024-10-18": "a11908ece8218b67ebd96487cc40a8620ca5f84d38b8c3d51c1f9d9b6fa495d5",
  "2024-10-19": "a422a7a16e277d1f8c3035bbbe0e28b86acda6db87c7ddfe55456e42b9ee09bb",
  "2024-10-20": "2b779b20c9b9172f6a500a3b2a9d7eeec9fb3bec848d1ec27984722499ae953a",
  "2024-10-21": "e43209605876a81d1129e2ec03d08dace3869f5bf54ee3ef14b347fc52fc4bfc",
  "2024-10-22": "684ef3d44e292c5dfbf396df76633906d6531b822502776b5e13dce0b3da33fa",
  "2024-10-23": "36dff08c79343e251c706fc14c1d38703ed923633e116c8f17be1f39267ca2e6",
  "2024-10-24": "2768abc1c89a666f50ece108500221314eb5c79b4962b79c18edd5515cc6202e",
  "2024-10-25": "ce126273e8033d0cc4de8ae0ca9b0be065f137d8968122ffe2dc72e2a9329031",
  "2024-10-26": "a7bc5180832dcf4d250d95a46b71862ad9f64a3682458af92eb2460f064b5e6f",
  "2024-10-27": "e7dcbc03781cbd162b82ae58b1fc417caa129a91fc192240c47ebac540c05152",
  "2024-10-28": "591b0bc640ecef7f2520ee1098742cf37a4e22223a62ce10e911eba713ce4d18",
  "2024-10-29": "1b48ec2d428ad8c28df8a3505f0463f2de7d460e8751d61449f3160870106e87",
  "2024-10-30": "d0b7d40979acbf7c8e8693a1eb55327da0860700276fefb9e89b311f85d8c2cc",
  "2024-10-31": "ce4aaae6cde80c53508016fa15ad19be50aa8a1eaafc36c2fa27d1d34898e4f9",
  "2024-11-01": "4f15c208e0f5aa94d613359b3a419e94bbba0518b0425f67437b9953a2f16829",
  "2024-11-02": "549edbd32be80cd1ea03d2c6534a1fba7037a7018c43495effa0c8aa1cd57892",
  "2024-11-03": "28ab2b712b52a7dacc3a67c3790594af43d80de9ca6c2ecc81550d7a4e7dcccb",
  "2024-11-04": "f2e7a45c2bc56755c25647c3dd719ea5563513d1ae270ca6d5c1282c0ec4b17e",
  "2024-11-05": "56abbee127e551bc7a8206d9567c6b7d6b0155f00b7390e52cd871e0a265411e",
  "2024-11-06": "6c86389d74aca18e2860ad7464ad59eed4f256581570c3bab8e5c9c0542e719d",
  "2024-11-07": "25a93f7dbf8e567fd588b97568f90336a2ac76c64d046b57b4c9d8f3bbec7c70",
  "2024-11-08": "6342bfedacc3cc54c93672bbcfc5d7102f727ab38622fd6d223ee758a919cd3b",
  "2024-11-09": "d71ba9240ffe58260f0c7a7b8a27e1f2461ebe8637e2e38cdca0772e8bccdf74",
  "2024-11-10": "cbfe42517f15b4151b53ed85dfc73e4c79f9c48c80c968ce8f7525176e82015f",
  "2024-11-11": "00e763da67d681a164798785678bc5532036e3ac512ea20f6ae6212b2fdf3fc1",
  "2024-11-12": "4f5e544b4ed00baca7aaa43b074892a2d9578a6962da234a3d6744261bb986b3",
  "2024-11-13": "de9e85cdc592fc76aed2215286deb8e20ed193a7c927fa79be3d795a9974dd50",
  "2024-11-14": "22d5d0a8a31baf9c340802f60b2e35ec2ee3c192a6d6ddd3838ee5bea874515a",
  "2024-11-15": "f370f56f58383a688a335c00ad96070c6c1208e4db5d6dcd7e470026429bffce",
  "2024-11-16": "01d1bb8304672b3670a63afdbf7c02e37905cec1846df61be1c1211dfb21d510",
  "2024-11-17": "fbd17bb944bf552383fd0a78cd095c878365ddfd2200d45576f86b30afd4eaa9",
  "2024-11-18": "d821194270b8bf7ab48804c65d6b4a4b8f0a8c904f38acca57d360a1555a3013",
  "2024-11-19": "b8de55fb6c2a7cb3cb38b13de80a2979b59b1b37805f984f40fcd9bb3641b9ef",
  "2024-11-20": "c6e6427f1e03190f6df892c577c6d6340368f1ccc3ed158e0837bc8036feb601",
  "2024-11-21": "64af8b22b5bc45a718bdac7301a9de2ee1e85c114c21f96eb0f11578185923ff",
  "2024-11-22": "f48ea4c190eec3c861a7a36d9a11be7e0d937723ff925276e415db2cc28e7ea2",
  "2024-11-23": "22c78017e8698e04d10c65644118b83f44dfb0df96edfcbbb785e5a04a3d90be",
  "2024-11-24": "0c7d933c030611fbf813d7a829edd87c5e777b32fbcf57bcf5bc36eeab96ed71",
  "2024-11-25": "45971515d71a3f8a0b142762368f94f9fef81ff6f4a0d756b6b8b714c6e28181",
  "2024-11-26": "e12234e2c8c5530fb33547958568c7c1d0093c04f3d29bc398b4e649f928c579",
  "2024-11-27": "d230e5b18e57a063bec582b17d1b5e0664813b05fcab008b38458602f00debe1",
  "2024-11-28": "ff9dc4c1c7d785fc96d0f983bd584d2d915a6db40f5d868ba7150ff9e34d8749",
  "2024-11-29": "7abf41e912277f29cec9248b7cfb7bb21d528d04a5e14bd029087703fe976e73",
  "2024-11-30": "22b2919010839ee95b2f9c7e2fefb2be0dce30f5ccc3b2bb711fd185bb6a9a72",
  "2024-12-01": "4c929ccc3c5cef8a668961088b747ff2c61896d61f302c694e55da919d7a2eae",
  "2024-12-02": "987f5f780635d15280aa76bea8f1943b9c5264fab0dc6303f04b0e52f20d2bfa",
  "2024-12-03": "6110bf7bb1f793d5fd6c0b967a94e5f9bc4c2399a8c3b6ad23ba3b22e977ef4d",
  "2024-12-04": "884d6d52516d9d51d58fd4e42d81a8700c17e5f72fb2656863f595b612ebd9d4",
  "2024-12-05": "67adeae128d2d20c3122776ee3ebd7f4a05f800aad58d46400778e460a8027a6",
  "2024-12-06": "fdb7631949253494c2355e11e5a36730c5b28999c8df112f882249325122ede4",
  "2024-12-07": "10a56d3c1c8932c1c5cd2978e6b7e602920a2c280a626c4380a2db2a424e3842",
  "2024-12-08": "324133408e0272c8c7f4f94ab85cb3865b0786648bb19057defd8cbe544973a9",
  "2024-12-09": "53c650e3ccb4d7d7023beb9340b1adadf02d39c4548760be30b04d0fa9199866",
  "2024-12-10": "f5994fb8985fa279c90b7291ad21e73380d8b39a1964084ba3d6ea8cb1225323",
  "2024-12-11": "ba5406be2a46a95444ba68c6aa09b2829a23b79a7a6a9fb07c3b668f8bbcbc38",
  "2024-12-12": "d7243f870ee41feb8851bced3120fd8a72ec41a61cb62f9161efd0e115e34a59",
  "2024-12-13": "24255c14c663b2b17be242c82f12ec1030559ffbe54c1bc7e3c4fdfc284de0af",
  "2024-12-14": "5c60aabc95a2472c3dcb8b521ae1c453d9dca46eb70e0df4e7112a8fb0234204",
  "2024-12-15": "744bcc9b1d5499068f6c02714a2e748beda4434839717d8e342f7746ddbe7f35",
  "2024-12-16": "9c0249d2ba9879f67ba578856c117a32bdde7bea626553a57d7b997e7a595542",
  "2024-12-17": "75b32df3aa8a3e33d2db9e9bb7508e24ed3eba47be520f6fc689e966b212eceb",
  "2024-12-18": "d60f2d78360c809900257cc81c87862b32f55666dc9f0ff7c6bc15c41d1ac3c4",
  "2024-12-19": "77c0afc95f34ffaef0468cbfb0fdba9800a1f503c8ca220430aad4a40d6967c3",
  "2024-12-20": "44580f98ab4fb6e4c6fa28768fedbd3eef3135157442339c0e51585ef6d8cab2",
  "2024-12-21": "5b70ad38ba92495237e52cb2b32c4f5dda4743b3a961ca5777acbe5c2ec40341",
  "2024-12-22": "05f3f1a76ab0e2689041e6b970d731e5c40971f746494138d5dc1a6e8524e14f",
  "2024-12-23": "f6a179054b4d62d3cca9b8065da3b77094f4e466ea5de93fee2306b710437c6b",
  "2024-12-24": "c0fe63d83b8307a6b8204815ac5b9f2b37722bfb8c6dd4206a5bb64c7361a44f",
  "2024-12-25": "31deb453c53f6fb86ce0c3ce2a78a791f9fa769e1d75f90d0801a9d7cca255fd",
  "2024-12-26": "0c931e0b96db05b7c1365c5005b22da1759dea3f58441d1cba126faf1961efe0",
  "2024-12-27": "fae38f44409a84261a5419630f2a4a5c8c577e9b44e0f8bd07affe84673343c1",
  "2024-12-28": "c51a898d38689d50dea2848640273a9832b32436003b922a4bc39838001d9eec",
  "2024-12-29": "d48ed18407df86b809e45c833903c1c927ce4eac256cfa4e67932d4a0b6cf0ec",
  "2024-12-30": "ead93f4181b8be916f8ac58d8f0a7e2c49f0bcc898793761cdf6e52cc2fc5214",
  "2024-12-31": "c622114d1855117a2e758cebff33f6465d1124d08d7dad4f93d661f85f3e7676",
  "2025-01-01": "46f45d53056c5747d61f3a442d5b017c091fdc3a0fb1d92a969af7ae9afa1707",
  "2025-01-02": "a0d20023af2620e2f495fe7edfb787b158ee5d7d9893263ac0e2d3a09621da67",
  "2025-01-03": "4a885771bfe287fa31f909cae5bd54a4b0b39d474811349f77b41d13374408bd",
  "2025-01-04": "8f673787ce50e7feb0fb9d0edecc35f1397bfbdd48b6c63da5f757d598d8b2cf",
  "2025-01-05": "6547df1738df6b77597d951cd8e4c43f590f8d7b2b84ca1b429049494b032c40",
  "2025-01-06": "165e8c6e0b7b8bb052b781fdcead00b4f23c51c2b628111d8ddd0f5110b0203c",
  "2025-01-07": "8d7ef53e972a1f5c90bf258efdde69798bc85a1b9a04553d95ce8389d64cc891",
  "2025-01-08": "1eedcc97712c26b907bccd2c5643debfef9de4af04f365fa01f37d2f26e2b822",
  "2025-01-09": "1d667d162c12684c15bf2b6855854f60b9c0052c705a35a4cbde1987efc3c8c3",
  "2025-01-10": "77658dc22a72a58d77ad67fe9d8b616dc910d06bbe8927d16dc0ab7b14dfd6a8",
  "2025-01-11": "7655fb25c80287a6f72ae6f28df340c02e4b45d12f8ec657a2ea10b0799c7d11",
  "2025-01-12": "a258401f1583362d6fcc9f1f2aa0f3f2807a5d9f5f0bcd612633c6ed240f3691",
  "2025-01-13": "8202f81d188b7c850666b8b0a2d06353339b6704bb9b4bfd6f5ce1fc53e6d204",
  "2025-01-14": "db5387704ed0b554e546140b7f7ab5eb99f651cc9c04c2300e6fde5329bd40e3",
  "2025-01-15": "296faa0b34e8bac36fbf31f9352874c52255d1406f908e97eb2f37aa908e6c28",
  "2025-01-16": "b81df84b82245107a448cbfe73b51ec49de1c47e96034279d91d83921039eb25",
  "2025-01-17": "8739ed1b9c7eba31940c6a9793b80e8d4646b79e15e92a764587980eaf2178aa",
  "2025-01-18": "3cfdc6f5a51ec1235853e3247d37f426572a509d0a0afe8809d83eaf5346f4ef",
  "2025-01-19": "23bde52defc191af3b55fc265a866fe82ca5cf5fa21571deb75ca08ba602afab",
  "2025-01-20": "ae02720be095bf9d09c4a47abc4bdbb6410ea2470f915d2b2a693db44c7713b9",
  "2025-01-21": "905c7983b8561ccc252281ff986f33f4119a13c6c7314da9642886f406a8ea6c",
  "2025-01-22": "1ef1b6d6498f4ee3adf9de4ab69ea4be78442c0ebfbfd5e00104e35eb962e4e1",
  "2025-01-23": "1d4e6b5ee356699aae8a1fdc1f753d9a0ca6d222015510c62b0dd74f9bfb49c2",
  "2025-01-24": "47bbf67e4854cc5bd3f072fcbc94c388d0466c13d1d48347f6e42b936796d2b2",
  "2025-01-25": "56ad0b91b084ddd86b016040e1a855373af8e6b6b392ebc0280061464bc6bfe7",
  "2025-01-26": "18ac0bdb3e93fe55a06446d12beba1166819909d955f156fbe5682eb9fbfca24",
  "2025-01-27": "aa29cadab0781b40e2cd01720eb3974d99d33f0767a8ae74c49292fdb4e96b9a",
  "2025-02-01": "f60cbee1a0ea4cfeeec46f23a68e88b7a80416912c460f171264a45f7849c77c",
  "2025-02-02": "dae8c3831d09ce43f3426bcc3a408cdb592f240e4d508ceb001c00d9c6d6e0cf",
  "2025-02-03": "e0e41b16cca9abd08842f011204163a85dfbcd5cb0cadaeb72f1d45d2662037d",
  "2025-02-04": "40475dc1515aa5b652bbb68120d4b72b0f5248ed0a0d03520546d6de80074d30",
  "2025-02-05": "ce8e6d86bc153b005ae8f32211681275c2ddb56b51f9b4aa87127b92b2ca5c4a",
  "2025-02-06": "3a81e39345f7ab7f1f62d6c86f24b1bd5b5714ad51b1bcd6b543f2a86442e728",
  "2025-02-07": "624df215b2b064a463300da331f3d6d962e9b9611f8086f155d82bc79797af69",
  "2025-02-08": "c5757aaad5d569f3e1b3e77fba147b994c468b4761973d984fd31ea0001d4875",
  "2025-02-09": "ea2ad626486f2fdd6e1dc0111251d8e133851591fbacf588f069061ded664367",
  "2025-02-10": "87d69d5f816f002728f7b4822885fd0108770355ae85fa667477119717daa8f2",
  "2025-02-11": "90cfb2bf87ee19d95d695e4bf86ea200e900f7725ec3c19fc5fc363e580a632c",
  "2025-02-12": "5b9ac25c906a8cb6714cf7a45714da431a4f1dc7fc9fa89882197f3b6ecb65b0",
  "2025-02-13": "eca18a7aa9a9a9fdf0c1b381c3a6a091fb035dd8d9bda90fc1e49000d7de3103",
  "2025-02-14": "679677f6657b040cd11e1cccc8cbdafbd4c46d91c7f1d1fb0d1bc025801449e0",
  "2025-02-15": "012d9f98bcc00143ae122732b325d7a9ffd9ac12b8fde685b10a5cee3a3dafbd",
  "2025-02-16": "5701678bb4d283617eef1b6d9af62cc76dacce05442e1ddd0fd995b537f4b2c0",
  "2025-02-17": "93dec0dcb14ae5c46f0e306cc5cc0614d9e5e26d2cdd3b793aca6f1a64216b12",
  "2025-02-18": "6031ccb0adf5b35aaef0d627e0116450e9880e595e6940274ece4dcd98359049",
  "2025-02-19": "46b9849fd60533bd49b7f8c7b3277c583ed4c5d14d132d9a0aef50cfe075b322",
  "2025-02-20": "9d1cf608cceca837b115feea97aef00a9852dfb78070cd06b3a69583684ba45b",
  "2025-02-21": "ff6376946879da5dcbc13a61bc7015c8e15d042262228aca28a7e53b740479d2",
  "2025-02-22": "096a2fb8c4b0fb128582b121629c3496f130a563d2e10ef4542087e701bacef5",
  "2025-02-23": "a896fc06212fe4b31bb1e19713a55d7eb15e9337c7cf76bd5e2eaf561e237e11",
  "2025-02-24": "a94878866a2d3ab8d54264b695034918928311498b1098748eeee90a88fff80a",
  "2025-02-25": "ac3dfc4210d798f75b5daac79ff38359d707e32220c2d752370c61db524a2c0e",
  "2025-02-26": "09cdc95578def3c8bafb90cb1ad00310f397f01a621206e5ce53c0e54b771398",
  "2025-02-27": "cd251c43b0ae5e553c08ceed2c29619d29bd7963fef4ad7ab3b4f13f87107472",
  "2025-02-28": "d0b6a4f6ff14db7d08da0206f3580bf39506ad7f04a5ad24f11ee30a452c0181",
  "2025-03-01": "d3240a9ab1e0a5fd1894e950c17caea083f32cd2c904a5b73e31b473b0b832dc",
  "2025-03-02": "664b2ccdd935980e4a8092743b1cebc4337cd244fbb6d52bd1f096fb25ed3d3e",
  "2025-03-03": "e743349a5f4b0a897a945744e7841447bdaa41e25233494e82472502da6c3e2e",
  "2025-03-04": "be2ea91e316885d99f4e6073fd32c8ee4c5a5d51566bc2ff48a1140c7c582893",
  "2025-03-05": "9e9d26037a0aba9ae4bd27cd8199c006fa503866e3638b2ded6b8000e5c8dec3",
  "2025-03-06": "6f9e185df3e94629f3cd6b9e2df335d165f6f05b5174d459a83d53a96939304c",
  "2025-03-07": "a7eb9778e39024532491407208c49ea1c2c6e1fe62d76cd78cfeffb5e4d5fd20",
  "2025-03-08": "dbbfe8cab556469f04e909f80be4c5215bbb1064d2e8aab8244217648488deba",
  "2025-03-09": "a64a8f9ac6ce27b99c62eaaa990dd70198d7ed612c487a4eafd41c9be1cba351",
  "2025-03-10": "22c60058d8ac1dea1490d86ba95f1161ef3c762c3ef4154d762784eda9df13c8",
  "2025-03-11": "748bf300dd69771c6dc26faf5d893349a1cf8b546b63b4c9263aee26b565a32e",
  "2025-03-12": "e6a65ede9fbfa30d1eade148ffbcde8d1ba9f218e3f087816b48725ec0ca75e4",
  "2025-03-13": "f591bec1180920d5c4a4d04f314f98202eb9e05fc8509b2dd948c464c3d46c30",
  "2025-03-14": "177d1b7e8de686319c22a95837ffd9b64571969b6aebe3789061872c12e60e90",
  "2025-03-15": "bcff20fcc9bbd3355384602cc1f41116095feef9266316c22ef86b36269a7db9",
  "2025-03-16": "f121cc0d96ff8e6ffacd924e7693d68e1fe0aed30081087b7dc549bee14c7386",
  "2025-03-17": "e7597945ce0bb710466363acaf8c8f8cc89e0e6b89863a0ca89941885f5672df",
  "2025-03-18": "34e74b12ca40fbcde7252dc403996e90381a63c48d68251ef89bd5f7f932d112",
  "2025-03-19": "0b29ac91b7a4465d12cc11bd32a73064a54a3565891b135a2025178bd820cca7",
  "2025-03-20": "cd0e01e90f3b59d41bc3e3c6ba8d39338fefb525ffcdd6c114808430327fb9e9",
  "2025-03-21": "25bc2ba2cab8fced129a51118543d9e0ac539f4908fd3f236265c6bf1d6aeefd",
  "2025-03-22": "cdb1a9803cebc8b29e7e5a2f8ef8d9e4d29f2a5d2341e2c73adddb453438e717",
  "2025-03-23": "b8a46e6482294f593b119a15ba007addc2e586900c1405d85bff1b859dea4c2c",
  "2025-03-24": "49177a64f64cdab2e96bb0bcf85b222dd9d2ecd3d3b77e0359bac721003093e7",
  "2025-03-25": "2f3f4b890b9fb3809af97ecfa2ffb93f28f937b1a30e6b49f6354094703d3948",
  "2025-03-26": "a2426fb3e4e560e61ec97fe65e4057c92283ca203d8ca94353f7d8a127251b74",
  "2025-03-27": "1ae86306fc8e710bfcb91cd0f1616dcd3e6ae32c0edb9ca85a89273e9ca4293d",
  "2025-03-28": "e14af66668ed79d0034f8e08a21511ceefd680381de968e5faab9aa1f60c3570",
  "2025-03-29": "19e3c09fdf990a7166df09cc32dadf0e7cd538ad69d7e24591636c3fd3e442f9",
  "2025-03-30": "37faea491836e2931da273e3d90de995e5f27e5c7209ba6dd4819b49e1dd2637",
  "2025-03-31": "6681b38163738defa45d785b73869574e79f1c3c6fb19b693fd003eca319b943",
  "2025-04-01": "986c2703e309fa1c53fa1fdc2cd284b35cef3b945abab79eed80becd89b90596",
  "2025-04-02": "e0b00ae34a57d52d4fc566595941a0d12439af9aa294e4029f477bec9fdb4527",
  "2025-04-03": "dbf46df2eb1f5552512acb9e2a982f94c3eedaa5855b0398620ac2a9ba9770aa",
  "2025-04-04": "8ed7517f4391f4e8b33f816114ba2676313b8ea2d3ad2a13f39b82933dd9373f",
  "2025-04-05": "02c90c2c02e399bd379cb2e43d9660ddbe32ad3abcdf28b35484bd689729c3b0",
  "2025-04-06": "70649c8b597f4a07ede84178725f75b11477a8ec9dc62c1b9a837ed5b4c59c35",
  "2025-04-07": "977a464fba0e37c0506f2ec0495a90f0930fe4cc1b6b1135329a301b98277e0a",
  "2025-04-08": "0d223fd87ec8a6ef3ea4639d0f6fed2079628ce191cf672e938d20ca77e6db0a",
  "2025-04-09": "f9609a5e374564baa4f35c4e6413087b84f4068c3c8ae9f5e606a3854ef58b34",
  "2025-04-10": "5687defda6a6bcd496ecf0591f7e4cad114c3c1891469133ae1231df7a951054",
  "2025-04-11": "262a06f8144b4a9a8e4cf57302895e7f35b8c10f6522bd94a238092be40bba43",
  "2025-04-12": "fe576dfebba0a05043c20bdbb8a26cc6d8d4684262b5c66a29c1855c30e13cf1",
  "2025-04-13": "6a654717b4e52c0f020446bfd1411eb33e83b8dc8ea97faafc9156adc450c78a",
  "2025-04-14": "19eb3dc97ce64dfb8ddacae2e1ffb6e614534ca2f946f923a9c303ea1a3564c1",
  "2025-04-15": "efe34f71afb9f9e4009f4f74d3838e8f209795fbdd1d55315b0926c6249e46e6",
  "2025-04-16": "7d46c2ab6dfa639a9a8bb9baf0ac3d4a8028438a3c582cd3a31d4c20b782cc08",
  "2025-04-17": "64c82289a2cc1939a591a5f9ff16b2d40f2e58f1868d8863b8038ee3b912b98a",
  "2025-04-18": "41eed7a1b69713e3be636de50b97b6ca235b2f0b73a7d3b2e6c65da3ad44c612",
  "2025-04-19": "cdc29765afb7b596397267f2057901cd089e190bfc36d149e39568a4d81df1ba",
  "2025-04-20": "0d9a474d8414d48bada7c18c601f975dd42540b8ead3b87f99a66a538380d4d4",
  "2025-04-21": "962da7163c3fcdd46d861a02cfd5a676df49aaa55d2f9ac829e6bd95fd3161e4",
  "2025-04-22": "143b0e771989d0f02ec9a3ad045da968aba2c2664d04d244302c42d9d2dc8fb3",
  "2025-04-23": "d8557ef01f1e55c17d62cb99efc7e90a051615e12d2e5ff69802fdee00781bdc",
  "2025-04-24": "8e4754fa8f0f464e2786093adebac7210d217f7420c29b26caaac3285d8b1f71",
  "2025-04-25": "e535ea15087d8a904b2068bf14a60e835ab658c360041563b099cc64ea9c34e2",
  "2025-04-26": "4abb609623ec5e47ec3726379638e1ac23295190cd64d66eda590f42c7030f17",
  "2025-04-27": "c015d107fb81b8664c9d70ea2c0c67b37c5f6d840ceababa69c5c1728c99ecae",
  "2025-04-28": "c4b3a876fcc90b88cce5cf2c0451f7dc721f20e3b298a9402fa0dddab8c7a293",
  "2025-04-29": "cfa8168f78d25ee94866ca21bad1893219a91be8dbd5c27c45aef90e91d3ceff",
  "2025-04-30": "43f479a34d084ab442a613dc284cfdcbe32f1426fb4878f16b94551fb43c2d9a",
  "2025-05-01": "926795cd96244f9cbd4b40f0686a9255d21e0f0ccfaffaf38fce5f80434dfa0c",
  "2025-05-02": "070eff08038d758a0a78e3b8930adacab4378921576bfbd39e706740421536e8",
  "2025-05-03": "b9938d91a2e1487f325739bacd63ad09ef8b7100b49fa6e7edc50ea0bf526b64",
  "2025-05-04": "3b03a8fa38c461b2eb524bdd373c177c15ed2af2858fb715f4d7b011c497b7f7",
  "2025-05-05": "f5981aafd4d40e49cdc2a46282f074c59332c8ccda3bb0bf38ea3113cdbd33e4",
  "2025-05-06": "aff662f47b0d475bd4ac108ade725e640689edf4dea18c31cefb9898202137ff",
  "2025-05-07": "2d4add0f705180a273212332b15f4f747e51a2cf00e4b3067dd964d5548915ae",
  "2025-05-08": "ad67d546fd89f771831870a000c0637fd75632b850a9808f2d74a6343cb44986",
  "2025-05-09": "2ac1e9a6167bea0de3ed04656c2cd1fd9e18d93c5f0fcc20a05d0c64cf0d8f5f",
  "2025-05-10": "3f6f80fc6dbe156834adc2cbaf59694d0e232ac645b7c68a8c844bbcad462e16",
  "2025-05-11": "446c543f2d1f8e02036b00f18972a15c56521e92546c16c59b24dc3c3a8666e2",
  "2025-05-12": "ad31343007304a9516b47be492cd6e9ece98388ca81ff59a769de47519e6116d",
  "2025-05-13": "085ef01659f3ed580725015ee8b06068043ed990dcd576878d234be3a703fd13",
  "2025-05-14": "bcb9847b033ba63daa9695f62d745d30ded293013c8503257e422aa6bacdf350",
  "2025-05-15": "3fc907a1ed0db507f25d2140ea20122210e4e6c4d40e9b7d7e82305af20dbcdf",
  "2025-05-16": "0af52cf5f545628886f0d8bf201c611b36b375fba419763f34d9f0f9b7463a2f",
  "2025-05-17": "9c0e8f468ea1a09c494bd4afb35a91291ac7e4037362da4c709e9e60aa580ba2",
  "2025-05-18": "d42ff71c71785606d17e976fca0d383a314004b5028b98040ac7f1d0c800097d",
  "2025-05-19": "30a8ab87d63b039dfc5ff673acb17e53855f66e0c28b3d549e49a2f7b846849c",
  "2025-05-20": "07effaee865ca0acd50dd508084ba3947872d7d7af487751062493de090fe203",
  "2025-05-21": "1d15ed80a77723ef6bf03c1d0ac64866f292c9d10282fbd2164d75c741fdc1b3",
  "2025-05-22": "8cea6506c32808e62c19b14914ecf003a3adeade3551094450a6f997c30d86bd",
  "2025-05-23": "532933530ffbb5fd0e17bf195b5362a809e3882cc291e6456a908ec084672213",
  "2025-05-24": "3097b5e20fcb3c87c890e7fc7fb9805aa9c17730d8513302bb3cbfb85bb0b323",
  "2025-05-25": "9a19a699dfecfc7c37a92ef54bcf4df8a0dcbe6678b58a643dcb9415ad63c5be",
  "2025-05-26": "47dcfcaa54132e06847fecb252d13681dfdebe2aec579986c0a4121a1583e7b7",
  "2025-05-27": "1f098c19db8c767caeaf4e4b92a77b2ff776649412892a0b563fe55e5af7c7d1",
  "2025-05-28": "bedf5191128c7c1d4397d1b0d401a3e0ec5125e97c887800786d3e3c3a968345",
  "2025-05-29": "554b8b07a1210b6f22dc7d39b7613a72a2d8894c4632c5f73987fc021c292b96",
  "2025-05-30": "1bfaa78e02add04ef08149e6392e8ec1124dfc7f3aef91b239f48cdcd9085af6",
  "2025-05-31": "4ba1c4566e20af0a85127614d3a58ab98f6c9f146e301b793a466377368c9f38",
  "2025-06-01": "8a71e2ccd784c7a0f46ac059473de7052f68831d35e2a942363086982d3cbe2b",
  "2025-06-02": "e0cd191f56014404393897519b342c9e7f9e8314d5892e8b718b94029a35a903",
  "2025-06-03": "ad29bf322dcdb951e10055c6137692a2590df3aaa46981bb7cab160a68c5ce30",
  "2025-06-04": "418b4bd1fbc34a74e1ecc63b5a0ea2ae1f24dabaf17936138264b69e97d8bb69",
  "2025-06-05": "7d7e443649d21e2d605fb883ea7ba2b8d812d7c6b79256ecb0219a406f87f7aa",
  "2025-06-06": "87499b5d92e9a56ce65ea53c7e136f10e2302e262cb9d4a7f69dad6ad69c2a47",
  "2025-06-07": "d4cedf4a34bdffa34b3f756d5584f03d436e6652ea2b5c665534e41bfcbcad89",
  "2025-06-08": "bcd3d97dd27d2cf8270296368c7ba5798fb920b6a05077986d065a0c7ce52b55",
  "2025-06-09": "919b4a24e6fda94fbca0fcaf0cd17967ea85a9cc16d0a2eb40aabb8d7f30f984",
  "2025-06-10": "f3bab236ee426fe0642e43e7ccadd3fd318e118c0e3c3702f55f5770b672893c",
  "2025-06-11": "7c4c1950a43b6f5375e2b8f99a06757de4dbb1b946bfa28735733974d2fbc7ec",
  "2025-06-12": "66d07c8996cea93877c34a6b08cd3a21690b84146943e291bd852f140f5c4775",
  "2025-06-13": "51b9ddaf52c110e9f352c44f681082c8e5bf8018ccfda978221414cbd29e7f45",
  "2025-06-14": "8f41729d31575976c4d97a08196d201dffc773fbade1891373f77ce79c15ce06",
  "2025-06-15": "4f035c3ef09c48b51c7418f8c415ad2937535e2bbec3c477e1439bf81db2fd85",
  "2025-06-16": "6e8b0334f151a83d037c23cec8d4044b838f2fcf0696efcc7973438db40114ce",
  "2025-06-17": "e176df94d53f1e04922609c0b8bf5037ea808015430d994b0d85435df6480d8a",
  "2025-06-18": "ceb4880ea6d7b4a8b37953cf288094baba22f5b693e729e4fbf159bb761e6a4b",
  "2025-06-19": "492306c9d7db4bd2817cd138852e89b025413814b1f5c006fd7a04c042952fd5",
  "2025-06-20": "565d722aa5745bbfacf242011c43e5a92b57dcccc6f6574eb2efa0c5c7604e90",
  "2025-06-21": "b41517e852d46b27e256cf4611e01ef88c1cf12d0e456c491e4de5d9af22e812",
  "2025-06-22": "7f70ff6949679647793e45ba9047bcd8fe916d2db571def07bc09b697359030c",
  "2025-06-23": "76aa214bd4df5dc6ee7eb8c3454303581b1e05905e4baf6a08ccd1fb85a576cc",
  "2025-06-24": "947b94c74e5c405463fd1b8b7cc33cacd75b3ced2dff318add63e17b20c91de4",
  "2025-06-25": "303bd0f29dcdc552d88f52464299f9fb588d50337cbe27605cc5f7bdb18074e3",
  "2025-06-26": "b3e1123fdb9cac429c9f1bc5daaf8ac74152f32889613f678c82bea325fcc97e",
  "2025-06-27": "fc1b045c7d1461f9cd086583936dcfc9c98a6eb90963b4e6a5b5418ff138c464",
  "2025-06-28": "4bf765e18a9768a4bc465b4d6d0140b0b2b9c01223aad0c16317a4731d9bb674",
  "2025-06-29": "a8dd5506e6e33f1b76ec79e2b05fcf83869bc169870b6382de59be0145ddcbb6",
  "2025-06-30": "7fb2c9d701b33457f095522c5e27c97725ac4b4c28f15f0d190a819c89d8f2a6",
  "2025-07-01": "3b9ef943ad075348b58e6efe78a2efb224c2d10d877d4c4e5232fa193e32a6df",
  "2025-07-02": "ad9ecb9ff93c6a7335113d9084e3059b61b84ac067934a47f839785a0f5e30aa",
  "2025-07-03": "3f4167d661936058a7fc281fbfb809e44087308018c6d0901a904b69639681f5",
  "2025-07-04": "32a36896d0d3b9da765b4df6a40590ddf7dc28ce9da03034005a024be9562200",
  "2025-07-05": "1139a695df5922bee60723736afe7f7a0135b8b325740e4abc4f569830369639",
  "2025-07-06": "9e949adb5fbbb843be211bb60b6b39fb8f2a33e52e2a2ca579aadf6b707a7516",
  "2025-07-07": "ded7292db46d18861d409d51c472b41b1fc1b25011ef732f5a447ab8091152e0",
  "2025-07-08": "77fc128fbdfa84d2037580c0de57767f8f54dd19802fa537cdc07b6377b33129",
  "2025-07-09": "a29e54e0e2d2224a2dfa278c3716179e901911f339807632de4fe6c785807f6f",
  "2025-07-10": "574caeacae7c85c64030065befe5319940e7b8c14c5611fa182995ecf12c5b48",
  "2025-07-11": "34625656f2fa632aed805586d1eb96aae8455e9d52ec8f8d23661e4a2efa9c7f",
  "2025-07-12": "d234b117103deaa8b24c8b1713bcfce6fc427b08518bd886605cd40e71105efc",
  "2025-07-13": "11da0595a97bf0163638f9ed0d353be6476d1c95b28718ff9b3ad0e485249b92",
  "2025-07-14": "71f9ee30060b2e429edaa314922c5c92313fa04863f1c109fad3cd18cb73c3fc",
  "2025-07-15": "b3f7a3e526ba32ca2d9e5d860b6d778eb38d60c79a90d87a80cf064298de3e9f",
  "2025-07-16": "15480d4e9a41e60fe8916e53cfdca52797b37ec080460c7c6df98edb74868a14",
  "2025-07-17": "fdd60a7ddeef0e4d39d165def490745248885bb1cf350e131a2d0802f07f2c7b",
  "2025-07-18": "55cd65eb19b7859f03f317908972df9f9cad09a161f0ea993802d5da4251bb1a",
  "2025-07-19": "36304ef0ba62fb64284803566d21b82f85b9169ceda2622db8463d0fc45380fb",
  "2025-07-20": "1da4f8f93348c306433c0fb2c3a5cd7a27e3e988cd253fe73f05031e6f3c255d",
  "2025-07-21": "5d4f45c8713f8da01a37beaad401e97863e52bbdb1bbb05b87b823b815e565ce",
  "2025-07-22": "a23de86f74544c93e2f64d364eea74d6a32f63d2eb684cbe4b149ad5ab3019ce",
  "2025-07-23": "9c9058a6b9f3ce27deea2ba7611ad9f110b02b0d648a4a3a3b31674d06f147f7",
  "2025-07-24": "e18440d5a946659d40fea7464b7dc03a2ef6fbc07a34911ef22f7556b734fdf9",
  "2025-07-25": "0b02ddf7c5133d64b021e3117d6dd29a23081868be1d4417d25d17faf9d5ed02",
  "2025-07-26": "ca892024a236aed17422182bc9d99625ba4acb8eba2c1632fb881c5c32ab4980",
  "2025-07-27": "1c22b4f80e6131ead6c97ddc52817d1e8690a96a924c494cddbce571e0cab191",
  "2025-07-28": "8d7c809986e18cdd7705242cd3d26f1cf8b9089f687986a75efe541d31ccda7b",
  "2025-07-29": "7480183c952bcb33aa32cec09ffe3b48fb71fc81faa5131c03caebf27ab4afab",
  "2025-07-30": "141f6db85b316cfe898c0d1462132744df361796fbd18b09ddd24c71b2b8d9cd",
  "2025-07-31": "b4faab82fb46e0b275b0432c1e261e3aac1d4dcb9c8cb1af23c3ea946415fe6e",
  "2025-08-01": "80eaedcdbc73c50e39a42650a482540769f6c6c2696703ce8f26e59dac0ae5eb",
  "2025-08-02": "cbacf44ab8e9cfdca97ab82f3417ebe058f7969cb6f81495214e1c65507bbf79",
  "2025-08-03": "49fdb6aba279f9c1759a31840b9b44e08fd8edf592aabbc8204065fe88a8604a",
  "2025-08-04": "0f1b4d8f62c188629174af3b9cb4e8f0cc54532ffe5453afe773acdbd39ed17e",
  "2025-08-05": "de0d88b5fc796851bc1ce6f64686fa658b1a5cb12a3c54f9474c4762019b48a7",
  "2025-08-06": "7949bfdfb0495e8e58ba05064124ba98eb851e400f9ade7688de12e6cda40e2c",
  "2025-08-07": "c6f63f64f0ed26ee80a9d55328dd4b9736968b24a1b55d597ad4018a68955b2f",
  "2025-08-08": "384021f4bce826b0e6329bd986830a82d5b674aee16c1c7cfbb13f93471b8787",
  "2025-08-09": "25819def2cdb561263a868fccee4376e759198ffd403376729651ca560fbb3dc",
  "2025-08-10": "db85a4b70c1f3d54b635729f3e941d84978bdac5361af029f7d5a858bbba5fdc",
  "2025-08-11": "e67e537fcbf8f98f5b8c3a57400a94147bf1fbaf0d7e5f8f58485b712f2a2c8a",
  "2025-08-12": "4aec17783c5b09b45e02ddd468650622761134f9ca5540c1f685512ae1460255",
  "2025-08-13": "f2c02c0858ed4a5ca6ea3e2dd6fb81a22cd9f8707d152eb60b910c6d70e1947d",
  "2025-08-14": "1bd07c3a76d35305a0d8d2f047e87e799238c8d8c2852b83a22967b0afeee6f9",
  "2025-08-15": "be86e9c75bc2217eac459c5eefbaab0a410f7190683e71531f985d362f80203a",
  "2025-08-16": "f9f6a706b1fb9bf2705b349223e98edb59d0df4960adaee75b26eb1ba5a2ec74",
  "2025-08-17": "edddf64b30744286624cc481e476004973456f0a1a3f3d9ff981051dc39da041",
  "2025-08-18": "f7abeef594165e09548285e5e1646eb4e1746b4505e2d2e6b6400b378955f098",
  "2025-08-19": "84cda8aefbf15066bff65d7537817b9b9781fd731a6c9f55a7bc8043025fa389",
  "2025-08-20": "8226ba7bcf6b20c31aaff0ccb9da24ed32d9ac2fe94aa9f817b882e4c0429e3d",
  "2025-08-21": "7f6a39a125766ca6f3723a952bccd91f090ed67c21551d8fe79a7583d39f3cea",
  "2025-08-22": "139ae20fe492c380c3088d2a70ccef7a36bc4abfd2cce3493cac3f534cc8e2d0",
  "2025-08-23": "0e9409f7a181e110363ff7957d2b158ecb9c9499b73751c8c4dde812168a3973",
  "2025-08-24": "9cfebb6b9d6b0b850a752ca2367b336dae3037c9ba0aaaee0d46123a68b381a5",
  "2025-08-25": "d153deeb5d0ace8678376c4f04b2289bb3b897b606bed233c68fd6ef9989ddb0",
  "2025-08-26": "d5cb9673bf88753658b31e2486470e61f243e85b827465838241a448f65fa461",
  "2025-08-27": "e941b3cc6fb43be98c70417fc4e65265dbde748bc46afa975a1791dffb434099",
  "2025-08-28": "1c637e14567dd465514c29e9b1dee7c3d7a6c6ec1a39f709a6803250e31d74f8",
  "2025-08-29": "b01a66b1764e20923a267bb6fc95f3d7c8c473945df3a0cd07b4597974397f75",
  "2025-08-30": "c50b3c8cd6390249af4b4c9fd70083f2f943d8bbcfd8f4e1a90390420dc1b6f4",
  "2025-08-31": "22859016579830de1b1c4745cd42949c6add4939f9d49e900572a34ca9b33ff0",
  "2025-09-01": "3c5aa335f16051b624690bc97535ec800b37fe8faf5e0028be7ac73154798d60",
  "2025-09-02": "feffe63841503f621dfcda39d437850fdfa1137a226f64806aff8f72d0ce85a9",
  "2025-09-03": "1aa0270dc038a6f7006961ca2d5f6ad3e161c4b4edb4c8061357dec8ce4a6b52",
  "2025-09-04": "0359ac426f4259db039a220ba3128db47f3dad9cfeb41f2c9d28c4b0307d83b0",
  "2025-09-05": "89b1cd37c7f68e0b9e673c6aee963c30064ddfddf1bcbf901eb1025f2a3da6ea",
  "2025-09-06": "0b67e58b23de053f89f7d360f00a514cc4a7939c79ba2eaa20a0cb1bb8d82393",
  "2025-09-07": "854953832234f296d05c353934710a3c5c7519339862efe3eb8b8564e7242c00",
  "2025-09-08": "17fc1231c162dd54c0334b8ccd3694fc3df591daa8ea013996a9ea6a42f27f01",
  "2025-09-09": "0a916e62e3b5102be410518aa40fb66823e7d86faf5daae60efa3eedc4744b95",
  "2025-09-10": "71d1e488f0274427b3de07705fde47935f2f6183b384829cb11d81649992bbdb",
  "2025-09-11": "bdcdda6678f8f9195125d9db3001fef45a05dac6124455e7eb2d977a647983be",
  "2025-09-12": "49172fa9f769d48557823ed3aff8afef5385a5f043ac71e1f73fee4b92288932",
  "2025-09-13": "a187df72ff9572aaaafb919aaf63371843ce885ba40eefe0dc8347f850ce2e01",
  "2025-09-14": "b142069def317a8fc1c1ae05d649b3206b221d587f46158e459b82e9151cebea",
  "2025-09-15": "42596a1b96e49408864472fe2dc74a6f6fcfb68ea8a5840e5342835acd8ed116",
  "2025-09-16": "ec37702ddd200debbc99f852b111992993eab541853748ed21fca67b76250713",
  "2025-09-17": "1a330b56660be55c226d272d49b9d93758eb04c62e7814cb6fc2e6c12424802b",
  "2025-09-18": "da045fb4d83d39e985f3afe30631e0c548ec27d8d02c395d84836ea94514b3a5",
  "2025-09-19": "8703b58494731d6d99128537c6445eb1a25879f3824bbd193aa16bc0a55612a3",
  "2025-09-20": "2605d9a771d88cad19133b653e51caaf3c70321546c72fbb41ce95ed625a0539",
  "2025-09-21": "2c6a9ee7ff5d7167331cf2683d7f0dc3c218763ab5c32f73a9747813ac63737a",
  "2025-09-22": "0522fd964fe49c17f20191017f78d5d10a558f24349ee6dcee435f29aba3dd56",
  "2025-09-23": "e2e1e6acbaa6408881d4b09129b43fb27ac6c04478987da011d599ae01e9962d",
  "2025-09-24": "d7e8c87f3ff49166909d34d0c8e41d48bd94f59627459f020f5faa910e4429fd",
  "2025-09-25": "c856f220c5dfd6f61b14d551251ffeeac32dc8e37a00b13c89923589d4ea8211",
  "2025-09-26": "147441ab3c4a28cd0d08e54e0ceee35ba15ac0f1d61dde6721cc2d01c13b71fc",
  "2025-09-27": "ce0c1a54b3cf5e56b4795c987002a58173564a36d2fb6f6164a3a2f95ae48d4b",
  "2025-09-28": "248d11e3507ad870ee18ee6af6d7d9d5ab0bf44b6ca850364d4db100c3ed05fe",
  "2025-09-29": "4d6199072a18ca0019c3fc451f83c6a59d3eca59d578b55e0710523583c840dc",
  "2025-09-30": "45b7e389473bf45bd0adc66464cfde44ed85eba554fbb6a1a448d3a701c77bfa",
  "2025-10-01": "c4d6603ef440c6b0d5422690465fc73cac925e10d43496741d4925fffc194061",
  "2025-10-02": "cb2b73d13288f1b84edb35919e6b4b7e062b9a808745034401ca39ae9f27f5ed",
  "2025-10-03": "3f37648629d1664b5ac6e3a7ca17787c9ad9f4be5cbbbe8ed0d2234810c10863",
  "2025-10-04": "210d41a38bf7c69a160183633ec28bb88f01f619cbef0679f4117435a417b114",
  "2025-10-05": "498bdcca4528982ec6a1cbf61b02c3bacecbad5c6bd5f4187e13c4094eaa6af4",
  "2025-10-06": "779129f8b6c4c34857cbb3e651198012724dc305ea89beed85f13a13f7fd8197",
  "2025-10-07": "4f2cb84d938b2cbee854d1db6041392d2b1024232516fa83a5fb1d4aa5849525",
  "2025-10-08": "160e6a0313de0d39747553e5717bff6fbe4abf37881898f9fea724ab4095f12f",
  "2025-10-09": "bd3e95a978fc351c7ffcb76e3ae335b5a4a56f222a25f56c3aaa4eb7ebc4cf86",
  "2025-10-10": "6f019f5a2dc38f214a2e137cf196a5f44d4650676a3c1b841932096540a636ce",
  "2025-10-11": "0d05136c6b4bc85dbea2ac4ddb42c0153819ce7ffd216c802cc498d139393551",
  "2025-10-12": "e16958e3e177fb2a3906c3dbb6ff5c1cd2867419dc6d72725debace047eca0b6",
  "2025-10-13": "8a797908ac4131fab05f0ce39b761188a791f28553a1f7373c54cd560ddb5015",
  "2025-10-14": "85279cbdbef16bf308e07b6421c0bc8a5cbc82f02d7bb6ee3e7f37c6363f0d8a",
  "2025-10-15": "949b07ad562b2708ccceb163bde7036c925fd2ea96fe8de15ff03960a9f382cb",
  "2025-10-16": "ad81e8d302a823e5858d73eef234a2230801606c68efeb459523933a18eff412",
  "2025-10-17": "242362419bf5577b2deb4258c14553fe6df1c74e582c2edb7f010924d4078500",
  "2025-10-18": "5f2dca84f1b5108672c49c117725588f32fd4ddfbc20ddbff866cc9e0736125e",
  "2025-10-19": "e0316363c8a19524813c62731a922f59c5326fd2b7178e50ad1b11945587e1a8",
  "2025-10-20": "2d88ebdbe523db6f9081d1a5c735dfb80ac434290512480672e93f1051b561d0",
  "2025-10-21": "ff481eefcc6a149a76fb979431e8214ccbfe75261ed4df71468f30372448dc2e",
  "2025-10-22": "48198ff778c66a07fab2169db53dc32c7f05286fbb3f519ef2e4c838a0adf80f",
  "2025-10-23": "0dbb99274a0f012c3aa46ac3dd7da55d41c1119bdf6687bea6e5186e741532b0",
  "2025-10-24": "26eacd296a80db18cacc960bb0150b9966034953db63dd0c62f44d62a3372aa0",
  "2025-10-25": "1aab25ff525e73d0fbc02f547a8989cc09fb8c91db72c052f508f96ced2c19a0",
  "2025-10-26": "e10b8a1c54eb1ba66090d099ce4a272b87a232c0d20fb45a7fdeb7727ccbfdbd",
  "2025-10-27": "dcb789fe32b02528ae2c43d4a046ab7073d775f013c86ee2bb3f3379b1800d03",
  "2025-10-28": "0274c65ed2e11f8ebd428d551cd38dd553d624d3078352e14c3cfc68d1324de3",
  "2025-10-29": "064c094c8b4f62657b4f4efc1f1f22d92297a613675e584ffdf2dc83ba7da9e9",
  "2025-10-30": "310816aae2679eeeb894ac3476892d7da9a3700ba90de107f7d6d093d6d12640",
  "2025-10-31": "591406be55d72a1ad02808e8075fddc6502e97cb36b04112916209d08c5e89e2",
  "2025-11-01": "35e6d6fb4ad986a6e3713d3b5d8d5b310b801f2a52458b7dbd1403788c2162af",
  "2025-11-02": "30d42502c71d43c81e5357ee88d891de45bf04bf12fae1ca02fd8548fdeb8910",
  "2025-11-03": "8e2cc46b380178e6bb4fffb7c94b96e3e8a5339081c556566b67190703245853",
  "2025-11-04": "586addc6226cb9cf4abf9a6b02f81c663e0ee9e06c4d373a453bd8408077f3d2",
  "2025-11-05": "1eaebfeabf2b79d73ed0ded9038787ee93c1d66da087efc0078e879261d081d5",
  "2025-11-06": "7107422b510b60fc7a41bf85e0faaccc3b62d7b29f1f10ad76a9a8aecaf323cd",
  "2025-11-07": "8b23e3e8324bba5cf8e6ba3c594af2ce6b2e94115fb1ff0520a6760903b294e2",
  "2025-11-08": "2ac25c7de6485ae34de2bfc917a1fd2698815725dbe34315f43859f49a3b3744",
  "2025-11-09": "50801631ad9a7b607d1ff1cf036aaa008ce6b499dcdb70f45d7eabf4d56b2dfc",
  "2025-11-10": "24721c1c7d2275a32f4f126811285cee92274f3e1f249437f34d60c2d2c7f47c",
  "2025-11-11": "8912ddd93e4ee7f60f57bf5ad28404590d3cd06a7e3beff457abfae9b5610631",
  "2025-11-12": "7b138468a8a28eefb5a41b456be7cc41be99642f9df6dcc6c7b83f1762198245",
  "2025-11-13": "02fa427d593beeedb13d96c57d7184d4129bd49b56b1d8a90fd7f9c93e50dead",
  "2025-11-14": "ac48b01fdd50868a174e554165ce3c5a39fcdde53631dd39e019c5b4bd719eb4",
  "2025-11-15": "80b90c43fdcf603fade6e1de4d5abfe97dfea2aad2465ecaff7cbf382849154f",
  "2025-11-16": "a7ef8ee201ae42189e2cc1a22226b90b11bf2c80f54003a28d3bfbe8534ff75f",
  "2025-11-17": "9ce05c377cf6c86c14b6afc9d610514552e87b45163feff4e0ab36051a90c3ab",
  "2025-11-18": "d935b224dd577df11ae9290f5650fa86f56926b7b675aff3923864800e0c5967",
  "2025-11-19": "ff3344721d6eb9f7dec9d8744aaac2dcbd26ac13c7d10eda5cf129144a093390",
  "2025-11-20": "d6f6170b15e6a7f13188a93ca0095629a8477e8bb91486687883c5ed84af9951",
  "2025-11-21": "193c09db8b5a85b0f6daf7099dc7d5517b84253ffa010630e296504c9901c620",
  "2025-11-22": "346b4a2a5d1b9c1b73b58ba5f88e8a5d06dcf0ebd4d3498962f0a1b61459285b",
  "2025-11-23": "b839ef20a139a957e97cc6276b60087c38472c4bbc7df5805532dde39e36ca99",
  "2025-11-24": "401b6be1113813826dd1f1c723b0d37797abf6dfb22cee580bd6fca860297156",
  "2025-11-25": "fd6ef3a0d6b82838c269337b40cb5f2000e364375a202c1d2809af7534f1b31b",
  "2025-11-26": "feed40c02141d9696544ff456936faab1ba529fe6788b576d65307e1f7c0a4ed",
  "2025-11-27": "3399dbc2e814fe5c2a4b7ccbc493918308c871322cdd29c4152df1ca78d98565",
  "2025-11-28": "c48b8e1b426d41c3ab86f5484dad2614dab6181168890a46cf332658230c1934",
  "2025-11-29": "545f0823b3964cbcfaa97c3a1031cec3530e2102ee669120245408de934fa3ce",
  "2025-11-30": "6195ac75d689daebc69a8af1063b5c8cd7689b9072c9547c256a4b58c9cffd7a",
  "2025-12-01": "33475cdc927b75fd786ecfa48c5a67a3d3b3fcbd7892f9331d460414c4122e17",
  "2025-12-02": "86fdb1ff987532b1954d980d4ac2d8466b5af37cca72087b374cb7d4495b001d",
  "2025-12-03": "9e5f4198e7b3b9fec66bb9f7e30f220c74a2bb65d94ea25ae0551014f559f5b7",
  "2025-12-04": "d110607497771818fe3db483af3e1f9323dcd1b2f8737f93f2f246bace13084d",
  "2025-12-05": "6b38ef52ef9db241f3897f2aacf5b0799e6aa80b8db74f62ffc4de4912091209",
  "2025-12-06": "775fbac857c78125cb97c72bc8b78f46750fca3dede232c22c21eecd0e24786f",
  "2025-12-07": "e2062e5fafb9dd8dc1b8daba030d7c7796abebf841eeac8ae5cb00339745771a",
  "2025-12-08": "0d9be68407c04e1ddc95342c4cfa8ec113d797799503ddfb087866c74472f629",
  "2025-12-09": "1b55d60d957193c0b454e19eb31172d5406672678bef53fe80f272690637d1bc",
  "2025-12-10": "10b253d1a812af68aa1e6f524aa9b601122aa4faca11ddd4b0302152c7d14690",
  "2025-12-11": "493e43889e0eced32afd720b4f9c987fe3678848a5e023898162c78c2fc73fa6",
  "2025-12-12": "b5b89fc953bbf6b562142f14ac79e20ccf2cf3dec26c4f4e99e366751156cca9",
  "2025-12-13": "377e3da25b28c679024517daae582aee36f6bf39b8b3a9c3b81d40da020ea032",
  "2025-12-14": "edbdde63df15d97f72cb1d38eacf55975d4c740c1b4c42fcc262e5006ec3b439",
  "2025-12-15": "3860298877ff7cead6c92882a03a7f0939b7a48a6eea038c4d846296f042e8c1",
  "2025-12-16": "47fe2737565bafe4c7b5a97f0fc6989496affd6fa9f3ed5564f96f488f771251",
  "2025-12-17": "26f63c9dcc727825a470c3789409a61fd438137f271ebc78ba325dc7cbc716b8",
  "2025-12-18": "54960a2fb2c4efe3f83fa405cb984b51c698bff0b6607eb05815d8f948d26bb1",
  "2025-12-19": "4c5b0d6a072bf3cf106146f8425369f7f207dd8f493cf43abf9ae116e42e830c",
  "2025-12-20": "638bc39aa14e2800cd56ec9c0b48cc6d151f7d0db87931a9418ec711ac7066c5",
  "2025-12-21": "9e4d881124940e6c4240c811866efdea86af44439efe2b6c92f54d1764a65349",
  "2025-12-22": "4dfa506ffe1194ece331cf30e8a4fbf42e512ea69569f0d0ad4dc2dbc08cc477",
  "2025-12-23": "72843f8ab3f942ffd1421ec69e6412f3670bc258a663a076cd62f23f1dc79571",
  "2025-12-24": "67e39dba933fb07cf45c46f2a749711df91f4fadb06cffed6facbfc57bcb6941",
  "2025-12-25": "91950bcb82c8651d58b887834d5aebf82e2393ae2a307f2147b115a9b4e3817d",
  "2025-12-26": "7c13770724623f4107d650124c183801adfffbcd4db0534bac5bdb8fe2223b10",
  "2025-12-27": "99bf69cffcee87ac88de4dd765e440a58f8cd80786d1a1016abf1d0a93074200",
  "2025-12-28": "665cac768c2f36823008a9261b580ea3b04d1fbfb3e8280dd3b8aff7f40449c0",
  "2025-12-29": "f583bdb7a765d31c1b36d93162d6c566603f78b93fb0da19706c875da87daab7",
  "2025-12-30": "1069007072888e5185e867c6bfbc92b81dd04a53fbdfdb4dc51560c41be00e59",
  "2025-12-31": "0a8debce744fe860a72b1bd90d2feec3c8bcedd4ee0ee8f4603e88886badb0c9",
  "2026-01-01": "99c64e98ec90d968412b2cdf3b317e11a4867bc371bcb0239e1f852ae567b800",
  "2026-01-02": "593cd84a3f654eff0a6f62ac0ea7b94dc7e7837a401ebd3e04b8c4bab556ab7d",
  "2026-01-03": "173ee024d9ecfc666411ba47def284e08321acebf0c6d3d5ec5f52df51eb98fd",
  "2026-01-04": "30b5b79f325cf2a37d8a7e27e575357c2a8bea98db6e19b06931833290355ed6",
  "2026-01-05": "9021c10413700ac994527eff8c2e433c50d8063c6343f56607672c31976ea7ce",
  "2026-01-06": "fbc4762606b2422e1c01ecf49c442f667e18accf6b572b1db88c285459185ed5",
  "2026-01-07": "c51baf99ba203b6fb84a0d380e07d4d09cf8e9f1747a5f3dd977a78f4104caa2",
  "2026-01-08": "e4cc852e22cb16e834636d460e4c38b5271c5d74f01edab9c5df937f9a55bb5d",
  "2026-01-09": "70cd0a7ca5521516b316e8d2a1c12a496d8ddc1e61dee65bcaaf2bb8f8490ee8",
  "2026-01-10": "743d1d912bfee70368dbca3310fe60ca352dd65c50557dceeaa9fb562b021c47",
  "2026-01-11": "a685a3ed8381968201cdb0cc5b907d704feff77503e7fbe269ace3092344473c",
  "2026-01-12": "adfb2e068c3fb292e84893fb5607c2da1011f7221bbad0153935cc268b8ebf8f",
  "2026-01-13": "2e57f10ddc4f276a70fc1da36478adc3beadfd98d97ffcdba8e3690467a14766",
  "2026-01-14": "a91023f99d7df977d4de08e6c24fb109cf671cc72aabe765760984877d7a52ed",
  "2026-01-15": "154f6709c64c1bb39a6beda929d3354c17433afc869cb1e412e76dd7a1a265dc",
  "2026-01-16": "222f0e0b6d673f54cfa90f51383225adeb9e18d2792c4a3d3a82ea16e251d25d",
  "2026-01-17": "3e79a792949740be7789eaa4dc4c5981be4e3eb2e9db0eec6e3210268db0ad34",
  "2026-01-18": "1e9be8c800c6749470c346bfa7201a0d89314806288245e6b4ba0f70becce1a3",
  "2026-01-19": "73b172305eef7f9c0e80ea3c1d7018359ae882e506a4b1f143ea099c25adefee",
  "2026-01-20": "c9046c93e07ff2e107ec8b446f111ad482f16daf9b1af7eb12f0513992a7ed29",
  "2026-01-21": "be516eeeb9ea8f7f0f054b3aa744fe57967fa3cea118d74ce9af96cd3c30ee1f",
  "2026-01-22": "6b84574c7487c7200e5b5f6f97211860391dac84577b914cec142b9575a1d03d",
  "2026-01-23": "4807c5b2efa0615e26f9caee3e3b86242a4323b1298b29b05ddab9a48d29ce77",
  "2026-01-24": "f9beed9ad82233094a0c661a5d334d0e638033f2d08a0419a88a66c3ffec6681",
  "2026-01-25": "7dc0b11d1c70e36104e1d2deb6b4ce71f0eddc9b92fba7817a6d67648277345d",
  "2026-01-26": "02afda0978a9c167bbb277f900c3cfa2f6430f8bc30fe62c9fafb3b42269a0f1",
  "2026-01-27": "42cd3cf873df58c89e76f4cd265f8d12f4d9f99cfbb3cc83321f40c8bf447e00",
  "2026-01-28": "e978ae508aa29b5c8ba4918296b0319c1a8c512f58f9b1d939a87d1e4ebe8aee",
  "2026-01-29": "f8a959d7290225a17e0d0934e41c66c03fdd228be9c6b85a64b563a393485df2",
  "2026-01-30": "a36f2a5a638d1b356a429bae1e8c8d43a1157ca269545e65fe6450bf7df771ee",
  "2026-01-31": "74011c0e96cdaa1f3c27cd7696e70ea833197a0db55871339aa45a487ca6b4ab",
  "2026-02-01": "809c59001e8f7494937c10a699ef58c9188ebeebdf9475d349c47532ab4707fc",
  "2026-02-02": "064ef25d30d37d402616b79254ef744bbe6b9b8421045e8e855bb28a1de2d6cf",
  "2026-02-03": "41d7c451404428e6ebb2e531ebc58d08d8024ffd540d6e1f9685927510b217c3",
  "2026-02-04": "b5357881bce319dd8b7100e7dbe21554caaad79efc53b014406a8f57f3608cda",
  "2026-02-05": "5fa11a70e251a2f6373f3e235ba1dc0a027175414cc44f3187654dce951bb30a",
  "2026-02-06": "ec21c3d4574fb0f4503b6f71d1be006d3d84ab6998bf50f2f27e2674fb5b7905",
  "2026-02-07": "f14a3a80ae9ad1feefe509c8be7b3eeabd75819dab1ecac2353fe5b0de246525",
  "2026-02-08": "e07a0008dbb290fbdbd8866cd0682291ef854cdcb9ba7a7225aef6f7d3810132",
  "2026-02-09": "931368d9959b59f7497f92aa34079ed4fdc623526f1d9bc3dbbb9856f652cd1a",
  "2026-02-10": "807b532baebbffa6a449abcdc66d76cbc13b53bb32f74f1aa2602642e350e517",
  "2026-02-11": "2732d43ea9360f57d82008dd21b7bdc159bfaffb7e98f16c144d5c1e3f2b84f6",
  "2026-02-12": "4f7a202aa443320f67fd6e28ce5688c29075f4ba07ad886825e37218ec80087d",
  "2026-02-13": "e07c3d5ecd0599a3b699af087e993f95f923308eb187e7030b7a6fac6ffe5919",
  "2026-02-14": "79b7a788e6548a287b3841d6e23a4c6c27a8191329cd69fab1573d22771f6c61",
  "2026-02-15": "9cebee714808614b87ccaa1b1d191f00ac2af2a4f3d043970e1079e21881887b",
  "2026-02-20": "a88ff8303674e6d56423177e23cb6d55a6707ba9b8b54d1890309f2f3f659139",
  "2026-02-21": "bf6fc2c8cd8138f2319154b7670a51e1879ac9c5ca69fe1c9d3b9cdaa45b5d4d",
  "2026-02-22": "0d614834b01790f473bf432ebb0358c0bd2b176267344f036480fab94cf58b36",
  "2026-02-23": "20e55251cb3ab215ff0aaa8855b8dc81059d3d59536961183be1bafe5d32a045",
  "2026-02-24": "56adc260445672405979b12fc1925a70fc0d04264ccce7e43e9f565e8d865e3c",
  "2026-02-25": "f0f399c7c4dac4446e20a73c83bda793c87bde5fabbfe2552e71f7e1179afdd8",
  "2026-02-26": "e3873b2347e4b2adbd60c48e691a12d4d0f83d0bfaeb31acb2fa4c11f1481517",
  "2026-02-27": "f7cdea37235feb924fe64e69c0a1c888bc275faa404febe4e80254b20b8da4ed",
  "2026-02-28": "94598a95ab97a45465074abf0c20223c5d9f5cc1c13503d0cf555c05949e07c4",
  "2026-03-01": "f426418356b8462eb17f5ae5ef4326105181291c918ad8c6643aa8ca1470f874",
  "2026-03-02": "6da04b7c7646794912961a06297f54e6145107cc0107f80c54a30c94d780526b",
  "2026-03-03": "a8e3c9892a52436d3ef091d0cdbe661c369f5ea6aee63ed94a98f06da4de8156",
  "2026-03-04": "88a60a0432a6de805f841de85835bf552a3eb3daf9e1a75a08e2c4e427d49614",
  "2026-03-05": "183c769b9f8de6f37d48829dd267dd9f3c1bef1bfc7590ad1962ef71d471e0de",
  "2026-03-06": "21f2ad43e9e69413ae046b63b21eb41ace2b0af07b33d504ce49bb52071391dd",
  "2026-03-07": "826f94b9819d596a8f20bc7340a81cd6bf325870a60b37189f720ccc4650922f",
  "2026-03-08": "291247ca79b3fe1924d9fe5867c6550f9d99dc6a54e4f7bdd10f62b76e95d4fb",
  "2026-03-09": "33656a0d4bc4f65f3c6012a8573958ae847e72a5e9f7f252323a3710f30ad2f3",
  "2026-03-10": "43f889cc9dc8501659a71134f88a96dad9c1a5fa5dcb8248d7159589978893b8",
  "2026-03-11": "1a39ba034f3a5c4310f809fb5f8989fbd890f16cb9bbd2e612ee753ad796877b",
  "2026-03-12": "a6804b9d17820b6647bb5796f5da70d2851f449fbe89392a7566d9f8f2ee207c",
  "2026-03-13": "dd37fa85d7cbbf3f179ae73555827e17a405d757e7666d23f799c7a548a8dcd3",
  "2026-03-14": "c0350e4326dee511dda36613f4270a92c3c3146052f6463d61f9ea29e038b605",
  "2026-03-15": "12cf222f3c3719dd4d9162d8c9d2442d30148bac82966574281677dcf159a7e3",
  "2026-03-16": "7c036b8fcc5a4ba3a504258b49e79aec3f8b6c8dbfd12d8d8df9febf0bba8160",
  "2026-03-17": "dd48927c0afbf0e306d205dcb4511ff10f817f740715ad737e7709a4afe0de6a",
  "2026-03-18": "15973801e597ecd714d8efb2f7ed3f93f8305aea0709a6e852830ab7e8f5261e",
  "2026-03-19": "832c2c779b78c8c5db493e41419f2521bb00ae1e8a61bf55d02b7741c297304b",
  "2026-03-20": "d0d7a70e6367517ead2b3862be6332cf56848c2d9206dc505f8227df78cd955f",
  "2026-03-21": "cc44b3201ded6d6b46bfaa5a0b32960968ed1e7f8916e0e3559f0fab2bf01a47",
  "2026-03-22": "8b392f328acc98218c5276bfa9df697ac1a9137ea357f7f843ef25c6aa28b874",
  "2026-03-23": "444e3f2fc4d25278d3b5cbd1d0b5c66a27156f1f144de667453599bd074a483a",
  "2026-03-24": "db9ba40c066bfe2190b7bd26fc46ddd586757415afc460af4120c86d494d7a0e",
  "2026-03-25": "d2827b6e025c28ef8b69da37fcf35dee67b74ba071d6241c35e05b67eaf306b4",
  "2026-03-26": "e2864f6149bd73aac5ce4f5dfd102cb712deade1b23c2626cca69680dee2deb0",
  "2026-03-27": "174bb3490973476cf66d274df0de505e9520dd114c9667e49b3f3d4c19b5e5fe",
  "2026-03-28": "be49595ec07e6e543d97e7ac330bab66dcd58caf171f31ae35f8202b548d158a",
  "2026-03-29": "2fcb89eea51327c477adda224523ff9baa080ed443868234f4fa74e65a962ff9",
  "2026-03-30": "c79abe6452df6d8cd62adc8a7410c99b4bd32f1c6f1c5a2b7021624c922b9c3c",
  "2026-03-31": "b3c20f06759a10d6d7b85f780e258fe3adf85acff8f33a262749d0ae5c378d26",
  "2026-04-01": "f238b9e5b343914f36b2b8df97cdeabdb604f0896d2b645135ba0eb81d3bb40f",
  "2026-04-02": "cd705b5310fda9a1eb3798487ac9462527b75f87008cd2d8db3d3384a1bf6ee0",
  "2026-04-03": "52e7b5cc2c48a4f40ebb6e2b35bcaaca12ce6094974106a74d32c5b8fc4d3ddc",
  "2026-04-04": "f9298fb19616bcb2908af9404bd4dd0535492306e0c41c53cb507ee809f0d76c",
  "2026-04-05": "4a77fd0371f43bc21c1fb03f9ce94a06d6b5d9eef63a405212a859d64b68cd01",
  "2026-04-06": "f02892b5d8590be7e58750856cf78b95996c401c9804f94814d7507a3607a418",
  "2026-04-07": "1c3a53d5f7fd0e774569d8bf2d297a70c1d4c1aaf35b8d91a22c7e6fc60bfe59",
  "2026-04-08": "15eed7db2cdd83f94a4d2be29805750e8bb9a046a2fe938f5da3e2a245b8197d",
  "2026-04-09": "7fb2c6922db9f00d61d92e261bfe9eaee55c9ce479c5f9f72cb4b7360f81c387",
  "2026-04-10": "b713fac93a61a2a280ff33a3c0638f8b589cfe0ec6286ef9d7a794c6987b47da",
  "2026-04-11": "90a3f4ea943c6051a7ad945784c663fd5d29f5597efb61874faf5a84affdd42e",
  "2026-04-12": "af313e88eab0fe6c833c6b450f58fe16b9116aabf96ca3a9aeedb9b78f0ce7d4",
  "2026-04-13": "638997785ed70fffe239a129d85ca44b3b7a73e6fe2bd59a1be524a7870913e2",
  "2026-04-14": "2947fca89ed6a85b80c3db6a2e159e6d7f122cc9ef0e21349fb028cd67eb2f83",
  "2026-04-15": "149e6df1ca18a06c105b4e5e3c5eb75bed603fa8da43ee71be52b4b04a1da1b2",
  "2026-04-16": "9f4dcdc93e1fa35281c859c42db1f3870d607b992aa60bf00114b149fa135969",
  "2026-04-17": "6c5fdd898c62577f6a2f692529c23b00b34f12dfa8d30bc6af49aaacb5cca2e5",
  "2026-04-18": "0731747bfa632da7e97d5ef4a2251e852a74876a86a75aab3057aad1a8e0afa5",
  "2026-04-19": "c9218833eed440200dc3226f694f8dd050c9fc1ba3947511cfc61925b8410e78",
  "2026-04-20": "789cde4de809777ac0afa409542f14fd614b02e601a64ec1475992d85d7e5eb9",
  "2026-04-21": "772f38b8a2ce189ab91596803d7215d04aec97b0905bdf5f124db85e935f51bc",
  "2026-04-22": "7370599bdcb22476ae0cfd4f4f52a4bf29bcf6bc68ac90abe1ff0245579b3596",
  "2026-04-23": "dbcdcd39f432da8ba092569ba68e632cb2d47e79e795de1f05395ed0511f09a2",
  "2026-04-24": "d778363ac54d9e69c8c825604aa8a21295e4a08dc5878db3d5e92cd2b86720af",
  "2026-04-25": "7488fc78df33464dc865a9a408300a8a3e673c595d1daa7f64f2bda9a3acd176",
  "2026-04-26": "0d2cbd54f78b43ac8ed775b246d4c10931479e5c71a14aa5394b7aef713dcfac",
  "2026-04-27": "651e53b061ba9c113e4764600104bb5428e922aa78d628c8faa2039fcfb559b3",
  "2026-04-28": "b940eef11c3d92936065d5a4c08d4b2ebb6b21c8667c4fc204932722eba246bb",
  "2026-04-29": "22ed98d35d15b4594e80b3a3d3c33d17cdeefe557b0106c9f890f71855260c09",
  "2026-04-30": "0dd0181085b0e9d98262ab29faafbbf1a6baab2ce80826756a74f282e4112205",
  "2026-05-01": "ca0e569c2f063234b1b8d068d35d3cb168b76bb5d1358678d25ec40d8ee6635f",
  "2026-05-02": "07c21057780208050be628e3c41c3aaff1e5adffdb05fae386b24fec272b4657",
  "2026-05-03": "f9a83df39d8f84421e6d2a24b9b23840549e89a3e06370235cecb96987306687",
  "2026-05-04": "2ea9bda8a7995658311140715a7098abeb169fa7872561c8e28c395edcdb08f7",
  "2026-05-05": "0942da90734fe0c184d9f1c1404eb97cee2b61b1e62a8b26d92886bbe03a8f6b",
  "2026-05-06": "4f36dfdb0e66085208545aedf8455e787322c6d50782f8214317d1ef50404121",
  "2026-05-07": "90eecdf5d4f606fb91d8d8833b22fdff0fd78aa0aed905ee226bcbd506f12417",
  "2026-05-08": "a9d1051826d0845d23411beac4d026ee9c31037731e7810a91087bbb4d93e6f1",
  "2026-05-09": "dd82cb05b6684eeea259dde54e83d3bb83aac4701c8c9a4b270f74adef99ced1",
  "2026-05-10": "d25bc9c8a49e35367d417fbf3b451ca00a2b3007d3f4b95eb6d1b1b68e8e14f0",
  "2026-05-11": "238e3671b84f84e56f2fcc099b5ab608989fc9de67b1be38e39a48bb581b0d98",
  "2026-05-12": "1a4904b09129ef25bf4cb101d34402e48ff6352c973f44e9b653e0139d32d475",
  "2026-05-13": "dda2bf2cc7d3e52008bb4149604f901f56b74de87b1b99dec78ca35344fee6cf",
  "2026-05-14": "1652fdb3951dd8d917e934858594b2ddb548bb522a5611ad65001962543bdd0b",
  "2026-05-15": "48f933dbdf5f9fac119f648fb823f5d7e831f376b9ca0ebad775e0929a87ef09",
  "2026-05-16": "cf2011a6941ff7c99035e6d45161de1d7322701f54f326740ba055c8d75303fb",
  "2026-05-17": "849c8323023cd3360e8ea106f812d99ef3a5a1cabcce1e0dc57490204ee7b6bc",
  "2026-05-18": "f679d5766a2a2d573c8d434ca1d346a900f6e8d4642388e83bfe1a9680bdb6eb",
  "2026-05-19": "db6e6c7dae78cee632aa298e708aebb38baf57523623bb4d256470ac1a59ca83",
  "2026-05-20": "cf3bbca868315c5f093ff492c64f194de3fc8f7ce4a47b5f46d4fe43b16f4bca",
  "2026-05-21": "49e99a559b6489e67dfa391ef5e88e4491761405437828c6adddc41c743e8bdd",
  "2026-05-22": "c762f88005eda7e23718de367a8ae3d3f50315a3dd5a4eadbb4efb546e9f57b7",
  "2026-05-23": "2a0e1093871b7ed859efb2743d1000d45624e2ddb6413a3ba8da2808f933de1b",
  "2026-05-24": "9aaacacd0566b47678f98d7341d45e5c1357522e2d027fe2537d20b899b4b8c7",
  "2026-05-25": "bf32d496107fce98242ff674018fd6130dd9ce7a6c107e0e54a8a433e96734b2",
  "2026-05-26": "b8ee82a75c8a31721940dc3d57d9405ab54d8d017f586f937720f1d60b4478cd",
  "2026-05-27": "546b394e6872c450bea1eff12bf9e4a1c3cda99554cbfc7476c30c1dde8a2b4e",
  "2026-05-28": "1b5115642b24297c1681d9310e6f42d27b5d7168f2052bb60d1579b99299c2fd",
  "2026-05-29": "cdfeade13131aeb7a05ccd382e14a2415a5765ed6f7179ff86d42759c70bb2a3",
  "2026-05-30": "636697e55350eb3e9b1cf0e855e75db3a74ed64746f98e133bead311b00ff8bd",
  "2026-05-31": "8c18772df2a120b8d42e3c4dc2135ea5bccd058a9daa2316c7ad376e5edc1988",
  "2026-06-01": "44d08d485d1c8258fe274fd2f8278bf73d707d249e6bb59c5bd424de50a8b534",
  "2026-06-02": "92b6f2aee31b0c5c974ea956801f9cc0d8163081afd8ba9e0d75a6164697eb5d",
  "2026-06-03": "1de9742bb1c347c18ae38f55b56e777657f21f3e61bf27acad40cec74146d935",
  "2026-06-04": "6c97651c90fb59d985ce11277666ccdc6869c98d9902ab179d7f6e48334e9ebc",
  "2026-06-05": "c039a49edd61ef3eefb35b492e2d072a81fcde44335cf0842676d22d6a858f3a",
  "2026-06-06": "4507a6e0341e013521b65797d386af9a84b08f6011f010e2ffe2486c555b2a61",
  "2026-06-07": "a6d07fd6bd85ac421b9f55c2d74ab4bfa8fbd6186bb80c70ce0802e2f0a41172",
  "2026-06-08": "3e21ced6c4a188adada8d0b9b14ee20e6087055b3e4f4e7da266f2dd1bfbd2bf",
  "2026-06-09": "e5ced5a4a440d2b257a6c20f5d9ffdb8baf8489c5768bd067a6a85840f7f75ee",
  "2026-06-10": "7adf0f1604d47088fea4d56b1676a8f339d6ef11286541c0d408edd9599e7feb",
  "2026-06-11": "417f77350621fcd7893e473215c1c9b1edce2f1617b91aefca9bd3fd55d09d76",
  "2026-06-12": "13a5479ee244eea6f618d57a19883fbd6ca5a65cd2e9a8498ff64d5fd8484190",
  "2026-06-13": "468c01f3b70e8e372cc2206ddb31d73d988e6fb0a2e0f806b098c66cfd5e5a82",
  "2026-06-14": "d2609f3f922c281367bd402bf10c6f7ed9dc6d080746ef187c3c597ef878f343",
  "2026-06-15": "3746aad16dbb6377c3d35b999d6230e0f900b9d3e5cfd60944f6dc3411b9d349",
  "2026-06-16": "c710b7687499fe47e815fdd4087e43b5e8bb230d83d36f5234c4cc791165dc03",
  "2026-06-17": "292ad05900d6d5812a5aec0822df74ef5b4dbfc3f1eecd636427c8006ef19970",
  "2026-06-18": "2ff52bf21dab63b9edecf44abc26200a3b1beda23d626d3030e8b654d7ef5868",
  "2026-06-19": "6fe1505ce4175d16adfc54b7f011a4e8e1e9cb54cea5c04d98fd4727d9d1128f",
  "2026-06-20": "dd7470330ec4c26d1bea629d042caf4c6878f41e260ee52c97b46d6e9ebcb810",
  "2026-06-21": "0ac27c02d67b5f513fd5660b9a74c92455843911d540bce7f038397214b3d943",
  "2026-06-22": "421e117c70de1cc5e0ed385f1b662439ffa3a4b79ccc86b3436e72bf8b45848e",
  "2026-06-23": "c868ada754ad472f20b6e7deef803121bc30dd441301ae3d2357d665a53cbc27",
  "2026-06-24": "df91a15ab8985ae1a670ce856142d87b6e418e5f7b4cfa3d748feb2e2413038d",
  "2026-06-25": "6857c856dde15f8310511eaf3e0b6f7ef90f5a90b73814570bde99b58b6c6d4c",
  "2026-06-26": "6355b7a2de24670e4514fa143180bde2c116c47f1a512f65fca742f42edbec4a",
  "2026-06-27": "9c52cfb73b4fc7f805e1c6ca9b2de9b1d9f4c6fda17938dbdb3bdbb93fea301a",
  "2026-06-28": "a4ca75aa27f48c7cb9b133c09215b3951c7defd2ee5d83e6faeebe00def87322",
  "2026-06-29": "15e6e31543cef1aac045a2076ebfb2128ba8a0fc1c95a5d89584abec64952d28",
  "2026-06-30": "4d0a1712b200a6cdc2e3a3434adf61cf9b101a411eaaad629b1635642972329c",
  "2026-07-01": "62b874af69202e953c73ad9f1a850c0d81d8ed4060a4c38f44cf6ecb903e4405",
  "2026-07-02": "216340e843d27b9d0c730eb213cb9c417fc32f3afedb771ef5df8c4e640568f0",
  "2026-07-03": "c8d905904067c8af1f2f733762604c52828f1936e54b419217a2f8fa559542f2",
  "2026-07-04": "d40d9d6c07ad5a542c14624a95d4e8112e7076e9d05b10dd7de92af75954971a",
  "2026-07-05": "090ac143ebddeac8a9be79569e1bba38cf31aaefc45ec1a5f5830ea2dc0eb59e",
  "2026-07-06": "2f5b6db2caa7e65a8c487e6f975b03af30ae2ebd9cfb9d90502474f661eb5701",
  "2026-07-07": "76cda9b822663397a1cc571f742f808d7cac9195f4fe620a08f0524b72083007",
  "2026-07-08": "c2af5c996855557db7634e5ca228b2f6448689c8e5d6633e7233de415c0565a0",
  "2026-07-09": "1f5d8224a7c07c019a0032a996d7c83eb0a280e45b7deb1ae810064794b42083",
  "2026-07-10": "1f041a5d6bc23ee7395f8779bd601f599b1f59b7a6a182343272bf34c99c0fb1",
  "2026-07-11": "317184fa025b8c69193d11c2319e5e6c40c511cb9f4b8b3516c9b26d21b3e4bb",
  "2026-07-12": "00c313410cbba2124d89b9ae22e3b2ecb72513896bcef624a8ad8273f109c058",
  "2026-07-13": "330a6fce4b5127c629532d1c9828733bde5f15f54091397b89811dc9c260be09",
  "2026-07-14": "9e00a47eeb2066acd787ddc09cd76501179bb195bceb4f8072c9279a1474b343",
  "2026-07-15": "d27607ae5904761ec6ceeed8264da6cdb69ece9c19fa2f82f7e3ce439e7625ad",
  "2026-07-16": "7dbb32cdb516cd0fd019639e52010acb4c3edb5eca4bfb4bcffe1a3065e6d894",
  "2026-07-17": "2f8ec28a01a53335a09984b9128cff23c7c1b60bd766c5ac813ef77b91bb6bcf",
  "2026-07-18": "6a53b1f8204f6cc50c7dfacd529425c7a1b393239999c757ffacf871beee4cd3",
  "2026-07-19": "0ca46442252d5b9bf15cf6f7c851b71c0acde5e6ae6eee92d9b79822dcb2de6f",
  "2026-07-20": "75d99cd2d2c237cfc3acd254bb04d90dcf49138b24db6a7dcafc46bb207c7c9f",
  "2026-07-21": "0ad874e2d6a6ae168db0d8357ab98e2ea30d7b8037f9e7e334d3512f3b5a3ead",
  "2026-07-22": "7b096bd9758778ca3b3aeff39fa361bfd2cc257cf5bef2f630193c3b02a506b4",
  "2026-07-23": "defb44fbbe1c0bbe8ff672ac454e4b03dc4660b2193f0641138c2463dce32db5",
  "2026-07-24": "0f3aa6bcafb6be595be23957861173c762ebbd82987d0ba2af892c85cbfbec2c",
  "2026-07-25": "7d9c5efe0b602f8a6c79d56480445bc2d8a2d4ac3987cb23c0710c4918a02ff2",
  "2026-07-26": "47e18552c13b8745dbb15d4c5a35f9e00e68eb62c30efc733149f889bcea9be3",
  "2026-07-27": "541afde27532514bedd997a730cf2ebb8017987c9118b87ae981c3334b4df31e",
  "2026-07-28": "65934449d67c7d163b4f351861a8821a8069a09f2369607688baa86bd57dab3d",
  "2026-07-29": "dd3d3c971ad9d43e9d46c7d5cd4f826f9c1ad454098c5caf14297b66b00adc80",
  "2026-07-30": "aff4fd7e288459d24f8879d302ed468e155e6703d48666a88913b2d9329980a0",
  "2026-07-31": "3ec2e8713dcfebd1d9b3113ae984979f64dc00bba942808e62955410c44c1bbd",
  "2026-08-01": "8497f3d549d1b4ef64809c87092e515a2cf32e88070e889bea46651122082ddd",
  "2026-08-02": "fbbf20a68bfd72898958dfe378527b8aca1f7c641b5ec763234cc422360d7aa6",
  "2026-08-03": "fdf5e913cd5cee27c4cbff5520bb4d667067f0fefb6aba290fb797d60ead2015",
  "2026-08-04": "e3b37e5255431fd2d05779b8e9cc95d8b0fb8e782ae1826965d9bf1445556cf7",
  "2026-08-05": "994148e127b392cfbc6d60b949a25da43f99fa3c2b2b8e70f360e831de71c6d2",
  "2026-08-06": "98d62581b77551650c8e95dec2d7204b406fe75f380f21153595eb1a7414c390",
  "2026-08-07": "82354e14a9555408eb61c73b0cd7bd48a32ec221ea0ea62910b77b073ed2fcb3",
  "2026-08-08": "da2f192ec75365435ebb508d5d3c0f0c95ec23a06bdefc0fea1e386e014e0460",
  "2026-08-09": "8f8ee734df5ad61cda13808f3bce2d36d20be7cd7719a81c3023532e6e7af741",
  "2026-08-10": "cb1f6c57863bcaf33f90eeb7ac2b52adbd78805f74f46e47f23e1d787c2ef1a4",
  "2026-08-11": "0b6f945e0aac3b8e9f86824b6481215163c70689ab3b73202e00c7d633919d36",
  "2026-08-12": "1488eee5507f6721f6de57940f63ca1e6f515188615e7e62e68ed74ffe4b2af8",
  "2026-08-13": "4064d51fb41691c21eb9521360c69431f4e61514cb594d1d007f8ea92766c03e",
  "2026-08-14": "990c0c924848c3f08a55db68a38c78f91f567ef8f3e4ee03d82d0fb3297c3f13",
  "2026-08-15": "04508488abca4b706257fde9788a7be53b67d234b50d7809214b51495a6aa4d9",
  "2026-08-16": "95298d63c2167ab11137f0b581b8753354040e17072ccb0d1c121aa9452c3215",
  "2026-08-17": "151a1e43cc422aa0e67f19d619a19542b9b75f054b8640c4a5b4a3a11ea8da37",
  "2026-08-18": "10e94fccf9fd31166d514125783d3a1e1d67a6443a5c582e194c2a3c487e2cc9",
  "2026-08-19": "fac5fcc91104dd3ba3f28f0cc08702e4d5d0d8994f163801f6bd9088e51bc107",
  "2026-08-20": "16cedff87134c5307addee17ffa5b03cbb9ae6b7fbd836ed023ca5d8d0709f0a",
  "2026-08-21": "63d7aa2e2ed502414b898ad648b0d32af9ce8103eb9937aa76f574f0baa6ee09",
  "2026-08-22": "67ba8314d7203cef891c18755c255f1f369eb829fc4c0f1e86a6ad2f31246aae",
  "2026-08-23": "61999d76aa08d8fe58fb100cf30e66d2bad7ef39925e82c476b2a72fad77f86c",
  "2026-08-24": "bea3cfa08fb61f215a059f3513c7bfc3d3b6fcfebb100cad43afe1cb1e337494",
  "2026-08-25": "a876c0b2ad07c51879c6ed0258b83a39e000ab54fc94c9106fdb29be3dada671",
  "2026-08-26": "3ab58dccf1715f159e14e36a94d95786f5b4af6f36d04b5641b627d2b8931765",
  "2026-08-27": "00869d612a293df85c581bd570632d79e68a905d135ee7d53427d181ba94c77e",
  "2026-08-28": "12b1fa0a6d683eec9d1adb03bcf9047239bad66714b6e3f23761c7550783a578",
  "2026-08-29": "65ce4edc46e07b9764c24b71db9e6ba52f8e22f8ace288d610f279e655a4e9a1",
  "2026-08-30": "242ab5fe422dbe616c3fe5ede507ac7a7d88d6a47832a9946c6dfd69f5f32f4e",
  "2026-08-31": "ef4994184ad2941b3c8a99350dc8ac42f6ec28871a7a5c4cbffb9c51ce5c706c",
  "2026-09-01": "0ac2865f238aca005b52380ac55f8f57ca1ae9ee2d0d4291db9ee5d284bb0d5d",
  "2026-09-02": "630fff41f62aad35fe1fb0c969bb878c614db250d7b7889cc51191185885aa04",
  "2026-09-03": "a3d60c41ef691850c5b7dd95b464025ca68db5748676b8b7e89cf736dc8cb220",
  "2026-09-04": "64c701c1acf79bfefd880e1d6a18b1221980c23f4910c419bcab320fd950efef",
  "2026-09-05": "a7009b2dc739c276fa74e7094b080e47bc0a6f797d27055c701de960449eb557",
  "2026-09-06": "d3b35bebc9d5822d67b5af9a25fca351562e474777b8b4a164b93d16078aec35",
  "2026-09-07": "66024203d2a88e4a5004beb5f7d93afa5f760d6b06f7dcc3d8a7a0f89e5f02db",
  "2026-09-08": "dab1d529728d8b2255b190ce804ca9056841665e42b8ee1fcab069eed1b71e9e",
  "2026-09-09": "3c07cccc98deac19332414c1f1b76e46e30a15a3e527139b8379e9f4438a4fdd",
  "2026-09-10": "0e2399130a407a865ea19c1880459b9886faac3806901cead0b6c0766935254b",
  "2026-09-11": "dfdcf4202356198a7a8a3f23cdf87a45066e8118d4c667a542f04e4a686a78c6",
  "2026-09-12": "f12fdb03929e9b8f8d55d757f83f17332a9ed72e99ffbaf837ce2869db9a8f02",
  "2026-09-13": "ad8d92f9f95bd74fa643c7b74edbaabb4746ffca20db98efdadbe56216f3b91f",
  "2026-09-14": "b03a9a54ef04aeb2893379c1b2718a0319e0f3461a4537f682da623fc4ec3c8a",
  "2026-09-15": "9215edbce44bfd5630626e8a4ba754b159431f4a1271c405dc86eff207995817",
  "2026-09-16": "de6a4859d40db1bffadd3607981271ca1dbaa759de494e6d2a4b225fb124f800",
  "2026-09-17": "900b7a40e342216d5450b205198676f763a35b79d24bc7ca0c5267cf31b416bf",
  "2026-09-18": "54ebae0f0dc022aba31c7bdefe29946525a91665f0eec692e4b2e403b13f0a43",
  "2026-09-19": "acbad0e69b1b0321e48c5205f98e3f41b01f49639c480d5c406de21af5ec2c55",
  "2026-09-20": "1c358dba1043e3f50fdecd4402c7ab0adfc4fae1603166b4bdb2c964feaf9053",
  "2026-09-21": "6aab2a2e2a21a73cc9dce4643816823b6769f0a51499841dae882e65d7d341f7",
  "2026-09-22": "3bfa68f2f9442295a78567f7631957a2f7389e19f69bb458cc41c2a1c98782f3",
  "2026-09-23": "2dbeacc57ebb2496f20bf585a4df2e88b42c490b50d2a5ca6658870f99a5678a",
  "2026-09-24": "207c71e91f2ca3cfad8b6ad3290711f170e950278ab86d23b8bbc47c13c15654",
  "2026-09-25": "4c1aa5477b1dd7f01fdb0d816d8aa7f475f80f01bb1ffaa63e3e9f510ca5d8df",
  "2026-09-26": "1690dab3b6421027a0cc80a7bc1f430fc8e3a04fe1764b621677850cebf7d514",
  "2026-09-27": "b47456039cb926e2de9712352de64ed61881c45c068206292150f22fb65481eb",
  "2026-09-28": "b852577f40334a1adec18d00d6b6ab8f1f49adda471956e1d28a38fa00f85ee3",
  "2026-09-29": "415ccd0c81416c1da2eafe119cec60d341c286ab5eac825e50ebba1ca4c27692",
  "2026-09-30": "9ed74727b22412569313cc05ee64705678fb82f403fe2edae944cb2f3e6ea0e3",
  "2026-10-01": "33c8b0c1c55c8968fb504b34653e017b3497e4f764ddd21f7c008ef3661e8111",
  "2026-10-02": "7092584382a46b696a0d740c9117839493b0d9dddc889309522b6c788e50fca6",
  "2026-10-03": "200cdf429f552bbb25e3ba81d1b6fad86f4b3c460a5a76c5203c8b9e48ba9368",
  "2026-10-04": "55e0dfb39d66bda6b2c75f83142de6f9005d2b7d4636da87ff9850948ded4265",
  "2026-10-05": "a90e31e93d37491d723cac04b97467565cd9580d2c8cdb6e0a6cd37930d9d0a8",
  "2026-10-06": "c84cdf720a128003725a861d6df5221bb1fe8bb0383840098aced42e882c3373",
  "2026-10-07": "ff477ac844cb722025786c47352d79da07af1133c288c315338c4a2dbc3ce747",
  "2026-10-08": "97550ad15e01a26fd912a2c8d8c3eec818708f5f1c4ed42cf61d6aa1841f0a5f",
  "2026-10-09": "dc05881992eb465840dfa2763153a21dc7176fdf1085ab1036e57d18e9b200ac",
  "2026-10-10": "63871985c5d7160ffc0add87412aa97d3d8a4c4e653982c1a1b06f0dd1a2b809",
  "2026-10-11": "199a51f6f29f5c42d4061749a140f2c26cdd4c7dbf3fb10918ba0b6b0e258b8a",
  "2026-10-12": "e28bf87cfcc3da80032d8091368ecbd7228a5e285331772b2e3cda30323be110",
  "2026-10-13": "97f2dc412f5d072f419df44aeba94dd409378f446fb452866f97b2c10725f237",
  "2026-10-14": "f190f67ee2742bd07f2fab0f17410583a52da6e99890c6fc1ed4281598511c24",
  "2026-10-15": "b424edd26a45262e940bde5d3a7647faf21c5c8c010866198bd931b0164b83e6",
  "2026-10-16": "d6eac32577558783af49b2ecce4b8c65a0a3d71b6d2cbb74a325521ff0942306",
  "2026-10-17": "ed27cc7269888605136f7a8a7aaaca7212e8b28bb4c812a52034143ad5568f26",
  "2026-10-18": "c4ac3ee44a6fe75aba3d3425b643d29ce058cc52cfd97b5d3cd9347929500b56",
  "2026-10-19": "753f679e0f4a2215f3605f8608d7f418096fbf11d856bc1927f41d0029f32cb6",
  "2026-10-20": "c7b9fe13bd83be6ad1026500ae0a5ef61141d8c33fc3c398146c72436d153c04",
  "2026-10-21": "12e9582ebcecec726ecebbf09073db915f7e7fead88b4853500ef43afaabcdbd",
  "2026-10-22": "ce0de5c187c773e4f5483eee386620ade910d175f7c8c0f254657009f6066985",
  "2026-10-23": "7d59b9977865c85dd188e23cafe7f339b7fa0701a666c52469bf65ceaff47589",
  "2026-10-24": "6353d358d491ca876b5981957b33e80f1bdc3016c643703d721f02e5a2634ec4",
  "2026-10-25": "fc7df0ce36b3a82e39e1f49e5c09c27c2927d26c5315b6146156d448f7e85ee9",
  "2026-10-26": "9d78d3fa1402bf2a0771f328cee69c97be88aeada0fd9fbde6a01077755ac51a",
  "2026-10-27": "d4406daa0b29515850cf1bfcd06f8aefa84600c01ac8fb827f21b530ecb09aef",
  "2026-10-28": "93b1ca3fcb1a6c60d5a2c34f5038b4a359127a330d9558a19c28c6827ad3dc17",
  "2026-10-29": "ff49be889c3662aa7c02bcd0c37c60fffbe707134ce91a542611dd74e49dc6ac",
  "2026-10-30": "11da65ac70451dcf98ace01ca3d38bcc81c6dad8d38f618059cd0defae83c940",
  "2026-10-31": "3934b6e6cee21d849164ba6b7c46c07b193de72711e371accece552042a27e02",
  "2026-11-01": "e60a74f0b93f90c7e7292ba0d611291e363465df4fee43b8e837f95c082448b6",
  "2026-11-02": "1e34ddbe956b7c189129ff0906f85ccf135b710817854d8956b65927e03e66cb",
  "2026-11-03": "c0e1a86764be11fba9a8a70c4366c1acc5ad99ee9359980ed4f18231ec901d13",
  "2026-11-04": "f06604f97c5a931410b17caaf970c459c13cc62f71dbc50f8a4091f349574004",
  "2026-11-05": "4e40252f858ce519eb620d506bae63dbec8eb762f83fc39407aff9f3c372c1a6",
  "2026-11-06": "efc152cb09332f6d1c5a941459ca90a05f6ba59210c50e3b1838051b4f9a337d",
  "2026-11-07": "ed272457cf3db8a1a9a085ae629142a876deff65c2cd099d52de33f3f00fadbb",
  "2026-11-08": "183490d24591e40cc971670806a003f940cb15ebae62f1e3504b6dfab97c3967",
  "2026-11-09": "e76f937d4eaea512d10efb96dd23184c3823214f52448bbac290831e9c8a6bf1",
  "2026-11-10": "058204d38796ae0fceaf09db745876d56dba7a5c5a02625d1fda7dc517b7ab38",
  "2026-11-11": "0a67d495e92ff0a13b9952a9dbf14818d7577ee64674dbbf8c59bb281f563bff"
}

```

## Phụ lục bất định Top 3

Khoảng Wilson 95% với đơn vị là kỳ quay từng đài, không phải từng số. Khoảng mô tả từng công thức; giả định kỳ độc lập, chưa hiệu chỉnh 264 khoảng hoặc phụ thuộc theo thời gian. Không dùng các khoảng này riêng lẻ để chọn công thức thắng.

```json
[{"station":"An Giang","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3104762544729408,0.4405122740853863]},{"station":"An Giang","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"An Giang","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.31501253315768535,0.44537265470032744]},{"station":"An Giang","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3561314093555926,0.4888237121995921]},{"station":"An Giang","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.324104878755863,0.4550736277015214]},{"station":"An Giang","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.39310928222631925,0.5270191137263518]},{"station":"An Giang","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"An Giang","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"An Giang","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"An Giang","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"An Giang","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"An Giang","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"Bình Dương","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Bình Dương","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"Bình Dương","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.33322330673557876,0.46474851832117714]},{"station":"Bình Dương","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.34236748731068045,0.47439765634544706]},{"station":"Bình Dương","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.37457096790350086,0.5079707908504271]},{"station":"Bình Dương","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"Bình Dương","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Bình Dương","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Bình Dương","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Bình Dương","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.01631665827157977,0.06750906000905711]},{"station":"Bình Dương","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.01631665827157977,0.06750906000905711]},{"station":"Bình Dương","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Bình Phước","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3561314093555926,0.4888237121995921]},{"station":"Bình Phước","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.34236748731068045,0.47439765634544706]},{"station":"Bình Phước","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"Bình Phước","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3104762544729408,0.4405122740853863]},{"station":"Bình Phước","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.33322330673557876,0.46474851832117714]},{"station":"Bình Phước","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3014237332448846,0.4307714767140709]},{"station":"Bình Phước","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Bình Phước","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.013222040186037384,0.061207018794913706]},{"station":"Bình Phước","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.01026081627196478,0.05477158340930055]},{"station":"Bình Phước","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Bình Phước","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Bình Phước","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.013222040186037384,0.061207018794913706]},{"station":"Bình Thuận","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3377921971581952,0.4695762871982465]},{"station":"Bình Thuận","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3515371260160294,0.48402133623946964]},{"station":"Bình Thuận","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.34694914147253836,0.47921266148327485]},{"station":"Bình Thuận","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3561314093555926,0.4888237121995921]},{"station":"Bình Thuận","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.3515371260160294,0.48402133623946964]},{"station":"Bình Thuận","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3561314093555926,0.4888237121995921]},{"station":"Bình Thuận","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"Bình Thuận","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Bình Thuận","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Bình Thuận","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Bình Thuận","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Bình Thuận","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Bạc Liêu","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.40241510362018634,0.5365066109318563]},{"station":"Bạc Liêu","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.4070771325494979,0.5412412413022304]},{"station":"Bạc Liêu","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.4682340944152572,0.6022408503323862]},{"station":"Bạc Liêu","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.4257858257636524,0.5601191852868189]},{"station":"Bạc Liêu","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.324104878755863,0.4550736277015214]},{"station":"Bạc Liêu","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3515371260160294,0.48402133623946964]},{"station":"Bạc Liêu","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.04397261173630447,0.11502638094181862]},{"station":"Bạc Liêu","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.04397261173630447,0.11502638094181862]},{"station":"Bạc Liêu","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.04397261173630447,0.11502638094181862]},{"station":"Bạc Liêu","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.04766863107094082,0.12072702090686804]},{"station":"Bạc Liêu","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Bạc Liêu","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Bến Tre","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.31955542361291717,0.45022642354478143]},{"station":"Bến Tre","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.4070771325494979,0.5412412413022304]},{"station":"Bến Tre","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3515371260160294,0.48402133623946964]},{"station":"Bến Tre","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.34236748731068045,0.47439765634544706]},{"station":"Bến Tre","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.3977591496676139,0.5317659055847428]},{"station":"Bến Tre","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Bến Tre","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.01631665827157977,0.06750906000905711]},{"station":"Bến Tre","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Bến Tre","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Bến Tre","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Bến Tre","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.04397261173630447,0.11502638094181862]},{"station":"Bến Tre","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Cà Mau","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"Cà Mau","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.360731961900866,0.49361981895400464]},{"station":"Cà Mau","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.37457096790350086,0.5079707908504271]},{"station":"Cà Mau","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.31501253315768535,0.44537265470032744]},{"station":"Cà Mau","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.3838278614966887,0.5175072158566109]},{"station":"Cà Mau","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3377921971581952,0.4695762871982465]},{"station":"Cà Mau","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Cà Mau","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Cà Mau","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Cà Mau","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Cà Mau","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Cà Mau","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Cần Thơ","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.37457096790350086,0.5079707908504271]},{"station":"Cần Thơ","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3059466371248353,0.4356452321338059]},{"station":"Cần Thơ","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Cần Thơ","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.31955542361291717,0.45022642354478143]},{"station":"Cần Thơ","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.31501253315768535,0.44537265470032744]},{"station":"Cần Thơ","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.34694914147253836,0.47921266148327485]},{"station":"Cần Thơ","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Cần Thơ","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Cần Thơ","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Cần Thơ","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Cần Thơ","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Cần Thơ","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.01631665827157977,0.06750906000905711]},{"station":"Hậu Giang","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Hậu Giang","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.31955542361291717,0.45022642354478143]},{"station":"Hậu Giang","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3699517659650524,0.5031933334891897]},{"station":"Hậu Giang","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3699517659650524,0.5031933334891897]},{"station":"Hậu Giang","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.4070771325494979,0.5412412413022304]},{"station":"Hậu Giang","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3104762544729408,0.4405122740853863]},{"station":"Hậu Giang","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.013222040186037384,0.061207018794913706]},{"station":"Hậu Giang","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.013222040186037384,0.061207018794913706]},{"station":"Hậu Giang","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Hậu Giang","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.0074671168089693075,0.04816862357261023]},{"station":"Hậu Giang","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Hậu Giang","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Kiên Giang","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3059466371248353,0.4356452321338059]},{"station":"Kiên Giang","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3699517659650524,0.5031933334891897]},{"station":"Kiên Giang","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.33322330673557876,0.46474851832117714]},{"station":"Kiên Giang","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.360731961900866,0.49361981895400464]},{"station":"Kiên Giang","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.4304781148226849,0.5648235555274722]},{"station":"Kiên Giang","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.360731961900866,0.49361981895400464]},{"station":"Kiên Giang","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Kiên Giang","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Kiên Giang","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Kiên Giang","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Kiên Giang","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"Kiên Giang","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Long An","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3838278614966887,0.5175072158566109]},{"station":"Long An","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"Long An","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3286608539104437,0.4599143118466264]},{"station":"Long An","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3377921971581952,0.4695762871982465]},{"station":"Long An","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.28789586409210843,0.41610936796778975]},{"station":"Long An","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.38846551452339606,0.5222662221295892]},{"station":"Long An","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Long An","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.013222040186037384,0.061207018794913706]},{"station":"Long An","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Long An","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Long An","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Long An","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"Sóc Trăng","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.4070771325494979,0.5412412413022304]},{"station":"Sóc Trăng","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3059466371248353,0.4356452321338059]},{"station":"Sóc Trăng","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Sóc Trăng","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.4164193775705333,0.5506923148805667]},{"station":"Sóc Trăng","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.31955542361291717,0.45022642354478143]},{"station":"Sóc Trăng","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.4257858257636524,0.5601191852868189]},{"station":"Sóc Trăng","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"Sóc Trăng","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Sóc Trăng","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.05517062919799102,0.1320183413791894]},{"station":"Sóc Trăng","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.05140224754975594,0.12639006372773867]},{"station":"Sóc Trăng","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Sóc Trăng","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"TP. HCM","digits":2,"method":"frequency","n_draws":418,"ci95_rate":[0.41920377078545806,0.5144206038613287]},{"station":"TP. HCM","digits":2,"method":"recent10","n_draws":418,"ci95_rate":[0.36299218056329613,0.4568454077636967]},{"station":"TP. HCM","digits":2,"method":"recent20","n_draws":418,"ci95_rate":[0.3863359674823181,0.48091278181125546]},{"station":"TP. HCM","digits":2,"method":"recent50","n_draws":418,"ci95_rate":[0.3957047521397812,0.4905084615404247]},{"station":"TP. HCM","digits":2,"method":"gap","n_draws":418,"ci95_rate":[0.3863359674823181,0.48091278181125546]},{"station":"TP. HCM","digits":2,"method":"repeat","n_draws":418,"ci95_rate":[0.35601110574520944,0.4496031342918091]},{"station":"TP. HCM","digits":3,"method":"frequency","n_draws":418,"ci95_rate":[0.03309111795669241,0.07557905587158814]},{"station":"TP. HCM","digits":3,"method":"recent10","n_draws":418,"ci95_rate":[0.040835684514248696,0.08679895370066419]},{"station":"TP. HCM","digits":3,"method":"recent20","n_draws":418,"ci95_rate":[0.025544715706706984,0.06416099373494125]},{"station":"TP. HCM","digits":3,"method":"recent50","n_draws":418,"ci95_rate":[0.027409663337618195,0.06703716220068812]},{"station":"TP. HCM","digits":3,"method":"gap","n_draws":418,"ci95_rate":[0.029289739514685532,0.06989820212027886]},{"station":"TP. HCM","digits":3,"method":"repeat","n_draws":418,"ci95_rate":[0.023696118089400316,0.06126847525558984]},{"station":"Tiền Giang","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.28789586409210843,0.41610936796778975]},{"station":"Tiền Giang","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.2923982877740732,0.4210036035855108]},{"station":"Tiền Giang","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3377921971581952,0.4695762871982465]},{"station":"Tiền Giang","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.324104878755863,0.4550736277015214]},{"station":"Tiền Giang","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.3515371260160294,0.48402133623946964]},{"station":"Tiền Giang","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.2969075976175908,0.4258909530416789]},{"station":"Tiền Giang","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Tiền Giang","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Tiền Giang","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Tiền Giang","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Tiền Giang","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.05897130936437589,0.1376143205124903]},{"station":"Tiền Giang","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Trà Vinh","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.34694914147253836,0.47921266148327485]},{"station":"Trà Vinh","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.34694914147253836,0.47921266148327485]},{"station":"Trà Vinh","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"Trà Vinh","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3286608539104437,0.4599143118466264]},{"station":"Trà Vinh","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.31955542361291717,0.45022642354478143]},{"station":"Trà Vinh","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.33322330673557876,0.46474851832117714]},{"station":"Trà Vinh","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Trà Vinh","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Trà Vinh","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Trà Vinh","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.013222040186037384,0.061207018794913706]},{"station":"Trà Vinh","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.013222040186037384,0.061207018794913706]},{"station":"Trà Vinh","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Tây Ninh","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3377921971581952,0.4695762871982465]},{"station":"Tây Ninh","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3104762544729408,0.4405122740853863]},{"station":"Tây Ninh","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.38846551452339606,0.5222662221295892]},{"station":"Tây Ninh","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.38846551452339606,0.5222662221295892]},{"station":"Tây Ninh","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.33322330673557876,0.46474851832117714]},{"station":"Tây Ninh","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3561314093555926,0.4888237121995921]},{"station":"Tây Ninh","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Tây Ninh","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Tây Ninh","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Tây Ninh","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Tây Ninh","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.01631665827157977,0.06750906000905711]},{"station":"Tây Ninh","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.03670702954822099,0.10349864453053054]},{"station":"Vĩnh Long","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3561314093555926,0.4888237121995921]},{"station":"Vĩnh Long","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3561314093555926,0.4888237121995921]},{"station":"Vĩnh Long","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.34694914147253836,0.47921266148327485]},{"station":"Vĩnh Long","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3838278614966887,0.5175072158566109]},{"station":"Vĩnh Long","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.34236748731068045,0.47439765634544706]},{"station":"Vĩnh Long","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.38846551452339606,0.5222662221295892]},{"station":"Vĩnh Long","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Vĩnh Long","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.01631665827157977,0.06750906000905711]},{"station":"Vĩnh Long","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Vĩnh Long","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Vĩnh Long","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.002628148299936312,0.034214273482271684]},{"station":"Vĩnh Long","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Vũng Tàu","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.4257858257636524,0.5601191852868189]},{"station":"Vũng Tàu","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.39310928222631925,0.5270191137263518]},{"station":"Vũng Tàu","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3515371260160294,0.48402133623946964]},{"station":"Vũng Tàu","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3838278614966887,0.5175072158566109]},{"station":"Vũng Tàu","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.360731961900866,0.49361981895400464]},{"station":"Vũng Tàu","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"Vũng Tàu","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Vũng Tàu","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Vũng Tàu","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Vũng Tàu","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Vũng Tàu","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"Vũng Tàu","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"XSMB","digits":2,"method":"frequency","n_draws":1447,"ci95_rate":[0.5319956739606897,0.5831099309516592]},{"station":"XSMB","digits":2,"method":"recent10","n_draws":1447,"ci95_rate":[0.5236787577015684,0.5748847243491254]},{"station":"XSMB","digits":2,"method":"recent20","n_draws":1447,"ci95_rate":[0.5424019531945067,0.5933813052949107]},{"station":"XSMB","digits":2,"method":"recent50","n_draws":1447,"ci95_rate":[0.5271432667722739,0.5783127664707762]},{"station":"XSMB","digits":2,"method":"gap","n_draws":1447,"ci95_rate":[0.5403197929030056,0.591327934870998]},{"station":"XSMB","digits":2,"method":"repeat","n_draws":1447,"ci95_rate":[0.5347695778853202,0.5858500679809134]},{"station":"XSMB","digits":3,"method":"frequency","n_draws":1447,"ci95_rate":[0.06916530354964413,0.0975252572944894]},{"station":"XSMB","digits":3,"method":"recent10","n_draws":1447,"ci95_rate":[0.04526637356997379,0.06904079821225248]},{"station":"XSMB","digits":3,"method":"recent20","n_draws":1447,"ci95_rate":[0.049625678801494946,0.07433106465003002]},{"station":"XSMB","digits":3,"method":"recent50","n_draws":1447,"ci95_rate":[0.05714813191449919,0.08335073439868071]},{"station":"XSMB","digits":3,"method":"gap","n_draws":1447,"ci95_rate":[0.05589041930366402,0.0818514265325734]},{"station":"XSMB","digits":3,"method":"repeat","n_draws":1447,"ci95_rate":[0.06093002372534197,0.08783990401866539]},{"station":"Đà Lạt","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.3977591496676139,0.5317659055847428]},{"station":"Đà Lạt","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.40241510362018634,0.5365066109318563]},{"station":"Đà Lạt","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.40241510362018634,0.5365066109318563]},{"station":"Đà Lạt","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3977591496676139,0.5317659055847428]},{"station":"Đà Lạt","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.33322330673557876,0.46474851832117714]},{"station":"Đà Lạt","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3377921971581952,0.4695762871982465]},{"station":"Đà Lạt","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Đà Lạt","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Đà Lạt","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.01631665827157977,0.06750906000905711]},{"station":"Đà Lạt","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.03314581959582555,0.09766319518324021]},{"station":"Đà Lạt","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.04397261173630447,0.11502638094181862]},{"station":"Đà Lạt","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Đồng Nai","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.324104878755863,0.4550736277015214]},{"station":"Đồng Nai","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3515371260160294,0.48402133623946964]},{"station":"Đồng Nai","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Đồng Nai","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3653387560131343,0.4984096841414221]},{"station":"Đồng Nai","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Đồng Nai","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.33322330673557876,0.46474851832117714]},{"station":"Đồng Nai","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.01026081627196478,0.05477158340930055]},{"station":"Đồng Nai","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.022817713606791745,0.07980132327321669]},{"station":"Đồng Nai","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Đồng Nai","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Đồng Nai","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"Đồng Nai","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.04031746780909781,0.1092848655693395]},{"station":"Đồng Tháp","digits":2,"method":"frequency","n_draws":209,"ci95_rate":[0.37457096790350086,0.5079707908504271]},{"station":"Đồng Tháp","digits":2,"method":"recent10","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Đồng Tháp","digits":2,"method":"recent20","n_draws":209,"ci95_rate":[0.3699517659650524,0.5031933334891897]},{"station":"Đồng Tháp","digits":2,"method":"recent50","n_draws":209,"ci95_rate":[0.3791963398154458,0.5127420782381678]},{"station":"Đồng Tháp","digits":2,"method":"gap","n_draws":209,"ci95_rate":[0.37457096790350086,0.5079707908504271]},{"station":"Đồng Tháp","digits":2,"method":"repeat","n_draws":209,"ci95_rate":[0.3699517659650524,0.5031933334891897]},{"station":"Đồng Tháp","digits":3,"method":"frequency","n_draws":209,"ci95_rate":[0.01631665827157977,0.06750906000905711]},{"station":"Đồng Tháp","digits":3,"method":"recent10","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]},{"station":"Đồng Tháp","digits":3,"method":"recent20","n_draws":209,"ci95_rate":[0.019520969790377506,0.07370140778994513]},{"station":"Đồng Tháp","digits":3,"method":"recent50","n_draws":209,"ci95_rate":[0.02619385086529363,0.08582184531440057]},{"station":"Đồng Tháp","digits":3,"method":"gap","n_draws":209,"ci95_rate":[0.013222040186037384,0.061207018794913706]},{"station":"Đồng Tháp","digits":3,"method":"repeat","n_draws":209,"ci95_rate":[0.029639243082217156,0.09177311239716282]}]
```


## Cập nhật 12/11/2026 — ưu tiên bản ghi mới nhất
# Kiểm tra Site theo từng đài — 12/11/2026

- lastCheck: 2026-11-12T12:07:40.837Z (19:07:40 giờ Việt Nam). errors=[]; POST cập nhật và ba GET thành công.
- Quyền riêng tư/người xem giữ nguyên; không sửa mã hoặc xuất bản. Chỉ thao tác Site appgprj_6af1d8d13b7c8191a45dca193e1823c3; không cập nhật Site Top3 chung trong lượt này.
- 7557 bảng, 1.809 ngày đủ tất cả đàiMN vàMB. Ngày mới đủ:12/11/2026. Không có ngày đã xử lý bị sửa hash. Kiểm tra toàn kho: không trùngđài/ngày, đủ số lượng và độdài, giữ0đầu, phùhợp lịch hiện hành. Đây là kiểm tra bảngphẳng, chưa tái đối chiếu từng HTML giải.
- 20ngày lịch sử thiếuMB vẫn chờ bằng chứng ngàynghỉ; không tự coi nghỉ, không bù số. Không phát hiện khoảng thiếu mới dài.

## Vấn đề cần xử lý: không có bản khóa hôm nay

/api/tracking chỉ có4bản ngày11/11, không có dự báo trướcquay12/11 của AnGiang,BìnhThuận,TâyNinh,XSMB. Đã tính lại48dòng chấm11/11 và khớp endpoint; không cộng lại. Không nhập bản khóa từ Site khác, không tạo lại dự báo hômnay sau kếtquả. Số dự báo thực tế mới chấm=0.

Cần đảm bảo quy trình khóa dự báo Site cũ chạy trước16hMN/18hMB. Lượt này không tự đổi lịch hoặc mã; chưa xác định nguyên nhân thiếu bảnkhóa và không khẳngđịnh endpoint hỏng.

## Tính lại sau kết quả — chỉ hồi cứu

| Đài | Đuôi | frequency | recent10 | recent20 | recent50 | gap | repeat | Brier prior20 | Brier đồng đều |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| An Giang | 2 | 1 | 1 | 1 | 1 | 0 | 1 | 0.13844547 | 0.14112037 |
| An Giang | 3 | 0 | 0 | 0 | 0 | 0 | 1 | 0.01676397 | 0.01671102 |
| Bình Thuận | 2 | 1 | 1 | 0 | 1 | 0 | 1 | 0.14608303 | 0.14781065 |
| Bình Thuận | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0.01679268 | 0.01671102 |
| Tây Ninh | 2 | 0 | 1 | 0 | 1 | 0 | 0 | 0.13366241 | 0.13443010 |
| Tây Ninh | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0.01672064 | 0.01671102 |
| XSMB | 2 | 1 | 0 | 1 | 1 | 0 | 0 | 0.18696923 | 0.18765234 |
| XSMB | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0.02153981 | 0.02151656 |

1=Top3 cóít nhất1số,0=không. Mỗi dòng chỉ một kỳ. Không diễngiải1thành xácsuất100%. Brier ởđây thuộc môhình nghiêncứu p=(hits+20p0)/(n+20), không phải xácsuất đãkhóa trướcquay và không phải xácsuất suy từ điểmhạng.

Lịch sử dùng tất cả kỳ của đúngđài từ10/11/2021 đến trướcngàyđích; sáucôngthức six-methods-v1, pháhòa hits giảm/sốtăng; prior20 giữnguyên. Không dùng kếtquả12/11 làm đặctrưng cho12/11. XSMB27/23vịtrí, MN18/17vịtrí cho2/3số.

MốcTop3 đồngđều lýtưởng:MN2 42,205%,MN3 4,979%,MB2 56,062%,MB3 6,677%. Giảđịnh cácvịtrí độc lậpđồngđều.

Đã cộng8dòng hồi cứu vào tổnghợp năm/đài và bins hiệu chỉnh trong state.json; giữ bảng cũ làm mốc lịch sử. Không tính bất định từ100/1000số như mẫuđộclập; một ngày mới không đủCIổnđịnh, chưa cập nhật kếtluận ưu thế. CIhồicứu đã lưu ngày11/11 là mốcđến11/11, không giả danh đãtínhđến12/11.

## Tiếp nối nghiên cứu

Không mở côngthức mới hoặc tốiưutham số trong lượt này (0thử mới). Tiếp tục đánhgiá prior20 đãđịnhtrước; các giaiđoạn lịch sử đãxem đều làhồicứu. So từngđài vàchuỗithứHai–thứSáu giữ riêng; không suy từ kếtquảTop3chung sangappnày. Chưa chạy lại toàn bộ hai giảthuyết trong lượt này; ưu tiên kiểmtra bảnkhóa và cậpnhật ngày mới.

Đã ghi chỉđạo12/11: cho phép giảthuyết khác thường trong nhánhthămdò, phải địnhtrước côngthức/thamsố/sốthử/tiêuchí, ghi cảthấtbại và kiểmtraâm tính phùhợp. Không quét vôhạn để săn tỷlệđẹp; không áp dụng trước khi anhđồngý. Giữ bộđếm cũ:38so sánhMN và20nhánhMB đãghi; tổngcấu hìnhduynhất qua cácphiên chưa kiểm kêđầyđủ. Không đặtvề0, không nhập thửnghiệmSitekhác như thể đãchạy trên từngđài ởđây.

Kếtluận: lượt cậpnhật dữliệu thànhcông; khâu lưudựbáo thực tế ngày12/11 chưa đầyđủ. Chưa tìmthấy bằngchứng mới để chốt thuậttoán hoặc tăng phầntrămhiểnthị.

## Dấu vân tay ngày mới
2026-11-12: 0102f7dc3d991a5d8369ccaec0c8d94b7afe6ee635f2ba72e5436a65698656e6
Gói nối tiếp: XO_SO_MR_AN_KIEM_TRA_2026_11_12.zip; chứa state.json, audit.json, dữ liệu và mã kiểm toán.

```json
{
  "processed_new_day_hashes": {
    "2026-11-12": "0102f7dc3d991a5d8369ccaec0c8d94b7afe6ee635f2ba72e5436a65698656e6"
  },
  "pending": {
    "2022-01-31": [
      "XSMB"
    ],
    "2022-02-01": [
      "XSMB"
    ],
    "2022-02-02": [
      "XSMB"
    ],
    "2022-02-03": [
      "XSMB"
    ],
    "2023-01-21": [
      "XSMB"
    ],
    "2023-01-22": [
      "XSMB"
    ],
    "2023-01-23": [
      "XSMB"
    ],
    "2023-01-24": [
      "XSMB"
    ],
    "2024-02-09": [
      "XSMB"
    ],
    "2024-02-10": [
      "XSMB"
    ],
    "2024-02-11": [
      "XSMB"
    ],
    "2024-02-12": [
      "XSMB"
    ],
    "2025-01-28": [
      "XSMB"
    ],
    "2025-01-29": [
      "XSMB"
    ],
    "2025-01-30": [
      "XSMB"
    ],
    "2025-01-31": [
      "XSMB"
    ],
    "2026-02-16": [
      "XSMB"
    ],
    "2026-02-17": [
      "XSMB"
    ],
    "2026-02-18": [
      "XSMB"
    ],
    "2026-02-19": [
      "XSMB"
    ]
  },
  "lastCheck": "2026-11-12T12:07:40.837Z",
  "missing_forecasts": [
    [
      "2026-11-12",
      "An Giang"
    ],
    [
      "2026-11-12",
      "Bình Thuận"
    ],
    [
      "2026-11-12",
      "Tây Ninh"
    ],
    [
      "2026-11-12",
      "XSMB"
    ]
  ],
  "new_actual_scores": 0,
  "research_trials_added": 0
}
```


## Cập nhật13/11/2026 — bản ghi mới nhất
# Site cũ — cập nhật và đánh giá ngày13/11/2026

Kiểm tra: 2026-11-13T12:01:27.646Z (19:01:27 giờ Việt Nam). POST /api/update và GET /api/status, /data.json, /api/tracking thành công; errors=[].
Kho có7561bảng. Đủ ngày13/11: Bình Dương, Trà Vinh, Vĩnh Long, XSMB. Kiểm tra toàn kho không trùng đài/ngày, số lượng/độ dài đúng, số0đầu được giữ, lịch đài phù hợp. Kiểm tra bảng phẳng, không tái đối chiếu từng HTML trong lượt này. Không có hash ngày đã xử lý bị sửa; chỉ xử lý ngày13/11. Không phát hiện khoảng thiếu dài mới;20ngày lịch sử thiếuMB giữ trạng thái chờ xác minh như trước.

## Dự báo thực tế
/api/tracking chỉ có4bản ngày11/11. Không có bản khóa trướcquay13/11 cho cả4đài. Dự báo thực tế mới chấm=0. Không nhập bản của Site khác, không tạo lại dự báo sau thấy kết quả. Vấn đề thiếu bản khóa đã ghi ngày12/11 tiếp tục xảy ra; cần xử lý quy trình lưu trước16hMN/18hMB. Không tự đổi lịch/mã trong lượt này.

## Hồi cứu ngày mới — không tính là dự báo thật
| Đài | Đuôi | frequency | recent10 | recent20 | recent50 | gap | repeat | Brier prior20 | Đồng đều |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Bình Dương | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 0.12891839 | 0.12773982 |
| Bình Dương | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0.01687878 | 0.01671102 |
| Trà Vinh | 2 | 1 | 0 | 0 | 1 | 0 | 0 | 0.14734519 | 0.14781065 |
| Trà Vinh | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0.01680618 | 0.01671102 |
| Vĩnh Long | 2 | 1 | 1 | 0 | 0 | 0 | 0 | 0.12651131 | 0.12773982 |
| Vĩnh Long | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0.01582228 | 0.01574475 |
| XSMB | 2 | 1 | 0 | 1 | 1 | 0 | 1 | 0.18187968 | 0.18240549 |
| XSMB | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0.02152063 | 0.02151656 |

1=Top3 có ít nhất1số ra,0=không. Một dòng là một kỳ, không phải phần trăm kỳ tới. Các sốTop3 đầyđủ vàbins nằm trongaudit.json. Sáu côngthức six-methods-v1 giữnguyên; chỉ dùng lịch sử đúngđài từ10/11/2021 đến trước ngàyđích. Mô hình xácsuất nghiên cứu prior20: p=(hits+20p0)/(n+20),p0=1-(1-1/N)^K; không suy xácsuất từ điểmxếphạng. Brier là hồi cứu, không có bản xácsuất đãkhóa trướcquay. Không thay tham số.
MốcTop3 độc lập đồngđều cùng3lựa chọn:MN2=42,205%;MN3=4,979%;MB2=56,062%;MB3=6,677%. Chưa có bằngchứng lợi thế mới; không tăng%hiểnthị.
Đã cộng8dòng mới vào tổnghợp từngnăm/đài, giữ lịch sử cũ; bins cộng theo đúngđài và chếđộ. intervals.json cậpnhật Wilson95 theo sốkỳ của mỗiđài, chỉmô tả, giảđịnhkỳđộc lập và chưahiệu chỉnhnhiều so sánh. Không dùng100/1000số như mẫukỳ độc lập. Một ngày mới chưa đủ cậpnhật kếtluận ưu thế.

## Tiếp nối nghiên cứu
Không mở côngthức hay tốiưu mới (0thử). Giữ các giảthuyết và bộđếm đãghi, gồm38so sánhMN và20nhánhMB; tổngcấu hìnhduynhất chưa kiểm kê đầyđủ. Giảthuyết lạ vẫn phải địnhtrước và có đốichứng/kiểmtraâm tính phùhợp. Không chạy lại hai giảthuyết5năm đãxem tronglượt này; ưu tiên khâu bảnkhóa đang thiếu, chấtlượng và chấm kỳ mới. Không nhập kếtquả từ SiteTop3chung vào thành tích Sitecũ.
Không sửa app/mã/cách tính/quyền/người xem và không xuất bản. Nghiên cứu liên tục chưa hoàn thành; một lần cập nhật dữ liệu không phải điều kiện dừng.

Hash13/11: d3f842478ee9d59b976b1aedb4c01a9cefa91cba81cf95ead0251cb5c945573b
Gói nối tiếp: XO_SO_MR_AN_KIEM_TRA_2026_11_13.zip.

```json
{
  "processed_new_day_hashes": {
    "2026-11-13": "d3f842478ee9d59b976b1aedb4c01a9cefa91cba81cf95ead0251cb5c945573b"
  },
  "lastCheck": "2026-11-13T12:01:27.646Z",
  "pending": {
    "2022-01-31": [
      "XSMB"
    ],
    "2022-02-01": [
      "XSMB"
    ],
    "2022-02-02": [
      "XSMB"
    ],
    "2022-02-03": [
      "XSMB"
    ],
    "2023-01-21": [
      "XSMB"
    ],
    "2023-01-22": [
      "XSMB"
    ],
    "2023-01-23": [
      "XSMB"
    ],
    "2023-01-24": [
      "XSMB"
    ],
    "2024-02-09": [
      "XSMB"
    ],
    "2024-02-10": [
      "XSMB"
    ],
    "2024-02-11": [
      "XSMB"
    ],
    "2024-02-12": [
      "XSMB"
    ],
    "2025-01-28": [
      "XSMB"
    ],
    "2025-01-29": [
      "XSMB"
    ],
    "2025-01-30": [
      "XSMB"
    ],
    "2025-01-31": [
      "XSMB"
    ],
    "2026-02-16": [
      "XSMB"
    ],
    "2026-02-17": [
      "XSMB"
    ],
    "2026-02-18": [
      "XSMB"
    ],
    "2026-02-19": [
      "XSMB"
    ]
  },
  "missing_forecasts": [
    [
      "2026-11-13",
      "Bình Dương"
    ],
    [
      "2026-11-13",
      "Trà Vinh"
    ],
    [
      "2026-11-13",
      "Vĩnh Long"
    ],
    [
      "2026-11-13",
      "XSMB"
    ]
  ],
  "new_actual_scores": 0,
  "research_trials_added": 0
}
```


## 16/11/2026 — Cập nhật và đánh giá Site theo từng đài
Đã xác nhận quyền custom hiện hành, không thay quyền/mã/lịch. POST update và GET status/data/tracking HTTP200; errors rỗng. 7.574 bảng đủ phân bố độ dài, không trùng khóa, lịch đài hợp lệ. Ngày14,15,16/11 đủ mọi đài MN và XSMB. Hash các ngày đã xử lý khớp, chỉ thêm3ngày. Kiểm tra bảng JSON chưa thay đối chiếu từng vị trí HTML.
13kỳ đài mới không có bản dự báo trước quay. 26dòng đài/chế độ dưới đây là hồi cứu tiếp nối sáu công thức gốc và prior20 đã định trước, dùng toàn bộ lịch sử trước kỳ đích, không tối ưu tham số. Các bản khóa cũ vẫn khớp kết quả endpoint. Chưa có thêm bằng chứng dự báo tương lai. Mỗi đài chỉ1–3kỳ nên không suy luận lợi thế từ phần tăng thêm; khoảng bất định hồi cứu dài hạn ở phần trước vẫn là đánh giá đã xem.
Tiếp tục giữ hai giả thuyết theo đài và chuỗi MN T2–T6; không dùng XSMB cho giả thuyết2. Chấp nhận nhánh giả thuyết khác thường theo chỉ đạo12/11, phải định trước và ghi cả thất bại. Lượt này không thêm công thức/thử nghiệm; bộ đếm tích lũy giữ nguyên. Việc tiếp: cần lượt mở/cập nhật trước16hMN/18hMB để có dự báo thực tế. Lượt19h không thể tạo bù các bản đã qua giờ quay. Cần duy trì phân tích chất lượng và nghiên cứu, không dừng nhiệm vụ.

```json
{
  "processed_new_day_hashes": {
    "2026-11-14": "659624c82068e5722366cfe08e15b87ed8d95187e57c8218912171e0f477ab45",
    "2026-11-15": "1374c005eb299a202abe7f1bd59d30b0ea5ddf63a9567f3e632d0b0df1b55648",
    "2026-11-16": "8b7bea311f4995709b268f42a430b07545d58b839879c2d1d6e5894bbc922a61"
  },
  "lastCheck": "2026-11-16T12:04:20.545Z",
  "pending": {
    "2022-01-31": [
      "XSMB"
    ],
    "2022-02-01": [
      "XSMB"
    ],
    "2022-02-02": [
      "XSMB"
    ],
    "2022-02-03": [
      "XSMB"
    ],
    "2023-01-21": [
      "XSMB"
    ],
    "2023-01-22": [
      "XSMB"
    ],
    "2023-01-23": [
      "XSMB"
    ],
    "2023-01-24": [
      "XSMB"
    ],
    "2024-02-09": [
      "XSMB"
    ],
    "2024-02-10": [
      "XSMB"
    ],
    "2024-02-11": [
      "XSMB"
    ],
    "2024-02-12": [
      "XSMB"
    ],
    "2025-01-28": [
      "XSMB"
    ],
    "2025-01-29": [
      "XSMB"
    ],
    "2025-01-30": [
      "XSMB"
    ],
    "2025-01-31": [
      "XSMB"
    ],
    "2026-02-16": [
      "XSMB"
    ],
    "2026-02-17": [
      "XSMB"
    ],
    "2026-02-18": [
      "XSMB"
    ],
    "2026-02-19": [
      "XSMB"
    ]
  },
  "missing_forecasts": [
    [
      "2026-11-14",
      "Bình Phước"
    ],
    [
      "2026-11-14",
      "Hậu Giang"
    ],
    [
      "2026-11-14",
      "Long An"
    ],
    [
      "2026-11-14",
      "TP. HCM"
    ],
    [
      "2026-11-14",
      "XSMB"
    ],
    [
      "2026-11-15",
      "Đà Lạt"
    ],
    [
      "2026-11-15",
      "Kiên Giang"
    ],
    [
      "2026-11-15",
      "Tiền Giang"
    ],
    [
      "2026-11-15",
      "XSMB"
    ],
    [
      "2026-11-16",
      "Cà Mau"
    ],
    [
      "2026-11-16",
      "Đồng Tháp"
    ],
    [
      "2026-11-16",
      "TP. HCM"
    ],
    [
      "2026-11-16",
      "XSMB"
    ]
  ],
  "new_actual_scores": 0,
  "research_trials_added": 0,
  "retrospective": [
    {
      "date": "2026-11-14",
      "station": "Bình Phước",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "68",
          "04",
          "50"
        ],
        "recent10": [
          "69",
          "83",
          "64"
        ],
        "recent20": [
          "69",
          "88",
          "52"
        ],
        "recent50": [
          "52",
          "83",
          "50"
        ],
        "gap": [
          "09",
          "10",
          "46"
        ],
        "repeat": [
          "19",
          "75",
          "52"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 1
      },
      "brier": 0.1355529483093282,
      "uniform_brier": 0.13443009881342655,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          90,
          14.394573770070615,
          15.0
        ],
        [
          10,
          2.0893140487899733,
          1.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "Bình Phước",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "091",
          "275",
          "041"
        ],
        "recent10": [
          "275",
          "606",
          "730"
        ],
        "recent20": [
          "275",
          "084",
          "452"
        ],
        "recent50": [
          "275",
          "526",
          "377"
        ],
        "gap": [
          "041",
          "079",
          "804"
        ],
        "repeat": [
          "275",
          "452",
          "465"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.01679795273553262,
      "uniform_brier": 0.016711018312144856,
      "bins": [
        [
          1000,
          16.872930791898618,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "Hậu Giang",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "68",
          "16",
          "57"
        ],
        "recent10": [
          "80",
          "50",
          "94"
        ],
        "recent20": [
          "95",
          "50",
          "80"
        ],
        "recent50": [
          "68",
          "51",
          "16"
        ],
        "gap": [
          "33",
          "97",
          "67"
        ],
        "repeat": [
          "88",
          "68",
          "06"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.13359392354864583,
      "uniform_brier": 0.13443009881342655,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          91,
          14.730195566408685,
          15.0
        ],
        [
          9,
          1.8533363805657803,
          1.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "Hậu Giang",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "499",
          "822",
          "005"
        ],
        "recent10": [
          "595",
          "888",
          "959"
        ],
        "recent20": [
          "595",
          "079",
          "741"
        ],
        "recent50": [
          "595",
          "499",
          "568"
        ],
        "gap": [
          "360",
          "820",
          "870"
        ],
        "repeat": [
          "888",
          "145",
          "373"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.016619547303940496,
      "uniform_brier": 0.016711018312144856,
      "bins": [
        [
          1000,
          16.84090232214773,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "Long An",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "33",
          "14",
          "72"
        ],
        "recent10": [
          "13",
          "14",
          "50"
        ],
        "recent20": [
          "13",
          "31",
          "54"
        ],
        "recent50": [
          "60",
          "83",
          "18"
        ],
        "gap": [
          "72",
          "80",
          "77"
        ],
        "repeat": [
          "07",
          "24",
          "61"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 1,
        "recent20": 1,
        "recent50": 0,
        "gap": 1,
        "repeat": 0
      },
      "brier": 0.14438535854919748,
      "uniform_brier": 0.14781064927143006,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          94,
          15.327808286383757,
          16.0
        ],
        [
          6,
          1.2521649417295002,
          2.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "Long An",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "554",
          "707",
          "218"
        ],
        "recent10": [
          "356",
          "424",
          "611"
        ],
        "recent20": [
          "424",
          "160",
          "731"
        ],
        "recent50": [
          "014",
          "731",
          "089"
        ],
        "gap": [
          "218",
          "412",
          "772"
        ],
        "repeat": [
          "424",
          "611",
          "861"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.0166945086615894,
      "uniform_brier": 0.01671101831214486,
      "bins": [
        [
          1000,
          16.85157847873136,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM",
      "digits": 2,
      "n": 522,
      "top3": {
        "frequency": [
          "42",
          "78",
          "94"
        ],
        "recent10": [
          "85",
          "87",
          "37"
        ],
        "recent20": [
          "85",
          "31",
          "36"
        ],
        "recent50": [
          "22",
          "85",
          "37"
        ],
        "gap": [
          "94",
          "26",
          "64"
        ],
        "repeat": [
          "52",
          "40",
          "32"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 1,
        "recent20": 1,
        "recent50": 1,
        "gap": 1,
        "repeat": 0
      },
      "brier": 0.13702051948298186,
      "uniform_brier": 0.13443009881342655,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          97,
          15.856168455326253,
          16.0
        ],
        [
          3,
          0.6179505061125363,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "TP. HCM",
      "digits": 3,
      "n": 522,
      "top3": {
        "frequency": [
          "773",
          "044",
          "494"
        ],
        "recent10": [
          "765",
          "725",
          "987"
        ],
        "recent20": [
          "393",
          "285",
          "765"
        ],
        "recent50": [
          "986",
          "037",
          "285"
        ],
        "gap": [
          "773",
          "044",
          "494"
        ],
        "repeat": [
          "520",
          "412",
          "652"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.01575500067756689,
      "uniform_brier": 0.015744747667397203,
      "bins": [
        [
          1000,
          16.83633496775556,
          16.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 2,
      "n": 1810,
      "top3": {
        "frequency": [
          "92",
          "13",
          "91"
        ],
        "recent10": [
          "53",
          "04",
          "92"
        ],
        "recent20": [
          "24",
          "34",
          "53"
        ],
        "recent50": [
          "53",
          "34",
          "75"
        ],
        "gap": [
          "15",
          "21",
          "66"
        ],
        "repeat": [
          "12",
          "99",
          "00"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 1,
        "recent50": 1,
        "gap": 1,
        "repeat": 1
      },
      "brier": 0.18831754087954045,
      "uniform_brier": 0.1876523425974542,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          100,
          23.785417798527753,
          25.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.5606234998261617,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-14",
      "station": "XSMB",
      "digits": 3,
      "n": 1810,
      "top3": {
        "frequency": [
          "592",
          "662",
          "572"
        ],
        "recent10": [
          "434",
          "479",
          "190"
        ],
        "recent20": [
          "434",
          "724",
          "452"
        ],
        "recent50": [
          "434",
          "724",
          "492"
        ],
        "gap": [
          "592",
          "662",
          "294"
        ],
        "repeat": [
          "712",
          "479",
          "562"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.022500995209614936,
      "uniform_brier": 0.022471063120442926,
      "bins": [
        [
          1000,
          22.751899040202712,
          23.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.06677010784864967,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-15",
      "station": "Đà Lạt",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "30",
          "31",
          "11"
        ],
        "recent10": [
          "65",
          "59",
          "17"
        ],
        "recent20": [
          "65",
          "59",
          "17"
        ],
        "recent50": [
          "65",
          "17",
          "52"
        ],
        "gap": [
          "15",
          "51",
          "64"
        ],
        "repeat": [
          "80",
          "30",
          "40"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.13417106076967802,
      "uniform_brier": 0.13443009881342655,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          93,
          15.056243429547463,
          15.0
        ],
        [
          7,
          1.4418792647579637,
          1.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-15",
      "station": "Đà Lạt",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "906",
          "588",
          "669"
        ],
        "recent10": [
          "524",
          "748",
          "089"
        ],
        "recent20": [
          "838",
          "748",
          "074"
        ],
        "recent50": [
          "838",
          "428",
          "339"
        ],
        "gap": [
          "906",
          "588",
          "764"
        ],
        "repeat": [
          "524",
          "846",
          "293"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 1,
        "recent50": 1,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.016750304840839104,
      "uniform_brier": 0.01671101831214486,
      "bins": [
        [
          1000,
          16.876489510759832,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-15",
      "station": "Kiên Giang",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "80",
          "71",
          "37"
        ],
        "recent10": [
          "79",
          "80",
          "50"
        ],
        "recent20": [
          "78",
          "80",
          "37"
        ],
        "recent50": [
          "12",
          "37",
          "96"
        ],
        "gap": [
          "74",
          "30",
          "24"
        ],
        "repeat": [
          "52",
          "80",
          "44"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 1,
        "repeat": 0
      },
      "brier": 0.14015227672006808,
      "uniform_brier": 0.1411203740424283,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          96,
          15.785528747387303,
          17.0
        ],
        [
          4,
          0.8122380750320035,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-15",
      "station": "Kiên Giang",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "971",
          "374",
          "935"
        ],
        "recent10": [
          "155",
          "078",
          "249"
        ],
        "recent20": [
          "155",
          "344",
          "942"
        ],
        "recent50": [
          "935",
          "590",
          "658"
        ],
        "gap": [
          "971",
          "374",
          "086"
        ],
        "repeat": [
          "480",
          "152",
          "048"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 1,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.016840978395975245,
      "uniform_brier": 0.016711018312144856,
      "bins": [
        [
          1000,
          16.88004822962104,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "52",
          "71",
          "15"
        ],
        "recent10": [
          "85",
          "43",
          "89"
        ],
        "recent20": [
          "85",
          "96",
          "89"
        ],
        "recent50": [
          "96",
          "64",
          "86"
        ],
        "gap": [
          "02",
          "76",
          "94"
        ],
        "repeat": [
          "62",
          "45",
          "63"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 1,
        "recent50": 1,
        "gap": 0,
        "repeat": 1
      },
      "brier": 0.13387499092960534,
      "uniform_brier": 0.13443009881342655,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          96,
          15.799763622832142,
          15.0
        ],
        [
          4,
          0.8086793561707936,
          1.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-15",
      "station": "Tiền Giang",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "568",
          "561",
          "687"
        ],
        "recent10": [
          "443",
          "077",
          "156"
        ],
        "recent20": [
          "401",
          "443",
          "796"
        ],
        "recent50": [
          "077",
          "223",
          "401"
        ],
        "gap": [
          "561",
          "943",
          "959"
        ],
        "repeat": [
          "004",
          "074",
          "628"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.016751782162881496,
      "uniform_brier": 0.016711018312144856,
      "bins": [
        [
          1000,
          16.86937207303741,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 2,
      "n": 1811,
      "top3": {
        "frequency": [
          "92",
          "13",
          "91"
        ],
        "recent10": [
          "53",
          "12",
          "34"
        ],
        "recent20": [
          "34",
          "24",
          "53"
        ],
        "recent50": [
          "34",
          "53",
          "75"
        ],
        "gap": [
          "66",
          "21",
          "42"
        ],
        "repeat": [
          "90",
          "48",
          "91"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 1,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.1786690392936974,
      "uniform_brier": 0.1771586340235701,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          100,
          23.78608114216591,
          23.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.5606234998261617,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-15",
      "station": "XSMB",
      "digits": 3,
      "n": 1811,
      "top3": {
        "frequency": [
          "592",
          "662",
          "572"
        ],
        "recent10": [
          "434",
          "479",
          "190"
        ],
        "recent20": [
          "517",
          "434",
          "724"
        ],
        "recent50": [
          "434",
          "724",
          "697"
        ],
        "gap": [
          "592",
          "662",
          "964"
        ],
        "repeat": [
          "620",
          "916",
          "556"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 1,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.022476424100107188,
      "uniform_brier": 0.022471063120442933,
      "bins": [
        [
          1000,
          22.75203454045383,
          23.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.06677010784864967,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-16",
      "station": "Cà Mau",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "39",
          "83",
          "56"
        ],
        "recent10": [
          "65",
          "51",
          "04"
        ],
        "recent20": [
          "04",
          "06",
          "51"
        ],
        "recent50": [
          "91",
          "32",
          "82"
        ],
        "gap": [
          "11",
          "29",
          "36"
        ],
        "repeat": [
          "39",
          "92",
          "06"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 1,
        "gap": 1,
        "repeat": 1
      },
      "brier": 0.14300468977405323,
      "uniform_brier": 0.1411203740424283,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          95,
          15.439230794465601,
          16.0
        ],
        [
          5,
          1.0375395866725667,
          1.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-16",
      "station": "Cà Mau",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "468",
          "187",
          "666"
        ],
        "recent10": [
          "217",
          "310",
          "581"
        ],
        "recent20": [
          "187",
          "581",
          "848"
        ],
        "recent50": [
          "217",
          "591",
          "468"
        ],
        "gap": [
          "782",
          "904",
          "039"
        ],
        "repeat": [
          "246",
          "375",
          "908"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 1,
        "repeat": 0
      },
      "brier": 0.01666403792287029,
      "uniform_brier": 0.01671101831214486,
      "bins": [
        [
          1000,
          16.85157847873136,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-16",
      "station": "Đồng Tháp",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "92",
          "50",
          "68"
        ],
        "recent10": [
          "92",
          "33",
          "21"
        ],
        "recent20": [
          "80",
          "99",
          "52"
        ],
        "recent50": [
          "80",
          "52",
          "50"
        ],
        "gap": [
          "68",
          "67",
          "76"
        ],
        "repeat": [
          "11",
          "50",
          "52"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 1,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.14179311244096848,
      "uniform_brier": 0.14112037404242833,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          94,
          15.466598321970945,
          17.0
        ],
        [
          6,
          1.2414887851458702,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-16",
      "station": "Đồng Tháp",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "175",
          "543",
          "592"
        ],
        "recent10": [
          "063",
          "680",
          "294"
        ],
        "recent20": [
          "680",
          "163",
          "980"
        ],
        "recent50": [
          "680",
          "162",
          "284"
        ],
        "gap": [
          "543",
          "592",
          "901"
        ],
        "repeat": [
          "252",
          "311",
          "462"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.01672150169228608,
      "uniform_brier": 0.016711018312144856,
      "bins": [
        [
          1000,
          16.88004822962104,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM",
      "digits": 2,
      "n": 523,
      "top3": {
        "frequency": [
          "42",
          "78",
          "94"
        ],
        "recent10": [
          "85",
          "87",
          "37"
        ],
        "recent20": [
          "85",
          "36",
          "87"
        ],
        "recent50": [
          "85",
          "22",
          "53"
        ],
        "gap": [
          "94",
          "64",
          "06"
        ],
        "repeat": [
          "85",
          "96",
          "26"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 1,
        "gap": 0,
        "repeat": 1
      },
      "brier": 0.14098003477843116,
      "uniform_brier": 0.1411203740424283,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          97,
          15.856433338465617,
          17.0
        ],
        [
          3,
          0.6168124757145391,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-16",
      "station": "TP. HCM",
      "digits": 3,
      "n": 523,
      "top3": {
        "frequency": [
          "773",
          "044",
          "494"
        ],
        "recent10": [
          "485",
          "987",
          "056"
        ],
        "recent20": [
          "393",
          "765",
          "986"
        ],
        "recent50": [
          "986",
          "037",
          "662"
        ],
        "gap": [
          "773",
          "044",
          "494"
        ],
        "repeat": [
          "485",
          "426",
          "662"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 1,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.015708074367031123,
      "uniform_brier": 0.015744747667397207,
      "bins": [
        [
          1000,
          16.83479475602857,
          16.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 2,
      "n": 1812,
      "top3": {
        "frequency": [
          "92",
          "13",
          "91"
        ],
        "recent10": [
          "12",
          "72",
          "26"
        ],
        "recent20": [
          "34",
          "24",
          "53"
        ],
        "recent50": [
          "34",
          "53",
          "75"
        ],
        "gap": [
          "66",
          "21",
          "42"
        ],
        "repeat": [
          "25",
          "83",
          "23"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 1,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 1
      },
      "brier": 0.18282171207422113,
      "uniform_brier": 0.18240548831051215,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          100,
          23.78565205857303,
          24.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.5606234998261617,
      "type": "retrospective_not_locked"
    },
    {
      "date": "2026-11-16",
      "station": "XSMB",
      "digits": 3,
      "n": 1812,
      "top3": {
        "frequency": [
          "592",
          "662",
          "697"
        ],
        "recent10": [
          "697",
          "479",
          "190"
        ],
        "recent20": [
          "517",
          "434",
          "724"
        ],
        "recent50": [
          "434",
          "697",
          "724"
        ],
        "gap": [
          "592",
          "662",
          "964"
        ],
        "repeat": [
          "697",
          "438",
          "645"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.022432242561128055,
      "uniform_brier": 0.022471063120442926,
      "bins": [
        [
          1000,
          22.75216989277891,
          23.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.06677010784864967,
      "type": "retrospective_not_locked"
    }
  ],
  "increment_summary": [
    {
      "station": "Bình Phước",
      "digits": 2,
      "n": 1,
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 1
      },
      "brier_prior20": 0.1355529483093282,
      "brier_uniform": 0.13443009881342655,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Bình Phước",
      "digits": 3,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.01679795273553262,
      "brier_uniform": 0.016711018312144856,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Cà Mau",
      "digits": 2,
      "n": 1,
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 1,
        "gap": 1,
        "repeat": 1
      },
      "brier_prior20": 0.14300468977405323,
      "brier_uniform": 0.1411203740424283,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Cà Mau",
      "digits": 3,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 1,
        "repeat": 0
      },
      "brier_prior20": 0.01666403792287029,
      "brier_uniform": 0.01671101831214486,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Hậu Giang",
      "digits": 2,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.13359392354864583,
      "brier_uniform": 0.13443009881342655,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Hậu Giang",
      "digits": 3,
      "n": 1,
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.016619547303940496,
      "brier_uniform": 0.016711018312144856,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Kiên Giang",
      "digits": 2,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 1,
        "repeat": 0
      },
      "brier_prior20": 0.14015227672006808,
      "brier_uniform": 0.1411203740424283,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Kiên Giang",
      "digits": 3,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 1,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.016840978395975245,
      "brier_uniform": 0.016711018312144856,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Long An",
      "digits": 2,
      "n": 1,
      "hits": {
        "frequency": 1,
        "recent10": 1,
        "recent20": 1,
        "recent50": 0,
        "gap": 1,
        "repeat": 0
      },
      "brier_prior20": 0.14438535854919748,
      "brier_uniform": 0.14781064927143006,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Long An",
      "digits": 3,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.0166945086615894,
      "brier_uniform": 0.01671101831214486,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "TP. HCM",
      "digits": 2,
      "n": 2,
      "hits": {
        "frequency": 0,
        "recent10": 1,
        "recent20": 1,
        "recent50": 2,
        "gap": 1,
        "repeat": 1
      },
      "brier_prior20": 0.1390002771307065,
      "brier_uniform": 0.13777523642792744,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "TP. HCM",
      "digits": 3,
      "n": 2,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 1,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.015731537522299006,
      "brier_uniform": 0.015744747667397203,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Tiền Giang",
      "digits": 2,
      "n": 1,
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 1,
        "recent50": 1,
        "gap": 0,
        "repeat": 1
      },
      "brier_prior20": 0.13387499092960534,
      "brier_uniform": 0.13443009881342655,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Tiền Giang",
      "digits": 3,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.016751782162881496,
      "brier_uniform": 0.016711018312144856,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "XSMB",
      "digits": 2,
      "n": 3,
      "hits": {
        "frequency": 2,
        "recent10": 2,
        "recent20": 1,
        "recent50": 1,
        "gap": 1,
        "repeat": 2
      },
      "brier_prior20": 0.183269430749153,
      "brier_uniform": 0.18240548831051215,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "XSMB",
      "digits": 3,
      "n": 3,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 1,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.022469887290283392,
      "brier_uniform": 0.02247106312044293,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Đà Lạt",
      "digits": 2,
      "n": 1,
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.13417106076967802,
      "brier_uniform": 0.13443009881342655,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Đà Lạt",
      "digits": 3,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 1,
        "recent50": 1,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.016750304840839104,
      "brier_uniform": 0.01671101831214486,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Đồng Tháp",
      "digits": 2,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 1,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.14179311244096848,
      "brier_uniform": 0.14112037404242833,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    },
    {
      "station": "Đồng Tháp",
      "digits": 3,
      "n": 1,
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier_prior20": 0.01672150169228608,
      "brier_uniform": 0.016711018312144856,
      "uncertainty": "Only 1–3 target draws per station; insufficient to establish improvement."
    }
  ]
}
```


## 17/11/2026 — Site cũ, cập nhật và kiểm toán theo từng đài
lastCheck=2026-11-17T12:04:13.617Z; errors=[]. Kho 7578 bảng. Ngày mới đủ: ['2026-11-17']; ngày sửa: []. Quyền custom revision2 giữ nguyên. Không sửa mã, xuất bản, thay người xem hay lịch. Top3 chung vẫn tạm ngưng, không thao tác Site mới.
Kiểm tra toàn kho: số lượng và phân bố độ dài các giải, chuỗi chữ số/0 đầu, trùng khóa và lịch hiện hành đạt. Đây là kiểm toán JSON phẳng, không thay kiểm tra từng vị trí giải trong HTML; lịch sử thiếu MB vẫn chờ chứng cứ, không tự coi là nghỉ. Hash dùng mapping đài→numbers, JSON sort_keys=True ensure_ascii=False, SHA256; ngày không đổi không cộng chấm lại.
Có 4 kỳ đài mới không có dự báo hợp lệ trước quay; 0 dòng chấm mới thực tế. Các bản khóa cũ kiểm tra vẫn khớp endpoint. Không tạo bản khóa lùi thời gian. Vấn đề thiếu bản khóa đã báo trước, chưa giải quyết trong lượt này.
Hồi cứu tiếp nối six-methods-v1 và xác suất nghiên cứu prior20, giữ tham số: p=(H+20p0)/(n+20), p0=1-(1-1/N)^K. Sáu điểm hạng không phải xác suất. Lịch sử đúng đài chỉ trước kỳ đích; giữ cả sáu kết quả và 2/3 số, bins hiệu chỉnh và Brier riêng. Không chọn lại công thức theo ngày đẹp, không cộng hồi cứu vào dự báo tương lai. Mốc Top3 độc lập đồng đều 1-(1-3/N)^K, cùng số giải và ba lựa chọn.
Không thêm giả thuyết/tham số/lần thử; giữ bộ đếm và cả thất bại đã lưu. Hai giả thuyết5năm theo đài và chuỗi MN T2–T6 không chạy lại trong lượt này; giai đoạn đã xem vẫn là hồi cứu. Chưa có bằng chứng mới để đề xuất thay thuật toán. Một kỳ/đài không đủ ước lượng bất định ổn định; không tính hàng trăm số thành mẫu độc lập. Việc tiếp: tích lũy bản khóa hợp lệ, xác minh kỳ thiếu; giữ giới hạn nghiên cứu và cần đồng ý trước áp dụng.

```json
{
  "processed_new_day_hashes": {
    "2026-11-17": "1cfe276b0bc2bf303eead68ed7906d2f65f24cabb5c7a59550a286c27e9a8e70"
  },
  "lastCheck": "2026-11-17T12:04:13.617Z",
  "errors": [],
  "pending": {
    "2022-01-31": [
      "XSMB"
    ],
    "2022-02-01": [
      "XSMB"
    ],
    "2022-02-02": [
      "XSMB"
    ],
    "2022-02-03": [
      "XSMB"
    ],
    "2023-01-21": [
      "XSMB"
    ],
    "2023-01-22": [
      "XSMB"
    ],
    "2023-01-23": [
      "XSMB"
    ],
    "2023-01-24": [
      "XSMB"
    ],
    "2024-02-09": [
      "XSMB"
    ],
    "2024-02-10": [
      "XSMB"
    ],
    "2024-02-11": [
      "XSMB"
    ],
    "2024-02-12": [
      "XSMB"
    ],
    "2025-01-28": [
      "XSMB"
    ],
    "2025-01-29": [
      "XSMB"
    ],
    "2025-01-30": [
      "XSMB"
    ],
    "2025-01-31": [
      "XSMB"
    ],
    "2026-02-16": [
      "XSMB"
    ],
    "2026-02-17": [
      "XSMB"
    ],
    "2026-02-18": [
      "XSMB"
    ],
    "2026-02-19": [
      "XSMB"
    ]
  },
  "missing_forecasts": [
    [
      "2026-11-17",
      "Bạc Liêu"
    ],
    [
      "2026-11-17",
      "Bến Tre"
    ],
    [
      "2026-11-17",
      "Vũng Tàu"
    ],
    [
      "2026-11-17",
      "XSMB"
    ]
  ],
  "new_actual_scores": [],
  "research_trials_added": 0,
  "retrospective": [
    {
      "date": "2026-11-17",
      "station": "Bạc Liêu",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "05",
          "40",
          "45"
        ],
        "recent10": [
          "80",
          "21",
          "02"
        ],
        "recent20": [
          "92",
          "10",
          "01"
        ],
        "recent50": [
          "50",
          "82",
          "01"
        ],
        "gap": [
          "18",
          "52",
          "40"
        ],
        "repeat": [
          "45",
          "48",
          "82"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 1,
        "repeat": 1
      },
      "brier": 0.1455093860304229,
      "uniform_brier": 0.14781064927143006,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          93,
          15.123859087910452,
          15.0
        ],
        [
          7,
          1.4988187665373232,
          3.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked",
      "uncertainty": "Một kỳ mới/đài; chưa đủ để kết luận lợi thế. Các số trong kỳ không phải mẫu độc lập."
    },
    {
      "date": "2026-11-17",
      "station": "Bạc Liêu",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "440",
          "950",
          "478"
        ],
        "recent10": [
          "311",
          "497",
          "160"
        ],
        "recent20": [
          "600",
          "146",
          "311"
        ],
        "recent50": [
          "950",
          "034",
          "600"
        ],
        "gap": [
          "950",
          "440",
          "755"
        ],
        "repeat": [
          "034",
          "497",
          "545"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.016716457108087616,
      "uniform_brier": 0.01671101831214486,
      "bins": [
        [
          1000,
          16.883606948482253,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked",
      "uncertainty": "Một kỳ mới/đài; chưa đủ để kết luận lợi thế. Các số trong kỳ không phải mẫu độc lập."
    },
    {
      "date": "2026-11-17",
      "station": "Bến Tre",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "67",
          "68",
          "20"
        ],
        "recent10": [
          "65",
          "64",
          "04"
        ],
        "recent20": [
          "78",
          "29",
          "39"
        ],
        "recent50": [
          "64",
          "50",
          "07"
        ],
        "gap": [
          "66",
          "91",
          "16"
        ],
        "repeat": [
          "17",
          "67",
          "90"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 1,
        "recent20": 1,
        "recent50": 1,
        "gap": 0,
        "repeat": 1
      },
      "brier": 0.13234767500578118,
      "uniform_brier": 0.13443009881342652,
      "bins": [
        [
          3,
          0.2880041790498034,
          0.0
        ],
        [
          86,
          13.788741388988786,
          13.0
        ],
        [
          11,
          2.2683522152348066,
          3.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked",
      "uncertainty": "Một kỳ mới/đài; chưa đủ để kết luận lợi thế. Các số trong kỳ không phải mẫu độc lập."
    },
    {
      "date": "2026-11-17",
      "station": "Bến Tre",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "454",
          "063",
          "225"
        ],
        "recent10": [
          "092",
          "468",
          "309"
        ],
        "recent20": [
          "459",
          "092",
          "329"
        ],
        "recent50": [
          "092",
          "678",
          "920"
        ],
        "gap": [
          "368",
          "426",
          "360"
        ],
        "repeat": [
          "717",
          "758",
          "694"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.016757686126167223,
      "uniform_brier": 0.016711018312144856,
      "bins": [
        [
          1000,
          16.801756414674422,
          17.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked",
      "uncertainty": "Một kỳ mới/đài; chưa đủ để kết luận lợi thế. Các số trong kỳ không phải mẫu độc lập."
    },
    {
      "date": "2026-11-17",
      "station": "Vũng Tàu",
      "digits": 2,
      "n": 261,
      "top3": {
        "frequency": [
          "01",
          "95",
          "36"
        ],
        "recent10": [
          "92",
          "73",
          "25"
        ],
        "recent20": [
          "92",
          "25",
          "66"
        ],
        "recent50": [
          "92",
          "73",
          "25"
        ],
        "gap": [
          "48",
          "93",
          "74"
        ],
        "repeat": [
          "95",
          "29",
          "13"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.144279810124374,
      "uniform_brier": 0.14112037404242828,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          95,
          15.42143720015955,
          16.0
        ],
        [
          5,
          1.0695680564234564,
          1.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.42204873745695926,
      "type": "retrospective_not_locked",
      "uncertainty": "Một kỳ mới/đài; chưa đủ để kết luận lợi thế. Các số trong kỳ không phải mẫu độc lập."
    },
    {
      "date": "2026-11-17",
      "station": "Vũng Tàu",
      "digits": 3,
      "n": 261,
      "top3": {
        "frequency": [
          "101",
          "148",
          "210"
        ],
        "recent10": [
          "992",
          "011",
          "006"
        ],
        "recent20": [
          "011",
          "154",
          "992"
        ],
        "recent50": [
          "445",
          "501",
          "095"
        ],
        "gap": [
          "101",
          "385",
          "729"
        ],
        "repeat": [
          "445",
          "095",
          "851"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.01581266739706696,
      "uniform_brier": 0.015744747667397207,
      "bins": [
        [
          1000,
          16.86937207303741,
          16.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.04979416871470432,
      "type": "retrospective_not_locked",
      "uncertainty": "Một kỳ mới/đài; chưa đủ để kết luận lợi thế. Các số trong kỳ không phải mẫu độc lập."
    },
    {
      "date": "2026-11-17",
      "station": "XSMB",
      "digits": 2,
      "n": 1813,
      "top3": {
        "frequency": [
          "92",
          "13",
          "91"
        ],
        "recent10": [
          "12",
          "26",
          "04"
        ],
        "recent20": [
          "26",
          "34",
          "24"
        ],
        "recent50": [
          "53",
          "34",
          "75"
        ],
        "gap": [
          "66",
          "21",
          "42"
        ],
        "repeat": [
          "32",
          "06",
          "91"
        ]
      },
      "hits": {
        "frequency": 1,
        "recent10": 0,
        "recent20": 1,
        "recent50": 0,
        "gap": 0,
        "repeat": 1
      },
      "brier": 0.18696213400584072,
      "uniform_brier": 0.18765234259745425,
      "bins": [
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          100,
          23.7857689968935,
          25.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.5606234998261617,
      "type": "retrospective_not_locked",
      "uncertainty": "Một kỳ mới/đài; chưa đủ để kết luận lợi thế. Các số trong kỳ không phải mẫu độc lập."
    },
    {
      "date": "2026-11-17",
      "station": "XSMB",
      "digits": 3,
      "n": 1813,
      "top3": {
        "frequency": [
          "592",
          "662",
          "697"
        ],
        "recent10": [
          "607",
          "697",
          "059"
        ],
        "recent20": [
          "123",
          "517",
          "724"
        ],
        "recent50": [
          "434",
          "697",
          "724"
        ],
        "gap": [
          "592",
          "662",
          "572"
        ],
        "repeat": [
          "059",
          "248",
          "106"
        ]
      },
      "hits": {
        "frequency": 0,
        "recent10": 0,
        "recent20": 0,
        "recent50": 0,
        "gap": 0,
        "repeat": 0
      },
      "brier": 0.022490697418122877,
      "uniform_brier": 0.022471063120442926,
      "bins": [
        [
          1000,
          22.752305097420056,
          23.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ],
        [
          0,
          0.0,
          0.0
        ]
      ],
      "uniform_top3": 0.06677010784864967,
      "type": "retrospective_not_locked",
      "uncertainty": "Một kỳ mới/đài; chưa đủ để kết luận lợi thế. Các số trong kỳ không phải mẫu độc lập."
    }
  ]
}
```
