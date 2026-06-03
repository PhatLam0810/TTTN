# Quick Start Guide

## 🚀 Bắt Đầu Nhanh

### Windows

```bash
start-server.bat
```

Sau đó truy cập: `http://localhost:8000`

### macOS / Linux

```bash
chmod +x start-server.sh
./start-server.sh
```

Sau đó truy cập: `http://localhost:8000`

---

## 📋 Yêu Cầu

- Trình duyệt web (Chrome, Firefox, Safari, Edge)
- Python 3 hoặc Node.js (để chạy HTTP server)

---

## 🎮 Tính Năng Chính

- **Responsive Design**: Hoạt động tốt trên mobile, tablet, desktop
- **Dynamic Filtering**: Lọc game theo thể loại
- **View More/Less**: Xem thêm hoặc thu gọn danh sách
- **Smooth Animations**: Hiệu ứng hover và transitions
- **Modern UI**: Giao diện đẹp và chuyên nghiệp

---

## 📁 Cấu Trúc File

```
my-app-vanilla/
├── index.html              # Trang chủ
├── game-screen.html        # Trang game
├── css/                    # Stylesheets
│   ├── globals.css
│   ├── header.css
│   ├── footer.css
│   ├── game-screen.css
│   └── cards.css
├── js/                     # JavaScript
│   ├── data.js            # Data & Constants
│   ├── components.js      # UI Components
│   └── app.js             # Main Logic
├── images/                # Images folder
├── start-server.bat       # Windows server starter
├── start-server.sh        # Unix server starter
└── README.md              # Full documentation
```

---

## 🔧 Troubleshooting

### Port bị chiếm

Nếu port 8000 hoặc 8080 bị sử dụng:

**Python:**

```bash
python -m http.server 9000
```

**Node.js:**

```bash
http-server -p 9000
```

### Images không hiển thị

Đảm bảo:

1. Sử dụng HTTP server (không phải file://)
2. Kiểm tra thư mục `images/` có các file hình ảnh

### JavaScript modules lỗi

Đảm bảo:

1. Sử dụng HTTP server
2. Trình duyệt hỗ trợ ES6 modules

---

## 📚 Tài Liệu Thêm

Xem `README.md` để có thông tin chi tiết hơn về:

- Cấu hình
- Tối ưu hóa
- Tích hợp API
- Thêm tính năng mới

---

**Được tạo bởi**: Vanilla JS Conversion  
**Phiên bản**: 1.0  
**License**: © 2026 MYE. All Rights Reserved.
