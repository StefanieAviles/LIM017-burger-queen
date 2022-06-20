import { app } from './FirebaseInit';
import { getFirestore, collection, addDoc, query, where, orderBy,
  onSnapshot } from "firebase/firestore";

import {
    getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, 
    signOut,  /* deleteDoc, doc, setDoc, getDoc, getStorage,  updateProfile, 
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

// Funcion que crea pedidos es Firestore
export function uploadOrder(clientOrder) {
    const user = auth.currentUser;
    return addDoc(collection(db, 'orders'), {
      ...clientOrder,
      waiterId: user.uid
    });
  }

  export async function ordersByStatus(status) {
    const postsRef = collection(db, 'orders');
    const q = query(postsRef, where('status', '==', status), orderBy('date', 'desc'));
    //return onSnapshot(q, (snapshot) =>  console.log(snapshot));
    const snapShot = onSnapshot(q, (snapshot) => console.log(snapshot.docs));
    return snapShot;

  }