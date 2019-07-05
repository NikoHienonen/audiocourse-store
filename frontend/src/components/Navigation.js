import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import Contact from './Contact';
import Logout from './Logout';

class Navigation extends Component {
  onClick = (e) => {
    if(e.target.className !== "unclickable") {
      let checked = document.querySelector(".toggler").checked
      if(checked === true) {
        document.querySelector(".toggler").checked = false;
      }
    }
  }
  renderOrNot = () =>  {
    let loggedIn = sessionStorage.getItem("loggedIn");
    if(loggedIn === "True") {
      return (
      <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul  onClick={this.onClick}>
                <li><Search/></li>
                <li><Link to="/home" className="menu-item">Etusivu</Link></li>
                <li><Link to="/profile" className="menu-item">Oma Profiili</Link></li>
                <li><Link to="/contact" className="menu-item">Ota Yhteyttä</Link></li>
                <li><Logout/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <this.renderOrNot/>
    );
  }
}

export default Navigation;