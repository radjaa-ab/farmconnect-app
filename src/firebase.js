// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { orderBy } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLmQTMAdktM4TYnvkPMME07s0HmQ7vgos",
  authDomain: "farmconnect-f0274.firebaseapp.com",
  projectId: "farmconnect-f0274",
  storageBucket: "farmconnect-f0274.appspot.com",
  messagingSenderId: "163253489194",
  appId: "1:163253489194:web:b45d2c9281a5d212f5bd53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
const firestore = getFirestore(app);

export { firestore };