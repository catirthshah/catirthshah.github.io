const slider = document.getElementById("slider");

let scrollAmount = 0;
const slideWidth = 320;

function manualScroll(amount) {
    scrollAmount += amount;

    if (scrollAmount < 0) {
        scrollAmount = slider.scrollWidth - slider.clientWidth;
    }

    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}

function autoSlide() {
    manualScroll(slideWidth);
}

setInterval(autoSlide, 3000); // auto move every 3 seconds
