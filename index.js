'use strict';
const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

const buildDir = __dirname + "/build/";
app.use(express.static(buildDir));

const server = app.listen(process.env.PORT || 8080);

let courses = [
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

function getCourseByID(id, callback) {
    let found = courses.find(course => {
        return course.id === Number(id);
    })
    callback(found); 
}

app.get('/courses/', (req, res) => {
    // curl http://localhost:8080/courses/5342
    console.log('getting courses');
    res.send(courses);
})


app.get('/courses/:id([0-9]+)', (req, res) => {
    let id = req.params.id;
    getCourseByID(id, (result) => {
        if (result) {
            res.send(result);
        } else {
            res.send("Not found");
        }
    });
    
})
