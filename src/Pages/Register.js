import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import LoginComponent from "./Login";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google-removebg-preview.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offline from '../Pages/Offline';
import PasswordStrengthBar from 'react-password-strength-bar';

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState({ profession: "", proof: null });
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: name === "proof" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Créer l'utilisateur
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Envoyer la vérification par e-mail
      await sendEmailVerification(auth.currentUser);

      // Créer un nom d'image unique
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      // Télécharger l'image vers le stockage
      await uploadBytesResumable(storageRef, userDetails.proof).then(() => {
        // Obtenir l'URL de téléchargement de l'image
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Mettre à jour le profil de l'utilisateur
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            // Créer l'utilisateur dans Firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // Créer des conversations utilisateur vides dans Firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});

            // Naviguer vers "/"
            navigate("/");

            // Afficher le composant de connexion après une inscription réussie
            setShowLoginForm(true);
          } catch (err) {
            console.error(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      console.error(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      {!isOnline && <Offline />} 
      {showLoginForm ? (
        <LoginComponent />
      ) : (
        <div className="formWrapper">
          <span className="logo">Commencez maintenant</span>
          <span className="title">Inscription</span>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Nom affiché"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordStrengthBar password={password} />
            <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Select name="profession" value={userDetails.profession} onChange={handleChange} className="custom-input">
                <option value="">Sélectionnez une profession</option>
                <option value="commerçant">Commerçant</option>
                <option value="consommateur">Consommateur</option>
                <option value="ingénieur_agriculteur">Ingénieur Agricole</option>
                <option value="agriculteur">Agriculteur</option>
              </Form.Select>
            </Form.Group>
            {userDetails.profession === 'commerçant' ||
              userDetails.profession === 'ingénieur_agriculteur' ||
              userDetails.profession === 'agriculteur' ? (
              <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProof">
                <Form.Label>Justificatif (facultatif pour consommateur)</Form.Label>
                <Form.Control
                  required
                  type="file"
                  name="proof"
                  onChange={handleChange}
                  className="custom-input"
                />
              </Form.Group>
            ) : null}
            <input
              required
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Ajouter un avatar</span>
            </label>
            <button disabled={loading}>S'inscrire</button>
            {loading && "Téléchargement et compression de l'image en cours, veuillez patienter..."}
            {err && <span>Quelque chose s'est mal passé</span>}
          </form>
          
          <Row>
            <Col>
            <p style={{marginLeft: '10px'}}>Ou connectez-vous avec Google</p>
            </Col>
            <Col>
              <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img src={GoogleSignin} alt="Se connecter avec Google" type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
              </button>
            </Col>
          </Row>
          <p>
            Vous avez déjà un compte ?{" "}
            <button onClick={() => setShowLoginForm(true)}>Se connecter</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
