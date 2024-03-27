import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import BasicExample from '../Components/BasicExample';
import Forms from '../Components/Forms';
import farmers from '../Images/farmrs.jpg';
import Messaging from './Messaging';

function Home() {
  return (
    <div>
    <Form>
      <Row>
        <BasicExample />
      </Row>
      <Row>
        <Col>
        <Forms />
        </Col>
        <Col>
          <h3>Atteignez vos clients plus rapidement, <br /> Avec nous.</h3>
          <img src={farmers} alt="image" style={{ width: "700px", height: "300px" }} />
        </Col>
      </Row>
    </Form>
    <Messaging />
    </div>
  );
}

export default Home;