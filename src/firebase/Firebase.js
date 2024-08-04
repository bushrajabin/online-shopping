import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyC5IPxTzWdRd3PMOqpvfI459-O5eWKS1nQ",
//   authDomain: "phone-auth-252c2.firebaseapp.com",
//   projectId: "phone-auth-252c2",
//   storageBucket: "phone-auth-252c2.appspot.com",
//   messagingSenderId: "141422665845",
//   appId: "1:141422665845:web:8aa237f25a29314772983c",
//   measurementId: "G-TS69RVVQ9W"
// };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
