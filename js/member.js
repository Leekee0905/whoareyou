import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import db from "./firebase.js";
import {
  ref,
  getStorage,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

const storage = getStorage();
function getImages(imagesName, idx) {
  getDownloadURL(ref(storage, `${imagesName}`)).then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.reponseType = "blob";
    xhr.open("GET", url);
    xhr.send();
    if (imagesName === "git.png") {
      $(`.git-image`).attr("src", url);
    } else if (imagesName === "blog.png") {
      $(`.blog-image`).attr("src", url);
    } else {
      $(`.me${idx}`).attr("src", url);
    }
  });
}
const data = await getDocs(collection(db, "IIIII"));
const member = [];
data.forEach((e) => {
  const row = e.data();
  member.push(row);
});

member.forEach((e, idx) => {
  getImages(e.image, idx);
  getImages("git.png");
  getImages("blog.png");
  const memberHTML = `
  <div class="members-info" id="info${idx}">
    <div class="info-area">
      <div class="img-area"><img class="me${idx}" /></div>
      <div class="info-container">
        <div class="intro-area">
          <div class="member-infolist"><span>이름 : </span>  ${e.name}</div>
          <div class="member-infolist"><span>MBTI : </span> ${e.mbti}</div>
          <div class="member-infolist"><span>TMI : </span> ${e.tmi}</div>
          <div class="member-infolist"><span>장점 : </span> ${e.advantages}</div>
        </div>
        <div class="members-otherinfo">
          <span class="blog">
            <span class="img">
              <img class="git-image"  alt="git">
            </span>
            <a href="${e.github}">${e.github}</a>
          </span>
          <span class="blog">
            <span class="img">
              <img class="blog-image"  alt="블로그링크"> 
            </span>
            <a href="${e.blog}">${e.blog}</a>
          </span>
        </div>
      </div>
    </div>
  </div>`;
  $(".members-container").append(memberHTML);

  const temp_li_HTML = `
    <li>
      <a href="javascript:void(0)" onclick="goToScroll('#info${idx}')">
        <div class="img-area">
          <img class="me${idx}" alt="" />
        </div>
        <span class="txt">${e.name}</span>
        <p><span class="color-green">#</span>${e.mbti}</p>
      </a>
    </li>`;
  $(".member-area").append(temp_li_HTML);
});
