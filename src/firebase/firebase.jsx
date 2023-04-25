import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    "projectId": "react-proyectofinal-6f4e4",
    "appId": "1:1025038484948:web:9a2f0b7740c9171b1b4241",
    "databaseURL": "https://react-proyectofinal-6f4e4-default-rtdb.europe-west1.firebasedatabase.app",
    "storageBucket": "react-proyectofinal-6f4e4.appspot.com",
    "apiKey": "AIzaSyBHevkMXqE50bpPhlTlvCQzNGW9ASZ-DZ4",
    "authDomain": "react-proyectofinal-6f4e4.firebaseapp.com",
    "messagingSenderId": "1025038484948",
    "measurementId": "G-RGPQXYVKMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.languageCode = "es"
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider, auth, signInWithPopup, onAuthStateChanged };

