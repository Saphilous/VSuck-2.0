const Class = require('../Models/ClassModels')

Class.create({ClassName: 'Web Development', ClassDescription: 'Great Class!'})
Class.create({ClassName: 'Cyber Security', ClassDescription: 'Another Great Class!'})

exports.getclasses = (req, res, next) =>
{
    Class.find().then(classes =>
        {
            console.log(classes)
            res.status(200).send(classes)
        }).catch(err =>
            {
                console.log(err)
                console.log("Something Fucked up on  line 12!")
                res.sendStatus(500)
            })
}
exports.postClasses = (req, res, next) =>
{
    const {classname, classdescription} = req.body
    Class.create({ClassName: classname, ClassDescription: classdescription}).then(newclass =>
        {
            console.log(newclass)
            res.sendStatus(200)
        }).catch(err =>
            {
                console.log(err)
                console.log('You fucked up Royally!')
                res.sendStatus(500)
            })
}
exports.getclasswithid = (req, res, next) =>
{
    const classid= req.body
    Class.findById(classid).then(foundclass =>
        {
            console.log(foundclass)
            res.status(200).send(foundclass)
        }).catch(err =>
            {
                console.log('You fucked up roaylly again! line 39 of ClassController')
                res.status(404).send('No such resource exxist! Put your glasses on and see it proprely you NARC!')
            })
}