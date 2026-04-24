import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDNCxD31mj72cb8gZzmWpB-F_OwmvXxAF8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "matgyaan-e2cf4.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "matgyaan-e2cf4",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "matgyaan-e2cf4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "4801632138",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:4801632138:web:6ecb9040c18254ebf9da73",
  databaseId: import.meta.env.VITE_FIREBASE_DATABASE_ID || "voter-db"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.databaseId);
export const auth = getAuth(app);

