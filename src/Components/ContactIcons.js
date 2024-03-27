import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import chatvideo from '../Images/chatvideo.png';
import contact from '../Images/contact.png';
import propos from '../Images/a-propos.png';


function ContactIcons() {
    return(
        <Form>
        <Row>
            <Col>
                <h3>Name</h3>
            </Col>
            <Col>
                <img src={chatvideo} alt="chat-video" style={{ width: '30px'}}/>
            </Col>
            <Col>
                <img src={contact} alt="contact" style={{ width: '30px'}}/>
            </Col>
            <Col>
                <img src={propos} alt="propos" style={{ width: '30px'}}/>
            </Col>
        </Row>
    </Form>
    );
}

export default ContactIcons;