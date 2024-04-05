
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOXCjV9Hvs7cUdcfXmEwpI-0MdnD2Vh2I",
  authDomain: "mobil-d0453.firebaseapp.com",
  projectId: "mobil-d0453",
  storageBucket: "mobil-d0453.appspot.com",
  messagingSenderId: "275756806757",
  appId: "1:275756806757:web:789f685aea10859e7ecc8c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

