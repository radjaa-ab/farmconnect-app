import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [ville, setVille] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const [file, setFile] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false); // State to control visibility of file input
  const [error, setError] = useState(null); // State to handle errors during signup
  const [successMessage, setSuccessMessage] = useState(""); // State to handle success message

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
      // Additional code to handle other fields and file uploads
      setSuccessMessage("Inscription réussie ! Veuillez vérifier votre e-mail pour activer votre compte.");
    } catch (error) {
      setError("Erreur lors de l'inscription : " + error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleAvatarChange = (e) => {
    const avatar = e.target.files[0];
    setAvatar(avatar);
  };

  const handleProfessionChange = (e) => {
    const selectedProfession = e.target.value;
    setProfession(selectedProfession);
    // Show file input if selected profession requires it
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
        <select value={profession} onChange={handleProfessionChange} required>
          <option value="">Choisissez une profession</option>
          <option value="commerçant">Commerçant</option>
          <option value="agriculteur">Agriculteur</option>
          <option value="ingenieur">Ingénieur</option>
          <option value="consomateur">Consomateur</option>
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
    </div>
  );
};

export default Register;