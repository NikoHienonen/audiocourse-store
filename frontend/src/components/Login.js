import React, { Component } from 'react';

class Login extends Component {
  state = {
    pin: '',
    errorMessage: '',
    disabled: true
  }
  redirect = () => {
    sessionStorage.setItem("loggedIn", "True");
    this.props.history.push('/');
    window.location.reload();
  }
  handleChange = (e) => {
    this.setState({pin: e.target.value});
    if(this.state.pin.length > 2) {
      this.setState({disabled: false});
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.pin === '3334') {
      this.redirect();
    } else {
      this.setState({errorMessage: 'Wrong pin'});
    }
  }
  render() { 
    return (
      <div className="content">
        <div className="generic-container">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label className="control-label">Pin</label>
              <input onChange={this.handleChange} value={this.state.pin} 
                type="password" name="pin" className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <button className="login-button navbutton" disabled={this.state.disabled}>Login</button>
            </div>

            <p className="errorMessage">{this.state.errorMessage}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;