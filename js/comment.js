import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getDocs,
  collection,
  addDoc,
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

$("#postingbtn").click(async function () {
  let name = $("#comment-name").val();
  let comment = $("#comment-text-input").val();
  let doc = {
    comments: { name: name, comment: comment },
  };
  await addDoc(collection(db, "comments"), doc);
  alert("저장 완료!");
  window.location.reload();
});

let docs = await getDocs(collection(db, "comments"));
docs.forEach((data) => {
  let row = data.data().comments;
  console.log(row);
  let name = row["name"];
  let comment = row["comment"];
  let temp_html = `
     <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${comment}</p>
        </div>
      </div>`;
  $("#card").append(temp_html);
});
