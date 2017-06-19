'use strict';

const express = require('express');
const app = express();

const worldArray = ['world', 'Mundu', 'svijet', 'verden', 'wereld', 'maailm', 'maailma', 'monde', 'mundo', 'Welt', 'heimurinn', 'domhan', 'mondo', 'pasaule', 'pasaulis', 'dinja', 'verden', 'mundo', 'lume', 'svet', 'mundo', 'byd'];

app.get('/', function (req, res) {
  const world = worldArray[Math.floor(Math.random() * worldArray.length)];
  res.send(world);
});

app.listen(3001, function () {
  console.log('App listening on port 3001')
});
