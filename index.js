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
      , name: "Javascript perusteet"
      , category: "Ohjelmointi"
      , span: 2
      , teacher: "Jukka Puhjolainen"
      , tags: ["ohjelmointi", "javascript", "puhjolainen"]
    }
    , {id: 4624
      , name: "Tiimi johtaminen"
      , category: "Yrittäjyys"
      , span: 1
      , teacher: "Jaana Koivumaa"
      , tags: ["yrittäjyys", "tiimi", "koivumaa"]
    }
    , {id: 5323
      , name: "PHP:n Salat"
      , category: "Ohjelmointi"
      , span: 1
      , teacher: "Petri Alaruusi"
      , tags: ["ohjelmointi", "php", "alaruusi"]
    }
    , {id: 2352
      , name: "Meditaatio Osana Arkea"
      , category: "Työhyvinvointi"
      , span: 1
      , teacher: "Heimo Nikonen"
      , tags: ["hyvinvointi", "meditaatio", "nikonen"]
    }
    , {id: 7646
      , name: "Yrittäjän Laskutus ja Verotus"
      , category: "Yrittäjyys"
      , span: 2
      , teacher: "Hannu Jussinen"
      , tags: ["yrittäjyys", "vero", "jussinen"]
    }
    , {id: 9305
      , name: "Verkkoyrittäjyys"
      , category: "Yrittäjyys"
      , span: 1
      , teacher: "Joona Poromies"
      , tags: ["yrittäjyys", "verkko", "poromies"]
    }
    , {id: 6345
      , name: "Web-ohjelmoinnin perusteet"
      , category: "Ohjelmointi"
      , span: 2
      , teacher: "Heimo Nikonen"
      , tags: ["ohjelmointi", "html", "css","nikonen"]
    }
    , {id: 1005
      , name: "Tehokas mainonta"
      , category: "Yrittäjyys"
      , span: 1
      , teacher: "Noora Louhamo"
      , tags: ["yrittäjyys", "mainonta", "louhamo"]
    }
    , {id: 3334
      , name: "Design perusteet"
      , category: "Visuaalisuus"
      , span: 2
      , teacher: "Teemu Mäntyluoto"
      , tags: ["visuaalisuus", "design", "mäntyluoto"]
    }
    , {id: 6255
      , name: "Viihtyisä toimisto"
      , category: "Työhyvinvointi"
      , span: 1
      , teacher: "Alina Alalah"
      , tags: ["työhyvinvointi", "alalah"]
    }
    , {id: 5455
      , name: "Vektorit"
      , category: "Visuaalisuus"
      , span: 1
      , teacher: "Teemu Mäntyluoto"
      , tags: ["visuaalisuus", "vektorit", "mäntyluoto"]
    }
    , {id: 4666
      , name: "D.R.Y. Ohjelmointi"
      , category: "Ohjelmointi"
      , span: 2
      , teacher: "Jukka Puhjolainen"
      , tags: ["ohjelmointi", "dry", "puhjolainen"]
    }
    , {id: 6549
      , name: "Hyöty- ja taukojumppa"
      , category: "Työhyvinvointi"
      , span: 1
      , teacher: "Kalle Pöyski"
      , tags: ["työhyvinvointi", "liikunta", "pöyski"]
    }
    , {id: 1112
      , name: "Asiakaskohtaaminen"
      , category: "Yrittäjyys"
      , span: 2
      , teacher: "Joona Poromies"
      , tags: ["yrittäjyys", "asiakas", "poromies"]
    }
    , {id: 5311
      , name: "Reactin salat"
      , category: "Ohjelmointi"
      , span: 2
      , teacher: "Jukka Puhjolainen"
      , tags: ["ohjelmointi", "react", "puhjolainen"]
    }
    , {id: 4242
      , name: "Backend ratkaisut"
      , category: "Ohjelmointi"
      , span: 3
      , teacher: "Jukka Puhjolainen"
      , tags: ["ohjelmointi", "backend", "puhjolainen"]
    }
    , {id: 6454
      , name: "Päiväunet työpaikalla"
      , category: "Työhyvinvointi"
      , span: 1
      , teacher: "Heimo Nikonen"
      , tags: ["työhyvinvointi", "nikonen"]
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
