import React from 'react';
import { auth } from '../firebase'; // Importez l'initialisation de Firebase
import { useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import Logo from '../Images/logo-removebg-preview.png';

const MySidebar = ({ onItemClick }) => {
  const navigate = useNavigate(); // Initialisez useNavigate

  const handleItemClick = (component) => {
    onItemClick(component);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log("Déconnexion réussie");
    }).catch((error) => {
      console.log("Erreur lors de la déconnexion :", error);
    });
  };

  const handleFarmConnectClick = () => {
    navigate('/'); // Redirigez l'utilisateur vers la page d'accueil
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Paramètres
          </a>
          <img src={Logo} alt="Logo" />
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem onClick={() => handleItemClick('InfoPersonnelles')} icon="columns">Mes informations personnelles</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={() => handleItemClick('Coupons')} icon="table">Coupons</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={() => handleItemClick('Panier')} icon="user">Mon panier</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={() => handleItemClick('Support')} icon="chart-line">Support</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={() => handleItemClick('Termes')} icon="exclamation-circle">Termes et conditions</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <button onClick={handleLogout}>Déconnexion</button>
          <div
            style={{
              padding: '20px 5px',
              cursor: 'pointer',
            }}
            onClick={handleFarmConnectClick}
          >
            FarmConnect
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default MySidebar;
