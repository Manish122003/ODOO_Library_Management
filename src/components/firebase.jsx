// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ0TIFDRE0YdvJBesbyDjacoKiol1ch0g",
  authDomain: "library-15aa6.firebaseapp.com",
  projectId: "library-15aa6",
  storageBucket: "library-15aa6.appspot.com",
  messagingSenderId: "567226817819",
  appId: "1:567226817819:web:cd25c1215c22d5259bc7be",
  measurementId: "G-271BSB5PSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;