import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';
import Offline from '../Pages/Offline';
import LoginComponent from "./Login";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { db } from '../firebase';

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
  const [passwordHash, setPasswordHash] = useState(""); // Ne pas stocker les mots de passe en texte brut
  const [error, setError] = useState(null); // État pour gérer les erreurs lors de l'inscription
  const [successMessage, setSuccessMessage] = useState(""); // État pour gérer le message de réussite
  const [showFileInput, setShowFileInput] = useState(false); // État initial pour la visibilité de l'entrée de fichier
  const [profession, setProfession] = useState(""); // État pour stocker la profession
  const [specialite, setSpecialite] = useState(""); // État pour stocker la spécialité de l'ingénieur
  const [showLoginForm, setShowLoginForm] = useState(false); // État pour afficher le formulaire de connexion

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

  
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Ajout de l'utilisateur dans la collection "users"
      await db.collection('users').add({
        idUser: idUser,
        age: age,
        ville: ville,
        justificatif: justificatif,
        email: email,
        motDePasseHash: passwordHash,
        profession: profession
      });

      // Ajout de l'utilisateur dans la collection spécifique en fonction de sa profession
      if (profession === "agriculteur") {
        await db.collection('agriculteurs').add({
          idUser: idUser
        });
      } else if (profession === "ingenieur") {
        await db.collection('ingenieurs').add({
          idUser: idUser,
          specialite: specialite
        });
      } else if (profession === "commerçant") {
        await db.collection('commercants').add({
          idUser: idUser
        });
      } else if (profession === "consomateur") {
        await db.collection('consommateurs').add({
          idUser: idUser,
          justificatif: justificatif ? 'present' : 'none' // Vérifie si un justificatif est présent
        });
      }

      // Réinitialisation des champs après l'inscription réussie
      setidUser("");
      setAge(16);
      setVille("");
      setJustificatif(null);
      setEmail("");
      setPasswordHash("");
      setProfession("");
      setSpecialite("");
      setShowFileInput(false);
      setSuccessMessage("Inscription réussie !");
      setError(null);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      setError("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
      setSuccessMessage("");
    }
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
                const newAge = parseInt(e.target.value, 10);
                if (!isNaN(newAge) && newAge >= 16 && newAge <= 100) {
                  setAge(newAge);
                } else {
                  setAge(''); // Réinitialise le champ à une chaîne vide
                }
              }} 
              placeholder={t("Age")}
              required 
            />

            
            <div className="additional-inputs"><select 
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
            </div>

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("email")} required />
            <input type="password" value={passwordHash} onChange={(e) => setPasswordHash(e.target.value)} placeholder={t("password")} required />
            <PasswordStrengthBar password={passwordHash} />
            <select value={profession} onChange={handleProfessionChange} required>
              <option value="">{t("Select a profession")}</option>
              <option value="commerçant">{t("merchant")}</option>
              <option value="agriculteur">{t("farmer")}</option>
              <option value="ingenieur">{t("ingénieur Agricole")}</option>
              <option value="consomateur">{t("Consumer")}</option>
            </select>
            {showFileInput && (
              <div>
                <label >{t("Insert your file : ")}
                  <input type="file" onChange={handleFileChange} required  />
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
              {" "}
              <button onClick={() => setShowLoginForm(true)} style={{ border: 'none', backgroundColor: 'transparent', color: 'green', fontWeight: 'bold', fontSize: '15px' }}>{t("login")}</button>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default Register;
