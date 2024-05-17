// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";

const clientCredentials = {
    apiKey: "AIzaSyAyjsXuQzG2XJsbIuF6uWe9eWKzRfEtHmM",
    authDomain: "yasa-f94a6.firebaseapp.com",
    projectId: "yasa-f94a6",
    storageBucket: "yasa-f94a6.appspot.com",
    messagingSenderId: "709673327432",
    appId: "1:709673327432:web:60e0343a5f99b449a0b17d",
    measurementId: "G-MCJLSLZXHS",
};

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

const realDB = getDatabase(app);

export { initFirebase, db, realDB };