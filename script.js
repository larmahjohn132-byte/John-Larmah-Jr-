/**
 * Roast Toast Coast Cafe — Menu Interactivity
 * File: script.js
 *
 * Handles the collapsible menu section toggle.
 * Uses class-based state + aria-expanded for accessibility.
 */

'use strict';

/**
 * Toggles the visibility of the menu items list.
 *
 * State is driven entirely by the `aria-expanded` attribute on the
 * button — a single source of truth readable by both CSS and JS.
 * The CSS transition on `max-height` handles the smooth animation.
 */
function toggleMenuItems() {
    const menuItems  = document.querySelector('.menu-items');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!menuItems || !menuToggle) return; // Guard: elements must exist

    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    // Flip state
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuItems.classList.toggle('is-open', !isOpen);
}

/**
 * Initialise — attach event listener once the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenuItems);
    }
});
