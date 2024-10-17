let slider = document.querySelector(".slider");
let wrapper = document.querySelector(".wrapper");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let currentPos = 0;
let scrollVal = 320;

let maxScrool = -slider.scrollWidth + wrapper.offsetWidth;


prevBtn.style.opacity = "0";

nextBtn.addEventListener("click", () => {
  scrollSlider(-1);
});
prevBtn.addEventListener("click", () => {
  scrollSlider(1);
});

const scrollSlider = val => {
  currentPos += val * scrollVal;

  if (currentPos >= 0) {
    currentPos = 0;
    prevBtn.style.opacity = "0";
  } else {
    prevBtn.style.opacity = "1";
  }

  if (currentPos <= maxScrool) {
    currentPos = maxScrool;
    nextBtn.style.opacity = "0";
  } else {
    nextBtn.style.opacity = "1";
  }

  slider.style.left = currentPos + "px";
};
