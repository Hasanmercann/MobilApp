import React from 'react';
import Navigation from './src/navigation/navigation';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırmasını başlatma
const firebaseConfig = {
  apiKey: "AIzaSyDfyvB2xoVpsE97_e9KuAT7Vlo4wLi75-Q",
  authDomain: "mobilapp-500bc.firebaseapp.com",
  projectId: "mobilapp-500bc",
  storageBucket: "mobilapp-500bc.appspot.com",
  messagingSenderId: "1087611412764",
  appId: "1:1087611412764:web:94dd2699b4a108827b1ad9",
  measurementId: "G-ZHVDNNRWF6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  return (
    <Navigation />
  );
}
