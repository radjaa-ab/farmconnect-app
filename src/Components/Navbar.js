import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Navbar = () => {

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
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
        <button onClick={handleLogout}>Déconnexion</button>
      </div>
    </div>
  );
}

export default Navbar;
