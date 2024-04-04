import React from 'react';
import { app, auth } from '../firebase'; // Importez l'initialisation de Firebase

const Navbar = () => {

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log("Déconnexion réussie");
    }).catch((error) => {
      console.log("Erreur lors de la déconnexion :", error);
    });
  };

  return (
    <div className='navbar'>
      <span className="logo">FarmConnect</span>
      <div className="user">
        <img alt="" />
        <span>FarmConnect</span>
        <button style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100px' }} onClick={handleLogout}>Déconnexion</button>
      </div>
    </div>
  );
}

export default Navbar;
