import Maain from "./Pages/Maain";
import SettingsPage from "./Pages/SettingsPage";
import Home from "./Pages/Home";
import './Styles/Style.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import Message from "./Components/test";
import "react-toastify/dist/ReactToastify.css";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";



function App() {


  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });


const { VITE_APP_VAPID_KEY } = import.meta.env;

  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: VITE_APP_VAPID_KEY,
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Home" />;
    }
    return children;
  };

  return (
    <>      <ToastContainer />
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
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
