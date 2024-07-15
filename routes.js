const express = require('express');
const { getWeather } = require('./weather');
const router = express.Router();

router.get('/weather/:city', getWeather);

module.exports = router;
