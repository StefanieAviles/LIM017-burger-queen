
import React, { useRef } from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { signIn } from '../Firebase/Firebase.js'

import BurgerLogo from '../Images/BurgerLogo.jpg'

export default function LogIn() {
  const userInputRef = useRef();
  const passwordInputRef = useRef();

  let navigate = useNavigate();
  let location = useLocation();

  const getInputValue = () => {
    const inputUserValue = userInputRef.current.value;
    const inputPasswordValue = passwordInputRef.current.value;
   
    signIn(inputUserValue, inputPasswordValue).then((user) => {      
      if(typeof user === 'string'){
        let message = '';
          switch (user) {
            case 'Firebase: Error (auth/internal-error).':
              message ='ingresar contraseña';
              break;
            case 'Firebase: Error (auth/invalid-email).':
              message ='email invalido';
              break;
            case 'Firebase: Error (auth/user-not-found).':
              message ='usuario no encontrado';
              break;
            case 'Firebase: Error (auth/wrong-password).':
              message ='contraseña incorrecta';
              break;
            case 'Firebase: Error (auth/missing-email).':
              message ='ingresar email';
              break;
            default:
              break;
          }
        alert(message);
      }else{
        navigate("/waiters" + location.search);
      }
    })
  }

  return (
    <div className="App">
      <img src={BurgerLogo} className="App-logo" alt="logo" />
      <p>Iniciar Sesion:</p>
      <input ref={userInputRef} type="text" id="user" className="loginInputs" placeholder="Usuario" />
      <input ref={passwordInputRef} type="password" id="password" className="loginInputs" placeholder="Contraseña" />
      <button id="loginButton" onClick={getInputValue}>Ingresar</button>
    </div>
  );
}
