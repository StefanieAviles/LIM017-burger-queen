import {
    useNavigate,
    useLocation,
  } from "react-router-dom";

export default function WaitersButtons () {
    let navigate = useNavigate();
    let location = useLocation();
    const takeOrder = () => {
        navigate("/waiters" + location.search);
      }
      const orderStatus = () => {
        navigate("/orders" + location.search);
      }

    return (<div>
        <button onClick={takeOrder} className="buttonWaiterOptions"> Tomar orden </button>
        <button onClick={orderStatus} className="buttonWaiterOptions"> Estado orden </button>
      </div>)
}