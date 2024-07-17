'use script';

function goToScroll(name) {
    let location = document.querySelector("#" + name).offsetTop;
    console.log(location);
    window.scrollTo({top: location - 0, behavior: 'smooth'}) };