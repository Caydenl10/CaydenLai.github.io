/* ============================================================
   ECE ePortfolio — script.js
   All interactivity: hamburger, active nav, scroll animations,
   contact form validation, footer year.
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
  initHamburger();
  setActiveNav();
  initScrollAnimations();
  initContactForm();
  initAnchorScroll();
  setFooterYear();
});

/* ------------------------------------------------------------
   Hamburger Menu Toggle
   ------------------------------------------------------------ */
function initHamburger() {
  var btn = document.getElementById('hamburger-btn');
  var menu = document.getElementById('nav-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('nav-open');
    btn.classList.toggle('is-active');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a nav link is clicked (important for mobile UX)
  var navLinks = menu.querySelectorAll('a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('nav-open');
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('nav-open');
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ------------------------------------------------------------
   Active Nav Link Highlight
   Reads the current page URL and marks the matching nav link.
   ------------------------------------------------------------ */
function setActiveNav() {
  var path = window.location.pathname;
  // Get the filename from the path (handles both /page.html and /subdir/page.html)
  var filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  var navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(function (link) {
    link.classList.remove('active');
    var href = link.getAttribute('href');
    if (href === filename || (filename === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ------------------------------------------------------------
   Scroll-Triggered Reveal Animations
   Adds .revealed class to .reveal elements when they enter
   the viewport. Uses IntersectionObserver for performance.
   ------------------------------------------------------------ */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: just show everything if IntersectionObserver isn't supported
    document.querySelectorAll('.reveal, .reveal-left').forEach(function (el) {
      el.classList.add('revealed');
    });
    return;
  }

  var options = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, options);

  document.querySelectorAll('.reveal, .reveal-left').forEach(function (el) {
    observer.observe(el);
  });
}

/* ------------------------------------------------------------
   Contact Form Validation
   Validates required fields and shows inline error messages.
   On valid submit, replaces the form with a success message.
   NOTE: This is a static site — no data is actually sent.
   ------------------------------------------------------------ */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nameInput    = document.getElementById('contact-name');
    var emailInput   = document.getElementById('contact-email');
    var messageInput = document.getElementById('contact-message');
    var nameError    = document.getElementById('name-error');
    var emailError   = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');

    var isValid = true;

    // Reset previous error states
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);

    // Validate name
    if (!nameInput || nameInput.value.trim() === '') {
      showError(nameInput, nameError, 'Please enter your name.');
      isValid = false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || emailInput.value.trim() === '') {
      showError(emailInput, emailError, 'Please enter your email address.');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, emailError, 'Please enter a valid email address.');
      isValid = false;
    }

    // Validate message
    if (!messageInput || messageInput.value.trim() === '') {
      showError(messageInput, messageError, 'Please enter a message.');
      isValid = false;
    }

    if (!isValid) return;

    // All valid — show success confirmation
    var submitterName = nameInput.value.trim().split(' ')[0]; // Use first name
    var successHtml = '<div class="form-success" role="status" aria-live="polite">'
      + '<h3>Message received!</h3>'
      + '<p>Thank you, <strong>' + escapeHtml(submitterName) + '</strong>. '
      + 'Your message has been noted. I\'ll follow up at <strong>'
      + escapeHtml(emailInput.value.trim()) + '</strong> within 48 hours.</p>'
      + '</div>';

    form.parentNode.insertAdjacentHTML('beforeend', successHtml);
    form.remove();
  });
}

function showError(input, errorEl, message) {
  if (!input || !errorEl) return;
  input.classList.add('error');
  errorEl.textContent = message;
  errorEl.classList.add('visible');
}

function clearError(input, errorEl) {
  if (!input || !errorEl) return;
  input.classList.remove('error');
  errorEl.classList.remove('visible');
}

// Prevent XSS in the success message
function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/* ------------------------------------------------------------
   Smooth Anchor Scroll (resume.html jump links)
   Accounts for the sticky header height so headings aren't
   hidden behind the nav bar after scrolling.
   ------------------------------------------------------------ */
function initAnchorScroll() {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  if (anchorLinks.length === 0) return;

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      var headerHeight = document.querySelector('.site-header')
        ? document.querySelector('.site-header').offsetHeight
        : 0;
      var targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });
}

/* ------------------------------------------------------------
   Footer Year
   Keeps the copyright year current automatically.
   ------------------------------------------------------------ */
function setFooterYear() {
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
