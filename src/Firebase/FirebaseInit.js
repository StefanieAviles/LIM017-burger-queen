import { initializeApp } from "firebase/app";

// Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBIVLuiDWv4F71v__2Yg0Tl6dBFGWRJ-dg",
  authDomain: "burgerqueen-1ffdd.firebaseapp.com",
  databaseURL: "https://burgerqueen-1ffdd-default-rtdb.firebaseio.com",
  projectId: "burgerqueen-1ffdd",
  storageBucket: "burgerqueen-1ffdd.appspot.com",
  messagingSenderId: "489163254362",
  appId: "1:489163254362:web:2f986c4c749ba876b6c663",
  measurementId: "G-41DL3PGZEE"
};

// Inicializamos Firebase
export const app = initializeApp(firebaseConfig);