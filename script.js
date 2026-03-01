let index = 0;
const slider = document.getElementById("slider");
const slides = slider.children.length;

function moveSlide() {
    index = (index + 1) % slides;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlide, 4000);

/* Touch support */
let startX = 0;

slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) moveSlide();
    if (endX - startX > 50) {
        index = (index - 1 + slides) % slides;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});
