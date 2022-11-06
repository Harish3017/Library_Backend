const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const ENV_CONSTANTS = require('./constants/env.constants');

const app = express();

const autherRoute = require('./routes/authorRoute');
const bookRoute = require('./routes/bookRoute')

const apiURL = '/api/yta/';

app.use(cors());
app.use(express.json());


if (process.env.NODE_ENV === ENV_CONSTANTS.ENV_DEVELOPMENT) {
    app.use(morgan('dev'));
}

app.use(apiURL + 'author/',autherRoute);
app.use(apiURL + 'book/',bookRoute);

module.exports = app