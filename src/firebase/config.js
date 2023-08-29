// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhDcjq7tgUYpxrmTb9rXVafJvXGQxDRtU",
  authDomain: "mi-tiendadevj.firebaseapp.com",
  projectId: "mi-tiendadevj",
  storageBucket: "mi-tiendadevj.appspot.com",
  messagingSenderId: "401774705831",
  appId: "1:401774705831:web:e01edcea68885409b66f82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);