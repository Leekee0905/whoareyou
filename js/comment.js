import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  doc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import db from "./firebase.js";

const list = collection(db, "CRtest");

// DB 가지고 오기
let docs = await getDocs(list);
console.log(docs);

// 댓글 출력
docs["docs"].forEach((doc, idx) => {
  let id = doc.id;
  let row = doc.data();

  let user = row["user"];
  let comments = row["comments"];

  let temp_html = `
  <li>
    <strong>${user}</strong>
    <p>${comments}</p>
    <div class="btn-area">
      <button id="update" class="btn" value="${id}">수정</button>
      <button id="delete" class="btn" value="${id}">삭제</button>
    </div>
  </li>
  `;
  // 아이디가 있어야 삭제가 된다.. 근데 왜 그 전꺼 먼저 누르면 삭제가 안될까
  $("#list").append(temp_html);
});

// 댓글 등록
$("#submit").click(async function () {
  let user = $("#user").val();
  let comments = $("#comments").val();

  let doc = {
    user: user,
    comments: comments,
  };
  if (user === "") {
    alert("이름 입력 필요");
  } else if (comments === "") {
    alert("댓글 입력 필요");
  } else {
    await addDoc(list, doc);
    alert("저장 완료!");
    window.location.reload();
  }
});

// 댓글 수정
$("#update").click(async function () {
  let thisValue = $(this).val();
  let comments = prompt("수정할 내용");

  if (comments.length != 0) {
    await updateDoc(doc(db, "CRtest", thisValue), {
      comments: comments,
    });

    window.location.reload();
  } else {
    window.location.reload();
  }
});

// 댓글 삭제
$("#delete").click(async function () {
  let thisValue = $(this).val();
  const isDel = confirm("삭제");

  if (isDel == true) {
    await deleteDoc(doc(db, "CRtest", thisValue));
    alert("삭제 완료");
  }

  window.location.reload();
});

$("#modifybtn").click(async function () {
  const title = $(".card-title").text();
  console.log(title);
});
