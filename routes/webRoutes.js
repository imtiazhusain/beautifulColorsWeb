const express = require('express')
const router = express.Router()

const home = require('../controller/homeController')
const popular = require('../controller/pupularController')

router.get('/',home)
router.get('/popular',popular)


module.exports = router