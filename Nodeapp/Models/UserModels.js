const mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    mailid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    RegisteredClasses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    Quizzes : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    Marks : [
        {markslist : [{quizid: {type: String}, totalmarks: {type: Number}}]}
    ]
})
module.exports = mongoose.model('User', UserSchema)