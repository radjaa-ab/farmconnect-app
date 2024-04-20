import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import './Footer.css';
import i18n from '../i18n';
import { Link } from 'react-router-dom';
import TermsAndConditions from './Termes';

const Footer = () => {
    const showTermes = true; // Define showTermes here or assign a value based on some condition

  const { t } = useTranslation(); // Using useTranslation hook to access t function
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-body-secondary text-light">
      <div className="footer1">
        <div className="footer">
          <div className="company-wrapper">
            <div className="company">
            
                <h1 className="ecobazar2">FarmConnect </h1>
              </div>
              <div className="morbi-cursus-porttitor">
                Agricultural Products Rural System: FarmConnect Hub
              </div>
              
              
            
          </div>
          <div className="my-account-wrapper">
            <div className="my-account">
              <div className="my-account1">My Account</div>
              <div className="links">
                <div className="my-account2">My Account</div>
                <div className="order-history">Order History</div>
               
                
              </div>
            </div>
          </div>
          <div className="help">
  <div className="helps">Helps</div>
  <div className="links1">
    <div className="contact2">Contact</div>
    <div className="faqs">Faqs</div>
    <div className="terms-condition">
    <Link to="/termes" className="green-link">Terms & Conditions</Link>

    </div>
    <div className="privacy-policy">Privacy Policy</div>
  </div>
</div>

          <div className="proxy">
            <div className="proxy1">Proxy</div>
            <div className="links2">
              <div className="about">About</div>
              <div className="shop">Shop</div>
              <div className="product">Product</div>
              <div className="track-order">Track Order</div>
            </div>
          </div>
         
        </div>
        <div className="copyright">
          <div className="ecobazar-ecommerce">
            FarmConnect © 2024. All Rights Reserved
          </div>
          <div className="methodapplepay-parent">
            <img className="methodapplepay-icon" alt="" />
            <img className="methodvisa-icon" alt="" />
            <img className="methoddiscover-icon" alt="" />
            <img className="methodmastercard-icon" alt="" />
           
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
