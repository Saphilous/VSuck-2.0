import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../CSS/QuizContainer.css'

class Quizcomp extends Component{
    state = {
        correctanswers: []
    }

    render()
    {
        let i = 0

        let j = 0 
    
        const gotquiz = this.props.passingquiz
    
        const gotquizquestions = gotquiz.Questions
    
        console.log(gotquizquestions)
    
        let quizquestionsdiv = null

        let correctanswerarray = []

        const answered = (event) =>
        {
            console.log(correctanswerarray)
            const eventvalue = ' ' + event.target.value
            console.log(eventvalue === correctanswerarray[0])
            if(eventvalue === correctanswerarray[j])
            {
                console.log('Hurrah! That is what we were looking for mate')
                j++
            }
            else
            {
                console.log('Fuk off will ya')
            }
        }
    
        if(gotquizquestions)
        {
            console.log('----------------nopesies')
            quizquestionsdiv = gotquizquestions.map(questions =>
            {
                i+=1
                let anaswersforquestion = null
                correctanswerarray.push(questions.correctanswer)
                console.log(correctanswerarray) 
                anaswersforquestion= questions.answers.map(answer =>
                    {
                        const optionname = 'option' + i
                        return(
                            <div className='answers'>
                                    <input type='radio' className='ans1' name= {optionname} value = {answer} onChange = {answered}/>
                                    <h3 className='AnswerText'>
                                        {answer}
                                    </h3>
                                <hr className='AnswerHr' />
                            </div>
                        )
                    })
    
                return(
                    <form>
                        <div className='QuizQuestionsDiv'>
                            <div className='Questionstexts'>
                                <h1>
                                    {i}. {questions.questiontext} 
                                </h1>
                                <img className='QuestionImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CharminarView-1.jpg/1200px-CharminarView-1.jpg" alt="Capital City"></img>
                                <div className= 'AnswersDiv'>
                                    {anaswersforquestion}
                                </div>
                            </div>
                        </div>
                    </form>
                )
            })
        }

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
        )}
    }

export default Quizcomp