import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBNWHVrImTM4pzyG6b5vavPnBPJ_-7Dj8",

  authDomain: "journal-app-2ff29.firebaseapp.com",

  projectId: "journal-app-2ff29",

  storageBucket: "journal-app-2ff29.appspot.com",

  messagingSenderId: "472540170356",

  appId: "1:472540170356:web:bfd1816387c58b177e2921",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export{db, googleAuthProvider}
