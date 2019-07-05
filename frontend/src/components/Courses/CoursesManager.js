import React from 'react'
import Courses from './Courses';

import { CourseConsumer } from '../../Coursecontext';

const CoursesManager = () => {
  return (
    <div className="content">
      <h1>Courses</h1>
      <CourseConsumer>
        {value => {
          return <Courses 
          getCourses={value.getCourses}  
          getUserCourses={value.getUserCourses}
          signUpForACourse={value.signUpForACourse}/>
        }}
      </CourseConsumer>
    </div>
  )
}

export default CoursesManager
