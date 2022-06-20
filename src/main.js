import {signIn} from "Firebase/Firebase.js";
import {
    useNavigate,
    useLocation,
  } from "react-router-dom";

// Funcion que llama a firebase para iniciar sesion

export function LogIn(email, password) {
    let navigate = useNavigate();
    let location = useLocation();
    signIn(email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate("/waiters" + location.search);
    })
      .catch((error) => { 
          console.log(error);
      });
}