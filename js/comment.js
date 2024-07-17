import {
  getDocs,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import db from "./firebase.js";

$("#postingbtn").click(async function () {
  const name = $("#comment-name").val();
  const comment = $("#comment-text-input").val();
  const doc = {
    comments: { name: name, comment: comment },
  };
  if (name === "") {
    alert("이름을 입력해주세요.");
  } else if (comment === "") {
    alert("댓글을 입력해주세요.");
  } else {
    await addDoc(collection(db, "comments"), doc);
    alert("저장 완료!");
    window.location.reload();
  }
});

const docs = await getDocs(collection(db, "comments"));
docs.forEach((data) => {
  const row = data.data().comments;

  const name = row["name"];
  const comment = row["comment"];
  const temp_html = `
     <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${comment}</p>
        </div>
      </div>`;
  $("#card").append(temp_html);
});
