// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  child,
  push,
  update,
  remove,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0tNqJNGPzAq4GELVrIKulqpp1HwE4WD8",
  authDomain: "stefani-kidscenter-9fca4.firebaseapp.com",
  projectId: "stefani-kidscenter-9fca4",
  storageBucket: "stefani-kidscenter-9fca4.appspot.com",
  messagingSenderId: "1014758160174",
  appId: "1:1014758160174:web:31492702a5c8bdb3c1acbf",
};

const app = initializeApp(firebaseConfig);

const dbRef = getDatabase();

export default function uploadComment(author, comment) {
  const commentsRef = ref(dbRef, "comments");
  const newPostRef = push(commentsRef);
  set(newPostRef, {
    author,
    comment,
  })
    .then((res) => {
      alert("Comment posted successfully");
      console.log(author + " said " + comment);
    })
    .catch((e) => {
      alert("unseccessful, errror: " + e);
    });
  // set(ref(dbRef, "/comments/"), {
  //   author,
  //   comment,
  // })
}
