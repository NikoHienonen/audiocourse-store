import React from 'react';

const Contact = () => {
  return (
    <div className="content">
      <div className="generic-container">
        <h1>Contact Us!</h1>
      <div className="contacts">
        <div className="contact-card">
          <h3>Email</h3>
          <span>info@audi-courses.com</span>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <span>+358 50 464 4403</span>
        </div>
        <div className="contact-card">
          <h3>Location</h3>
          <span>33200 Tampere, FI</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;