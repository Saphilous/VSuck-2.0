const express = require('express')
const cors = require('cors')
app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

mongoose.connect('mongodb+srv://Saphilous:jaffareddy@0.zwbla.mongodb.net/vs01?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify:false})

//internal dependancies
const miscpages=require('./Routes/MiscRoutes')
app.use(bodyparser.json())
app.use(cors())
app.listen(port, () => console.log( "It is a me ! DEO"))
app.use(miscpages)