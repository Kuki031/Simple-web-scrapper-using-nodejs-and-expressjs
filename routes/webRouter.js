'use strict';

const express = require('express');
const webController = require('../controllers/webController');
const router = express.Router();

router.route('/').get(webController.landingPage);
router.route('/results').get(webController.fetchData);

module.exports = router;
