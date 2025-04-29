import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk2VsVw_UP7fLty5gWREnjVxZgQ7kRInw",
  authDomain: "dynamicfitness-f2cab.firebaseapp.com",
  projectId: "dynamicfitness-f2cab",
  storageBucket: "dynamicfitness-f2cab.firebasestorage.app",
  messagingSenderId: "371090043859",
  appId: "1:371090043859:web:815a4fbf68a88c40e8f526",
  measurementId: "G-Y7K3R2S299",
  databaseURL: "https://dynamicfitness-f2cab-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { app, database };
export { auth, provider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber };
export { storage };