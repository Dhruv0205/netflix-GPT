// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr1U3PGHDDmJm_t3shw856teYzxJwv4qo",
  authDomain: "netflixgpt02.firebaseapp.com",
  projectId: "netflixgpt02",
  storageBucket: "netflixgpt02.appspot.com",
  messagingSenderId: "372636486190",
  appId: "1:372636486190:web:56758caf4a615aea2cedbf",
  measurementId: "G-4C5W2KPG0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
