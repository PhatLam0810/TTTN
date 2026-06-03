# MyE Game Arena - Vanilla HTML/CSS/JS Version

Đây là phiên bản chuyển đổi từ Next.js sang HTML/CSS/JavaScript nguyên bản của MyE Game Arena.

## Cấu Trúc Dự Án

```
my-app-vanilla/
├── index.html              # Trang chủ (chuyển hướng đến game-screen.html)
├── game-screen.html        # Trang chính hiển thị danh sách game
├── css/
│   ├── globals.css         # Các style toàn cục
│   ├── header.css          # Style cho header
│   ├── footer.css          # Style cho footer
│   ├── game-screen.css     # Style cho trang game screen
│   └── cards.css           # Style cho các card game
├── js/
│   ├── data.js             # Dữ liệu (constants từ Next.js)
│   ├── components.js       # Các hàm tạo component HTML
│   └── app.js              # Logic chính của ứng dụng
├── images/                 # Thư mục chứa hình ảnh
└── README.md              # Tài liệu này
```

## Chạy Ứng Dụng

### Yêu cầu

- Một trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Một HTTP server (vì JavaScript modules cần được phục vụ qua HTTP)

### Cách 1: Dùng Python (nếu đã cài Python)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Sau đó truy cập: `http://localhost:8000`

### Cách 2: Dùng Node.js (nếu đã cài Node.js)

```bash
# Cài http-server global
npm install -g http-server

# Chạy server
http-server
```

Sau đó truy cập: `http://localhost:8080`

### Cách 3: Dùng Visual Studio Code

1. Cài extension "Live Server"
2. Click chuột phải trên `game-screen.html`
3. Chọn "Open with Live Server"

## Các Tính Năng

- ✅ Header responsive với navigation menu
- ✅ Footer với thông tin công ty
- ✅ Service bar (MYE COIN, GIFT CODE, VIP CLUB, TÀI KHOẢN)
- ✅ Filter games theo thể loại (Tất cả, Simulation, Action, RPG, Shooting, Racing)
- ✅ Xem thêm/Thu gọn danh sách game
- ✅ Hiển thị game mới phát hành
- ✅ Hiển thị game nổi bật
- ✅ Responsive design cho mobile/tablet/desktop
- ✅ Hover effects và animations

## Sự Khác Biệt So Với Next.js

| Tính Năng           | Next.js | Vanilla JS |
| ------------------- | ------- | ---------- |
| TypeScript          | ✅      | ❌         |
| React Components    | ✅      | ❌         |
| Ant Design          | ✅      | ❌         |
| SSR/SSG             | ✅      | ❌         |
| API Routes          | ✅      | ❌         |
| Build Process       | ✅      | ❌         |
| Bundle Size         | Lớn     | Nhỏ        |
| Performance         | Tốt     | Tối ưu     |
| Vanilla HTML/CSS/JS | ❌      | ✅         |

## Cách Thêm Tính Năng Mới

### Thêm một loại game mới

1. Cập nhật `js/data.js`:

```javascript
export const GAME_LIST = [
  // ... existing games
  {
    title: "Tên Game Mới",
    category: "RPG",
    status: "HOT",
    badge: "HOT",
    image: "/images/game-image.png",
  },
];
```

2. Game mới sẽ tự động hiển thị khi tải lại trang.

### Thêm một service mới

1. Cập nhật `js/data.js`:

```javascript
export const SERVICE_CARDS = [
  // ... existing services
  { title: "SERVICE MỚI", icon: "/images/new-icon.png" },
];
```

2. Service mới sẽ tự động hiển thị.

## Cấu Hình Chi Tiết

### Thay Đổi Màu Sắc

Chỉnh sửa `css/globals.css`:

```css
:root {
  --color-primary: #093a88; /* Xanh đậm */
  --color-active: #ff7900; /* Cam */
  --color-background: #ffffff; /* Trắng */
  --color-border: #dce4f2; /* Xám nhạt */
  --color-muted: #64748b; /* Xám */
  --color-text: #093a88; /* Xanh đậm */
}
```

### Responsive Breakpoints

- **Desktop**: 1320px max-width
- **Tablet**: 860px - 1024px
- **Mobile**: < 640px

## Tối Ưu Hóa

- ✅ Lazy loading images (chuẩn bị được thêm)
- ✅ CSS modules cho style isolation
- ✅ Vanilla JS không cần framework overhead
- ✅ Fast load time
- ✅ SEO friendly HTML structure

## Trình Duyệt Hỗ Trợ

- Chrome/Chromium (phiên bản mới)
- Firefox (phiên bản mới)
- Safari (phiên bản mới)
- Edge (phiên bản mới)

## API Integration (Tương Lai)

Để thêm API integration, chỉnh sửa `js/data.js`:

```javascript
// Fetch data từ API thay vì hardcoded
async function fetchGames() {
  try {
    const response = await fetch("https://api.example.com/games");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return GAME_LIST; // Fallback to default
  }
}
```

## Troubleshooting

### CORS Error khi chạy từ `file://`

**Giải pháp**: Sử dụng HTTP server thay vì mở file trực tiếp

### Images không hiển thị

**Giải pháp**: Kiểm tra đường dẫn images trong `js/data.js` và thư mục `images/`

### JavaScript modules không load

**Giải pháp**: Đảm bảo sử dụng HTTP server (không phải `file://`)

## Liên Hệ Hỗ Trợ

- Email: hotro@mye.vn
- Hotline: 0902 500 198

## License

© 2026 MYE. All Rights Reserved.
