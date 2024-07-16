'use script';

const scrollTop = function () {
  // html 버튼 만들기
  const scrollBtn = document.createElement("button");

  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "btn-top");
  document.body.appendChild(scrollBtn);

  // hide/show 버튼 베이스를 스크롤 거리에 따라 설정
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };

  window.addEventListener("scroll", scrollBtnDisplay);
  // 버튼 클릭시 위로가기
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };

  scrollBtn.addEventListener("click", scrollWindow);
};

scrollTop();