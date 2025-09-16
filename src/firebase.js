// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔑 Firebase configuration (replace with your real keys from Firebase Console)
const firebaseConfig = {
  apiKey: "AIza...yourKey...",         // 🔒 API Key
  authDomain: "kpt-sports.firebaseapp.com",
  projectId: "kpt-sports",
  storageBucket: "kpt-sports.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication and export it
export const auth = getAuth(app);
