let index = 0;
const slider = document.getElementById("slider");
const slides = slider.children.length;
const dotsContainer = document.getElementById("dots");

for (let i = 0; i < slides; i++) {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.children;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
  [...dots].forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

function next() {
  index = (index + 1) % slides;
  updateSlider();
}

function prev() {
  index = (index - 1 + slides) % slides;
  updateSlider();
}

setInterval(next, 4500);

document.querySelector(".arrow.right").onclick = next;
document.querySelector(".arrow.left").onclick = prev;

/* touch support */
let startX = 0;
slider.addEventListener("touchstart", e => startX = e.touches[0].clientX);
slider.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) next();
  if (endX - startX > 50) prev();
});
