const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    QuizName: String,
    Category: String,
    Createdby: String,
    CreatedAt: Date,
    Questions: [{
    }]
})
module.exports = mongoose.model('Quiz', QuizSchema)