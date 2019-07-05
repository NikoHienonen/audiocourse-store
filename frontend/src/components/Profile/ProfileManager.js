import React from 'react'

import { Link } from 'react-router-dom';

import { CourseConsumer } from '../../Coursecontext';
import Profile from './Profile';

const ProfileManager = (props) => {
  return (
    <CourseConsumer>
      {value => {
        return (
        <div className="content">
          <div className="profile generic-container">
            <Profile 
            getUserCourses={value.getUserCourses} 
            getCourses={value.getCourses}
            cancelSignUp={value.cancelSignUp}
            />
            <Link to="/home" className="button">Back</Link>
          </div>
        </div>
        )
      }}
    </CourseConsumer>
  )
}

export default ProfileManager;