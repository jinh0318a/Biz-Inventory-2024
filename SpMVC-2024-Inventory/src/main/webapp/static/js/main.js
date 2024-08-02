let index = 0;
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;

function showNextSlide() {
  index = (index + 1) % slideCount;
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

setInterval(showNextSlide, 3000);
