import { app } from './FirebaseInit';
import React from "react";
import {
    getAuth, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';

//const db = getFirestore(app);

export const auth = getAuth(app);

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  
    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential)
      .catch((error) => error.message);
  }

  function SignOut() {
    return signOut(auth).then(() => {})
      .catch((error) => error);
  }
  
    return (
      <AuthContext.Provider value={{ logIn, SignOut }}>{children}</AuthContext.Provider>
    );
  };
