// Import components and data
import {
  createHeader,
  createFooter,
  createServiceBar,
  createFilterBar,
  createCardGrid,
  createSpotlightGrid,
} from "./components.js";

import { GAME_LIST, NEW_RELEASES, SPOTLIGHT_GAMES } from "./data.js";

class GameScreenApp {
  constructor() {
    this.activeFilter = "Tất cả";
    this.showMore = false;
    this.init();
  }

  init() {
    this.setupPage();
    this.attachEventListeners();
  }

  setupPage() {
    const page = document.querySelector(".page") || document.body;
    page.className = "page";

    // Clear existing content
    page.innerHTML = "";

    // Create header
    const header = createHeader();
    page.appendChild(header);

    // Create main content
    const main = document.createElement("main");
    main.className = "main";

    // Hero section with services
    const heroSection = this.createHeroSection();
    main.appendChild(heroSection);

    // Game list section
    const gameListSection = this.createGameListSection();
    main.appendChild(gameListSection);

    // New releases section
    const newReleasesSection = this.createNewReleasesSection();
    main.appendChild(newReleasesSection);

    // Spotlight section
    const spotlightSection = this.createSpotlightSection();
    main.appendChild(spotlightSection);

    page.appendChild(main);

    // Create footer
    const footer = createFooter();
    page.appendChild(footer);
  }

  createHeroSection() {
    const section = document.createElement("section");
    section.className = "hero-section";

    const titleBlock = document.createElement("div");
    titleBlock.className = "title-block";

    const subtitle = document.createElement("p");
    subtitle.className = "sub-title";
    subtitle.textContent = "DỊCH VỤ";

    const serviceBar = createServiceBar();

    titleBlock.appendChild(subtitle);
    titleBlock.appendChild(serviceBar);
    section.appendChild(titleBlock);

    return section;
  }

  createGameListSection() {
    const section = document.createElement("section");
    section.className = "section";

    // Section header
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header";

    const titleDiv = document.createElement("div");
    const subtitle = document.createElement("p");
    subtitle.className = "sub-title";
    subtitle.textContent = "DANH SÁCH GAME";
    titleDiv.appendChild(subtitle);
    sectionHeader.appendChild(titleDiv);

    const viewMoreBtn = document.createElement("button");
    viewMoreBtn.className = "view-more-btn";
    viewMoreBtn.textContent = this.showMore ? "Thu gọn" : "Xem thêm";
    viewMoreBtn.addEventListener("click", () => this.toggleShowMore());
    sectionHeader.appendChild(viewMoreBtn);

    section.appendChild(sectionHeader);

    // Filter bar
    const filterBar = createFilterBar((filterLabel) =>
      this.handleFilterChange(filterLabel, section),
    );
    section.appendChild(filterBar);

    // Card grid
    this.gameListContainer = document.createElement("div");
    this.updateGameList();
    section.appendChild(this.gameListContainer);

    return section;
  }

  createNewReleasesSection() {
    const section = document.createElement("section");
    section.className = "section";

    // Section header
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header";

    const titleDiv = document.createElement("div");
    const subtitle = document.createElement("p");
    subtitle.className = "sub-title";
    subtitle.textContent = "GAME MỚI PHÁT HÀNH";
    titleDiv.appendChild(subtitle);
    sectionHeader.appendChild(titleDiv);

    const viewMoreBtn = document.createElement("button");
    viewMoreBtn.className = "view-more-btn";
    viewMoreBtn.textContent = "Xem thêm";
    sectionHeader.appendChild(viewMoreBtn);

    section.appendChild(sectionHeader);

    // Card grid
    const cardGrid = createCardGrid(NEW_RELEASES);
    section.appendChild(cardGrid);

    return section;
  }

  createSpotlightSection() {
    const section = document.createElement("section");
    section.className = "section";

    // Section header
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header";

    const titleDiv = document.createElement("div");
    const subtitle = document.createElement("p");
    subtitle.className = "sub-title";
    subtitle.textContent = "GAME NỔI BẬT";
    titleDiv.appendChild(subtitle);
    sectionHeader.appendChild(titleDiv);

    section.appendChild(sectionHeader);

    // Spotlight grid
    const spotlightGrid = createSpotlightGrid(SPOTLIGHT_GAMES);
    section.appendChild(spotlightGrid);

    return section;
  }

  updateGameList() {
    const filtered =
      this.activeFilter === "Tất cả"
        ? GAME_LIST
        : GAME_LIST.filter((game) => game.category === this.activeFilter);

    const games = this.showMore ? filtered : filtered.slice(0, 4);

    // Clear and update
    this.gameListContainer.innerHTML = "";
    const cardGrid = createCardGrid(games);
    this.gameListContainer.appendChild(cardGrid);
  }

  handleFilterChange(filterLabel, section) {
    this.activeFilter = filterLabel;
    this.showMore = false;
    this.updateGameList();

    // Update view more button text
    const viewMoreBtn = section.querySelector(".view-more-btn");
    if (viewMoreBtn) {
      viewMoreBtn.textContent = "Xem thêm";
    }
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.updateGameList();

    // Update button text in all sections
    const buttons = document.querySelectorAll(".view-more-btn");
    if (buttons.length > 0) {
      buttons[0].textContent = this.showMore ? "Thu gọn" : "Xem thêm";
    }
  }

  attachEventListeners() {
    // Login button
    const loginBtn = document.querySelector(".header-login");
    if (loginBtn) {
      loginBtn.addEventListener("click", () => {
        alert("Chức năng đăng nhập chưa được triển khai");
      });
    }

    // Service items
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach((item) => {
      item.addEventListener("click", () => {
        const title = item.querySelector("span:last-child").textContent;
        console.log(`Clicked on service: ${title}`);
      });
    });
  }
}

// Export for module usage
export { GameScreenApp };

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new GameScreenApp();
});
