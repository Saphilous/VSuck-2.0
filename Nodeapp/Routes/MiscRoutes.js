const express = require('express')
const router = express.Router()
const misccontroller = require('../Controllers/MiscController')

router.get('/', misccontroller.gethome)

module.exports=router