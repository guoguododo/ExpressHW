// Require Dependencies
const express = require("express");
const fs = require("fs");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}!`)
);