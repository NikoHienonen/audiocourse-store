import React from 'react'

import { Link } from 'react-router-dom';

import Coursesearch from './Coursesearch';
import { CourseConsumer } from '../Coursecontext';

const SearchManager = (props) => {
  return (
    <CourseConsumer>
      {value => {
        const { parameter } = props.match.params;
        return (
        <div className="content">
          <div className="search-field generic-container">
            <h1>Kurssihaku</h1>
            <h3>Hakutulokset hakuehdolle: "{parameter}"</h3>
            <Coursesearch getCourses={value.getCourses} parameter={parameter}/>
            <Link to="/home" className="button">Palaa</Link>
          </div>
        </div>
        )
      }}
    </CourseConsumer>
  )
}

export default SearchManager;