// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS6H_Qhtd4CwcRmhkNVPNKaJTBkzxmogE",
  authDomain: "chat-28ed2.firebaseapp.com",
  databaseURL: "https://chat-28ed2-default-rtdb.firebaseio.com",
  projectId: "chat-28ed2",
  storageBucket: "chat-28ed2.appspot.com",
  messagingSenderId: "543450495681",
  appId: "1:543450495681:web:1a659e95540a5c5cc43240",
  measurementId: "G-HCEEJK6MJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);