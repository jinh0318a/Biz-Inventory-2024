document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("section.main");
  const slider = main.querySelector("div.slider");
  const slides = main.querySelector("div.slides");
  const slide = main.querySelectorAll("div.slide");

  let currentIndex = 0;
  const sliderCount = slide.length;
  const slideInterval = 3000;
  const sliderWidth = 800;

  const slideClone = slides.firstElementChild.cloneNode(true);
  slides.appendChild(slideClone);

  function sliderEffect() {
    currentIndex++;

    slides.style.transition = "all 0.6s";
    slides.style.transform =
      "translateX(-" + sliderWidth * currentIndex + "px)";

    if (currentIndex === sliderCount) {
      setTimeout(() => {
        slides.style.transition = "0s";
        slides.style.transform = "translateX(0px)";
        currentIndex = 0;
      }, 600);
    }
  }

  setInterval(sliderEffect, slideInterval);
});
