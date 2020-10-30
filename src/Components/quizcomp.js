import React from 'react'
import '../CSS/QuizContainer.css'

const quizcomp = (props) =>
{
    let i = 0

    const gotquiz = props.passingquiz

    const gotquizquestions = gotquiz.Questions

    console.log(gotquizquestions)

    let quizquestionsdiv = null

    if(gotquizquestions)
    {
        console.log('----------------nopesies')
        quizquestionsdiv = gotquizquestions.map(questions =>
        {
            i+=1
            let j =0
            let anaswersforquestion = null

           anaswersforquestion= questions.answers.map(answers =>
                {
                    j +=1
                    return(
                        <div>
                            <h3>
                            {j}. {answers}
                            </h3>
                            <hr className='AnswerHr' />
                        </div>
                    )
                })
            return(
                <div className='QuizQuestionsDiv'>
                    <div className='Questionstexts'>
                        <h1>
                            {i}. {questions.questiontext} 
                        </h1>
                        <img className='QuestionImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CharminarView-1.jpg/1200px-CharminarView-1.jpg" alt="Capital City"></img>
                        <div className='AnswersDiv'>
                            {anaswersforquestion}
                        </div>
                    </div>
                </div>
            )
        })}

    return(
        <div className='StartQuizDiv'>
            <div className='QuizHeadings'>
            <h1>
                {gotquiz.QuizName} Quiz
            </h1>
            <h3>
                Category: {gotquiz.category}
            </h3>
            <h3>
                Created By: {gotquiz.createdby}
            </h3>
            </div>   
            {quizquestionsdiv}
        </div>
    )
}
export default quizcomp