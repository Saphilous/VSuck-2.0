import * as mongoose from 'mongoose'

const AnswerSchema = new mongoose.Schema({
    AnswerText: String
})
module.exports = mongoose.model('Answer', AnswerSchema)