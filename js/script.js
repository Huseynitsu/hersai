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

  Fancybox.bind(".parent > div:not(.div12) img", {
    groupAll: true,
  });

  const blogSwiper = new Swiper(".blogSwiper", {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    effect: "slide",
    pauseOnMouseEnter: false,
    direction: "horizontal",
    speed: 8000,
    freeMode: true,
    autoplay: {
      enable: false,
      delay: 0,
    },
    navigation: {
      enable: false,
      nextEl: ".fdb-customerSwiper-next",
      prevEl: ".fdb-customerSwiper-prev",
    },
  });

  $(".faq-question").click(function () {
    const item = $(this).closest(".faq-item");

    // Digər açıq sualları bağla
    $(".faq-item")
      .not(item)
      .removeClass("active")
      .find(".faq-answer")
      .slideUp();

    // Cari elementin açılıb-açılmadığını dəyiş
    item
      .toggleClass("active")
      .find(".faq-answer")
      .stop(true, true)
      .slideToggle();
  });
});

const header = document.querySelector(".header");
const secondHeader = document.querySelector(".second-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("hide");
    secondHeader.classList.add("show");
  } else {
    header.classList.remove("hide");
    secondHeader.classList.remove("show");
  }
});
