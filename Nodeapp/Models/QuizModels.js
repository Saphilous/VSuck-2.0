const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    QuizName: String,
    category: String,
    createdby: String,
    CreatedAt: Date,
    Questions: [{
    }]
})
module.exports = mongoose.model('Quiz', QuizSchema)