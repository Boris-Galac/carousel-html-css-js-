const carousel = document.querySelector(".carousel__wrapper");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const innerWrapper = document.querySelector(".carousel__inner-wrapper");
let direction;

prev.addEventListener("click", (e) => {
  direction = 1;
  innerWrapper.style.transition = "transform 0.5s ease-in-out";
  innerWrapper.style.transform = "translateX(20%)";
});

next.addEventListener("click", nextSlide);

let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  direction = -1;
  innerWrapper.style.transition = "transform 0.5s ease-in-out";
  innerWrapper.style.transform = "translateX(-20%)";
}

innerWrapper.addEventListener("transitionend", (e) => {
  if (direction === -1) {
    innerWrapper.appendChild(innerWrapper.firstElementChild);
  } else if (direction === 1) {
    innerWrapper.prepend(innerWrapper.lastElementChild);
  }

  innerWrapper.style.transition = "none";
  innerWrapper.style.transform = "translateX(0)";
});
