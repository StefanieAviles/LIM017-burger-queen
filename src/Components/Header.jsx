import Logo from '../Images/Logo.jpg'
import Letters from '../Images/letters.jpg'
import './Waiters.css';
import { FaSignOutAlt } from "react-icons/fa";
import {
    useNavigate,
    useLocation,
  } from "react-router-dom";
  import { SignOut, auth } from '../Firebase/Firebase.js'

export default function Header() {
    let navigate = useNavigate();
    let location = useLocation();
    const position = (auth.currentUser.email).indexOf('@');
    let username = (auth.currentUser.email).substring(0,position);
    const exit = () => {
        navigate("/" + location.search);
        SignOut();
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