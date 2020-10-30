const Quiz = require('../Models/QuizModels')
const Question = require('../Models/QuestionModels')
const Answer= require('../Models/Answer')

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