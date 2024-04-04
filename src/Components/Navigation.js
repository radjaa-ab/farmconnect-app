import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from '../Images/logo.jpg';
import Cart from '../Images/chariot-de-chariot.png';
import Call from '../Images/service-client.png';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  const ProductsPlaceholder = 'Rechercher des produits';
  const navigate = useNavigate(); // Initialisez useNavigate

  // Fonction de gestion du clic sur le lien des paramètres
  const handleSettingsClick = () => {
    navigate('/SettingsPage'); // Redirigez l'utilisateur vers la page des paramètres
  };

  const handlePClick =  () => {
    navigate('/Panier') ;// Redirigez l
  }
  // Fonction de gestion du clic sur l'image d'appel
  const handleCallClick = () => {
    window.location.href = 'tel:0657783698'; // Appel vers le numéro 0657783698
  };

  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container style={{ padding: "0%" }}>
        <Navbar.Brand href="/" className="d-flex align-items-center brand">
          <img src={Image} alt="image" />
          <span className="brand-text">FarmConnect</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-between">
            <Nav.Link className="ms-3" style={{ marginRight: '1rem' }} onClick={handleSettingsClick}>Settings</Nav.Link>
            <NavDropdown title="Produits" id="basic-nav-dropdown" style={{ marginRight: '1rem' }}>
              <NavDropdown.Item href="#action/3.1">
                Fruits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Légumes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Autres" id="basic-nav-dropdown" style={{ marginRight: '1rem' }}>
              <NavDropdown.Item href="#action/3.1">
                Équipements
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Terrains
              </NavDropdown.Item>
            </NavDropdown>
            <SearchBar placeholderText={ProductsPlaceholder} />
            <div style={{ padding: '7px'}}>
              <LanguageSelector />
            </div>
            <Nav.Link  onClick={handlePClick}>
              <img src={Cart} alt="Panier" style={{ width: '25px' }} />
            </Nav.Link>
            {/* Ajoutez le gestionnaire d'événements onClick à l'image d'appel */}
            <Nav.Link onClick={handleCallClick}>
              <img src={Call} alt="Appel" style={{ width: '25px' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
