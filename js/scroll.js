"use script";

function goToScroll(id) {
  const location = document.querySelector(id).offsetTop;
  window.scrollTo({ top: location - 0, behavior: "smooth" });
}
