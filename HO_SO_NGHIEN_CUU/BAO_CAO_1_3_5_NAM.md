# So sánh cửa sổ 1–3–5 năm — 12/11/2026

## Trạng thái
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
