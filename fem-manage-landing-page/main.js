const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", function () {
  primaryNav.toggleAttribute("data-visible");
  this.setAttribute("aria-expanded", primaryNav.hasAttribute("data-visible"));
  primaryHeader.toggleAttribute("data-overlay");
});
