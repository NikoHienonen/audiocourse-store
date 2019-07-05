import React from 'react'

import { Link } from 'react-router-dom';

import Course from './Course';

import { CourseConsumer } from '../../Coursecontext';

const CourseManager = (props) => {
  return (
    <CourseConsumer>
      {value => {
        return (
        <div className="content">
          <div className="course-detail">
            <Course
            getCourseByID={value.getCourseByID}
            id={props.match.params.id}
            signUpForACourse={value.signUpForACourse}
            getUserCourses={value.getUserCourses}/>
            <div className="course-nav">
              <Link to="/home" className="button">Palaa</Link>
              <Link to="/profile" >Oma profiili</Link>
              <p>
                <i class="fas fa-info-circle"></i> 
                Omasta profiilista voi hallita ilmoittautumisia
              </p>
            </div>
          </div>
        </div>
        )
      }}
    </CourseConsumer>
  )
}

export default CourseManager
