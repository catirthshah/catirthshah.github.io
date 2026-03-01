let index = 0;
const slider = document.getElementById("slider");
const slides = slider.children.length;

function moveSlide() {
    index = (index + 1) % slides;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlide, 3500);
