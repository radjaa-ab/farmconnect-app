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
import PasswordStrengthBar from 'react-password-strength-bar';

function Login({ initialValues, onChange }) {
  const [user] = useAuthState(auth);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [password, setPassword] = useState(""); // Initialisation de la variable password avec une chaîne vide

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
    const enteredPassword = e.target[1].value;
    setPassword(enteredPassword); // Mise à jour de la valeur du mot de passe

    try {
      await signInWithEmailAndPassword(auth, email, enteredPassword);
      navigate("/");
    } catch (err) {
      console.error(err);
      // Gérer les erreurs de connexion (optionnel)
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Mise à jour de la valeur du mot de passe lorsqu'il est modifié
  };

  const handleRegisterClick = () => {
    setShowSignUpForm(true);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    console.log("Connexion en cours...");
    signInWithPopup(auth, provider)
      .then(() => {
        alert("Connecté");
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
          <span className="title">Connexion</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="mot de passe" onChange={handlePasswordChange} />
            <PasswordStrengthBar password={password} />
            <button>Se connecter</button>
            {user && <span>Quelque chose s'est mal passé</span>}
          </form>
          <p>
            Vous n'avez pas de compte ?{" "}
            <button onClick={handleRegisterClick}>S'inscrire</button>
          </p>

          <Row>
            <Col>
            <p style={{marginLeft: '10px'}}>Ou connectez-vous avec Google</p>
            </Col>
            <Col>
              <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img src={GoogleSignin} alt="Connectez-vous avec Google" type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
              </button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Login;
