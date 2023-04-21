npm install firebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOEVk838zpLq9agUAQbjJoaQf_G6GYqqc",
  authDomain: "react-26c33.firebaseapp.com",
  projectId: "react-26c33",
  storageBucket: "react-26c33.appspot.com",
  messagingSenderId: "511672124940",
  appId: "1:511672124940:web:3ce30855223c6091d8d029",
  measurementId: "G-CJC6PJ4DR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);