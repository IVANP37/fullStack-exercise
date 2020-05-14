'use strict'
const { Router } = require('express');
const router = new Router();


const {
    getWeather,
    getWeatherfaceCast
} = require("../controller/controller");

router.post('/', getWeather);
router.post('/facecast', getWeatherfaceCast);
module.exports = router;

