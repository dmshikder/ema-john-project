// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTIS-yxAbItRlTWOe6owTrK_Bsnonz1_Y",
  authDomain: "ema-john-simple-ad777.firebaseapp.com",
  projectId: "ema-john-simple-ad777",
  storageBucket: "ema-john-simple-ad777.appspot.com",
  messagingSenderId: "930523718384",
  appId: "1:930523718384:web:01fe6309c04270e9a49835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;