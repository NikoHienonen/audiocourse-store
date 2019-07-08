import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

class Navigation extends Component {
  onClick = (e) => {
    if(e.target.className !== "unclickable") {
      let checked = document.querySelector(".toggler").checked
      if(checked === true) {
        document.querySelector(".toggler").checked = false;
      }
    }
  }
  render() {
    return (
      <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul  onClick={this.onClick}>
                <li><Search/></li>
                <li><Link to="/home" className="menu-item">Home</Link></li>
                <li><Link to="/profile" className="menu-item">My Profile</Link></li>
                <li><Link to="/contact" className="menu-item">Contact</Link></li>
                <li><Link to="/about" className="menu-item"/>About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Navigation;