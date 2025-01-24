// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF95YRVnAF-3HRPWEF-Hiza4WMvT3p_Lc",
  authDomain: "webfit-8c37a.firebaseapp.com",
  projectId: "webfit-8c37a",
  storageBucket: "webfit-8c37a.firebasestorage.app",
  messagingSenderId: "232437720659",
  appId: "1:232437720659:web:127f47ba3d3a7f156588a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}