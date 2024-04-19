import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-body-secondary text-light">
      <div className="footer1">
        <div className="footer">
          <div className="company-wrapper">
            <div className="company">
              <div className="logo2">
                <div className="plant-1-container">
                  <img
                    className="plant-1-icon2"
                    alt=""
                    src="/plant-1-2.svg"
                  />
                </div>
                <h1 className="ecobazar2">FarmConnect </h1>
              </div>
              <div className="morbi-cursus-porttitor">
                Agricultural Products Rural System: FarmConnect Hub
              </div>
              <div className="cta">
                <div className="button8">
                  <div className="div21">(219) 555-0114</div>
                </div>
                <div className="or">or</div>
                <div className="button9">
                  <div className="proxygmailcom">Proxy@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-account-wrapper">
            <div className="my-account">
              <div className="my-account1">My Account</div>
              <div className="links">
                <div className="my-account2">My Account</div>
                <div className="order-history">Order History</div>
                <div className="shoping-cart">Shoping Cart</div>
                <div className="wishlist">Wishlist</div>
              </div>
            </div>
          </div>
          <div className="help">
            <div className="helps">Helps</div>
            <div className="links1">
              <div className="contact2">Contact</div>
              <div className="faqs">Faqs</div>
              <div className="terms-condition">Terms & Condition</div>
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
          <div className="categories14">
            <div className="categories15">Categories</div>
            <div className="links3">
              <div className="fruit-vegetables">Fruit & Vegetables</div>
              <div className="meat-fish">Meat & Fish</div>
              <div className="bread-bakery">Bread & Bakery</div>
              <div className="beauty-health">Beauty & Health</div>
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
            <div className="cart2">
              <div className="base" />
              <img className="lock-1-icon" alt="" />
              <div className="secure">Secure</div>
              <div className="payment">Payment</div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="categories16">Categories</div>
          </Col>
          <Col>
            <div className="fruit-vegetables1">Fruit & Vegetables</div>
          </Col>
          <Col>
            <div className="meat-fish1">Meat & Fish</div>
          </Col>
          <Col>
            <div className="bread-bakery1">Bread & Bakery</div>
          </Col>
          <Col>
            <div className="beauty-health1">Beauty & Health</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;