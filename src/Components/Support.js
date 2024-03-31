import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Support() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">FAQ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Assistance Téléphonique
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Discussion Directe
              </NavDropdown.Item>
            </NavDropdown>
      </Nav.Item>
    </Nav>
  );
}

export default Support;