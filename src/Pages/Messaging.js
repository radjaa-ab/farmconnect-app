import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SearchBar from '../Components/SearchBar';
import Contacts from '../Components/Contacts';
import ContactIcons from '../Components/ContactIcons';
import Chat from '../Components/Chatt'; // Assuming Chat component is imported correctly
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/All.css';
import classNames from 'classnames';

function Messaging() {
  const MessagingPlaceholder = 'Search for people';

  return (
    <div className="messaging-container">
      <Form>
        <Row className="search-row">
          <Col xs={4} className={classNames('search-col', 'centered-search')}>
            {/* Use classNames for conditional styling if needed */}
            <SearchBar placeholderText={MessagingPlaceholder} className="Searchbar" />
          </Col>
          <Col>
            <ContactIcons />
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="contacts-col">
            <Contacts />
          </Col>
          <Col xs={8} className="chat-col">
            <Chat />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Messaging;
