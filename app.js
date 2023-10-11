'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const app = express();
const webRouter = require('./routes/webRouter');
app.use(express.json({
    limit: '32kb'
}));
app.use(helmet());
process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : app;
app.use(cors());
app.use(xss());
app.use('/api/v1/data', webRouter);


module.exports = app;