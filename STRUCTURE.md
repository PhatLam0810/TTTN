# Project Structure Documentation

## Directory Tree

```
my-app-vanilla/
│
├── 📄 index.html                    # Home page (redirects to game-screen)
├── 📄 game-screen.html             # Main game portal page
│
├── 📁 css/                          # Stylesheets
│   ├── globals.css                 # Global styles & CSS variables
│   ├── header.css                  # Header component styles
│   ├── footer.css                  # Footer component styles
│   ├── game-screen.css             # Main screen layout styles
│   └── cards.css                   # Game card component styles
│
├── 📁 js/                           # JavaScript modules
│   ├── data.js                     # Constants & game data
│   ├── components.js               # UI component factories
│   └── app.js                      # Main application logic
│
├── 📁 images/                       # Image assets
│   ├── logo.png
│   ├── gamehot.png
│   ├── My.png
│   ├── Gift.png
│   ├── Crown.png
│   ├── Profile.png
│   └── GAME NỔI BẬT (...).png/jpg  # Game images
│
├── 📄 package.json                 # Project metadata
├── 📄 .gitignore                   # Git ignore rules
│
├── 📄 README.md                    # Full documentation
├── 📄 QUICKSTART.md                # Quick setup guide
├── 📄 CONVERSION_REPORT.md         # Conversion details
├── 📄 STRUCTURE.md                 # This file
│
├── 🔧 start-server.bat             # Windows server starter
└── 🔧 start-server.sh              # Unix server starter
```

---

## File Descriptions

### HTML Files

#### `index.html`

- Entry point for the application
- Automatically redirects to `game-screen.html`
- Lightweight redirect using JavaScript

#### `game-screen.html`

- Main application page
- Contains the page container div
- Links all CSS and JavaScript files
- Uses ES6 modules for loading JavaScript

### CSS Files

#### `css/globals.css`

- Global CSS reset and variables
- Root color scheme definition
- Typography defaults
- Utility classes
- Scrollbar styling

#### `css/header.css`

- Header sticky positioning
- Navigation menu styles
- Logo styling
- Login button styling
- Mobile responsive header

#### `css/footer.css`

- Footer background and layout
- Company information styling
- Contact information display
- Social links
- Mobile responsive footer

#### `css/game-screen.css`

- Main page layout
- Hero section styling
- Service bar layout
- Filter bar styling
- Card grid layout
- Responsive breakpoints

#### `css/cards.css`

- Game card styles
- Card hover effects
- Badge positioning
- Image overlay effects
- Popular card variant styling
- Button styling within cards

### JavaScript Files

#### `js/data.js`

**Exports:**

- `COLORS` - Color palette object
- `NAV_ITEMS` - Navigation menu items
- `SERVICE_CARDS` - Service icon cards
- `FILTERS` - Game category filters
- `GAME_LIST` - List of games
- `NEW_RELEASES` - New game releases
- `SPOTLIGHT_GAMES` - Featured games
- `LOGO_PATH` - Logo image path
- `GAME_HOT_BADGE` - Hot badge image path

**Usage:**

```javascript
import { GAME_LIST, FILTERS } from "./data.js";
```

#### `js/components.js`

**Exports (Component Factories):**

- `createHeader()` - Header component
- `createFooter()` - Footer component
- `createGameCard(game)` - Individual game card
- `createGameCardPopular(game)` - Featured game card
- `createServiceBar()` - Service items bar
- `createFilterBar(callback)` - Filter buttons with callbacks
- `createCardGrid(games)` - Grid of game cards
- `createSpotlightGrid(games)` - Grid of featured cards

**Usage:**

```javascript
import { createGameCard, createHeader } from "./components.js";

const card = createGameCard(gameData);
const header = createHeader();
```

#### `js/app.js`

**Main Application Class:**

- `GameScreenApp` - Main application controller

**Methods:**

- `init()` - Initialize the app
- `setupPage()` - Build page structure
- `createHeroSection()` - Build hero section
- `createGameListSection()` - Build game list section
- `createNewReleasesSection()` - Build new releases
- `createSpotlightSection()` - Build spotlight section
- `updateGameList()` - Update game list based on filter
- `handleFilterChange()` - Handle filter selection
- `toggleShowMore()` - Toggle show more/less
- `attachEventListeners()` - Setup event handlers

---

## Data Flow

```
┌─────────────┐
│ index.html  │
└──────┬──────┘
       │ redirect
       ▼
┌─────────────────────┐
│ game-screen.html    │
│ - Loads CSS files   │
│ - Loads js/app.js   │
└──────┬──────────────┘
       │
       ▼
┌──────────────────────┐
│ app.js               │
│ - GameScreenApp      │
│   - Imports data.js  │
│   - Imports comp.js  │
└──────┬───────────────┘
       │
       ├─→ js/data.js (imports)
       │   └─ Game data & constants
       │
       └─→ js/components.js (imports)
           ├─ createHeader()
           ├─ createFooter()
           ├─ createGameCard()
           ├─ createGameCardPopular()
           └─ ...other components
```

