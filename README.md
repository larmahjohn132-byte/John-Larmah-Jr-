# Roast Toast Coast Cafe — Menu Page

A responsive, accessible, single-page cafe menu built with semantic HTML5, CSS3, and vanilla JavaScript.  
Built as part of the **IBM Full Stack Development Bootcamp**.

---

## 📁 Project Structure

```
www/
├── Menu.html        # Main HTML page
├── style.css        # External stylesheet (CSS variables, grid, animations)
├── script.js        # External JavaScript (accessible toggle logic)
├── README.md        # Project documentation (this file)
└── CHANGELOG.md     # Version history and change log
```

---

## 🌐 Overview

This project is a fully responsive cafe menu page for **Roast Toast Coast Cafe**.

### Features
- Two-column CSS Grid layout — menu content on the left, full-height hero image on the right
- Collapsible menu section with smooth CSS `max-height` animation, driven by a semantic `<button>`
- Price tags displayed inline with each menu item
- Glassmorphism-style header card with gold typography
- Opening hours and location footer
- Google Fonts (`Lato`) — 300, 400, and 700 weights
- CSS custom properties (design tokens) for easy re-theming
- Fully responsive — stacks to a single column on screens ≤ 768px

---

## 🚀 Getting Started

No build tools or dependencies required.

### Option 1 — Open directly
```
Double-click Menu.html
```

### Option 2 — Serve locally (recommended)
```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Then visit: [http://localhost:8080/Menu.html](http://localhost:8080/Menu.html)

---

## 🎨 Styling

All styles live in [`style.css`](style.css).

### Design Tokens (CSS Variables)
| Variable               | Value                        | Used for                  |
|------------------------|------------------------------|---------------------------|
| `--color-bg`           | `#000000`                    | Page background           |
| `--color-accent`       | `#FFCC00`                    | Gold headings & prices    |
| `--color-accent-hover` | `#FF9933`                    | Hover / open state        |
| `--color-text`         | `#F7F7F7`                    | Body text                 |
| `--color-glass-bg`     | `rgba(255,255,255,0.1)`      | Glassmorphism panels      |
| `--transition`         | `0.2s ease`                  | All transitions           |

### Layout
| Viewport  | Layout                                         |
|-----------|------------------------------------------------|
| > 768px   | Two columns: content left, hero image right    |
| ≤ 768px   | Single column: image above, content below      |

---

## ⚙️ JavaScript

All interactivity lives in [`script.js`](script.js).

### `toggleMenuItems()`
- Reads state from `aria-expanded` on the `<button>` — single source of truth
- Toggles the `.is-open` class on the `<ul>` to trigger the CSS `max-height` animation
- Updates `aria-expanded` so screen readers announce the correct state

---

## ♿ Accessibility

| Feature                        | Implementation                                              |
|-------------------------------|-------------------------------------------------------------|
| Keyboard navigation            | `<button>` element — Tab to focus, Enter/Space to toggle   |
| Screen reader toggle state     | `aria-expanded="true/false"` on the button                 |
| Menu list linked to button     | `aria-controls="menu-list"` + matching `id`                |
| Section labelled               | `aria-labelledby="menu-heading"` on `<section>`            |
| Hero image described           | `role="img"` + `aria-label` on `.image-container`          |
| Focus ring for keyboard users  | `:focus-visible` outline on toggle button                  |
| Page description               | `<meta name="description">` in `<head>`                    |

---

## 📱 Responsive Behaviour

The layout uses a single CSS media query at `768px`.  
On mobile, the hero image appears **above** the content (using `order: -1`) for better visual hierarchy.

---

## 📄 License

This project is for educational/demo purposes as part of the IBM Full Stack Development Bootcamp.  
No license applied.
