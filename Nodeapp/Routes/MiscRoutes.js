const express = require('express')
const router = express.Router()
const misccontroller = require('../Controllers/MiscController')
const authcontroller = require('../Controllers/AuthControllers')

router.get('/', misccontroller.gethome)
router.post('/login', authcontroller.postlogin)

module.exports=router
