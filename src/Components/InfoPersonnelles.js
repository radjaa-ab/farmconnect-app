import React from 'react';
import '../Styles/Settings.css';

const Avatar = ({ imageSource, onChange }) => {
  return (
    <div>
      <img src={imageSource} alt="Avatar" />
      <input type="file" accept="image/*" onChange={onChange} style={{backgroundColor: 'transparent', border: 'none'}} />
    </div>
  );
};

const FileInput = ({ onChange }) => {
  return (
    <div>
      <input type="file" accept=".pdf" onChange={onChange} style={{backgroundColor: 'transparent', border: 'none'}} />
    </div>
  );
};

const InfoPersonnelles = ({ imageSource, onImageChange, onFileChange }) => {
  return (
    <div className="info-personnelles">
      <form className="form">
        <div className="form-group">
          <Avatar imageSource={imageSource} onChange={onImageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input type="text" id="prenom" name="prenom" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Téléphone :</label>
          <input type="tel" id="telephone" name="telephone" />
        </div>
        <div className="form-group">
          <FileInput onChange={onFileChange} />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default InfoPersonnelles;