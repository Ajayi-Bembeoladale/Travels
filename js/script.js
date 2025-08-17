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

// Smooth scroll for buttons/links with data-scroll
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = btn.getAttribute('data-scroll');
    const el = document.querySelector(target);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('active');
    }
  });
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});

// Simple enquiry form handler (no API)
const form = document.getElementById('enquiryForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // Basic feedback
  note.textContent = `Thanks, ${data.name || 'traveler'}! We'll email you at ${data.email} shortly.`;
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();