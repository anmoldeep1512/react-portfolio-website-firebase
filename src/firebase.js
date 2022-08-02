
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyASzvbOGakkREYXtsZo4V-hP-j1Z5Rr1Pc",
  authDomain: "portfolio-60c49.firebaseapp.com",
  projectId: "portfolio-60c49",
  storageBucket: "portfolio-60c49.appspot.com",
  messagingSenderId: "128731702859",
  appId: "1:128731702859:web:bdc39c498dd65b69058fce",
  measurementId: "G-XQVY4H5W24"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);