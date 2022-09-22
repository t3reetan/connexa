import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"; //docs: https://firebase.google.com/docs/firestore/quickstart
import {
  getFirestore,
  writeBatch,
  doc,
  onSnapshot,
  getDoc,
} from "firebase/firestore"; // docs: https://firebase.google.com/docs/auth/web/start
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCvBbc4XqIpln355K-G1rctsHRIt6-t2v4",
  authDomain: "connexa-crypto.firebaseapp.com",
  projectId: "connexa-crypto",
  storageBucket: "connexa-crypto.appspot.com",
  messagingSenderId: "476337055520",
  appId: "1:476337055520:web:017a7dce8d9b7f08fcd945",
  measurementId: "G-4CN2M7B5L7",
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore (DB)
export const firestore = getFirestore(firebaseApp);

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}

export {
  useAuthState,
  doc,
  onSnapshot,
  getFirestore,
  writeBatch,
  signInWithPopup,
  signOut,
  useDocumentData,
  getDoc,
};
