import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import BasicExample from '../Components/BasicExample';
import Forms from '../Components/Forms';
import farmers from '../farmrs.jpg';

function Home() {
  return (
    <div>
    <BasicExample />
    <Form>
      <Row>
        <Col>
        <Forms />
        </Col>
        <Col>
        <img src={farmers} alt="image" style={{ width: "700px", height: "300px" }} />
        </Col>
      </Row>
    </Form>
    </div>
  );
}

export default Home;