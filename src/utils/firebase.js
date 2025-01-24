// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "studentdashboard-1020e.firebaseapp.com",
  projectId: "studentdashboard-1020e",
  storageBucket: "studentdashboard-1020e.firebasestorage.app",
  messagingSenderId: "837356569687",
  appId: "1:837356569687:web:f75879e1e10ad959b04f12",
  measurementId: "G-NT1TQWBY3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);