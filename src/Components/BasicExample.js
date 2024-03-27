import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from '../Images/logo.jpg';
import Cart from '../Images/chariot-de-chariot.png'
import Call from '../Images/service-client.png'


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
          <Nav className="d-flex justify-content-between">
            <Nav.Link href="#home" className="ms-3" style={{ marginRight: '1rem' }}>Accueil</Nav.Link>  {/* Add ms-3 class for margin-left */}
            <Nav.Link href="#link" className="ms-3" style={{ marginRight: '1rem' }}>Apropos</Nav.Link>  {/* Add ms-3 class for margin-left */}
            <NavDropdown title="Produits" id="basic-nav-dropdown" style={{ marginRight: '1rem' }}>
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
            <NavDropdown title="Autres" id="basic-nav-dropdown" style={{ marginRight: '1rem' }}>
              <NavDropdown.Item href="#action/3.1">
                Equipements
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Terrains
              </NavDropdown.Item>
            </NavDropdown>
            <SearchBar />
            <Nav.Link>
              <img src={Cart} style={{ width: '30px'}} />
            </Nav.Link>
            <Nav.Link>
              <img src={Call} style={{ width: '30px'}} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
