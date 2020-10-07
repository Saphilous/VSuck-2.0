const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    QuestionText: String,
    QuestionImageURL: String,
    CorrectAnswer: String,
    label: String,
    Answers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }
})
module.exports = mongoose.model('Question', QuestionSchema)