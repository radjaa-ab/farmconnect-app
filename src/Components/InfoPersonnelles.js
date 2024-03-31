import React from 'react';



const InfoPersonnelles = () => {
  return (
    <div>
      <h2>Informations Personnelles</h2>
      <form>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" />
        </div>
        <div>
          <label htmlFor="prenom">Prénom :</label>
          <input type="text" id="prenom" name="prenom" />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="telephone">Téléphone :</label>
          <input type="tel" id="telephone" name="telephone" />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default InfoPersonnelles;
