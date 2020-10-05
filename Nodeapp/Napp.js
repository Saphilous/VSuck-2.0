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
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
const miscpages=require('./Routes/MiscRoutes')
const authpages = require('./Routes/Authroutes')
app.use(authpages)
app.use(miscpages)
app.use(cookieparser())
app.listen(port, () => console.log( "It is a me ! DEO"))
console.log(mongoose.connection.readyState)
setInterval(function(){console.log(mongoose.connection.readyState)}, 10000)
//C:\Program Files\MongoDB\Server\4.2\bin