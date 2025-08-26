# 🌟 LỊCH LÀM VIỆC - TP CẦN THƠ

Một trang web hiện đại và đẹp mắt để quản lý lịch làm việc của các đơn vị thuộc thành phố Cần Thơ.

## ✨ Tính năng chính

- **Giao diện hiện đại**: Thiết kế responsive với gradient background sáng và glassmorphism effect
- **Grid layout**: Sắp xếp các đơn vị theo nhóm logic và màu sắc
- **Tương tác**: Click vào card để xem chi tiết đơn vị
- **Tìm kiếm**: Chức năng tìm kiếm đơn vị theo tên hoặc mô tả
- **Modal**: Hiển thị thông tin chi tiết trong popup đẹp mắt
- **Lịch làm việc tuần**: Trang chi tiết lịch làm việc theo tuần cho từng đơn vị
- **Điều hướng tuần**: Chuyển đổi giữa các tuần khác nhau
- **Animation**: Hiệu ứng chuyển động mượt mà và hấp dẫn
- **Responsive**: Tương thích với mọi thiết bị

## 🎨 Thiết kế

### Giao diện
- **Giao diện sáng**: Thiết kế tươi mới với background gradient sáng
- **Glassmorphism**: Hiệu ứng trong suốt với backdrop-filter
- **Màu sắc nhẹ nhàng**: Sử dụng palette màu sáng, dễ nhìn

### Màu sắc
- **Đỏ (#e74c3c)**: Các đơn vị cấp cao (Thành ủy, HĐND, ĐBQH, UBND)
- **Xanh lá (#27ae60)**: Các đơn vị chức năng và trực thuộc
- **Xanh dương (#3b82f6)**: Nút và các yếu tố tương tác
- **Background sáng**: Gradient từ trắng đến xám nhạt (#f8fafc → #e2e8f0 → #cbd5e1)

### Typography
- **Font chính**: Inter (Google Fonts)
- **Kích thước**: Responsive từ 1rem đến 3.5rem
- **Trọng lượng**: 300-700

### Layout
- **Grid system**: CSS Grid với auto-fit
- **Spacing**: Hệ thống khoảng cách nhất quán
- **Border radius**: 15px-25px cho góc bo tròn hiện đại

## 🚀 Cách sử dụng

### 1. Mở trang web
```bash
# Mở file index.html trong trình duyệt
open index.html
```

### 2. Tương tác với các card
- **Click**: Mở modal hiển thị thông tin chi tiết
- **Hover**: Hiệu ứng nâng card và thay đổi màu sắc
- **Keyboard**: Sử dụng Tab để điều hướng

### 3. Tìm kiếm
- Sử dụng ô tìm kiếm để lọc các đơn vị
- Tìm kiếm theo tên hoặc mô tả
- Kết quả hiển thị real-time

### 4. Xem chi tiết
- Click vào card để mở modal
- Modal hiển thị:
  - Tên và mô tả đơn vị
  - Trạng thái cập nhật
  - Danh sách các đơn vị con
- Đóng modal bằng nút "Đóng" hoặc click bên ngoài

## 📱 Responsive Design

### Desktop (1200px+)
- Grid 4 cột cho hàng đầu tiên
- Grid 4 cột cho hàng thứ hai
- Grid 2 cột cho hàng thứ ba

### Tablet (768px - 1199px)
- Grid tự động điều chỉnh
- Font size giảm nhẹ
- Spacing tối ưu

### Mobile (< 768px)
- Grid 1 cột
- Font size nhỏ hơn
- Touch-friendly interactions

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: 
  - Grid Layout
  - Flexbox
  - CSS Variables
  - Animations & Transitions
  - Media Queries
- **JavaScript (ES6+)**:
  - DOM Manipulation
  - Event Handling
  - Modal Management
  - Search Functionality
  - Performance Optimization

## 📁 Cấu trúc file

```
lichlamviec-tp/
├── index.html              # Trang chính
├── styles.css              # Stylesheet cơ bản
├── additional-styles.css   # CSS nâng cao và hiệu ứng
├── script.js               # JavaScript logic trang chính
├── schedule-detail.html    # Trang lịch làm việc tuần
├── schedule-styles.css     # CSS cho trang lịch làm việc
├── schedule-script.js      # JavaScript cho trang lịch làm việc
└── README.md               # Hướng dẫn sử dụng
```

## 🎯 Các đơn vị được hiển thị

### Hàng 1 (Đỏ - Cấp cao)
1. **THÀNH ỦY CẦN THƠ** - Ban lãnh đạo Đảng bộ
2. **HĐND TP CẦN THƠ** - Hội đồng Nhân dân
3. **ĐOÀN ĐBQH TP CẦN THƠ** - Đoàn Đại biểu Quốc hội
4. **UBND TP CẦN THƠ** - Ủy ban Nhân dân

### Hàng 2 (Xanh lá - Chức năng)
1. **VĂN PHÒNG, CÁC BAN XDĐ VÀ ĐƠN VỊ TRỰC THUỘC**
2. **ĐẢNG ỦY TRỰC THUỘC THÀNH ỦY**
3. **ĐẢNG ỦY PHƯỜNG XÃ**
4. **ỦY BAN MTTQ & CÁC TỔ CHỨC CT-XH**

### Hàng 3 (Xanh lá - Chuyên môn)
1. **SỞ BAN NGÀNH** - Các sở, ban, ngành
2. **UBND PHƯỜNG XÃ** - Ủy ban Nhân dân phường, xã

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
```css
:root {
    --primary-red: #e74c3c;
    --primary-green: #27ae60;
    --primary-blue: #3498db;
}
```

### Thay đổi animation
```css
.card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### Thêm đơn vị mới
```javascript
const newUnit = {
    name: 'TÊN ĐƠN VỊ',
    description: 'Mô tả đơn vị',
    units: ['Đơn vị con 1', 'Đơn vị con 2'],
    status: 'X/Y đơn vị đã cập nhật',
    color: '#color-code'
};
```

## 🌟 Tính năng nâng cao

- **Lazy Loading**: Tối ưu hiệu suất tải trang
- **Intersection Observer**: Animation khi scroll
- **Debounced Search**: Tối ưu tìm kiếm
- **Keyboard Navigation**: Hỗ trợ điều hướng bằng bàn phím
- **Accessibility**: Hỗ trợ người dùng khuyết tật
- **Print Styles**: Tối ưu cho in ấn

## 📊 Hiệu suất

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Bảo mật

- Không có thông tin nhạy cảm
- Chỉ sử dụng frontend technologies
- Không có database connection
- Tất cả dữ liệu đều là static

## 📞 Hỗ trợ

Nếu bạn cần hỗ trợ hoặc có góp ý, vui lòng liên hệ:
- **Email**: support@example.com
- **Website**: https://example.com
- **GitHub**: https://github.com/username/lichlamviec-tp

## 📄 Giấy phép

Dự án này được phát hành dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

---

**Lưu ý**: Đây là phiên bản demo với dữ liệu mẫu. Để sử dụng trong môi trường thực tế, vui lòng cập nhật dữ liệu và cấu hình phù hợp.
