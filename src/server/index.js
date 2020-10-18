const express = require('express');
// call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const os = require('os');
require('dotenv').config();

const { send } = require('./mail');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));

const port = process.env.PORT || 8050; // set our port

app.use(express.static('dist'));
// =============================================================================
const router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use((req, res, next) => {
    // do logging
    console.log('App is running');
    next(); // make sure we go to the next routes and don't stop here
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`App listening on ${port}`);
