import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Chat from '../Components/Chat';
import ContactIcons from '../Components/ContactIcons';
import Contacts from '../Components/Contacts';
import SearchBar from '../Components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Messaging() {
    const MessagingPlaceholder = 'Search for people'; // Specific placeholder text
    return (
        <Form>
            <Row>
                <Col>
                    <SearchBar placeholderText={MessagingPlaceholder}/>
                </Col>
                <Col>
                    <Contacts />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ContactIcons />
                </Col>
                
            </Row>
        </Form>
    );

}

export default Messaging;
