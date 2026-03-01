function scrollLeft() {
    document.getElementById('slider').scrollBy({
        left: -320,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('slider').scrollBy({
        left: 320,
        behavior: 'smooth'
    });
}
