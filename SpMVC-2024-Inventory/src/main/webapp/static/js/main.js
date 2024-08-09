document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("section.main");
  const slides = main?.querySelector("div.slides");
  const slide = main?.querySelectorAll("div.slide");

  let currentIndex = 0;
  const sliderCount = slide?.length;
  const slideInterval = 3000;
  const sliderWidth = 1200;

  const slideClone = slides?.firstElementChild.cloneNode(true);
  slides?.appendChild(slideClone);

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

    if (currentIndex === 0) {
      showPopup();
    }
  }

  function openPopup() {
    const popupUrl = `${rootPath}/detail/popup`;
    window.open(popupUrl, "popupWindow", "width=600,height=800,scrollbars=yes");
  }

  function shouldShowPopup() {
    const today = new Date().toISOString().split("T")[0];
    const lastShownDate = localStorage.getItem("lastPopupDate");

    if (lastShownDate !== today) {
      localStorage.setItem("lastPopupDate", today);
      return true;
    }
    return false;
  }

  window.onload = function () {
    if (shouldShowPopup()) {
      openPopup();
    }
  };

  setInterval(sliderEffect, slideInterval);
});
