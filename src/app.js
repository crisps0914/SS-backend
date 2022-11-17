const express = require('express');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const routes = require('./routes/v1');

// App
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// enable cors  
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/v1', routes);

module.exports = app;