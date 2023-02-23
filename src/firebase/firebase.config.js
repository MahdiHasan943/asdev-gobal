// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNx9YhN0bCaGeqIRTH_zzTlBUz2E_Y71A",
  authDomain: "asdev81-global-website.firebaseapp.com",
  projectId: "asdev81-global-website",
  storageBucket: "asdev81-global-website.appspot.com",
  messagingSenderId: "1012812030610",
  appId: "1:1012812030610:web:2b59d5c96994af2bcb3c4b",
  measurementId: "G-S9YMSFFPQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;