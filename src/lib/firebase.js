// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/firebase-database ";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFD474rUBgcCAqIu360jpq3MpEFnWzEYk",
  authDomain: "notes-40ca7.firebaseapp.com",
  projectId: "notes-40ca7",
  storageBucket: "notes-40ca7.appspot.com",
  messagingSenderId: "606433486676",
  appId: "1:606433486676:web:2ab240f20a58645fcccac1",
  measurementId: "G-GY8F88FDGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
export const realtimedb=getDatabase(app)
