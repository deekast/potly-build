// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3VwhoItvaf0qH7FFEeP6ptk80-1wZXmY",
  authDomain: "potly-53b8d.firebaseapp.com",
  projectId: "potly-53b8d",
  storageBucket: "potly-53b8d.appspot.com",
  messagingSenderId: "899214855038",
  appId: "1:899214855038:web:37ac44292a5c8fd3fb012f",
  measurementId: "G-HMRE76089R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);