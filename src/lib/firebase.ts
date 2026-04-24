import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
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
