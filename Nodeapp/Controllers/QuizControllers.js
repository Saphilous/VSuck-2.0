const Quiz = require('../Models/QuizModels')
const Question = require('../Models/QuestionModels')
const Answer= require('../Models/Answer')
const User = require('../Models/UserModels')

//Fuk

/* Quiz.create({QuizName: 'Web Development', category: 'CSC', createdby: 'Jaswanth', Questions: [{questiontext: 'What is capital of Telangana?', answers:['Delhi', 'Hyderabad', 'Chennai', 'Mumbai'], correctanswer:' Hyderabad', questionimage: 'Unsplash'},
{questiontext: 'What is capital of Maharastra?', answers:['Delhi', 'Hyderabad', 'Chennai', 'Mumbai'], correctanswer:' Hyderabad', questionimage: 'Unsplash'},
{questiontext: 'What is capital of Tamilnadu?', answers:['Delhi', 'Hyderabad', 'Chennai', 'Mumbai'], correctanswer:' Hyderabad', questionimage: 'Unsplash'}]}) */

console.log
('-----------------------------------------------')
console.log(Quiz)
//Fuk End

exports.getQuizzes = (req, res, next) =>
{
    Quiz.find().then(foundquizzes =>
        {
            console.log(foundquizzes)
            res.status(200).send(foundquizzes)
        }).catch(err =>
            {
                console.log('You fucked up royally at line 11 in QuizControllers')
                console.log(err)
            })
}

exports.getQuizzeswithId = (req, res, next) =>
{
    const quizcategory = req.params.id
    console.log(req.params.id)
    Quiz.find({Category: quizcategory}).then(foundquizzes =>
        {
            console.log(foundquizzes)
            res.status(200).send(foundquizzes)
        }).catch(err =>
            {
                console.log('You fucked up royally at line 39 in QuizControllers')
                console.log(err)
            })
}

exports.getsinglequiz =(req, res, next) =>
{
    quizid = req.params.id
    console.log(quizid)
    Quiz.findById(quizid).then(foundquiz =>
        {
            res.status(200).send(foundquiz)
        }
    ).catch(err =>
        {
            console.log(err)
            res.sendStatus(500)
        })
}

exports.postquizresults = (req, res, next) =>
{
    //const finalmarks = req.body
    console.log('figure out time!!!!!!!!!!1')
    console.log(req.body)
    console.log(req.body.marksscored)
    const quizid1 = req.params.id
    Quiz.findById(quizid1).then(foundquiz =>
        {
            User.findOneAndUpdate({mailid: req.email}, {$push: {Marks: {markslist : {quizid: foundquiz.QuizName, totalmarks: req.body.marksscored}}}}, null, function (err, result)
            {
                if(err)
                {
                    console.log(err)
                    console.log('theres an error updating the db')
                }
                else
                {
                    console.log('Succesfully updated')
                    return res.status(200).send("Data is Succesfully updated! Have a Nice Day UwU")
                }
            })

        }).catch(err =>
            {
                console.log("Internal Error! Please check if the quiz has been deleted pr updated!")
            })

}