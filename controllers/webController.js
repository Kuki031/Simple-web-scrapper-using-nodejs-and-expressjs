'use strict';

const axios = require('axios');
const cheerio = require('cheerio');
const appError = require('../utils/appError');
const removeTryCatch = require('../utils/removeTryCatch');
const createScrappedJSON = require('../utils/createScrappedJSON');


exports.fetchData = removeTryCatch(async function (req, res, next) {
    const url = 'https://editorial.rottentomatoes.com/guide/best-netflix-shows-and-movies-to-binge-watch-now/';

    const ax = await axios(url);
    if (!ax) return next(new appError(`URL: ${url} is incorrect or it does not exist.`, 400));
    const html = await ax.data;
    const $ = cheerio.load(html);
    const scrappedData = [];

    $('.article_movie_title', html).each(function () {
        const heading = $(this).find('h2').text();
        const url = $(this).find('a').attr('href');
        scrappedData.push({
            heading,
            url
        })
    });

    const jsonfile = Date.now();
    createScrappedJSON(jsonfile, scrappedData);

    res.status(200).json({
        status: 'success',
        dataLength: scrappedData.length,
        data: {
            data: scrappedData
        }
    })

})

exports.landingPage = removeTryCatch(async function (req, res) {

    res.status(200).json({
        status: 'success',
        message: 'Landing page'
    })
})
