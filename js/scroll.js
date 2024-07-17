'use script';

function goToScroll(id) {
    let location = document.querySelector(id).offsetTop;
    window.scrollTo({ top: location - 0, behavior: "smooth" });
}