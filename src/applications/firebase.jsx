import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth'

export const firebaseConfig = {
    "projectId": "react-proyectofinal-6f4e4",
    "appId": "1:1025038484948:web:9a2f0b7740c9171b1b4241",
    "databaseURL": "https://react-proyectofinal-6f4e4-default-rtdb.europe-west1.firebasedatabase.app",
    "storageBucket": "react-proyectofinal-6f4e4.appspot.com",
    "apiKey": "AIzaSyBHevkMXqE50bpPhlTlvCQzNGW9ASZ-DZ4",
    "authDomain": "react-proyectofinal-6f4e4.firebaseapp.com",
    "messagingSenderId": "1025038484948",
    "measurementId": "G-RGPQXYVKMG"
};

const app = initializeApp(firebaseConfig);