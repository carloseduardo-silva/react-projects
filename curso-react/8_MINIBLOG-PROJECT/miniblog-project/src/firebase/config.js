// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnWvl7hPS_3OwUyHqJk9W2x-yGrGPDseY",
  authDomain: "miniblog-5e90b.firebaseapp.com",
  projectId: "miniblog-5e90b",
  storageBucket: "miniblog-5e90b.firebasestorage.app",
  messagingSenderId: "5061286201",
  appId: "1:5061286201:web:580d3df72fc543fa5530e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFireStore(app)

export {db}