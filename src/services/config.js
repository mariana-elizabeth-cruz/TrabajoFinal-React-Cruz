
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyectocoderreact-e1a65.firebaseapp.com",
  projectId: "proyectocoderreact-e1a65",
  storageBucket: "proyectocoderreact-e1a65.appspot.com",
  messagingSenderId: "338057808451",
  appId: "1:338057808451:web:c5cdfc9e0673b5b42e62f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);