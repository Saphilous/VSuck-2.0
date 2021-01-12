const express = require('express')
const router = express.Router()
const quizcontroller = require('../Controllers/QuizControllers')
const withAuth = require('../Middleware/AuthToken')

//router.get('/quizzes', withAuth, quizcontroller.getQuizzes)
router.get('/quizzes/:id', withAuth, quizcontroller.getQuizzeswithId)
router.get('/quizzes/:category/:id', withAuth, quizcontroller.getsinglequiz)
router.post('/quizzes/:id', withAuth, quizcontroller.postquizresults)

module.exports = router