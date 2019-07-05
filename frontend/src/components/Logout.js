import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
  logout = () => {
    sessionStorage.clear();
    sessionStorage.removeItem("visited")
    sessionStorage.removeItem("userCourses")
    this.props.history.push('/login');
    window.location.reload();
  }
  render() {
    return (
      <button className="menu-item" onClick={this.logout}>Kirjaudu Ulos</button>
    );
  }
}

export default withRouter(Logout);