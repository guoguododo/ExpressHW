// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

//Require routes file
const routes = require('./routes/index.js');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3002;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use('/', routes);


// Setup listener
app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}!`)
);