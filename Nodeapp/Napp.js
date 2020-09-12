const express = require('express')
const cors = require('cors')
app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.listen(port, () => console.log( "It is a me ! DEO"))
app.get('/fuku', (req, res) =>
{
    res.send('fuk u bruh! fuk u!')
})