import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BasicExample from '../Components/Navigation';
import Forms from '../Components/SignUpForms';
import farmers from '../Images/farmrs-removebg-preview.png';
import '../Styles/All.css'; 

function Home() {
  return (
    <div className="Home">
      <Row className="nav-home">
        <BasicExample />
      </Row>
      <Row>
        <Col md={5} className='forms-container'> 
          <Forms />
        </Col>
        <Col md={5}  className="forms-farmers">
          <h3>Atteignez vos clients plus rapidement, <br /> Avec nous.</h3>
          <img src={farmers} alt="image" style={{ width: "600px", height: "300px" }} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
