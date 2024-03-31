importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDLmQTMAdktM4TYnvkPMME07s0HmQ7vgos",
    authDomain: "farmconnect-f0274.firebaseapp.com",
    projectId: "farmconnect-f0274",
    storageBucket: "farmconnect-f0274.appspot.com",
    messagingSenderId: "163253489194",
    appId: "1:163253489194:web:b45d2c9281a5d212f5bd53"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});