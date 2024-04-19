import Maain from "./Pages/Maain";
import SettingsPage from "./Pages/SettingsPage";
import Home from "./Pages/Home";
import './Styles/Messagerie.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./i18n";
import Products from "./Pages/products.js";
import { toast, ToastContainer } from "react-toastify";
import Message from "./Components/firebase_Messaging.js";
import "react-toastify/dist/ReactToastify.css";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { messaging } from "./firebase";
import Panier from './Components/Panier';
import sections from './Dashboard/routes/sections.jsx';



async function requestPermission() {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: "BC67-G050VOgJppPokQibJgmtnxf-W1khP2kUdSegZxYQIfWqCyzbKxqelag7_UjG0z5eEPkJNLo52BfEfB7xYI", 
    });

    //We can send token to server
    console.log("Token generated : ", token);
  } else if (permission === "denied") {
    //notifications are blocked
    alert("You denied for the notification");
  }
}

function App() {
  const messaging = getMessaging(); 
  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });
  getToken(messaging,{
    vapidKey: "BC67-G050VOgJppPokQibJgmtnxf-W1khP2kUdSegZxYQIfWqCyzbKxqelag7_UjG0z5eEPkJNLo52BfEfB7xYI", 
  }).then((token) => console.log(token));


  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Home" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route path="Home/" element={<Home />} />
          <Route path="SettingsPage/" element={<SettingsPage />} />
          <Route path="/Panier" element={< Panier />} />
          <Route path="Maain" element= {<Maain/>} />
            < Route path = "sections" element = {<sections />} />
          <Route path="Products" element= {<Products/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;