---

## Module Dependencies

```
game-screen.html
    │
    └── js/app.js
        ├── js/data.js
        │   ├── GAME_LIST
        │   ├── NEW_RELEASES
        │   ├── SPOTLIGHT_GAMES
        │   ├── SERVICE_CARDS
        │   └── FILTERS
        │
        └── js/components.js
            ├── createHeader()
            ├── createFooter()
            ├── createGameCard()
            ├── createGameCardPopular()
            ├── createServiceBar()
            ├── createFilterBar()
            ├── createCardGrid()
            └── createSpotlightGrid()
```

---

## Image Organization

```
images/
├── logo.png                    # Site logo (48x48)
├── gamehot.png                # "HOT" badge graphic
├── My.png                      # MYE COIN icon
├── Gift.png                    # GIFT CODE icon
├── Crown.png                   # VIP CLUB icon
├── Profile.png                 # ACCOUNT icon
│
└── GAME IMAGES:
    ├── GAME NỔI BẬT (1).png
    ├── GAME NỔI BẬT (2).png
    ├── GAME NỔI BẬT (3).png
    ├── GAME NỔI BẬT (4).jpg
    └── GAME NỔI BẬT (5).jpg
```

---

## CSS Variables (Color Scheme)

```css
:root {
  --color-primary: #093a88; /* Main blue */
  --color-active: #ff7900; /* Orange accent */
  --color-background: #ffffff; /* White background */
  --color-border: #dce4f2; /* Light gray border */
  --color-muted: #64748b; /* Muted gray text */
  --color-text: #093a88; /* Primary text color */
}
```

---

## Responsive Breakpoints

```css
/* Desktop (default) */
max-width: 1320px

/* Tablet */
@media (max-width: 1024px) {
  /* tablet optimizations */
}

/* Mobile Landscape */
@media (max-width: 860px) {
  /* Hide nav, adjust layout */
}

/* Mobile Portrait */
@media (max-width: 640px) {
  /* Single column, small text */
}
```

---

## Component Hierarchy

```
Root (.page)
├── Header
│   ├── Logo
│   ├── Nav Links
│   └── Login Button
│
├── Main
│   ├── Hero Section
│   │   ├── Services Title
│   │   └── Service Bar
│   │       ├── Service Item
│   │       ├── Service Item
│   │       └── ...
│   │
│   ├── Game List Section
│   │   ├── Section Title
│   │   ├── View More Button
│   │   ├── Filter Bar
│   │   │   ├── Filter Button
│   │   │   └── ...
│   │   └── Card Grid
│   │       ├── Game Card
│   │       └── ...
│   │
│   ├── New Releases Section
│   │   └── Card Grid
│   │       └── Game Cards
│   │
│   └── Spotlight Section
│       └── Spotlight Grid
│           └── Popular Game Cards
│
└── Footer
    ├── Logo
    ├── Contact Info
    ├── Company Info
    ├── Policy Links
    └── Copyright
```

---

## ES6 Module Imports

```javascript
// app.js imports
import { createHeader, createFooter /* ... */ } from "./components.js";
import { GAME_LIST, NEW_RELEASES /* ... */ } from "./data.js";

// components.js imports
import { NAV_ITEMS, SERVICE_CARDS /* ... */ } from "./data.js";
```

---

## Event Listeners

1. **Filter Buttons** - Click to filter games by category
2. **View More Button** - Click to show/hide more games
3. **Login Button** - Click to show alert (placeholder)
4. **Service Items** - Click to log service name (extensible)

---

## Performance Optimizations

- ✅ No external dependencies
- ✅ Minimal CSS (no bloat)
- ✅ Efficient DOM manipulation
- ✅ CSS Grid for layouts
- ✅ Lazy loading ready
- ✅ Mobile-first design

---

## File Sizes (Estimated)

| File            | Size       |
| --------------- | ---------- |
| globals.css     | ~2 KB      |
| header.css      | ~1.5 KB    |
| footer.css      | ~1.5 KB    |
| game-screen.css | ~3 KB      |
| cards.css       | ~4 KB      |
| data.js         | ~3 KB      |
| components.js   | ~6 KB      |
| app.js          | ~5 KB      |
| **Total**       | **~26 KB** |

---

## Setup Instructions

See [QUICKSTART.md](QUICKSTART.md) for setup details.

---

## Related Documentation

- [README.md](README.md) - Full user guide
- [CONVERSION_REPORT.md](CONVERSION_REPORT.md) - Conversion details
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide

---

Generated: 2026-06-03  
Last Updated: 2026-06-03
