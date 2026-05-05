MÔ TẢ NGHIỆP VỤ HỆ THỐNG BÁN MỸ PHẨM
1. Giới thiệu hệ thống
Hệ thống website bán mỹ phẩm được xây dựng nhằm hỗ trợ cửa hàng quản lý hoạt động kinh doanh mỹ phẩm trực tuyến. Hệ thống cho phép khách hàng xem sản phẩm, thêm sản phẩm vào giỏ hàng, đặt hàng và theo dõi trạng thái đơn hàng. Đồng thời, hệ thống cũng hỗ trợ admin hoặc nhân viên quản lý sản phẩm, danh mục, thương hiệu, đơn hàng, nhập hàng từ nhà cung cấp và theo dõi số lượng tồn kho.
Cơ sở dữ liệu của hệ thống được thiết kế để quản lý đầy đủ các nghiệp vụ chính gồm: quản lý người dùng, quản lý sản phẩm, quản lý giỏ hàng, quản lý đơn hàng, quản lý nhập hàng và quản lý lịch sử kho.
________________________________________
2. Các đối tượng sử dụng hệ thống
Hệ thống có ba nhóm người dùng chính:
Khách hàng
Admin
Nhân viên
Khách hàng
Khách hàng là người sử dụng website để mua mỹ phẩm. Khách hàng có thể đăng ký tài khoản, đăng nhập, xem danh sách sản phẩm, xem chi tiết sản phẩm, thêm sản phẩm vào giỏ hàng và đặt hàng.
Admin
Admin là người quản trị hệ thống. Admin có toàn quyền quản lý dữ liệu như quản lý sản phẩm, danh mục, thương hiệu, đơn hàng, nhà cung cấp, phiếu nhập hàng và lịch sử kho.
Nhân viên
Nhân viên có thể hỗ trợ admin trong các công việc như xác nhận đơn hàng, tạo phiếu nhập, cập nhật tồn kho và kiểm tra lịch sử nhập xuất hàng.
________________________________________
3. Nghiệp vụ quản lý người dùng
Thông tin người dùng được lưu trong bảng:
nguoi_dung
Bảng này dùng để lưu thông tin tài khoản của khách hàng, admin và nhân viên.
Thông tin bao gồm:
Họ tên
Email
Số điện thoại
Mật khẩu
Vai trò
Trạng thái tài khoản
Ngày tạo
Ngày cập nhật
Mỗi người dùng sẽ có một vai trò khác nhau. Nếu vai trò là khach_hang, người dùng chỉ được mua hàng. Nếu vai trò là admin hoặc nhan_vien, người dùng có thể truy cập trang quản trị để quản lý dữ liệu.
Tài khoản có thể ở trạng thái hoat_dong hoặc bi_khoa. Nếu tài khoản bị khóa, người dùng sẽ không được đăng nhập hoặc thực hiện chức năng trong hệ thống.
________________________________________
4. Nghiệp vụ quản lý danh mục sản phẩm
Thông tin danh mục được lưu trong bảng:
danh_muc
Danh mục dùng để phân loại sản phẩm mỹ phẩm. Ví dụ:
Sữa rửa mặt
Serum
Kem chống nắng
Kem dưỡng
Son môi
Toner
Mỗi sản phẩm sẽ thuộc một danh mục nhất định. Khi khách hàng chọn một danh mục trên website, hệ thống sẽ hiển thị các sản phẩm thuộc danh mục đó.
Admin có thể thêm, sửa, ẩn hoặc hiển thị danh mục sản phẩm. Trạng thái danh mục giúp hệ thống biết danh mục đó còn được sử dụng hay không.
________________________________________
5. Nghiệp vụ quản lý thương hiệu
Thông tin thương hiệu được lưu trong bảng:
thuong_hieu
Thương hiệu là hãng sản xuất hoặc phân phối sản phẩm mỹ phẩm. Ví dụ:
CeraVe
La Roche-Posay
The Ordinary
Bioderma
Romand
Mỗi sản phẩm có thể thuộc một thương hiệu. Việc tách bảng thương hiệu giúp hệ thống dễ dàng lọc sản phẩm theo hãng và quản lý thông tin thương hiệu một cách rõ ràng.
Admin có thể thêm mới thương hiệu, cập nhật thông tin thương hiệu, ẩn thương hiệu hoặc xem danh sách sản phẩm thuộc từng thương hiệu.
________________________________________
6. Nghiệp vụ quản lý sản phẩm
Thông tin sản phẩm được lưu trong bảng:
san_pham
Đây là bảng quan trọng nhất trong hệ thống. Bảng này lưu toàn bộ thông tin sản phẩm mỹ phẩm như:
Tên sản phẩm
Danh mục
Thương hiệu
Đường dẫn sản phẩm
Mô tả ngắn
Mô tả chi tiết
Giá bán
Giá khuyến mãi
Giá nhập
Mã sản phẩm
Loại da phù hợp
Dung tích
Xuất xứ
Thành phần
Hướng dẫn sử dụng
Số lượng tồn kho
Số lượng đã bán
Trạng thái sản phẩm
Mỗi sản phẩm có thể ở một trong các trạng thái:
hoat_dong
an
het_hang
Nếu sản phẩm ở trạng thái hoat_dong, khách hàng có thể xem và mua sản phẩm. Nếu sản phẩm ở trạng thái an, sản phẩm sẽ không hiển thị trên website. Nếu sản phẩm ở trạng thái het_hang, khách hàng có thể xem nhưng không nên cho đặt hàng.
Admin có thể thêm sản phẩm mới, cập nhật thông tin sản phẩm, cập nhật giá bán, cập nhật số lượng tồn kho hoặc ẩn sản phẩm khỏi website.
________________________________________
7. Nghiệp vụ quản lý hình ảnh sản phẩm
Hình ảnh sản phẩm được lưu trong bảng:
hinh_anh_san_pham
Một sản phẩm có thể có nhiều hình ảnh. Ví dụ một sản phẩm có thể có:
Ảnh chính
Ảnh mặt sau
Ảnh texture
Ảnh bảng thành phần
Ảnh hướng dẫn sử dụng
Trong bảng này có cột la_anh_chinh để xác định ảnh nào là ảnh đại diện chính của sản phẩm.
Khi hiển thị danh sách sản phẩm, hệ thống thường lấy ảnh chính để hiển thị. Khi vào trang chi tiết sản phẩm, hệ thống có thể hiển thị tất cả ảnh liên quan đến sản phẩm đó.
________________________________________
8. Nghiệp vụ quản lý giỏ hàng
Giỏ hàng được quản lý bởi hai bảng:
gio_hang
chi_tiet_gio_hang
Bảng gio_hang lưu thông tin giỏ hàng của người dùng. Bảng chi_tiet_gio_hang lưu các sản phẩm nằm trong giỏ hàng.
Khi khách hàng bấm “Thêm vào giỏ hàng”, hệ thống sẽ kiểm tra khách hàng đã có giỏ hàng chưa. Nếu chưa có, hệ thống tạo mới giỏ hàng. Sau đó, sản phẩm được thêm vào bảng chi_tiet_gio_hang.
Thông tin trong chi tiết giỏ hàng gồm:
Giỏ hàng
Sản phẩm
Số lượng
Đơn giá
Nếu sản phẩm đã tồn tại trong giỏ hàng, hệ thống có thể tăng số lượng. Nếu sản phẩm chưa tồn tại, hệ thống thêm dòng mới vào chi tiết giỏ hàng.
Khách hàng có thể cập nhật số lượng hoặc xóa sản phẩm khỏi giỏ hàng trước khi đặt hàng.
________________________________________
9. Nghiệp vụ đặt hàng và bán hàng
Đơn hàng được quản lý bởi hai bảng:
don_hang
chi_tiet_don_hang
Khi khách hàng đặt hàng, hệ thống sẽ lấy dữ liệu từ giỏ hàng để tạo đơn hàng.
Bảng don_hang lưu thông tin chung của đơn hàng như:
Mã đơn hàng
Người đặt hàng
Tên khách hàng
Số điện thoại khách hàng
Email khách hàng
Địa chỉ giao hàng
Ghi chú
Tạm tính
Phí vận chuyển
Tổng tiền
Phương thức thanh toán
Trạng thái thanh toán
Trạng thái đơn hàng
Ngày tạo
Địa chỉ giao hàng được lưu trực tiếp trong bảng don_hang để đảm bảo đơn hàng cũ vẫn giữ đúng địa chỉ lúc mua, kể cả khi khách hàng thay đổi thông tin sau này.
Bảng chi_tiet_don_hang lưu các sản phẩm trong đơn hàng, bao gồm:
Đơn hàng
Sản phẩm
Tên sản phẩm tại thời điểm mua
Hình ảnh sản phẩm
Số lượng
Đơn giá
Thành tiền
Việc lưu tên sản phẩm, ảnh sản phẩm và đơn giá trong chi tiết đơn hàng giúp đơn hàng cũ không bị sai lệch nếu sau này sản phẩm bị đổi tên, đổi ảnh hoặc đổi giá.
________________________________________
10. Quy trình bán hàng
Quy trình bán hàng diễn ra như sau:
Khách hàng đăng nhập
→ Xem danh sách sản phẩm
→ Thêm sản phẩm vào giỏ hàng
→ Kiểm tra giỏ hàng
→ Nhập thông tin giao hàng
→ Xác nhận đặt hàng
→ Hệ thống tạo đơn hàng
→ Hệ thống tạo chi tiết đơn hàng
→ Hệ thống trừ số lượng tồn kho
→ Hệ thống ghi lịch sử xuất kho
→ Admin xác nhận và xử lý đơn hàng
Khi khách đặt hàng thành công, số lượng tồn kho trong bảng san_pham sẽ giảm đi theo số lượng đã mua. Đồng thời, hệ thống tăng số lượng đã bán của sản phẩm.
Ví dụ:
Sữa rửa mặt CeraVe còn 45 sản phẩm.
Khách mua 2 sản phẩm.
Sau khi đặt hàng, tồn kho còn 43 sản phẩm.
Số lượng đã bán tăng thêm 2.
Sau đó, hệ thống ghi một dòng vào bảng lich_su_kho với loại giao dịch là:
xuat_kho
________________________________________
11. Trạng thái đơn hàng
Đơn hàng có thể có các trạng thái sau:
cho_xac_nhan
da_xac_nhan
dang_chuan_bi
dang_giao
hoan_thanh
da_huy
Ý nghĩa:
cho_xac_nhan: Khách vừa đặt hàng, shop chưa xử lý
da_xac_nhan: Shop đã xác nhận đơn hàng
dang_chuan_bi: Shop đang đóng gói sản phẩm
dang_giao: Đơn hàng đang được giao
hoan_thanh: Khách đã nhận hàng
da_huy: Đơn hàng đã bị hủy
Admin hoặc nhân viên có thể cập nhật trạng thái đơn hàng trong trang quản trị.
Quy trình bình thường:
cho_xac_nhan
→ da_xac_nhan
→ dang_chuan_bi
→ dang_giao
→ hoan_thanh
Nếu khách hủy đơn hoặc shop hủy đơn:
cho_xac_nhan → da_huy
________________________________________
12. Nghiệp vụ thanh toán
Trong bản database rút gọn, thông tin thanh toán được lưu trực tiếp trong bảng:
don_hang
Các thông tin thanh toán gồm:
Phương thức thanh toán
Trạng thái thanh toán
Phương thức thanh toán gồm:
cod
chuyen_khoan
Trong đó:
cod: Thanh toán khi nhận hàng
chuyen_khoan: Chuyển khoản ngân hàng
Trạng thái thanh toán gồm:
chua_thanh_toan
da_thanh_toan
Nếu khách chọn COD, ban đầu đơn hàng thường có trạng thái thanh toán là chua_thanh_toan. Khi khách nhận hàng và thanh toán, admin hoặc nhân viên có thể cập nhật thành da_thanh_toan.
________________________________________
13. Nghiệp vụ quản lý nhà cung cấp
Thông tin nhà cung cấp được lưu trong bảng:
nha_cung_cap
Nhà cung cấp là nơi cửa hàng nhập mỹ phẩm về để bán. Ví dụ:
Công ty Mỹ phẩm ABC
Nhà phân phối dược mỹ phẩm Pháp
Nhà phân phối mỹ phẩm Hàn Quốc
Thông tin nhà cung cấp gồm:
Tên nhà cung cấp
Số điện thoại
Email
Địa chỉ
Người liên hệ
Trạng thái
Admin có thể thêm, sửa, ẩn hoặc xem danh sách nhà cung cấp. Việc quản lý nhà cung cấp giúp cửa hàng biết sản phẩm được nhập từ đâu.
________________________________________
14. Nghiệp vụ nhập hàng
Nhập hàng được quản lý bởi hai bảng:
phieu_nhap
chi_tiet_phieu_nhap
Mỗi lần cửa hàng nhập hàng từ nhà cung cấp, admin hoặc nhân viên sẽ tạo một phiếu nhập.
Bảng phieu_nhap lưu thông tin chung của phiếu nhập:
Mã phiếu nhập
Nhà cung cấp
Người tạo phiếu
Tổng tiền
Ghi chú
Trạng thái phiếu nhập
Ngày tạo
Bảng chi_tiet_phieu_nhap lưu danh sách sản phẩm trong phiếu nhập:
Phiếu nhập
Sản phẩm
Số lượng nhập
Giá nhập
Thành tiền
Một phiếu nhập có thể có nhiều sản phẩm. Một sản phẩm cũng có thể xuất hiện trong nhiều phiếu nhập khác nhau.
________________________________________
15. Quy trình nhập hàng
Quy trình nhập hàng diễn ra như sau:
Admin hoặc nhân viên đăng nhập
→ Vào trang quản lý nhập hàng
→ Chọn nhà cung cấp
→ Tạo phiếu nhập
→ Chọn sản phẩm cần nhập
→ Nhập số lượng
→ Nhập giá nhập
→ Lưu phiếu nhập
→ Xác nhận phiếu nhập
→ Hệ thống cộng số lượng vào tồn kho
→ Hệ thống ghi lịch sử nhập kho
Ví dụ:
Sản phẩm CeraVe đang còn 45 sản phẩm.
Shop nhập thêm 50 sản phẩm.
Sau khi xác nhận phiếu nhập, tồn kho là 95 sản phẩm.
Khi phiếu nhập được xác nhận, hệ thống cập nhật bảng san_pham:
so_luong_ton = so_luong_ton + so_luong_nhap
Đồng thời, hệ thống ghi một dòng vào bảng lich_su_kho với loại giao dịch là:
nhap_kho
________________________________________
16. Trạng thái phiếu nhập
Phiếu nhập có các trạng thái:
ban_nhap
da_xac_nhan
da_huy
Ý nghĩa:
ban_nhap: Phiếu nhập mới tạo, chưa cộng hàng vào kho
da_xac_nhan: Phiếu nhập đã xác nhận, hàng đã được cộng vào kho
da_huy: Phiếu nhập bị hủy, không cộng hàng vào kho
Chỉ khi phiếu nhập chuyển sang trạng thái da_xac_nhan, hệ thống mới cộng số lượng sản phẩm vào tồn kho.
Điều này giúp tránh lỗi cộng kho khi phiếu nhập mới chỉ là bản nháp.
________________________________________
17. Nghiệp vụ quản lý tồn kho
Tồn kho được quản lý trực tiếp trong bảng:
san_pham
Cột quan trọng là:
so_luong_ton
Cột này cho biết hiện tại sản phẩm còn bao nhiêu trong kho.
Ví dụ:
CeraVe còn 45 sản phẩm
Serum The Ordinary còn 60 sản phẩm
Son Romand còn 90 sản phẩm
Khi nhập hàng, tồn kho tăng. Khi bán hàng, tồn kho giảm.
Nhập hàng → cộng tồn kho
Bán hàng → trừ tồn kho
Hủy đơn cần hoàn hàng → cộng lại tồn kho
Điều chỉnh kho → admin sửa lại số lượng
________________________________________
18. Nghiệp vụ quản lý lịch sử kho
Lịch sử kho được lưu trong bảng:
lich_su_kho
Bảng này dùng để ghi lại mọi thay đổi về số lượng tồn kho.
Thông tin gồm:
Sản phẩm
Người thực hiện
Loại giao dịch
Số lượng thay đổi
Tồn kho trước
Tồn kho sau
Loại tham chiếu
Mã tham chiếu
Ghi chú
Ngày tạo
Loại giao dịch có thể là:
nhap_kho
xuat_kho
dieu_chinh
hoan_kho
Ý nghĩa:
nhap_kho: Nhập hàng từ nhà cung cấp
xuat_kho: Xuất kho do bán hàng
dieu_chinh: Admin chỉnh tồn kho thủ công
hoan_kho: Cộng lại kho do hủy đơn hoặc trả hàng
Ví dụ lịch sử kho:
Ngày 06/05/2026:
Nhập 50 chai CeraVe từ phiếu nhập PN001.
Tồn kho trước: 45
Tồn kho sau: 95

