const mongoose = require('mongoose')
const ClassSchema = new mongoose.Schema(
    {
        ClassName: {
            type: String,
            required: true,
            unique: true
        },
        ClassDescription: {
            type: String,
            required: true
        },
        ClassQuizzes: {
            type: String
        },
        ClassAssignements: {
            type: String
        }
    }
)
module.exports = mongoose.model('Class', ClassSchema)