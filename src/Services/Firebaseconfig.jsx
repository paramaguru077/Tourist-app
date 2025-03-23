// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API ,
  authDomain: "news-app-077.firebaseapp.com",
  projectId: "news-app-077",
  storageBucket: "news-app-077.firebasestorage.app",
  messagingSenderId: "613227822261",
  appId: "1:613227822261:web:6b4f7500d40c9a2fa712fc",
  measurementId: "G-C1Y3SXD39T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);