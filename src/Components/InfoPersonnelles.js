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

const InfoPersonnelles = ({ avatar, name, email, password, file, profession, onAvatarChange, onFileChange, onInputChange }) => {
  return (
    <div className="info-personnelles">
      <form className="form">
        <div className="form-group">
          <Avatar imageSource={avatar} onChange={onAvatarChange} />
        </div>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" value={name} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" value={email} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" value={password} onChange={onInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession :</label>
          <select id="profession" name="profession" value={profession} onChange={onInputChange}>
            <option value="consommateur">Consommateur</option>
            <option value="commercant">Commerçant</option>
            <option value="agriculteur">Agriculteur</option>
            <option value="ingenieur_agriculteur">Ingénieur Agriculteur</option>
          </select>
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
