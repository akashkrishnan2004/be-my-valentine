// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUU_UGUnnxPj5jBbAo3jElna_NMC1g0_I",
  authDomain: "love-site-counter.firebaseapp.com",
  projectId: "love-site-counter",
  storageBucket: "love-site-counter.firebasestorage.app",
  messagingSenderId: "449136409050",
  appId: "1:449136409050:web:e132cc490dbf2b7f5b28e3",
  measurementId: "G-G1KPBBB5LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ THIS LINE IS IMPORTANT
const database = getDatabase(app);

// ✅ EXPORT database
export { database };