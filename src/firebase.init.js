// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDUCLZ5pVjftaj3tzOyynqeCMq8EcVEOk",
    authDomain: "assignment-12-53e1a.firebaseapp.com",
    projectId: "assignment-12-53e1a",
    storageBucket: "assignment-12-53e1a.appspot.com",
    messagingSenderId: "593618093990",
    appId: "1:593618093990:web:bb3c21ca5bb6e2bcb73167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;