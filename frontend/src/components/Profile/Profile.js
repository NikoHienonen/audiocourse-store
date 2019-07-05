import React, { Component } from 'react';

class Profile extends Component {
  state = { myCourses: []};
  componentDidMount() {
    this.setCourses();
  }
  setCourses = () => {
    this.props.getUserCourses(courseArray => {
      this.props.getCourses(courses => {
        if (courses && courseArray) {
          let myCourses = courses.filter(course => courseArray.includes(course.id));
          this.setState({myCourses});
        } else {
          this.setState({myCourses: []});
        }
      })
    })
  }
  cancelSignUp = (id) => {
    this.props.cancelSignUp(id, result => {
      this.setCourses();
    });
  }
  renderCourses = () => {
    if(this.state.myCourses.length === 0) {
      return <p>You have not signed up to courses yet!</p>
    } else {
      let renderedCourses = this.state.myCourses.map(course => {
        const { id, name, category, span, teacher} = course;
        return (
          <div className="course-card" key={id}>
            <div className="card-head">
              <h2>{name}</h2>
            </div>
            <div className="card-intro">
              <p>Category: {category}</p>
              <p>Teacher: {teacher}</p>
              <p>Span: {span}</p>
            </div>
            <button className="navbutton" onClick={() => {this.cancelSignUp(course.id)}}>
              Cancel
            </button>
          </div> 
        )
      });
      return renderedCourses;
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Profile</h1>
        <img className="profile-pic" alt="profile" src={process.env.PUBLIC_URL + '/user.png'}/>
        <div className="introduction">
          <p>Name: John Holloway</p>
          <p>Occupation: Audio Producer</p>
          <p>Courses done: 2</p>
        </div>
        <h2>My Courses</h2>
        <div className="courses">
          <this.renderCourses/>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;