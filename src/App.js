import './App.css';
import LogIn from "./Components/Log";
import Waiters from "./Components/Waiters";
import Orders from "./Components/Orders";
import Kitchen from "./Components/Kitchen";
import { AuthProvider } from './Firebase/context';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/waiters" element={<Waiters />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </AuthProvider>
    );
}

export default App;
