import React, { useState, useEffect } from 'react';
import '../Styles/Settings.css';
import "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Avatar = ({ imageSource, onChange }) => {
  return (
    <div>
      <img src={imageSource} alt="Avatar" />
      <input type="file" accept="image/*" onChange={onChange} style={{backgroundColor: 'transparent', border: 'none'}} />
    </div>
  );
};

const ProofInput = ({ onChange }) => {
  return (
    <div>
      <input type="file" accept=".pdf" onChange={onChange} style={{backgroundColor: 'transparent', border: 'none'}} />
    </div>
  );
};

const InfoPersonnelles = ({ userInputs, onAvatarChange, onProofChange, onInputChange, password, profession }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", "1ogDEFkRgpZCk7ngL0PGXKgF6fc2");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  const { displayName, email, userDetails } = userData || {};
  const { photourl } = userDetails || {};

  return (
    <div className="info-personnelles">
      <form className="form">
        <div className="form-group">
          <Avatar imageSource={photourl} onChange={onAvatarChange} />
        </div>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="displayName" value={displayName || ''} onChange={onInputChange} placeholder=''/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" value={email || ''} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" value={password || ''} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession :</label>
          <select 
            id="profession" 
            name="userDetails.profession" 
            value={profession || ''} 
            onChange={onInputChange} 
          >
            <option value="consommateur">Consommateur</option>
            <option value="commercant">Commerçant</option>
            <option value="agriculteur">Agriculteur</option>
            <option value="ingenieur_agriculteur">Ingénieur Agriculteur</option>
          </select>
        </div>
        {profession === 'commercant' ||
         profession === 'ingenieur_agriculteur' ||
         profession === 'agriculteur' ? (
          <div className="form-group">
            <ProofInput onChange={onProofChange} />
          </div>
        ) : null}
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default InfoPersonnelles;
