import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import CourseManager from './components/Courses/CourseManager';
import Contact from './components/Contact';
import About from './components/About';
import ProfileManager from './components/Profile/ProfileManager';
import SearchManager from './components/SearchManager';
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
                <Route exact path ="/" component={Landing}/>
                <Route exact path="/home" component={Landing}/>
                <Route exact path="/course/:id" component={CourseManager}/>
                <Route exact path="/profile" component={ProfileManager}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/search/:parameter" component={SearchManager}/>
                <Route exact path="/notfound" component={NoMatch}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
            </React.Fragment>
      </Router>
    </CourseProvider>
  );
}

export default App;
