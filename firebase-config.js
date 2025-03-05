// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACFBWTMnUq_KvqDIxcg60pBvkj5J2RbD8",
  authDomain: "nerimaru-8499d.firebaseapp.com",
  databaseURL: "https://nerimaru-8499d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nerimaru-8499d",
  storageBucket: "nerimaru-8499d.appspot.com",
  messagingSenderId: "144206273191",
  appId: "1:144206273191:web:f9e169887f7eb113dc1982",
  measurementId: "G-FXD5DQT0D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };