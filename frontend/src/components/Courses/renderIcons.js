import React from 'react';

const renderIcons = (category) => {
  if(category === "Ohjelmointi") {
    return <i className="fas fa-laptop-code"></i>
  } else if (category === "Työhyvinvointi") {
    return <i className="far fa-smile-beam"></i>
  } else if (category === "Yrittäjyys") {
    return <i className="fas fa-briefcase"></i>
  } else if (category === "Visuaalisuus") {
    return <i className="fas fa-pencil-ruler"></i>
  }
}

export default renderIcons;