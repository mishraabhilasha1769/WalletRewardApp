import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhkFMG1LM6mRBs-w14p5EROiCcaa2RYP8",
  authDomain: "walletrewardapp-28801.firebaseapp.com",
  projectId: "walletrewardapp-28801",
  storageBucket: "walletrewardapp-28801.firebasestorage.app",
  messagingSenderId: "1094922660088",
  appId: "1:1094922660088:web:17613fdbc75ab75798b30d",
  measurementId: "G-04XYEFJRZ9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);