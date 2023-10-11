'use strict';

const localhost = '127.0.0.1';
const port = 8080;
const app = require('./app');




app.listen(port, localhost, () => {
    console.log(`App running on ${localhost}:${port}`);
});