import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import manquant
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';
import Offline from '../Pages/Offline';
import LoginComponent from "./Login";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';




const wilayas = [
  // ... (la même liste que celle fournie)
];

function Register() {
  const togglePasswordVisibility = (type, setter) => {
    setter(!type);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(0);
  const [ville, setVille] = useState("");
  const [justificatif, setJustificatif] = useState(null);
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showFileInput, setShowFileInput] = useState(false);
  const [profession, setProfession] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

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

  const handleFileChange = (e) => {
    setJustificatif(e.target.files[0]);
  };

  const handleProfessionChange = (e) => {
    const selectedProfession = e.target.value;
    setProfession(selectedProfession);
    setShowFileInput(["commerçant", "agriculteur", "ingenieur"].includes(selectedProfession));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Code pour inscrire l'utilisateur avec Firebase
    // Utilisez les valeurs des états pour créer un nouvel utilisateur dans Firebase
  };
  
 

  return (
    <>
      {!isOnline && <Offline />}
      {showLoginForm ? (
        <LoginComponent />
      ) : (
        <div className="formWrapper" style={{ marginTop: '-80px' }}>
          <span className="logo">{t("registration")}</span>
          {error && <div className="error">{error}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
          <form onSubmit={handleSignUp}>
            <div className="name-inputs">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t("Name")} required />
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={t("first name")} required />
            </div>
            <div className="additional-inputs">
              <input 
                type="number" 
                value={age > 0 ? age : ''} 
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (!isNaN(value) && value > 0) {
                    setAge(value);
                  } else {
                    setAge('');
                  }
                }} 
                placeholder={t("Age")} 
                required 
              />
              <select value={ville} onChange={(e) => setVille(e.target.value)} required >
                <option value="">{t("City")}</option>
                {wilayas.map((wilaya, index) => (
                  <option key={index} value={wilaya}>{wilaya}</option>
                ))}
              </select>
            </div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("email")} required />
            <div className="mdp1">
        <input 
          type={showPassword ? "text" : "password"} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder={t("password")} 
          required 
        />
        <FontAwesomeIcon 
          icon={faEye} 
          className="eye-icon" 
          onClick={() => togglePasswordVisibility(showPassword, setShowPassword)} 
        />
      </div>
      <div className="mdp2">
        <input 
          type={showConfirmPassword ? "text" : "password"} 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder={t("confirm password")}
          required 
        />
        <FontAwesomeIcon 
          icon={faEye} 
          className="eye-icon" 
          onClick={() => togglePasswordVisibility(showConfirmPassword, setShowConfirmPassword)} 
        />
      </div>

            <PasswordStrengthBar password={password} />
            <select value={profession} onChange={handleProfessionChange} required>
              <option value="">{t("Select a profession")}</option>
              <option value="commerçant">{t("merchant")}</option>
              <option value="agriculteur">{t("farmer")}</option>
              <option value="ingenieur">{t("ingénieur Agricole")}</option>
              <option value="consomateur">{t("Consumer")}</option>
            </select>
            {showFileInput && (
              <div>
                <label>{t("Insert your file : ")}
                  <input type="file" onChange={handleFileChange} required />
                </label>
              </div>
            )}
            {profession === "ingenieur" && (
              <div>
                <label>{t("Speciality : ")}
                  <input type="text" value={specialite} onChange={(e) => setSpecialite(e.target.value)} />
                </label>
              </div>
            )}
            <button>{t("register")}</button>
            <p>
              Vous avez déjà un compte ?{" "}
              <button onClick={() => setShowLoginForm(true)} style={{ border: 'none', backgroundColor: 'transparent', color: 'green', fontWeight: 'bold', fontSize: '15px' }}>Se connecter</button>
            </p>
          </form>
          
        </div>
      )}
    </>
  );
}

export default Register;

