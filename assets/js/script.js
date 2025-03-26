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

// add event to all nav links
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetSection = this.textContent.toLowerCase();
    
    // Remove active class from all pages and links
    navigationLinks.forEach(link => link.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));
    
    // Add active class to current link
    this.classList.add("active");
    
    // Show the matching page
    const targetPage = document.querySelector(`[data-page="${targetSection}"]`);
    if (targetPage) {
      targetPage.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
});
