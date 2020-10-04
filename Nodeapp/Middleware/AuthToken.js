const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')
const secret = 'ManiPedifor5183$*'

const withAuth = (req, res, next) =>
{
    const token = req.cookies
    if(!token)
    {
        res.status(401).send('Unauthoerized')
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
                req.email = decoded.email
                next()
            }
        })
    }
}

module.exports = withAuth