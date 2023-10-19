
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB4Mq3x1j_0RA66gSIy_csp0eG1BfltFTs",
  authDomain: "unio-9dece.firebaseapp.com",
  projectId: "unio-9dece",
  storageBucket: "unio-9dece.appspot.com",
  messagingSenderId: "731703882101",
  appId: "1:731703882101:web:53b37c32a61aa7e118e33c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();