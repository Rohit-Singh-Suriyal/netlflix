// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC82b5wzeO8Yuj08ivcMu05KGbDP_WmKfI",
  authDomain: "netflix-17fca.firebaseapp.com",
  projectId: "netflix-17fca",
  storageBucket: "netflix-17fca.appspot.com",
  messagingSenderId: "603134689809",
  appId: "1:603134689809:web:531bdf9c13bdc02c93a7b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app);
export const db=getFirestore(app);