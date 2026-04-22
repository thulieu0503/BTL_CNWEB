# Web quản lí cửa hàng bán đồ ăn vặt

## Mô tả
Đây là hệ thống website hỗ trợ quản lí cửa hàng bán đồ ăn vặt, giúp quản lí sản phẩm, khách hàng, đơn hàng, kho hàng, nhà cung cấp, thanh toán và thống kê doanh thu.

## Mục tiêu
- Hỗ trợ quản lí bán hàng trên nền tảng web
- Quản lí thông tin sản phẩm và danh mục sản phẩm
- Theo dõi đơn hàng và thanh toán
- Quản lí nhập hàng, xuất hàng, tồn kho
- Quản lí khách hàng và lịch sử mua hàng
- Thống kê doanh thu và sản phẩm bán chạy

## Đối tượng sử dụng
- Quản trị viên
- Nhân viên bán hàng
- Nhân viên kho
- Khách hàng

## Chức năng chính

### 1. Quản lí tài khoản
- Đăng ký, đăng nhập, đăng xuất
- Đổi mật khẩu
- Cập nhật thông tin cá nhân
- Phân quyền người dùng

### 2. Quản lí danh mục sản phẩm
- Thêm danh mục
- Sửa danh mục
- Xóa danh mục
- Tìm kiếm danh mục

### 3. Quản lí sản phẩm
- Thêm sản phẩm
- Cập nhật sản phẩm
- Xóa sản phẩm
- Tìm kiếm sản phẩm
- Lọc theo danh mục, giá, trạng thái
- Quản lí số lượng tồn kho

### 4. Quản lí khách hàng
- Lưu thông tin khách hàng
- Cập nhật thông tin khách hàng
- Tra cứu khách hàng
- Xem lịch sử mua hàng

### 5. Quản lí giỏ hàng và đặt hàng
- Xem danh sách sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Cập nhật số lượng sản phẩm trong giỏ
- Xóa sản phẩm khỏi giỏ hàng
- Đặt hàng
- Chọn phương thức thanh toán
- Chọn địa chỉ giao hàng

### 6. Quản lí đơn hàng
- Tạo đơn hàng
- Xác nhận đơn hàng
- Cập nhật trạng thái đơn hàng
- Hủy đơn hàng
- Xem chi tiết đơn hàng
- Tìm kiếm đơn hàng

### 7. Quản lí kho hàng
- Nhập hàng từ nhà cung cấp
- Xuất hàng khi bán
- Kiểm kê kho
- Theo dõi tồn kho
- Cảnh báo sản phẩm sắp hết
- Theo dõi hạn sử dụng

### 8. Quản lí nhà cung cấp
- Thêm nhà cung cấp
- Sửa thông tin nhà cung cấp
- Xóa nhà cung cấp
- Tìm kiếm nhà cung cấp

### 9. Quản lí thanh toán
- Ghi nhận thanh toán
- Theo dõi trạng thái thanh toán
- Hoàn tiền khi hủy đơn nếu cần
- In hóa đơn

### 10. Thống kê và báo cáo
- Thống kê doanh thu theo ngày, tháng, năm
- Thống kê số lượng đơn hàng
- Thống kê sản phẩm bán chạy
- Thống kê hàng tồn kho
- Thống kê khách hàng mua nhiều

## Quy trình nghiệp vụ

### Quy trình bán hàng
1. Khách hàng đăng nhập hệ thống
2. Khách hàng chọn sản phẩm
3. Thêm sản phẩm vào giỏ hàng
4. Tiến hành đặt hàng
5. Hệ thống tạo đơn hàng
6. Nhân viên xác nhận đơn
7. Kho chuẩn bị hàng
8. Giao hàng cho khách
9. Khách thanh toán
10. Hệ thống cập nhật trạng thái hoàn thành

### Quy trình nhập hàng
1. Nhân viên kho kiểm tra tồn kho
2. Lập phiếu nhập hàng
3. Chọn nhà cung cấp
4. Nhập số lượng và giá nhập
5. Cập nhật tồn kho
6. Lưu lịch sử nhập hàng

### Quy trình hủy đơn hàng
1. Khách hoặc nhân viên yêu cầu hủy đơn
2. Hệ thống kiểm tra trạng thái đơn
3. Nếu đơn chưa giao thì cho phép hủy
4. Cập nhật trạng thái đơn hàng là đã hủy
5. Hoàn lại số lượng vào kho

## Ràng buộc nghiệp vụ
- Không cho đặt hàng khi sản phẩm hết hàng
- Số lượng tồn kho không được âm
- Khi xác nhận đơn hàng, hệ thống phải trừ tồn kho
- Khi hủy đơn hàng, hệ thống phải cộng lại tồn kho
- Giá sản phẩm phải lớn hơn 0
- Email và số điện thoại phải là duy nhất
- Chỉ quản trị viên mới có quyền quản lí toàn bộ hệ thống
- Chỉ nhân viên kho mới có quyền nhập hàng và kiểm kê

## Database
Các bảng chính của hệ thống:
roles: lưu quyền người dùng
users: lưu tài khoản người dùng
categories: lưu danh mục sản phẩm
products: lưu thông tin sản phẩm
suppliers: lưu thông tin nhà cung cấp
import_receipts: lưu phiếu nhập hàng
import_receipt_details: lưu chi tiết phiếu nhập
customers: lưu thông tin khách hàng
orders: lưu đơn hàng
order_details: lưu chi tiết đơn hàng
payments: lưu thanh toán
inventory_logs: lưu lịch sử nhập xuất kho

## Kết luận
Hệ thống quản lí cửa hàng bán đồ ăn vặt giúp quản lí hoạt động kinh doanh hiệu quả hơn, giảm sai sót trong bán hàng, kiểm soát tốt hàng tồn kho và hỗ trợ theo dõi doanh thu một cách chính xác.
