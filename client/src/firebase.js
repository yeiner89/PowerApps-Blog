// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yei-s-blog.firebaseapp.com",
  projectId: "yei-s-blog",
  storageBucket: "yei-s-blog.appspot.com",
  messagingSenderId: "37051780202",
  appId: "1:37051780202:web:c407bffbe4bcd87cf38e13",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
