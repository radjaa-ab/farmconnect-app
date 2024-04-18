// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <section className="footer-parent">
      <div className="footer">
        <div className="subscribe-our-newsletter">
          <div className="subscribe-our-newsletter-child" />
          <div className="subcribe-our-newsletter-parent">
            <div className="subcribe-our-newsletter">
              Subcribe our Newsletter
            </div>
            <div className="pellentesque-eu-nibh">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </div>
          </div>
          <div className="subscribe">
            <div className="input-field">
              <div className="your-email-address">Your email address</div>
            </div>
            <div className="button7">
              <div className="subscribe1">Subscribe</div>
            </div>
          </div>
          <div className="social-media-parent">
            <img className="social-media-icon" alt="" />
            <img className="social-media-icon1" alt="" />
            <img className="social-media-icon2" alt="" />
            <img className="social-media-icon3" alt="" />
          </div>
        </div>
        <div className="footer1">
          {/* Rest of your footer content */}
        </div>
      </div>
      <div className="categories2">Categories</div>
      <div className="fruits">Fruits</div>
      <div className="vegetables">Vegetables</div>
      <div className="equipements">Equipments</div>
      <div className="terrain">Terrain</div>
    </section>
  );
};

export default Footer;
