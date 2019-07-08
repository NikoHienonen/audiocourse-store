import React from 'react';

const About = () => {
  return (
    <div className="content">
      <div className="generic-container">
        <h1>About</h1>
        <div className="contacts">
          <div className="contact-card">
            <p>This is a demo version of an App I created for a client, the app is a mobile-first
              course-store which had a deadline of a month. 
            </p>
          </div>
          <div className="contact-card">
            <p>You can view courses, sign up to them, cancel your signing, search for courses by
              tags and view your own profile. 
            </p>
          </div>
          <div className="contact-card">
            <i className="fab fa-github"></i> https://github.com/NikoHienonen
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;