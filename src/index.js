const express = require('express');
// call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const { send } = require('./server/mail');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// configure app to use bodyParser()
// this will let us get the data from a POST

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

app.use(
    bodyParser.json({
        limit: '5000000',
        type: 'application/json',
        extended: true,
    })
);

app.use(
    bodyParser.urlencoded({
        parameterLimit: 5000000,
        extended: true,
    })
);
console.log(app);
router.use(express.json());

// Listen to post request on route /send and call send function in mail.js
router.post('/send', send);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`App listening on ${port}`);
