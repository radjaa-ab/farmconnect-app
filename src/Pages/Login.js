import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importer Link
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
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
  const [password, setPassword] = useState(""); 
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const enteredPassword = e.target[1].value;
    setPassword(enteredPassword);

    try {
      await signInWithEmailAndPassword(auth, email, enteredPassword);
      navigate("/Products"); // Naviguer vers la page des produits après la connexion réussie
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la connexion : vérifiez votre nom d'utilisateur et votre mot de passe.");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterClick = () => {
    setShowSignUpForm(true);
  };

  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
      alert("Inscription réussie ! Veuillez vérifier votre e-mail pour activer votre compte.");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Erreur lors de l'inscription : " + error.message);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const enteredPassword = e.target[1].value;
    handleSignUp(email, enteredPassword);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        alert("Connecté");
        navigate("/Products"); // Naviguer vers la page des produits après la connexion réussie
      })
      .catch((error) => {
        console.log(error);
        alert("Erreur lors de la connexion avec Google : " + error.message);
      });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("reset-email");
    if (!emailInput || !emailInput.value) {
      console.error("Adresse e-mail requise pour réinitialiser le mot de passe.");
      alert("Veuillez fournir une adresse e-mail pour réinitialiser le mot de passe.");
      return;
    }
  
    const email = emailInput.value;
  
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("E-mail de réinitialisation du mot de passe envoyé avec succès.");
      alert("Un e-mail de réinitialisation du mot de passe a été envoyé à l'adresse fournie.");
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail de réinitialisation du mot de passe :", error);
      alert("Erreur lors de l'envoi de l'e-mail de réinitialisation du mot de passe : " + error.message);
    }
  };

  return (
    <div className="formContainer" style={{ marginTop: '100px'}}>
      {!isOnline && <Offline />}
      {showSignUpForm ? (
        <SignUpForms />
      ) : (
        <div className="formWrapper">
          <span className="logo">Commencez maintenant</span>
          <form onSubmit={handleSubmit}>
          <input type="Text" name="username" placeholder="Nom d'utilisateur" required />
          <input type="password" placeholder="Mot de passe" onChange={handlePasswordChange} />
            <button>Se connecter</button>
          </form>
          <p>
            Vous n'avez pas de compte ?{" "}
            <button onClick={handleRegisterClick} style={{border: 'none', backgroundColor: 'transparent', color: '#32CD32', fontWeight: 'bold', fontSize: '17px'}}>S'inscrire</button>
          </p>
          <p>
            <button onClick={handleResetPassword} style={{border: 'none', backgroundColor: 'transparent', color: 'white', fontWeight : 'bold'}}>Mot de passe oublié ?</button>
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
