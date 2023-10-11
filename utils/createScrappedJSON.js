'use strict';

const fs = require('fs');

module.exports = function (jsonPath, data) {
    fs.writeFile(`./${jsonPath}.json`, JSON.stringify(data), err => {
        if (err) return console.error(err.message);
        console.log(`File with the timestamp ${jsonPath}.json written succesfuly.`);
    })
}
