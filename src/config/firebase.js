// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwuxe5lXL5XpMlzfDjx1IvpxnmIORQxYI",
  authDomain: "conatctapp-e55c8.firebaseapp.com",
  projectId: "conatctapp-e55c8",
  storageBucket: "conatctapp-e55c8.appspot.com",
  messagingSenderId: "1070455047164",
  appId: "1:1070455047164:web:8998992b5b1a9d648e6879"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);