import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Coursesearch extends Component {
  state = {searchCourses: []};

  componentDidMount() {
    this.props.getCourses(result => {
      this.checkTheCourses(result);
    })
  }
  checkTheCourses = (courses) => {
    let param = this.props.parameter.toLowerCase();
    let searchCourses = courses.filter(course => {
      return course.tags.includes(param);
    })
    this.setState({searchCourses});
  }
  renderCourses = () => {
    if(this.state.searchCourses.length === 0) {
      return <p>No courses with the query!</p>
    } else {
      let courses =  this.state.searchCourses.map(course => {
        return <li key={course.id}>
            <Link to={"/course/" + course.id}>
              {course.name}
            </Link>
          </li>;
      })
      return courses;
    }
  }
  render() {
    return (
      <ul className="search">
        {this.renderCourses()}
      </ul>
    );
  }
}

export default Coursesearch;