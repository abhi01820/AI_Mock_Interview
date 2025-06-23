import { initializeApp,getApps,getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN2X7t7Hu-p6xYcuwzXzxm5sUGM7Yq3Eo",
  authDomain: "aiinterview-be993.firebaseapp.com",
  projectId: "aiinterview-be993",
  storageBucket: "aiinterview-be993.firebasestorage.app",
  messagingSenderId: "887495268812",
  appId: "1:887495268812:web:df72a9a954d8fbc5f72569",
  measurementId: "G-XTJ0BD1JRS"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
