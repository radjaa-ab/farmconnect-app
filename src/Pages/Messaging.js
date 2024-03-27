import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SearchBar from '../Components/SearchBar';
import Contacts from '../Components/Contacts';
import ContactIcons from '../Components/ContactIcons';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../Styles/All.css';
import classNames from 'classnames';



function Messaging() {
  const MessagingPlaceholder = 'Search for people'; // Specific placeholder text

  return (
    <div className="messaging-container">
      <Form>
        <Row className="search-row">
          <Col xs={12} className="search-col"> {/* Search bar takes full width on all screens */}
            <SearchBar placeholderText={MessagingPlaceholder} className="Searchbar"/>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="contacts-col"> {/* Contacts pane takes 4 columns on all screens */}
            <Contacts />
          </Col>
          <Col xs={8} className="chat-col"> {/* ContactIcon pane takes remaining 8 columns on all screens */}
            <ContactIcons />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Messaging;
