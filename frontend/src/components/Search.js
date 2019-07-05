import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component{
  constructor(props) {
      super(props);
      this.state = {
          searchValue: ""
      }
  }
  handleChange = (event) => {
    this.setState({
        searchValue: event.target.value
    })
  }
  render(){
    return (
      <div className="menu-item">
        <input className="unclickable" type="text" onChange={this.handleChange} placeholder="Hae kursseja..."></input>
        <Link name="Search" className="navbutton" 
        to={`/search/${this.state.searchValue}`} disabled={!this.state.searchValue || this.state.searchValue === ""}>
        <i className="fas fa-search"></i>
        </Link>
      </div>
    )
  }
}

export default Search;