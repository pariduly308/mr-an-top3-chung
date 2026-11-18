# Mr Ân — Top 3 chung trên máy tính

## Mở trên Windows

1. Giải nén toàn bộ ZIP vào một thư mục trên ổ cứng máy.
2. Cài Node.js 22 trở lên nếu máy chưa có. App không cần cài thêm gói npm.
3. Bấm **MO_TOP3.bat**. Nếu trình duyệt chưa tự mở, nhập địa chỉ 127.0.0.1 hiện trong cửa sổ chạy.
4. Khi có mạng, bấm **Cập nhật kết quả**. Cửa sổ ứng dụng phải còn mở trong lúc tải. Lưu tiến độ theo từng nhóm bảng, nên lần sau tiếp tục từ chỗ còn thiếu.
5. Sao lưu **APP/DU_LIEU_MAY** để giữ kết quả mới và các bản dự báo đã khóa trên máy. Khi chuyển máy hoặc nâng cấp, chép lại thư mục này vào APP. Nên dùng ổ NTFS trên Windows để hỗ trợ cơ chế lưu bản khóa.

## Dữ liệu và cập nhật

- Dữ liệu thật đi kèm đến **17/11/2026**, gồm **7.578 bảng miền Nam và miền Bắc**, **8.546 bảng miền Trung**. Miền Trung có thêm dữ liệu nguồn từ 10/11/2016.
- Khi bấm cập nhật, app so các bảng đang có với lịch tham chiếu cả ba miền từ **10/11/2021**, theo từng **đài + ngày**. Nó ưu tiên kỳ còn thiếu gần nhất, mở trang kết quả theo ngày của Minh Ngọc, lưu bảng đủ giải và tận dụng các ngày khác trong cùng trang để giảm số lượt tải.
- Lượt cập nhật trước khung giờ kiểm tra hôm nay bỏ qua các đài chưa đến giờ. Lỗi tải được thử lại một lần. Mỗi nhóm bảng tải xong được lưu ngay. Nếu nhiều lượt tải liên tiếp lỗi, app báo số bảng còn thiếu để lần sau tiếp tục.
- Ở mốc dữ liệu đóng gói, còn **7 vị trí Huế cuối năm 2021** theo lịch hiện tại chưa có bảng phù hợp. Có thể liên quan đến lịch cũ. App ghi là cần xác minh. Nếu nguồn chưa đăng đủ, ngừng cung cấp hoặc lịch thay đổi, các vị trí đó cũng hiện là còn thiếu.
- Bản máy tính mở được khi mất mạng. Các ngày bù sau giờ quay chỉ bổ sung kết quả thật. Thành tích dự báo dùng bản đã lưu trước giờ quay. Lịch sử khóa trên máy bắt đầu riêng; nhật ký và bản dự báo lịch sử được giữ trong hồ sơ nghiên cứu.
- Nút **Tự chọn · 1 năm · 3 năm · 5 năm** có trên trang chính. Dấu ✓ xanh kèm đài, giải và số đầy đủ cho biết số nào khớp.

## Mã nguồn và hồ sơ

| Vị trí | Nội dung |
|---|---|
| APP/local.mjs | Máy chủ địa phương và lưu dữ liệu |
| APP/local-sync.mjs | Dò kỳ thiếu và cập nhật nhiều ngày |
| APP/worker | Giao diện, sáu công thức, xếp hạng, bản khóa, dữ liệu |
| APP/tests | Kiểm thử phân tích, bản khóa và bù dữ liệu |
| HO_SO_NGHIEN_CUU/journals | Hai nhật ký, nhật ký theo đài đến 17/11 và Top 3 chung đến 16/11 |
| HO_SO_NGHIEN_CUU/research | Các ZIP nghiên cứu gốc có giao thức, mã, nguồn và kết quả theo từng đợt, bao gồm kiểm tra 5/10 năm, đối chiếu Minh Ngọc, cửa sổ 1/3/5 năm, miền Trung và hai đợt nghiên cứu ba miền |
| HO_SO_NGHIEN_CUU/source_reference | Mã tham chiếu và bản thay đổi tại mốc bàn giao trước |
| HO_SO_NGHIEN_CUU/BAO_CAO_*.md | Báo cáo mở nhanh |

Hồi cứu Top 3 đuôi 2 đứng đầu theo mẫu đã xem: miền Nam hai đài 5 năm (67,83%), XSMB 1 năm (57,08%), miền Trung hai đài 5 năm (68,55%), Đà Nẵng thứ Tư 3 và 5 năm cùng 42,75%. Đây là tỷ lệ có ít nhất một số xuất hiện trong các kỳ đã chấm. Chênh lệch chưa đủ chắc để kết luận lợi thế kỳ tới. Cấu hình Tự chọn tiếp tục dùng quy tắc hiện hành.

## Kiểm thử

Trên Linux với Node.js 24 đã mở được app địa phương và đọc bảng ngày, chạy các kiểm thử công thức và bản khóa. Kiểm thử cập nhật mô phỏng nghỉ ba ngày, tải nhiều ngày từ một trang, thiếu một đài, không lưu trùng khi chạy lại, giữ đúng ngày nghỉ đã biết và loại bảng thiếu giải. Lần bấm trực tiếp trên Windows và lượt bù qua kết nối Minh Ngọc từ máy anh chưa được kiểm tra.


## Sửa ngày 18/11/2026

Khi chọn ngày đã qua mà máy chưa có bản khóa, app tính lại bộ số từ lịch sử trước ngày được chọn, đối chiếu kết quả thật và ghi rõ “Tính lại lịch sử”. Anh xem được các cửa sổ 1/3/5 năm và hai chế độ đuôi. Thành tích dự báo lưu trước quay tiếp tục dựa vào bản đã khóa. Dòng còn thiếu ghi thêm khoảng ngày để dễ nhận ra các vị trí lịch sử.

Để cập nhật bản anh đã tải, đóng app rồi chép thư mục APP trong gói mới đè vào APP của bản cũ. Giữ thư mục APP/DU_LIEU_MAY của anh. Gói này không chứa DU_LIEU_MAY. Sau đó mở lại MO_TOP3.bat và bấm Ctrl+F5 trên trình duyệt nếu giao diện cũ còn hiện.
