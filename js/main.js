const selectElement = function (element) {
  return document.querySelector(element);
};

const menuToggler = selectElement(".c-toggle");
const nav = selectElement(".l-header__nav");
const header = selectElement(".l-header");

menuToggler.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const startPos = 10;

window.addEventListener("scroll", () => {
  const nowPos = window.pageYOffset;
  header.classList.toggle("active", nowPos >= startPos);
});

const sr = new ScrollReveal();

const baseConfig = function (origin, distance = "5rem") {
  return {
    origin: origin,
    duration: 1000,
    distance: distance,
    delay: 400,
  };
};

// sr.reveal(".c-global-headline .c-headline", {
//   scale: 0.1,
// });

sr.reveal(".animate-left", baseConfig("left"));
sr.reveal(".animate-right", baseConfig("right"));
sr.reveal(".animate-bottom", baseConfig("bottom"));
sr.reveal(".animate-top", baseConfig("top"));
sr.reveal(".animate-head", baseConfig("bottom", "2rem"));
