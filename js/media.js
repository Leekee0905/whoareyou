const scrollTop = function () {
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "btn-top");
  document.body.appendChild(scrollBtn);
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };
  document.addEventListener("scroll", scrollBtnDisplay);
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      window.scrollBy({ top: wrap.getBoundingClientRect().top, behavior: 'smooth' });
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();

// 반응형 대응
const wrap = document.querySelector("#wrap");
const mediaQueryString = "(max-width: 1040px)";
const mediaQueryList = window.matchMedia(mediaQueryString);
function handleMediaChange(viewport) {
  if (!viewport.matches) wrap.className = "desktop";
  if (viewport.matches) wrap.className = "tablet";
  if (window.matchMedia("(max-width: 768px)").matches)
    wrap.className = "mobile";
}
mediaQueryList.addListener(handleMediaChange);
window.addEventListener("resize", function () {
  handleMediaChange(mediaQueryList);
});