Ngày 07/05/2026:
Bán 2 chai CeraVe cho đơn hàng DH001.
Tồn kho trước: 95
Tồn kho sau: 93
Nhờ bảng lich_su_kho, admin có thể kiểm tra vì sao số lượng tồn kho tăng hoặc giảm.
________________________________________
19. Quy trình hủy đơn hàng
Khi đơn hàng bị hủy, hệ thống cần kiểm tra đơn hàng đã trừ kho hay chưa.
Nếu đơn hàng đã trừ kho, hệ thống cần hoàn lại số lượng sản phẩm vào kho.
Ví dụ:
CeraVe còn 93 sản phẩm.
Đơn hàng DH001 đã mua 2 sản phẩm nhưng bị hủy.
Hệ thống cộng lại 2 sản phẩm.
Tồn kho trở lại 95 sản phẩm.
Khi đó hệ thống ghi vào lich_su_kho:
loai_giao_dich = hoan_kho
so_luong = 2
ton_kho_truoc = 93
ton_kho_sau = 95
loai_tham_chieu = don_hang
ghi_chu = Hoàn kho do hủy đơn hàng DH001
________________________________________
20. Quyền của admin và nhân viên
Admin hoặc nhân viên có quyền quản lý các chức năng sau:
Quản lý sản phẩm
Quản lý danh mục
Quản lý thương hiệu
Quản lý đơn hàng
Quản lý nhà cung cấp
Quản lý phiếu nhập
Quản lý tồn kho
Xem lịch sử kho
Admin có quyền cao nhất. Nhân viên có thể được giới hạn một số chức năng tùy theo yêu cầu hệ thống.
Ví dụ:
Admin được xóa hoặc ẩn sản phẩm.
Nhân viên chỉ được cập nhật đơn hàng và tạo phiếu nhập.
Khách hàng chỉ được mua hàng.
________________________________________
21. Tóm tắt luồng nghiệp vụ chính
Luồng bán hàng
Khách hàng
→ Giỏ hàng
→ Chi tiết giỏ hàng
→ Đơn hàng
→ Chi tiết đơn hàng
→ Trừ tồn kho sản phẩm
→ Ghi lịch sử kho
Luồng nhập hàng
Nhà cung cấp
→ Phiếu nhập
→ Chi tiết phiếu nhập
→ Cộng tồn kho sản phẩm
→ Ghi lịch sử kho
Luồng quản lý sản phẩm
Admin
→ Danh mục
→ Thương hiệu
→ Sản phẩm
→ Hình ảnh sản phẩm
________________________________________
22. Kết luận nghiệp vụ
Hệ thống bán mỹ phẩm được thiết kế để hỗ trợ đầy đủ các nghiệp vụ cơ bản của một cửa hàng bán hàng trực tuyến. Khách hàng có thể xem sản phẩm, thêm vào giỏ hàng và đặt hàng. Admin hoặc nhân viên có thể quản lý sản phẩm, xử lý đơn hàng, nhập hàng từ nhà cung cấp và theo dõi tồn kho.
Điểm quan trọng của hệ thống là quản lý được cả hai chiều của kho hàng:
Nhập hàng làm tăng tồn kho.
Bán hàng làm giảm tồn kho.
Mọi thay đổi đều được ghi lại trong lịch sử kho.
Nhờ đó, cửa hàng có thể kiểm soát được số lượng sản phẩm, biết sản phẩm nào đang còn hàng, sản phẩm nào bán chạy, sản phẩm nào cần nhập thêm và lịch sử thay đổi tồn kho của từng sản phẩm.

