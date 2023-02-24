// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6_qXWPaLyhO47rWGfVgC5naDEijhcxFQ",
  authDomain: "asdev-81-club-global.firebaseapp.com",
  projectId: "asdev-81-club-global",
  storageBucket: "asdev-81-club-global.appspot.com",
  messagingSenderId: "10850295570",
  appId: "1:10850295570:web:6242531f9ac42119481dcb",
  measurementId: "G-EY13HDBGMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;