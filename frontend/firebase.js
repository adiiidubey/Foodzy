// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "foodzy-88854.firebaseapp.com",
  projectId: "foodzy-88854",
  storageBucket: "foodzy-88854.firebasestorage.app",
  messagingSenderId: "880693276790",
  appId: "1:880693276790:web:cc0756eed1f807a8f9af57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };