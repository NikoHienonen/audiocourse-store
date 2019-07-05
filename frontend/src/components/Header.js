import React from 'react';

const Header = () => {
  return (
    //<h1 className="header">Koulutuksen Verkkokauppa</h1>
    <header>
      <img className="header" alt="iso-tuni" src={process.env.PUBLIC_URL + '/tuni-white.jpg'} />
    </header>
  );
};

export default Header;