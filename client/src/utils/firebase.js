
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-cd315.firebaseapp.com",
  projectId: "interviewiq-cd315",
  storageBucket: "interviewiq-cd315.firebasestorage.app",
  messagingSenderId: "1035020884567",
  appId: "1:1035020884567:web:de4971bec9323c8a3ea112"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}


 