import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyWg0bbKGCU47h4knahtz5KXmtYBrWENs",
  authDomain: "iiiii-76d96.firebaseapp.com",
  projectId: "iiiii-76d96",
  storageBucket: "iiiii-76d96.appspot.com",
  messagingSenderId: "301834002586",
  appId: "1:301834002586:web:517d4a2f905220b1a0ff23",
  measurementId: "G-KCDYCN38NP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
    return `<div class="members-info" id="info${index}">
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
