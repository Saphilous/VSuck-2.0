const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    QuizName: String,
    category: String,
    createdby: String,
    CreatedAt: Date,
    Questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
})
module.exports = mongoose.model('Quiz', QuizSchema)