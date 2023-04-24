// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { apiKey } from "../../keys";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMqL1FY3RfNNxFzcZ3m2a-0_bwHqg4eJI",
    authDomain: "freelancer-27f51.firebaseapp.com",
    projectId: "freelancer-27f51",
    storageBucket: "freelancer-27f51.appspot.com",
    messagingSenderId: "928465368550",
    appId: "1:928465368550:web:53eb8638270ee8e9dd1227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)