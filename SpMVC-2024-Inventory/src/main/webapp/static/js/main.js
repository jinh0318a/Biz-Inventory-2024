document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;
  const slideInterval = 5000;

  const firstSlide = slide[0].cloneNode(true);
  const lastSlide = slide[slide.length - 1].cloneNode(true);
  slides.appendChild(firstSlide);
  slides.insertBefore(lastSlide, slide[0]);

  function showSlide(index) {
    slides.style.transition = "transform 3s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function nextSlide() {
    if (currentIndex >= slide.length) {
      slides.style.transition = "none";
      slides.style.transform = `translateX(-100%)`;
      currentIndex = 1;
      setTimeout(() => showSlide(currentIndex), 0);
    } else {
      showSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex <= 0) {
      slides.style.transition = "none";
      slides.style.transform = `translateX(-${slide.length * 100}%)`;
      currentIndex = slide.length - 1;
      setTimeout(() => showSlide(currentIndex), 0);
    } else {
      showSlide(currentIndex - 1);
    }
  }

  prevButton.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  let slideTimer = setInterval(nextSlide, slideInterval);

  function resetInterval() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, slideInterval);
  }

  slides.style.transform = `translateX(-100%)`;
  currentIndex = 1;
});
