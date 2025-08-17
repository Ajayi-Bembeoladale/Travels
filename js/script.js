'use strict';

// Mobile nav toggle
const nav = document.querySelector('[data-navbar]');
const toggler = document.querySelector('[data-nav-toggler]');

toggler.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggler.setAttribute(
    'aria-label',
    nav.classList.contains('active') ? 'Close Menu' : 'Open Menu'
  );
});