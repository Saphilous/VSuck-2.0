const express = require('express')
const router = express.Router()
const classcontroller = require('../Controllers/ClassControllers')

router.get('/classes', classcontroller.getclasses)
router.get('/classes/:id', classcontroller.getclasswithid)
router.post('/classes')

module.exports= router