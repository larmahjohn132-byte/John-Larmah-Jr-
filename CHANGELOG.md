# Changelog — Roast Toast Coast Cafe Menu Page

All notable changes to this project will be documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.2.0] — Final Submission Release

### Added
- CSS custom properties (`:root` design tokens) for the full colour palette and spacing — one place to re-theme the entire page
- `<footer class="cafe-footer">` with opening hours and location address
- Price tags (`<span class="item-price">`) on every menu item, aligned right with flexbox
- Chevron indicator (`▾`) on the toggle button that rotates 180° when the menu is open (pure CSS, no JS)
- `:focus-visible` outline on the toggle button for keyboard users
- `aria-controls`, `aria-labelledby`, and `aria-label` attributes throughout for full screen-reader support
- `gap: 24px` on `.content` flex container for consistent section spacing
- Lato `700` weight added to Google Fonts request

### Changed
- Menu toggle changed from `<h2>` to a semantic `<button>` — keyboard-focusable (Tab), activatable (Enter/Space), announced correctly by screen readers
- Menu open/close now uses CSS `max-height: 0 → 500px` transition instead of `display: none/block` — smooth animated expand/collapse
- Toggle state now driven by `aria-expanded` attribute as single source of truth (read by both CSS and JS)
- `script.js` reads `aria-expanded` instead of `.style.display` — eliminates first-click ambiguity bug
- `script.js` toggles `.is-open` class on `<ul>` instead of setting inline `style.display`
- `.menu-section` shadow softened (`rgba` opacity reduced) for a more refined look
- `.content` padding increased to `40px 20px` for better breathing room
- README.md fully rewritten to reflect current project state and bootcamp context

### Fixed
- Stale README references to `display: none`, removed `<noscript>`, and old `<h2>` toggle
- Previously unchecked "Known Issues" items are now all resolved and removed

---

## [1.1.0] — Refactor Release

### Added
- `style.css` — extracted all inline styles from `Menu.html` into a dedicated external stylesheet
- `script.js` — extracted inline `<script>` block into a dedicated external JavaScript file
- `README.md` — full project documentation including structure, usage, and known issues
- `CHANGELOG.md` — this file
- CSS media query for responsive layout (stacks to single column on screens ≤ 768px)
- `.menu-toggle.open` CSS class for visual feedback when menu is expanded
- `user-select: none` on the toggle heading to prevent accidental text selection
- `transition: color 0.2s ease` on the toggle heading for smooth hover effect
- `DOMContentLoaded` event listener in `script.js` replacing the inline `onclick` attribute
- Guard clause in `toggleMenuItems()` to safely handle missing DOM elements
- `<noscript>` fallback in `Menu.html` so menu items remain visible when JS is disabled
- `min-height: 400px` on `.image-container` to prevent collapse on mobile

### Changed
- `Menu.html` now links `style.css` and `script.js` as external files
- `<script>` tag now uses `defer` attribute
- `<h2 class="menu-toggle">` no longer carries an inline `onclick` attribute
- `.menu-section` margin updated to use `box-sizing: border-box` model

### Fixed
- Two-column layout now collapses gracefully on small/mobile screens
- Toggle heading now correctly reflects open/closed state via `.open` class

---

## [1.0.0] — Initial Release

### Added
- `Menu.html` — single-file cafe menu page
  - Two-column CSS Grid layout (menu content + hero image)
  - Glassmorphism header card
  - Collapsible menu section with JS toggle
  - Google Fonts (`Lato`) integration
  - Unsplash hero background image
  - Inline CSS and JavaScript

---
