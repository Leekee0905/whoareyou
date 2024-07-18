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
    $(`.me${idx}`).attr("src", url);
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
  const memberHTML = `
  <div class="members-info" id="info${idx}">
    <div class="info-area">
      <img class="me${idx}" />
      <div class="info-container">
        <div class="intro-area">
          <div class="member-infolist "><span>이름 : ${e.name}</span></div>
          <div class="member-infolist"><span>MBTI : ${e.mbti}</span></div>
          <div class="member-infolist"><span>TMI : ${e.tmi}</span></div>
          <div class="member-infolist"><span>장점 : ${e.advantages}</span></div>
        </div>
      </div>
    </div>
    <div class="members-otherinfo">
      <span>깃허브링크 : <a href="${e.github}">${e.github}</a></span>
      <span>블로그링크 : <a href="${e.blog}">${e.blog}</a></span>
    </div>
  </div>`;
  $(".members-container").append(memberHTML);

  const temp_li_HTML = `
    <li>
      <div class="img-area">
        <img class="me${idx}" alt="" />
      </div>
      <span class="txt" onclick="goToScroll('#info${idx}')"
        >${e.name}</span
      >
      <p><span class="color-green">#</span>${e.mbti}</p>
    </li>`;
  $(".member-area").append(temp_li_HTML);
});
