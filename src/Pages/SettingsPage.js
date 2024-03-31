import React, { useState } from 'react';
import MySidebar from '../Components/MySidebar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InfoPersonnelles from '../Components/InfoPersonnelles';
import Coupons from '../Components/Coupons';
import Panier from '../Components/Panier';
import Support from '../Components/Support';
import Termes from '../Components/Termes';

const SettingsPage = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <Row>
        <Col sm={3}>
          <MySidebar onItemClick={handleSidebarItemClick} />
        </Col>
        <Col>
          {selectedComponent === 'InfoPersonnelles' && <InfoPersonnelles />}
          {selectedComponent === 'Coupons' && <Coupons />}
          {selectedComponent === 'Panier' && <Panier />}
          {selectedComponent === 'Support' && <Support />}
          {selectedComponent === 'Termes' && <Termes />}
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;

