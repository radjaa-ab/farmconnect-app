import Maain from "./Pages/Maain";
import SettingsPage from "./Pages/SettingsPage";
import Home from "./Pages/Home";
import './Styles/Messagerie.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./i18n";
import { toast, ToastContainer } from "react-toastify";
import Message from "./Components/firebase_Messaging.js";
import "react-toastify/dist/ReactToastify.css";
import { getMessaging, onMessage } from "firebase/messaging";


function App() {
  const messaging = getMessaging(); 
  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });



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
                <Maain />
              </ProtectedRoute>
            }
          />
          <Route path="Home/" element={<Home />} />
          <Route path="SettingsPage/" element={<SettingsPage />} />
          <ToastContainer />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
