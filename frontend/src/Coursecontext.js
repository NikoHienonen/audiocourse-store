import React from 'react'
import axios from 'axios';

const CourseContext = React.createContext()

export const CourseConsumer = CourseContext.Consumer

class CourseProvider extends React.Component {
  componentDidMount() {
    this.checkIfFirstSignIn();
  }
  checkIfFirstSignIn = () => {
    let visited = sessionStorage.getItem("visited");
    if(visited !== "true" && !visited) {
      sessionStorage.setItem("visited", "true");
      sessionStorage.setItem("userCourses", "4324, 2352");
    }
  }
  getCourses = (callback) => {
    axios.get('/courses')
    .then(result => {
      callback(result.data);
    })
  }
  setStringToNumArray = (string) => {
    if(string) {
      let array = string.split(',');
      array = array.map(course => Number(course));
      return array;
    } else {
      let array = [];
      return array;
    }
  }
  getUserCourses = (callback) => {
    const courses = sessionStorage.getItem("userCourses");
    if (courses) {
      let courseArray = this.setStringToNumArray(courses);
      callback(courseArray);
    }
    else {
      callback(null);
    }
  }
  getCourseByID = (id, callback) => {
    axios.get('/courses/'+id)
    .then(result => {
      callback(result.data);
    });
  }
  signUpForACourse = (id, callback) => {
    let storage = sessionStorage.getItem("userCourses");
    let courseArray = this.setStringToNumArray(storage);
    if (!courseArray.includes(id)) {
      courseArray.push(id);
      let courses = courseArray.toString();
      sessionStorage.setItem("userCourses", courses);
      callback(courses);
    }
  }
  cancelSignUp = (id, callback) => {
    let storage = sessionStorage.getItem("userCourses");
    let courseArray = this.setStringToNumArray(storage);
    let splicedArray = courseArray.filter(course => course !== id);
    sessionStorage.setItem("userCourses", splicedArray);
    callback(splicedArray);
  }
  render () {
    return (
      // value prop is where we define what values 
      // that are accessible to consumer components
       <CourseContext.Provider value={{ 
         getCourses: this.getCourses,
         getUserCourses: this.getUserCourses,
         getCourseByID: this.getCourseByID,
         signUpForACourse: this.signUpForACourse,
         cancelSignUp: this.cancelSignUp
        }}>
        {this.props.children}
      </CourseContext.Provider>
    )
  }
}
export default CourseProvider