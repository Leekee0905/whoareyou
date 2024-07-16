'use script';
function goToScroll(name) {
    let location = document.querySelector("#" + name).offsetTop;
    window.scrollTo({top: location - 100, behavior: 'smooth'});

}