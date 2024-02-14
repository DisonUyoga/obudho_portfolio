
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: 'AIzaSyCv0fRIceVTcf8okW3F4BovvCg4SEjmCB0',
  authDomain: 'fir-course-a1eb6.firebaseapp.com',
  projectId: 'fir-course-a1eb6',
  storageBucket: 'fir-course-a1eb6.appspot.com',
  messagingSenderId: '448218076407',
  appId: '1:448218076407:web:6d4c36dee925b51351aff2',
  measurementId: 'G-N3QSVKPPY1',
}






const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);