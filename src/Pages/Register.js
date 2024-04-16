import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import PasswordStrengthBar from 'react-password-strength-bar'; // Importer PasswordStrengthBar

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [ville, setVille] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const [file, setFile] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
      setSuccessMessage("Inscription réussie ! Veuillez vérifier votre e-mail pour activer votre compte.");
      navigate("/Products");

    } catch (error) {
      setError("Erreur lors de l'inscription : " + error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleProfessionChange = (e) => {
    const selectedProfession = e.target.value;
    setProfession(selectedProfession);
    setShowFileInput(["commerçant", "agriculteur", "ingenieur"].includes(selectedProfession));
  };
  

  return (
    <div className="formWrapper" style={{marginTop: '-80px'}}>
      <span className="logo">Inscription</span>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSignUp}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Nom d'utilisateur" required />
        <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Wilaya" required />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
        <input type="email" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
        <PasswordStrengthBar password={password} /> {/* Barre de force du mot de passe */}
        <select value={profession} onChange={handleProfessionChange} required>
          <option value="">Choisissez une profession</option>
          <option value="commerçant">Commerçant</option>
          <option value="agriculteur">Agriculteur</option>
          <option value="ingenieur">Ingénieur</option>
          <option value="consomateur">Consommateur</option>
        </select>
        {showFileInput && (
          <div>
            <label>Inserer votre fichier : 
              <input type="file" onChange={handleFileChange} required />
            </label>
          </div>
        )}
        <button>S'inscrire</button>
        
      </form>
          <p>
            Vous avez déjà un compte ?{" "}
            <button onClick={() => setShowLoginForm(true)} style={{border: 'none', backgroundColor: 'transparent', color: 'red', fontWeight: 'bold', fontSize: '15px'}}>Se connecter</button>
          </p>
    </div>
    
  );
};

export default Register;
