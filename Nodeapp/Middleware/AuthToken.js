const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')
const secret = 'ManiPedifor5183$*'
const User = require('../Models/UserModels')

const withAuth = (req, res, next) =>
{
    const tok = req.headers.cookie
    const tokensplitted = tok.split("=")
    const token = tokensplitted[1]
    if(!token)
    {
        res.status(401).send('Unauthorized')
    }
    else
    {
        jwt.verify(token, secret, (err, decoded)=>
        {
            if(err)
            {
                console.log('token is wrog u idiot!')
            }
            else
            {
                console.log('kudos son!')
                console.log(decoded)
                req.email = decoded
                console.log(req.email)
                next()
            }
        })
    }
}

module.exports = withAuth