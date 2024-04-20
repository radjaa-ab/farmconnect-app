import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';
import Offline from '../Pages/Offline';
import LoginComponent from "./Login";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import axios from "axios";



const wilayas = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", 
  "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", 
  "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", 
  "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", 
  "Illizi", "Bordj Bou Arreridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", 
  "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", 
  "Ghardaïa", "Relizane", "Bordj Badji Mokhtar", "Ouled Djellal", "Béni Abbès", "In Salah",
  "In Guezzam", "Touggourt", "Djanet", "El M'Ghaier", "El Meniaa", "Timimoun"
];

function Register() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [idUser, setidUser] = useState("");
  const [age, setAge] = useState(16); // Initialiser avec l'âge minimum
  const [ville, setVille] = useState(""); // Utilisez la liste des wilayas
  const [justificatif, setJustificatif] = useState(null); // Les données Blob peuvent être nulles initialement
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
    // Vérifier que tous les champs obligatoires sont remplis
    if (!idUser || age <= 0 || !ville || !email || !passwordHash || !profession) {
        setError("Veuillez remplir tous les champs obligatoires.");
        return;
    }
    // Vérifier la profession et spécifier la spécialité si c'est un ingénieur
    if (profession === "ingenieur" && !specialite) {
        setError("Veuillez spécifier la spécialité.");
        return;
    }
    
    // Créer un objet FormData pour envoyer les données au script PHP
    const formData = new FormData();
    formData.append('idUser', idUser);
    formData.append('age', age);
    formData.append('ville', ville);
    formData.append('email', email);
    formData.append('password', passwordHash);
    formData.append('profession', profession);
    if (profession === "ingenieur") {
        formData.append('specialite', specialite);
    }
    if (profession === "consommateur") {
        formData.append('justificatif', justificatif);
    }

    // Envoyer les données au script PHP avec fetch
    fetch('Register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête au serveur.');
        }
        return response.text();
    })
    .then(data => {
        // Afficher un message de succès ou d'erreur en fonction de la réponse du serveur
        if (data.startsWith('Erreur')) {
            setError(data);
        } else {
            setSuccessMessage(data);
            // Réinitialiser les champs du formulaire après une inscription réussie
            setidUser("");
            setAge(0);
            setVille("");
            setEmail("");
            setPasswordHash("");
            setProfession("");
            setSpecialite("");
            setJustificatif(null);
            setShowFileInput(false);
        }
    })
    .catch(error => {
        setError(error.message);
    });
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
            <input type="text" value={idUser} onChange={(e) => setidUser(e.target.value)} placeholder={t("username")} required />
            <input 
              type="number" 
              value={age} 
              onChange={(e) => {
                const newAge = parseInt(e.target.value);
                if (newAge >= 16 && newAge <= 100) {
                  setAge(newAge);
                } else {
                  setAge(age);
                }
              }} 
              placeholder={t("Age")}
              required 
            />

            <select 
              value={ville} 
              onChange={(e) => setVille(e.target.value)} 
              required 
              style={{ background: '#ddd', borderRadius: '5px', border: 'none', color: 'black', width: '300px' }}
            >
              <option value="">{t("City")}</option>
              {wilayas.map((wilaya, index) => (
                <option key={index} value={wilaya}>{wilaya}</option>
              ))}
            </select>

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
            <p>{t("vous")}
              <button onClick={() => setShowLoginForm(true)} style={{ border: 'none', backgroundColor: 'transparent', color: 'red', fontWeight: 'bold', fontSize: '15px' }}>{t("login")}</button>
            </p>
          </form>
          
        </div>
      )}
    </>
  );
}

export default Register;

