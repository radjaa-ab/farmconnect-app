import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import agriculteur from '../Images/agriculteur.png'


function Contact() {
    return(
        <Form>
            <Row>
                <Col>
                    <img src={agriculteur} alt="profile" style={{ width: '30px'}}/>
                </Col>
                <Col>
                    <h3>Name</h3>
                    <p>message</p>
                </Col>
            </Row>
        </Form>
    );
}

export default Contact;