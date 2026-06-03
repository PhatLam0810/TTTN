// Import data
import {
  NAV_ITEMS,
  SERVICE_CARDS,
  FILTERS,
  GAME_LIST,
  NEW_RELEASES,
  SPOTLIGHT_GAMES,
  LOGO_PATH,
  GAME_HOT_BADGE,
  GAME_NEW_BADGE,
} from "./data.js";

/**
 * Create header component
 */
export function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <div class="header-container">
      <img src="${LOGO_PATH}" alt="Logo" class="header-logo">
      <nav class="header-nav">
        ${NAV_ITEMS.map(
          (item) => `
          <a href="#" class="nav-link ${item.active ? "active" : ""}">
            ${item.label}
          </a>
        `,
        ).join("")}
      </nav>
      <button class="header-login">Đăng Nhập</button>
    </div>
  `;

  return header;
}

/**
 * Create footer component
 */
export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
    <div class="footer-content">
      <img src="${LOGO_PATH}" alt="myE" class="footer-logo">
      <div class="footer-contact">
        <span>Email: hotro@mye.vn</span>
        <span>Hotline: 0902 500 198</span>
      </div>
      <div class="footer-company">
        <p class="footer-company-name">CÔNG TY CỔ PHẦN MYE</p>
        <p>Chịu trách nhiệm quản lí nội dung: Ông Lâm Trung Hiệp</p>
        <p>Địa chỉ: 477/22 Âu Cơ, Phường Phú Trung, Quận Tân Phú, Thành phố Hồ Chí Minh, Việt Nam</p>
        <p>Giấy phép G1 số: Số 297/GP-BTTTT. Ngày cấp 14/07/2020, Nơi cấp Bộ Thông Tin và Truyền Thông</p>
      </div>
      <div class="footer-links">
        <a href="#">Điều khoản dịch vụ</a>
        <span class="footer-separator">|</span>
        <a href="#">Chính sách bảo mật</a>
      </div>
      <p class="footer-copy">©Copyright © 2026 MYE. All Rights Reserved.</p>
    </div>
  `;

  return footer;
}

/**
 * Create game card component
 */
export function createGameCard(game) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "game-card-container";

  const hasBadge = game.badge === "HOT";
  const badgeHTML = hasBadge
    ? `<img src="${GAME_HOT_BADGE}" alt="${game.title}" class="game-card-badge">`
    : `<img src="${GAME_NEW_BADGE}" alt="${game.title}" class="game-card-badge">`;

  cardContainer.innerHTML = `
    <div class="game-card">
      ${badgeHTML}
      <div class="game-card-header" style="padding: 16px;">
        <h3 class="game-card-title">${game.title}</h3>
        <p class="game-card-category">${game.category}</p>
      </div>

      <div class="game-card-cover">
        <div class="game-card-corner-flag" style="display:none;"></div>
        <img src="${game.image}" alt="${game.title}" class="game-card-image">
        <div class="game-card-overlay"></div>
      </div>

      <div class="game-card-footer">
        <button class="game-card-action-btn" title="Trang Chủ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <p class="game-card-action-text">Trang Chủ</p>
        </button>
        <div class="game-card-divider"></div>
        <button class="game-card-action-btn" title="Tải xuống">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <p class="game-card-action-text">Tải xuống</p>
        </button>
      </div>
    </div>
  `;

  return cardContainer;
}

/**
 * Create popular game card component
 */
export function createGameCardPopular(game) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "game-card-container";

  cardContainer.innerHTML = `
    <div class="game-card-popular">
      <div class="game-card-popular-cover">
        <img src="${game.image}" alt="${game.title}" class="game-card-popular-image">
        <div class="game-card-popular-overlay"></div>
        <div class="game-card-popular-badge">
          <img src="${GAME_HOT_BADGE}" alt="HOT" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="game-card-popular-content">
          <h3 class="game-card-popular-title">${game.title}</h3>
          <p class="game-card-popular-category">${game.category}</p>
          <div class="game-card-popular-footer">
            <button class="game-card-popular-btn" title="Trang Chủ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <p class="game-card-action-text">Trang Chủ</p>
            </button>
            <div class="game-card-popular-divider"></div>
            <button class="game-card-popular-btn" title="Tải xuống">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <p class="game-card-action-text">Tải xuống</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  return cardContainer;
}

/**
 * Create service bar
 */
export function createServiceBar() {
  const serviceBar = document.createElement("div");
  serviceBar.className = "service-bar";

  SERVICE_CARDS.forEach((service) => {
    const serviceItem = document.createElement("div");
    serviceItem.className = "service-item";
    serviceItem.innerHTML = `
      <div class="service-icon">
        <img src="${service.icon}" alt="${service.title}">
      </div>
      <span>${service.title}</span>
    `;
    serviceBar.appendChild(serviceItem);
  });

  return serviceBar;
}

/**
 * Create filter bar
 */
export function createFilterBar(onFilterChange) {
  const filterBar = document.createElement("div");
  filterBar.className = "filter-bar";

  FILTERS.forEach((filter) => {
    const btn = document.createElement("button");
    btn.className = `filter-btn ${filter.label === "Tất cả" ? "active" : ""}`;
    btn.type = "button";
    btn.innerHTML = `
      <span>${filter.label}</span>
      <span class="filter-count">${filter.count}</span>
    `;
    btn.addEventListener("click", () => {
      // Remove active from all buttons
      filterBar
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      // Add active to clicked button
      btn.classList.add("active");
      // Call callback
      onFilterChange(filter.label);
    });
    filterBar.appendChild(btn);
  });

  return filterBar;
}

/**
 * Create card grid with games
 */
export function createCardGrid(games) {
  const cardGrid = document.createElement("div");
  cardGrid.className = "card-grid";

  games.forEach((game, index) => {
    const cardItem = document.createElement("div");
    cardItem.className = "card-item";
    cardItem.appendChild(createGameCard(game));
    cardGrid.appendChild(cardItem);
  });

  return cardGrid;
}

/**
 * Create spotlight grid with popular games
 */
export function createSpotlightGrid(games) {
  const spotlightGrid = document.createElement("div");
  spotlightGrid.className = "spotlight-grid";

  games.forEach((game) => {
    const cardItem = document.createElement("div");
    cardItem.className = "card-item";
    cardItem.appendChild(createGameCardPopular(game));
    spotlightGrid.appendChild(cardItem);
  });

  return spotlightGrid;
}
