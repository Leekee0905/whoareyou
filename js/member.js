import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import db from "./firebase.js";

let row = {};

const data = await getDocs(collection(db, "IIIII"));
data.forEach((e) => {
  row = e.data();
});

const temp_li_HTML = row.members.map((ele, index) => {
  return `
  <li>
    <div class="img-area">
      <img class="me${index}" alt="" />
    </div>
    <span class="txt" onclick="goToScroll('#info${index}')"
      >${ele.name}</span
    >
    <p><span class="color-green">#</span>${ele.mbti}</p>
  </li>`;
});
$(".member-area").append(temp_li_HTML);

const memberHTML = row.members
  .map((member, index) => {
    return `
    <div class="members-info" id="info${index}">
      <div class="info-area">
        <img class="me${index}" />
        <div class="info-container">
          <div class="intro-area">
            <div class="member-infolist "><span>이름 : ${member.name}</span></div>
            <div class="member-infolist"><span>MBTI : ${member.mbti}</span></div>
            <div class="member-infolist"><span>TMI : ${member.tmi}</span></div>
            <div class="member-infolist"><span>장점 : ${member.advantages}</span></div>
          </div>
        </div>
      </div>
      <div class="members-otherinfo">
        <span>깃허브링크 : <a href="${member.github}">${member.github}</a></span>
        <span>블로그링크 : <a href="${member.blog}">${member.blog}</a></span>
      </div>
    </div>`;
  })
  .join("");

$(".members-container").append(memberHTML);
