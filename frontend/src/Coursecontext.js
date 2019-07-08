import React from 'react'

const CourseContext = React.createContext()

export const CourseConsumer = CourseContext.Consumer

class CourseProvider extends React.Component {
  state = {
    courses: [
      {id: 4324
        , name: "Drum Mics"
        , category: "Recording"
        , span: 1
        , teacher: "Andy Mattson"
        , tags: ["recording", "drums", "mattson"]
      }
      , {id: 4624
        , name: "Substractive EQ"
        , category: "Mixing"
        , span: 1
        , teacher: "Madison Hill"
        , tags: ["mixing", "eq", "hill"]
      }
      , {id: 5323
        , name: "Guitar re-amp"
        , category: "Recording"
        , span: 1
        , teacher: "David Lowe"
        , tags: ["recording", "guitar", "lowe"]
      }
      , {id: 2352
        , name: "What is Mastering?"
        , category: "Mastering"
        , span: 1
        , teacher: "Nick Finen"
        , tags: ["mastering", "mastering", "finen"]
      }
      , {id: 7646
        , name: "Echo effects"
        , category: "Mixing"
        , span: 2
        , teacher: "Donald Kingdon"
        , tags: ["mixing", "echo", "kingdon"]
      }
      , {id: 9305
        , name: "Metal Compression"
        , category: "Mixing"
        , span: 1
        , teacher: "Sander Taylor"
        , tags: ["mixing", "compression", "taylor"]
      }
      , {id: 6345
        , name: "Room Mics"
        , category: "Recording"
        , span: 2
        , teacher: "Nick Finen"
        , tags: ["recording", "room", "finen"]
      }
      , {id: 1005
        , name: "Starting with MIDI"
        , category: "Mixing"
        , span: 1
        , teacher: "Hannah Tap"
        , tags: ["mixing", "midi", "tap"]
      }
      , {id: 3334
        , name: "Studio Coziness"
        , category: "Studio"
        , span: 2
        , teacher: "Mark Pine"
        , tags: ["studio", "cozy", "pine"]
      }
      , {id: 6255
        , name: "Loudness Wars"
        , category: "Mastering"
        , span: 1
        , teacher: "Christina Lyone"
        , tags: ["mastering", "loudness", "lyone"]
      }
      , {id: 5455
        , name: "DAW Selection"
        , category: "Misc"
        , span: 1
        , teacher: "Mark Pine"
        , tags: ["misc", "daw", "pine"]
      }
      , {id: 4666
        , name: "Vocal Recording"
        , category: "Recording"
        , span: 2
        , teacher: "Andy Mattson"
        , tags: ["recording", "vocals", "mattson"]
      }
      , {id: 6549
        , name: "Stereo Image"
        , category: "Mixing"
        , span: 1
        , teacher: "Maximillian Dolt"
        , tags: ["mixing", "stereo", "Dolt"]
      }
      , {id: 1112
        , name: "Mixing Metal Guitars"
        , category: "Mixing"
        , span: 2
        , teacher: "Sander Taylor"
        , tags: ["mixing", "guitars", "metal", "taylor"]
      }
      , {id: 5311
        , name: "Choir Recording"
        , category: "Recording"
        , span: 2
        , teacher: "Andy Mattson"
        , tags: ["recording", "choir", "mattson"]
      }
      , {id: 4242
        , name: "Basics of Recording"
        , category: "Recording"
        , span: 3
        , teacher: "Andy Mattson"
        , tags: ["recording", "basics", "mattson"]
      }
      , {id: 6454
        , name: "Top-Down Mixing"
        , category: "Mixing"
        , span: 1
        , teacher: "Nick Finen"
        , tags: ["työhyvinvointi", "finen"]
      }
    ]
  }
  componentDidMount() {
    this.checkIfFirstSignIn();
  }
  checkIfFirstSignIn = () => {
    let visited = sessionStorage.getItem("courseStoreVisited");
    if(visited !== "true" || !visited) {
      sessionStorage.setItem("courseStoreVisited", "true");
      sessionStorage.setItem("courseStoreUserCourses", "");
    }
  }
  getCourses = (callback) => {
    callback(this.state.courses);
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
    const courses = sessionStorage.getItem("courseStoreUserCourses");
    if (courses) {
      let courseArray = this.setStringToNumArray(courses);
      callback(courseArray);
    }
    else {
      callback(null);
    }
  }
  getCourseByID = (id, callback) => {
    let found = this.state.courses.find(course => {
      return course.id === Number(id);
  })
  callback(found); 
  }
  signUpForACourse = (id, callback) => {
    let storage = sessionStorage.getItem("courseStoreUserCourses");
    let courseArray = this.setStringToNumArray(storage);
    if (!courseArray.includes(id)) {
      courseArray.push(id);
      let courses = courseArray.toString();
      sessionStorage.setItem("courseStoreUserCourses", courses);
      callback(courses);
    }
  }
  cancelSignUp = (id, callback) => {
    let storage = sessionStorage.getItem("courseStoreUserCourses");
    let courseArray = this.setStringToNumArray(storage);
    let splicedArray = courseArray.filter(course => course !== id);
    sessionStorage.setItem("courseStoreUserCourses", splicedArray);
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