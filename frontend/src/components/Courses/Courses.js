import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import renderIcons from './renderIcons';

export default class Courses extends Component {
  state = {courses: [], userCourses: [], noCourses: false};
  componentDidMount() {
    this.getUserCourses();
    this.getCourses();
  }
  getUserCourses = () => {
    this.props.getUserCourses(result => {
      if (result) {
        this.setState({userCourses: result});
      } else {
        this.setState({noCourses: true})
      }
    })
  }
  getCourses = () => {
    this.props.getCourses(result => {
      this.setState({courses: result});
    })
  }
  onSignUp = (id) => {
    this.props.signUpForACourse(id, (userCourses) => {
      this.setState({userCourses});
    });
  }
  signedRender = (id) => {
    if (!this.state.noCourses) {
      return this.state.userCourses.includes(id) 
      ? <div className="sign-up">Ilmoittauduttu!</div>
      : null
    }
  }
  renderCourses = () => {
    let renderedCourses = this.state.courses.map(course => {
      const { id, name, category, span, teacher } = course;
      return (
        <div className="course-card" key={id}>
          {this.signedRender(id)}
          <div className="card-head">
            {renderIcons(category)}
            <h3>{name}</h3>
          </div>
          <div className="card-intro">
            <p>Kategoria: {category}</p>
            <p>Opettaja: {teacher}</p>
            <p>Kesto: {span}</p>
          </div>
          <Link name="Search" className="navbutton" to={"/course/"+id}>Lue lisää</Link>
        </div> 
      )
    });
    return renderedCourses;
  }
  render() {
    return (
      <div className="courses">
        {this.renderCourses()}
      </div>
    )
  }
}
