// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmEfDtCpgX01d0fkrU17s0gkQrNrUIiHY",
  authDomain: "chatly-cde17.firebaseapp.com",
  projectId: "chatly-cde17",
  storageBucket: "chatly-cde17.firebasestorage.app",
  messagingSenderId: "757228324489",
  appId: "1:757228324489:web:072eb7345b3657d1ab2858",
  measurementId: "G-3NSGYN5TGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig