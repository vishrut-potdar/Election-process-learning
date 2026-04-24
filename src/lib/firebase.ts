import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import configJson from '../../firebase-applet-config.json';

// Fallback to config file if environment variables aren't set
const metaEnv = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: metaEnv.VITE_FIREBASE_API_KEY || configJson.apiKey,
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || configJson.authDomain,
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || configJson.projectId,
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || configJson.storageBucket,
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || configJson.messagingSenderId,
  appId: metaEnv.VITE_FIREBASE_APP_ID || configJson.appId,
  databaseId: (metaEnv.VITE_FIREBASE_DATABASE_ID || configJson.firestoreDatabaseId) as string
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.databaseId);
export const auth = getAuth(app);

/**
 * Validates connection to Firestore
 */
async function testConnection() {
  try {
    // Attempting to get a dummy document from the specific database instance
    await getDocFromServer(doc(db, 'system_test', 'connectivity'));
    console.log('Firebase connectivity verified.');
  } catch (error: any) {
    // 'permission-denied' is actually a "success" for a connectivity test on a locked document
    if (error.code === 'permission-denied' || error.message?.includes('permission-denied')) {
      console.log('Firebase server reachable (Permissions active).');
    } else if (error.message?.includes('the client is offline')) {
      console.warn('Firebase: Client is currently offline.');
    } else {
      console.error('Firebase configuration error:', error);
    }
  }
}

testConnection();
