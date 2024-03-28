// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD70h6pa2gqxmki5YnBNBZZslA18-KS2vc",
  authDomain: "chat-aa1bd.firebaseapp.com",
  projectId: "chat-aa1bd",
  storageBucket: "chat-aa1bd.appspot.com",
  messagingSenderId: "675209671844",
  appId: "1:675209671844:web:d1b874d21151c3e7bf2231",
  measurementId: "G-QDV18W2EMC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);