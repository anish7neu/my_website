// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfze8-Ct6I224THklFonWwSNDyQqYGs28",
  authDomain: "blog-on-portfolio-website.firebaseapp.com",
  projectId: "blog-on-portfolio-website",
  storageBucket: "blog-on-portfolio-website.appspot.com",
  messagingSenderId: "799958865797",
  appId: "1:799958865797:web:a7744ea959929ee86816ec",
  measurementId: "G-7DQHPGJ5FW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
