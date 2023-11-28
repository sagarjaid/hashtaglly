// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeFirestore, collection, addDoc, setDoc, getDoc, doc, serverTimestamp } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCWiGWSRY3CGY1vaxey4asJRrnORM7l-Eg",
  authDomain: "scrip-ai.firebaseapp.com",
  projectId: "scrip-ai",
  storageBucket: "scrip-ai.appspot.com",
  messagingSenderId: "890338533979",
  appId: "1:890338533979:web:ee89738c2ff8a1ce6d957e"
};
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { useFetchStreams: false })
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider, collection, addDoc, setDoc, doc, serverTimestamp, getDoc };