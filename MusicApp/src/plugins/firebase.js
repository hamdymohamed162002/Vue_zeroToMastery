// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPS7uz5apcT772-Z1nkacCeaQY3Uqcn1U",
  authDomain: "vueproject-df689.firebaseapp.com",
  projectId: "vueproject-df689",
  storageBucket: "vueproject-df689.appspot.com",
  messagingSenderId: "487503128438",
  appId: "1:487503128438:web:bae44ed0cd0622dfb53c57",
  measurementId: "G-SY4Z9PB59Q"
};

// Initialize Firebase
export default  app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);