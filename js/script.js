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

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");

let dino = { x: 50, y: 160, width: 40, height: 40, dy: 0 };
let cactus = { x: 800, y: 160, width: 20, height: 40 };
let gravity = 0.5;
let score = 0;
let gameOver = false;
let gameStarted = false;
let speed = 5;

function resetGame() {
  dino.y = 160;
  dino.dy = 0;
  cactus.x = 800;
  score = 0;
  speed = 5;
  gameOver = false;
  document.getElementById("score").innerText = score;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dino
  ctx.fillStyle = "black";
  ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

  // Cactus
  ctx.fillStyle = "black";
  ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);

  // Gravity
  dino.dy += gravity;
  dino.y += dino.dy;

  if (dino.y > 160) {
    dino.y = 160;
    dino.dy = 0;
  }

  // Cactus movement
  cactus.x -= speed;
  if (cactus.x + cactus.width < 0) {
    cactus.x = 800;
    score++;
    document.getElementById("score").innerText = score;

    // Gradual speed increase
    if (speed < 15) {
      speed += 0.2;
    }
  }

  // Collision detection
  if (
    dino.x < cactus.x + cactus.width &&
    dino.x + dino.width > cactus.x &&
    dino.y < cactus.y + cactus.height &&
    dino.y + dino.height > cactus.y
  ) {
    gameOver = true;
    alert("Oyun bitdi! Score: " + score);
  }

  if (!gameOver) {
    requestAnimationFrame(draw);
  }
}

startBtn.addEventListener("click", function () {
  if (!gameStarted || gameOver) {
    resetGame();
    gameStarted = true;
    draw();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && dino.y >= 160 && gameStarted) {
    e.preventDefault();
    dino.dy = -10;
  }
});

canvas.addEventListener("click", function () {
  if (dino.y >= 160 && gameStarted) {
    dino.dy = -10;
  }
});
