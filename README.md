# OpenDeli

UI đặt món online tiếng Việt, phong cách hiện đại với tông cam ấm. Xây bằng JavaScript, CSS và Vite; không cần tài khoản, API key hoặc cơ sở dữ liệu.

## Chạy trên máy

Yêu cầu Node.js 20.19+ hoặc 22.12+.

```sh
npm ci
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal. Trên cloud, cổng là 5173; để truy cập từ bên ngoài cần nền tảng có chuyển tiếp cổng hoặc triển khai web tĩnh.

```sh
npm run build
npm run preview
npm test
```

Kiểm tra trình duyệt dùng Playwright và Chromium tại `/usr/bin/chromium` của máy cloud. Nếu dùng máy khác, chỉnh đường dẫn trình duyệt trong `playwright.config.js` hoặc dùng Chromium do Playwright cài đặt.

## Tính năng

- Tìm kiếm, lọc nhóm món, sắp xếp giá.
- Giỏ hàng lưu trên trình duyệt, tăng giảm và xóa món.
- Mã HELLOOPEN giảm 20.000đ cho đơn từ 100.000đ.
- Phí giao hàng 15.000đ; miễn phí cho đơn từ 200.000đ.
- Biểu mẫu đặt đơn và màn hình xác nhận mô phỏng.
- Bố cục điện thoại và máy tính, dùng minh họa emoji và CSS không phụ thuộc ảnh ngoài.

Đây là UI demo. Không gửi đơn đến nhà hàng, không thanh toán hay gửi thông tin khách hàng lên máy chủ. Có thể đưa thư mục `dist` sau khi build lên dịch vụ hosting web tĩnh.
