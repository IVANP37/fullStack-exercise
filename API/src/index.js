'use strict'
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require("helmet");
const app = express();


// settings
app.set('port', process.env.PORT || 40000);

// middlewares
app.use (helmet());// Header security
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// routes

app.use('/api/weather', require('./routes/weatherRoutes'));
app.use('/api', require('./routes/users'));

module.exports = app
 
// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

module.exports = app