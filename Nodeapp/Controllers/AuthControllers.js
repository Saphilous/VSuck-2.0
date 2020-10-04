const User = require('../Models/UserModels')
const bcrypt = require('bcrypt')
const saltRounds = 11
const jwt = require('jsonwebtoken')
const secret = 'ManiPedifor5183$*'

exports.getlogin = (req, res, next) =>
{
    res.send('Yeas')
}

exports.postlogin = async (req,res,next) =>{
    console.log(req.body)
    const { mail, pwd} = req.body.details
    console.log(mail)
    console.log(pwd)
    User.findOne({
        mailid: mail
    }).then((user)=>{
        if(!user){
            console.log("This is Sparta! Whoosh")
           return  res.status(200).send("user not found")
        }
        else{
            let passwordvalid = false
                try{
                    passwordvalid = bcrypt.compare(pwd,user.password)
                } catch(err)
                {
                    console.log(err)
                    console.log('Ckeck again you Whoosher!')
                }

                if(!passwordvalid)
                {
                    console.log('U entered da wrong credintials idiot!')
                }
                else
                {
                    console.log("Suk u! Come on in!")
                    const payload = mail
                    const token = jwt.sign(payload, secret)
                    console.log(token)
                    res.cookie('SesToken', token, {httponly:true}).sendStatus(200)
                    console.log('cookie set succesfully')
                }

          /* await bcrypt.compare(pwd,user.password,(err,result)=>{
                if(err)
                {
                    console.log(user.password)
                    console.log("No passy passy!")
                    return res.sendStatus(401).send("incorrect password")
                }
                else
                {
                    console.log("Suk u! Come on in!")
                    const payload = mail
                    const token = jwt.sign(payload, secret)
                    console.log(token)
                    res.cookie('SesToken', token, {httponly:true}).sendStatus(200)
                    console.log('cookie set succesfully')
                }
            })  */  
        }
    })
}

exports.postsignup = (req, res, next) =>
{
    console.log('line 43 says hi-------------------------------------------------------------------------------')
    console.log(req.body)
    const {name, mail, password} = req.body
    if(mail && password && name )
        {User.findOne({
                mailid:mail
        }).then((user)=>
        {
            console.log("Re Login")
            if(!user)
            {
                bcrypt.hash(password,saltRounds)
                .then((hash)=>{
                    console.log(" Hash is generated")
                    User.create({ mailid: mail, password: hash, username: name })
                    .then((newuser)=>
                    {
                        if (!newuser)
                        {
                            console.log(err);
                        } else
                        {
                            console.log(newuser + "Succesfully Created 200");
                        return  res
                            .status(200)
                            .json({
                                message: "your are successfully registered",
                            });
                        }
                    }).catch(err => {
                    console.log(
                        err + "Line no after catch in the last sngup statement"
                    )
                    })
                }).catch((err)=>{ console.log(err)})
            }
            else
            {
                return  res.status(200).send("this email already exists")            
            }
        }).catch(err=>
                {
                console.log(err)
                return res.status(500).json({message:"internal server error"})
            }
        )   
    }
}

exports.checktoken = (req, res, next) =>
{
    res.sendStatus(200)
}
