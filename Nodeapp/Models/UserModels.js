const mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    mailid: String,
    password: String,
    username:String
})
module.exports = mongoose.model('User', UserSchema)