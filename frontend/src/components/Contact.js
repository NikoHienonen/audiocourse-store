import React from 'react';

const Contact = () => {
  return (
    <div className="content">
      <div className="generic-container">
        <h1>Ota yhteyttä</h1>
      <div className="contacts">
        <div className="contact-card">
          <h3>Email</h3>
          <span>info@tuni.com</span>
        </div>
        <div className="contact-card">
          <h3>Puhelin</h3>
          <span>+358 50 464 4403</span>
        </div>
        <div className="contact-card">
          <h3>Osoite</h3>
          <span>Hämeenkatu 21 33100 Tampere, FI</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;