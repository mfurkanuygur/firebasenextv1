import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA794gQzQ9mRCPnRo-hOmGmrsiavxNRfjA",
    authDomain: "nextjstest-ef253.firebaseapp.com",
    projectId: "nextjstest-ef253",
    storageBucket: "nextjstest-ef253.appspot.com",
    messagingSenderId: "404128144060",
    appId: "1:404128144060:web:3a168b8dc19c0025d4ceb9"
};

const app = initializeApp(firebaseConfig);

export const maindatabase = getFirestore(app);


