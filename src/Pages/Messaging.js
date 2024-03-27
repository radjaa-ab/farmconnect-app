import React from 'react';
import SearchBar from '../Components/SearchBar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Messaging() {
    const MessagingPlaceholder = 'Search for people'; // Specific placeholder text
    return (
        <Form>
            <Row>
                <Col>
                    <SearchBar placeholderText={MessagingPlaceholder}/>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </Form>
    );

}

export default Messaging;