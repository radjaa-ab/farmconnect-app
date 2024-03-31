// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from '@firebase/messaging';
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
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
const setupNotifications = async () => {
  try {
    // Request permission for notifications
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // Get the FCM token
      const token = await getToken(messaging);
      console.log('FCM Token:', token);
    } else {
      console.log('Notification permission denied.');
    }
    // Handle foreground notifications
    onMessage(messaging, (payload) => {
      console.log('Foreground Message:', payload);
      // Handle the notification or update your UI
    });
  } catch (error) {
    console.error('Error setting up notifications:', error);
  }
};
export { messaging, setupNotifications };