import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from '../logo.jpg';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Image} alt="image" thumbnail />
          FarmConnect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">A propos</Nav.Link>
            <NavDropdown title="Produits" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Fruits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Legumes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Plantes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Autres" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Equipements
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Terrains
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;