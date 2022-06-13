import { app } from './FirebaseInit';
import { getFirestore } from "firebase/firestore";

import {
    getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, 
    signOut,/*  updateProfile,
    getFirestore, collection, addDoc, query, where, orderBy,
    deleteDoc, doc, setDoc, onSnapshot, getDoc, getStorage,
    ref, uploadBytes, getDocs, */
} from 'firebase/auth';
const db = getFirestore(app);

export const auth = getAuth();
// Funcion que permite a un usuario loggearse con su email y password
export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential)
    .catch((error) => error.message);
}
// Funcion que permite reestablecer contraseña enviando un correo al usuario
export function passwordReset(email) {
    return sendPasswordResetEmail(auth, email)
    .then()
    .catch((error) => error);
}
// Funcion que permite cerrar sesion de un usuario
export function SignOut() {
    return signOut(auth).then(() => {})
      .catch((error) => error);
  }