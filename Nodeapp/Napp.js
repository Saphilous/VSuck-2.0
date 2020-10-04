const express = require('express')
const cors = require('cors')
app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const cookieparser = require('cookie-parser')

mongoose.connect('mongodb+srv://Saphilous:jaffareddy@cluster0.8dzmt.gcp.mongodb.net/mydb1?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify:false})
.catch((err) =>
{
    if(err)
    {
        console.log('Error connecting to DB')
    }
    else
    {
        console.log('No Error!')
    }
})

//internal dependancies
app.use(bodyparser.json())
app.use(cors())
app.use(function (req, res, next) {

    // Website I wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods I wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers I wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if I need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next()
})
const miscpages=require('./Routes/MiscRoutes')
const authpages = require('./Routes/Authroutes')
app.use(authpages)
app.use(miscpages)
app.use(cookieparser())
app.listen(port, () => console.log( "It is a me ! DEO"))
console.log(mongoose.connection.readyState)
setInterval(function(){console.log(mongoose.connection.readyState)}, 10000)