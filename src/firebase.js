// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYcT_6rQhcC6fLTaAyoywfKTIxcCueAa8",
  authDomain: "theproject-a725e.firebaseapp.com",
  projectId: "theproject-a725e",
  storageBucket: "theproject-a725e.appspot.com",
  messagingSenderId: "1022313151098",
  appId: "1:1022313151098:web:cb62d54f75bcd1732899c3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbFirestore = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);
