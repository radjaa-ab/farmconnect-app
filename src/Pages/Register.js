import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// Liste des wilayas d'Algérie
const wilayas = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"
];

function Register() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const [idUser, setidUser] = useState("");
  const [age, setAge] = useState(0); // Initialiser avec une valeur par défaut
  const [ville, setVille] = useState(""); // Utilisez la liste des wilayas
  const [justificatif, setJustificatif] = useState(null); // Les données Blob peuvent être nulles initialement
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState(""); // Ne pas stocker les mots de passe en texte brut
  const [error, setError] = useState(null); // État pour gérer les erreurs lors de l'inscription
  const [successMessage, setSuccessMessage] = useState(""); // État pour gérer le message de réussite
  const [showFileInput, setShowFileInput] = useState(false); // État initial pour la visibilité de l'entrée de fichier
  const [profession, setProfession] = useState(""); // État pour stocker la profession
  const [specialite, setSpecialite] = useState(""); // État pour stocker la spécialité de l'ingénieur

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setJustificatif(file); // Supposant que c'est pour le justificatif
  };

  const handleProfessionChange = (e) => {
    const selectedProfession = e.target.value;
    setProfession(selectedProfession); // Supposant qu'il existe une variable d'état pour la profession
    // Afficher l'entrée de fichier si la profession sélectionnée le nécessite
    setShowFileInput(["commerçant", "agriculteur", "ingenieur"].includes(selectedProfession));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Code pour inscrire l'utilisateur avec Firebase
    // Utilisez les valeurs des états pour créer un nouvel utilisateur dans Firebase
  };

  return (
    <div className="formWrapper" style={{ marginTop: '-80px' }}>
      <span className="logo">{t("registration")}</span>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSignUp}>
        <input type="text" value={idUser} onChange={(e) => setidUser(e.target.value)} />
        <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
        <select value={ville} onChange={(e) => setVille(e.target.value)} required>
          <option value="">{t("Select a wilaya")}</option>
          {wilayas.map((wilaya, index) => (
            <option key={index} value={wilaya}>{wilaya}</option>
          ))}
        </select>
        <input type="file" onChange={handleFileChange} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={passwordHash} onChange={(e) => setPasswordHash(e.target.value)} /> {/* Ne pas stocker les mots de passe en texte brut */}
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
      </form>
    </div>
  );
};
export default Register;
