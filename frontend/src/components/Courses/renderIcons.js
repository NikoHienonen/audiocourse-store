import React from 'react';

const renderIcons = (category) => {
  if(category === "Recording") {
    return <i className="fas fa-microphone"></i>
  } else if (category === "Mixing") {
    return <i className="fas fa-headphones"></i>
  } else if (category === "Mastering") {
    return <i className="fas fa-volume-up"></i>
  } else if (category === "Studio") {
    return <i className="fas fa-border-all"></i>
  } else if (category === "misc") {
    return <i className="fas fa-question-circle"></i>
  }
}

export default renderIcons;