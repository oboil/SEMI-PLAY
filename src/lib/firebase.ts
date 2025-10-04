import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfIM0aAl51UeEKcsp-kuYzua366-pH6Oc",
  authDomain: "semi-play.firebaseapp.com",
  projectId: "semi-play",
  storageBucket: "semi-play.firebasestorage.app",
  messagingSenderId: "520901722729",
  appId: "1:520901722729:web:7e1e912c3bd51080d298f8",
  measurementId: "G-GYPFBWMNBH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
