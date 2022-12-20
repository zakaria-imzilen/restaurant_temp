// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQBRN009ifxAZb0x88NAPNA79z5dsKBsg",
  authDomain: "restaurant-ac333.firebaseapp.com",
  projectId: "restaurant-ac333",
  storageBucket: "restaurant-ac333.appspot.com",
  messagingSenderId: "98212608532",
  appId: "1:98212608532:web:79bd0c56d076d7e3024501",
  measurementId: "G-CGDTMF877C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
