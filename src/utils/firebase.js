// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYf2bTmGnjJenK3gPjJ12StCk_LD0hEd4",
  authDomain: "gambit-flix.firebaseapp.com",
  projectId: "gambit-flix",
  storageBucket: "gambit-flix.firebasestorage.app",
  messagingSenderId: "81567405214",
  appId: "1:81567405214:web:e1ec159e78e24e101dd78f",
  measurementId: "G-BG28QSBCSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);