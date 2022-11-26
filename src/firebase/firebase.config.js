// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJDli0mdl6t30ggMK5RaS2G2_7T9G10Yc",
    authDomain: "genius-car-doct.firebaseapp.com",
    projectId: "genius-car-doct",
    storageBucket: "genius-car-doct.appspot.com",
    messagingSenderId: "309756667707",
    appId: "1:309756667707:web:b4fe5f1dd3e9cd18b5791e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;