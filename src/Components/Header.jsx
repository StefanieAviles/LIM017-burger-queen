import Logo from '../Images/Logo.png'
import Letters from '../Images/letters.png'
import './Waiters.css';
import { FaSignOutAlt } from "react-icons/fa";
import {
    useNavigate,
    useLocation,
  } from "react-router-dom";
import { AuthContext, auth } from '../Firebase/context';
import React, { useContext } from 'react';

// Componente de encabezado con el logo, username e icono para cerrar sesion
export default function Header() {

    // Declaracion de variables
    const contextValue = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    const position = (auth.currentUser.email).indexOf('@');
    let username = (auth.currentUser.email).substring(0,position);

    // Damos funcionalidad a icono para cerrar sesion
    const exit = () => {
        navigate("/" + location.search);
        contextValue.SignOut();
    }
    
    return (<>
        <header className="header">
            <img src={Logo} className="headerLogo" alt="logo" />
            <img src={Letters} className="headerLetters" alt="logo" />
            <p className="headerUser">{username}</p>
            <FaSignOutAlt onClick= {exit} className="iconExit"/>
        </header>
      </>
    )
}