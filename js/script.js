const slides = document.querySelectorAll(".slider--slide");
const dotsContainer = document.querySelector(".dots");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;

  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.setAttribute(`data-dot`, `${index}`);
  dotsContainer.append(dot);
});

let currentSlide = 0;

document.querySelector(`[data-dot="${currentSlide}"]`).style.background =
  "#D5DCEE";

btnPrev.addEventListener("click", () => {
  currentSlide--;

  if (currentSlide < 0) currentSlide = slides.length - 1;
  document
    .querySelectorAll(".dot")
    .forEach((dot) => (dot.style.background = "transparent"));
  document.querySelector(`[data-dot="${currentSlide}"]`).style.background =
    "#D5DCEE";

  slides.forEach((slide, slideIndex) => {
    slide.style.transform = `translateX(${(slideIndex - currentSlide) * 100}%)`;
  });
});

btnNext.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide > slides.length - 1) currentSlide = 0;
  document
    .querySelectorAll(".dot")
    .forEach((dot) => (dot.style.background = "transparent"));
  document.querySelector(`[data-dot="${currentSlide}"]`).style.background =
    "#D5DCEE";
  slides.forEach((slide, slideIndex) => {
    slide.style.transform = `translateX(${(slideIndex - currentSlide) * 100}%)`;
  });
});

document.addEventListener("click", ({ target }) => {
  const dot = target.closest(".dot");
  if (!dot) return;
  const pushedDot = dot.dataset.dot;
  currentSlide = pushedDot;
  document
    .querySelectorAll(".dot")
    .forEach((dot) => (dot.style.background = "transparent"));
  document.querySelector(`[data-dot="${currentSlide}"]`).style.background =
    "#D5DCEE";
  slides.forEach((slide, slideIndex) => {
    slide.style.transform = `translateX(${(slideIndex - currentSlide) * 100}%)`;
  });
});
