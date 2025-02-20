// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrUfOFseUoZ7nuVvUR4QVfgmRjXKYI2kw",
  authDomain: "easy-travel-planner.firebaseapp.com",
  projectId: "easy-travel-planner",
  storageBucket: "easy-travel-planner.firebasestorage.app",
  messagingSenderId: "377503260866",
  appId: "1:377503260866:web:ba4f1b416ac3f89c50db5b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
