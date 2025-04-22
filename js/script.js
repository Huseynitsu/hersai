$(document).ready(function () {
  var swiper = new Swiper(".swiper-container-h", {
    direction: "horizontal",
    effect: "slide",
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    autoplay: true,
    parallax: true,
    speed: 1600,
    rtl: true,
    loop: true,
    loopFillGroupWithBlank: !0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
  var swiper = new Swiper(".swiper-container-h1", {
    direction: "horizontal",
    effect: "slide",
    autoplay: false,
    parallax: true,
    speed: 1600,
    rtl: true,
    loop: true,
    loopFillGroupWithBlank: !0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
  });

  var swiper = new Swiper(".swiper-container-h1", {
    direction: "horizontal",
    effect: "slide",
    autoplay: true,
    parallax: true,
    speed: 1600,
    rtl: true,
    loop: true,
    loopFillGroupWithBlank: !0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const secondSection = document.querySelector(".about-section");
  const secondHeader = document.querySelector(".second-header");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.add("hide");
          secondHeader.classList.add("show");
        } else {
          // Only remove if we're going back to first section
          if (window.scrollY < window.innerHeight) {
            header.classList.remove("hide");
            secondHeader.classList.remove("show");
          }
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of section is visible
    }
  );

  if (secondSection) {
    observer.observe(secondSection);
  }
});

const elements = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => observer.observe(el));
