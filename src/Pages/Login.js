import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google-removebg-preview.png";
import SignUpForms from "./Register";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offline from '../Pages/Offline';



function Login({ initialValues, onChange }) {
  const [user] = useAuthState(auth);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      // Handle login errors (optional)
    }
  };

  const handleRegisterClick = () => {
    setShowSignUpForm(true);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    console.log("connecting...");
    signInWithPopup(auth, provider)
      .then(() => {
        alert("connected");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="formContainer">
      {!isOnline && <Offline />}
      {showSignUpForm ? (
        <SignUpForms />
      ) : (
        <div className="formWrapper">
          <span className="logo">Commencez maintenant</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign in</button>
            {user && <span>Something went wrong</span>}
          </form>
          <p>
            You don't have an account?{" "}
            <button onClick={handleRegisterClick}>Register</button>
          </p>

          <Row>
            <Col>
            <p style={{marginLeft: '10px'}}>Or sign in with Google</p>
            </Col>
            <Col>
              <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img src={GoogleSignin} alt="sign in with google" type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
              </button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Login;
