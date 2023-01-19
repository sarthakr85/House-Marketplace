import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHkPxn0WnOxb4XDyUl_c_uaKooP3gtvmA",
  authDomain: "house-marketplace-app-b285e.firebaseapp.com",
  projectId: "house-marketplace-app-b285e",
  storageBucket: "house-marketplace-app-b285e.appspot.com",
  messagingSenderId: "427985442563",
  appId: "1:427985442563:web:09cd5435d1f799aa933b36",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
