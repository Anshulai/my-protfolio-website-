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
    // Find the matching page
    const pageId = this.innerHTML.toLowerCase();
    
    // Remove active class from all pages and links
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].dataset.page === pageId) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

    window.scrollTo(0, 0);
  });
}
