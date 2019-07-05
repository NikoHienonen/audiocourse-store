import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import CourseManager from './components/Courses/CourseManager';
import Contact from './components/Contact';
import ProfileManager from './components/Profile/ProfileManager';
import SearchManager from './components/SearchManager';
import Login from './components/Login';
import NoMatch from './components/NoMatch';

import CourseProvider from './Coursecontext';

function App() {
  return (
    <CourseProvider>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
          <React.Fragment>
          <Header/>
          <Navigation/>
            <div className="container">
              <div className="overlay"></div>
              <img src="background.jpg" className="background" alt="backgroundimg"></img>
              <Switch>
                <PrivateRoute exact path ="/" component={Landing}/>
                <PrivateRoute exact path="/home" component={Landing}/>
                <PrivateRoute exact path="/course/:id" component={CourseManager}/>
                <PrivateRoute exact path="/profile" component={ProfileManager}/>
                <PrivateRoute exact path="/contact" component={Contact}/>
                <PrivateRoute exact path="/search/:parameter" component={SearchManager}/>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/notfound" component={NoMatch}/>
                <PrivateRoute component={NoMatch}/>
              </Switch>
            </div>
            </React.Fragment>
      </Router>
    </CourseProvider>
  );
}

export default App;
