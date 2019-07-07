'use strict';
const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

const server = app.listen(process.env.PORT || 8080);
