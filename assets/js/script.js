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
    // Remove 'active' class from all pages first
    pages.forEach(page => page.classList.remove("active"));
    navigationLinks.forEach(link => link.classList.remove("active"));

    // Add 'active' class to the clicked button
    this.classList.add("active");

    // Find and activate the corresponding page
    const buttonText = this.innerHTML.toLowerCase().trim();
    const targetPage = document.querySelector(`[data-page="${buttonText}"]`);
    if (targetPage) {
      targetPage.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
}
