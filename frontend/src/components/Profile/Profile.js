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
      return <p>Et ole ilmoittautunut kursseille vielä!</p>
    } else {
      let renderedCourses = this.state.myCourses.map(course => {
        const { id, name, category, span, teacher} = course;
        return (
          <div className="course-card" key={id}>
            <div className="card-head">
              <h2>{name}</h2>
            </div>
            <div className="card-intro">
              <p>Kategoria: {category}</p>
              <p>Opettaja: {teacher}</p>
              <p>Kesto: {span}</p>
            </div>
            <button className="navbutton" onClick={() => {this.cancelSignUp(course.id)}}>
              Peru ilmoittautuminen
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
        <h1>Profiili</h1>
        <img className="profile-pic" alt="profiilikuva" src={process.env.PUBLIC_URL + '/teacher.png'}/>
        <div className="introduction">
          <p>Nimi: Kaisla Salo</p>
          <p>Työnimike: Lehtori</p>
          <p>Polku: IB</p>
        </div>
        <h2>Kurssini</h2>
        <div className="courses">
          <this.renderCourses/>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;