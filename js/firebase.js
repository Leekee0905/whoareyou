import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDyWg0bbKGCU47h4knahtz5KXmtYBrWENs",
  authDomain: "iiiii-76d96.firebaseapp.com",
  projectId: "iiiii-76d96",
  storageBucket: "iiiii-76d96.appspot.com",
  messagingSenderId: "301834002586",
  appId: "1:301834002586:web:517d4a2f905220b1a0ff23",
  measurementId: "G-KCDYCN38NP",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const data = await getDocs(collection(db, "IIIII"));
data.forEach((e) => {
  let row = e.data();
  console.log(row);
});
