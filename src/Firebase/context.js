import { app } from './FirebaseInit';
import React, { useState, useEffect } from "react";
import {
    getAuth, signInWithEmailAndPassword, signOut,
    getFirestore, collection, addDoc, query, orderBy,
    onSnapshot, doc, setDoc,
} from './FirebaseImport.js';
// Accedemos a firestore
export const db = getFirestore(app);

export const auth = getAuth(app);

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    // Funcion para iniciar sesion
    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential)
      .catch((error) => error.message);
  }
  // Funcion para cerrar sesion
  function SignOut() {
    return signOut(auth).then(() => {})
      .catch((error) => error);
  }
  // Funcion que crea pedidos es Firestore
  function uploadOrder(clientOrder) {
    const user = auth.currentUser;
    return addDoc(collection(db, 'orders'), {
      ...clientOrder,
      waiterId: user.uid
    });
}
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      // Accedemos a la coleccion de firebase
        const ordersCollection = collection(db, "orders");
        // Ordenamos la data obtenida de firebase
        const q = query(ordersCollection, orderBy("date", "desc"));
        // Obtenemos en tiempo real las ordenes que se encuentran en la coleccion de firebase
        const getOrders = onSnapshot(q, (snapshot) =>
            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        return getOrders;
    }, []);
    // Funcion Actualiza la coleccion en firestore
    function updateState(id, newState) {
      setDoc(doc(db, "orders",id), {state: newState}, {merge:true});
  }
  
    return (
      <AuthContext.Provider value={{ logIn, SignOut, uploadOrder, orders, updateState}}>{children}</AuthContext.Provider>
    );
  };
