const express = require('express')
const router = express.Router()
const quizcontroller = require('../Controllers/QuizControllers')
const withAuth = require('../Middleware/AuthToken')

router.get('/quizzes', withAuth, quizcontroller.getQuizzes)
router.get('/quizzes/:id', withAuth, quizcontroller.getsinglequiz)

module.exports = router