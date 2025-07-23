// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDmOLujqy2U7VtMWNJSHQCYMb1A2-sReF8",
  authDomain: "myauthapp-f668a.firebaseapp.com",
  projectId: "myauthapp-f668a",
  storageBucket: "myauthapp-f668a.firebasestorage.app",
  messagingSenderId: "417691063878",
  appId: "1:417691063878:web:b72d17e5b57777e06a9c47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
