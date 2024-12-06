import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber
   } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCJbDsFfkHSjpCNgwP7cqEcdn4jukJX-40",
  authDomain: "fir-project-19cad.firebaseapp.com",
  projectId: "fir-project-19cad",
  storageBucket: "fir-project-19cad.firebasestorage.app",
  messagingSenderId: "485639284999",
  appId: "1:485639284999:web:5518a5b02c2ccaef4efda2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export{ getAuth,auth,googleProvider, 
 createUserWithEmailAndPassword, 
 onAuthStateChanged,
 signInWithEmailAndPassword,
 signOut,
 sendEmailVerification,
 GoogleAuthProvider,
 signInWithPopup,
 RecaptchaVerifier,
 signInWithPhoneNumber
}

