// Add path prefix handling for GitHub Pages
const pathPrefix = window.location.hostname === 'anshulai.github.io' ? '/my-protfolio-website-' : '';

// Function to fix asset paths
function getAssetPath(path) {
  return `${pathPrefix}/${path}`.replace(/\/+/g, '/');
}

// Update all asset paths
document.addEventListener('DOMContentLoaded', () => {
  // Handle images
  document.querySelectorAll('img[src^="assets/"]').forEach(img => {
    img.src = getAssetPath(img.getAttribute('src'));
  });

  // Handle CSS files
  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    if (link.href.includes('assets/')) {
      link.href = getAssetPath(link.getAttribute('href'));
    }
  });

  // Handle favicons
  document.querySelectorAll('link[rel="shortcut icon"]').forEach(link => {
    if (link.href.includes('assets/')) {
      link.href = getAssetPath(link.getAttribute('href'));
    }
  });

  // Handle other resources
  document.querySelectorAll('a[href^="assets/"]').forEach(link => {
    link.href = getAssetPath(link.getAttribute('href'));
  });
});

// Rest of your original script.js content below
'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
