import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  doc,
  updateDoc,
  getDocs,
  getDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import db from "./firebase.js";

// DB 가지고 오기
const docs = await getDocs(collection(db, "comments"));

// 댓글 출력
docs.forEach((doc) => {
  const id = doc.id;
  const row = doc.data();
  const name = row["name"];
  const comments = row["comment"];

  const temp_html = `
  <li>
    <strong>${name}</strong>
    <p>${comments}</p>
    <div class="btn-area">
      <button class="update btn" value="${id}">수정</button>
      <button class="delete btn" value="${id}">삭제</button>
    </div>
  </li>
  `;

  $("#list").append(temp_html);
});

$("#submit").click(async function () {
  const name = $("#name").val();
  const comment = $("#comment").val();
  const password = $("#password").val();
  const doc = {
    name: name,
    comment: comment,
    password: password,
  };

  if (name === "") {
    alert("이름을 입력해주세요.");
  } else if (comment === "") {
    alert("댓글을 입력해주세요.");
  } else if (password === "") {
    alert("비밀번호를 입력해주세요.");
  } else {
    await addDoc(collection(db, "comments"), doc);
    alert("댓글이 저장되었습니다.");
    window.location.reload(true);
  }
});

// 댓글 수정
$(".update").click(async function () {
  const thisValue = $(this).val();
  const docRef = doc(db, "comments", thisValue);
  const docSnap = await getDoc(docRef);
  const commentData = docSnap.data();
  const password = commentData.password;
  const checkpw = prompt("비밀번호를 입력해 주세요.");

  if (checkpw === null) {
    return;
  }
  if (checkpw === password) {
    const comments = prompt("수정할 내용을 작성해 주세요.");
    if (comments.length != 0) {
      await updateDoc(doc(db, "comments", thisValue), {
        comment: comments,
      });
      alert("수정되었습니다.");
      window.location.reload(true);
    } else {
      window.location.reload(true);
    }
  } else {
    alert("비밀번호가 틀렸습니다");
  }
});

// 댓글 삭제
$(".delete").click(async function () {
  const thisValue = $(this).val();
  const checkpw = prompt("패스워드를 입력해 주세요.");
  const docRef = doc(db, "comments", thisValue);
  const docSnap = await getDoc(docRef);
  const commentData = docSnap.data();
  const password = commentData.password;

  if (checkpw === null) {
    return;
  } else if (checkpw === password) {
    const onDelete = confirm("정말 삭제 하시겠습니까?");
    if (onDelete == true) {
      await deleteDoc(doc(db, "comments", thisValue));
      alert("삭제를 완료하였습니다.");
    }
    window.location.reload(true);
  } else {
    alert("패스워드가 틀렸습니다");
  }
});
