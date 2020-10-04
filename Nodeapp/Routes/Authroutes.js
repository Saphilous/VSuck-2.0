const express = require('express')
const router = express.Router()
const authcontroller = require('../Controllers/AuthControllers')
const withAuth = require('../Middleware/AuthToken')

router.post('/login', authcontroller.postlogin)
router.post('/signup', authcontroller.postsignup)
router.get('/checktoken', withAuth, authcontroller.checktoken)

module.exports = router