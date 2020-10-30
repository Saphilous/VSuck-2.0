const mongoose = require('mongoose')

const AnswerSchema = new mongoose.Schema({
    AnswerText: String
})
module.exports = mongoose.model('Answer', AnswerSchema)