import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import renderIcons from './renderIcons';

class Course extends Component {
  state = {course: '', userCourses: []};
  componentDidMount(){
    this.getCourses(this.props.id);
  }  
  getCourses = (id) => {
    id = Number(id);
    this.props.getCourseByID(id, (result) => {
      this.setState({course: result});
    })
    this.props.getUserCourses(userCourses => {
      this.setState({userCourses});
    })
  }
  renderTags = (tags) => {
    if (tags) return tags.map(tag => <li key={tag}>
      <Link to={"/search/"+ tag} >{tag}</Link>
    </li>);
  }
  alreadySignedUpUpper = (id) => {
    if(this.state.userCourses) {
      return this.state.userCourses.includes(id)
      ? <div className="sign-up">Signed Up!</div>
      : null
    }
  }
  alreadySignedUpLower = (id) => {
    if(this.state.userCourses) {
      return this.state.userCourses.includes(id)
      ? <p className="sign-up detail">Signed Up!</p>
      : <button className="navbutton detail" onClick={() => {this.onSignUp(id)}}>Sign up</button>
    } else {
      return <button className="navbutton detail" onClick={() => {this.onSignUp(id)}}>Sign up</button>
    }
  }
  onSignUp = (id) => {
    this.props.signUpForACourse(id, (userCourses) => {
      this.setState({userCourses});
    });
  }
  render() {
    const { id, name, category, teacher, span, tags} = this.state.course;
    return (
      <React.Fragment>
        {this.alreadySignedUpUpper(id)}
        <div className="card-head">
        {renderIcons(category)}
          <h2>{name}</h2>
        </div>
          <div className="card-intro">
            <p>Category: {category}</p>
            <p>Teacher: {teacher}</p>
            <p>Span: {span}</p>
          </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit non curabitur, tellus
          fringilla nisi aliquam est in dui et, velit praesent porta ante taciti integer
          primis imperdiet. Nullam maecenas sagittis tempus sociosqu mi varius diam
          sociis ac, hac ut tellus magna curabitur aenean aliquam molestie laoreet, 
          leo congue ridiculus dapibus duis aptent risus nec. Bibendum montes accumsan 
          est netus primis vestibulum dignissim blandit leo sodales ad, in lacus tempor 
          libero nostra diam luctus sociosqu aptent.
        </p>
        <p>
          Ligula congue mattis donec 
          magna feugiat eu gravida mollis ac lectus, netus risus nascetur nec eget 
          arcu sociis vel egestas posuere nam, mauris facilisi praesent eros leo urna 
          mi per cubilia. Integer vel metus sed nulla purus luctus accumsan odio 
          molestie congue, ut lacinia dapibus imperdiet aenean leo tortor porttitor 
          bibendum, duis quisque natoque sociosqu torquent ornare enim senectus venenatis. 
          Laoreet himenaeos fames nulla urna interdum sociosqu ad tellus auctor, inceptos 
          ante torquent consequat commodo nullam nostra.
        </p>
        <ul className="tags"><li>Tags: </li>{this.renderTags(tags)}</ul>
        {this.alreadySignedUpLower(id)}
        </React.Fragment>
    );
  }
}

export default Course;
