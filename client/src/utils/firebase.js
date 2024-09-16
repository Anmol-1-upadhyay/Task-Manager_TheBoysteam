// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manger-83fcb.firebaseapp.com",
  projectId: "task-manger-83fcb",
  storageBucket: "task-manger-83fcb.appspot.com",
  messagingSenderId: "323557386027",
  appId: "1:323557386027:web:8fac2c4a0c06afeb83c76e",
  measurementId: "G-XQGH9NL2XS"
};

// In firebase.js
const app = initializeApp(firebaseConfig);
export default app;

