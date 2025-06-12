// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGN5G2NV4FZowWVuglf4qXcmUXUUtEwf4",
  authDomain: "plant-tracker-fb30d.firebaseapp.com",
  projectId: "plant-tracker-fb30d",
  storageBucket: "plant-tracker-fb30d.firebasestorage.app",
  messagingSenderId: "653664077655",
  appId: "1:653664077655:web:221efb96db173f3da6a012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)