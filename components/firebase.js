// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  initializeFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBsRVRdIyOEbhgnyds8WyLPDJKdkH6ftt4',
  authDomain: 'hashtaglly.firebaseapp.com',
  projectId: 'hashtaglly',
  storageBucket: 'hashtaglly.appspot.com',
  messagingSenderId: '629807136487',
  appId: '1:629807136487:web:7eff3cca95bcec3050ac42',
};
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { useFetchStreams: false });
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {
  db,
  auth,
  provider,
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
  getDoc,
};
