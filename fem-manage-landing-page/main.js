const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", function () {
  primaryNav.toggleAttribute("data-visible");
  this.setAttribute("aria-expanded", primaryNav.hasAttribute("data-visible"));
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  responsive: {
    480: {
      dots: false,
    },
  },
});
