import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../CSS/QuizContainer.css'
import { BrowserRouter, Route } from 'react-router-dom';

class Quizcomp extends Component{
    state = {
        correctanswers: [],
        disabled: false,
        eventvalues: [' answer', ' wrong answer']
    }
    render()
    {

        const getmarks =(event) =>
        {
            event.preventDefault()
            console.log(this.props.history)
        }

        let i = 0

        let j = 0

        let p = 0
    
        const gotquiz = this.props.passingquiz
    
        const gotquizquestions = gotquiz.Questions
    
    
        let quizquestionsdiv = null

        let correctanswerarray = []

        const answered = (event) =>
        {
            console.log(event.target)
            const questid = event.target.name
            const questidsplit = questid.split(" ")
            console.log(questidsplit)
            const eventvalue = ' ' + event.target.value
            if(eventvalue === correctanswerarray[questidsplit[1]])
            {
                let elements = this.state.eventvalues
                console.log(elements)
                elements.push(eventvalue)
                this.setState({eventvalues:elements})
                for (let index = 0; index < this.state.eventvalues.length; index++) {
                    if(eventvalue !== this.state.eventvalues[index])
                    {
                        console.log('Hurrah! That is what we were looking for mate')
                        j++
                        p++
                        console.log(j)
                    }
                    else
                    {
                        console.log("get off you wanker!")
                    }
                }                
            }
            else
            {
                console.log('Fuk off will ya')
                p++
            }
        }
    
        if(gotquizquestions)
        {
            quizquestionsdiv = gotquizquestions.map(questions =>
            {
                let keycomp = 0
                let questionid=0
                let anaswersforquestion = null
                correctanswerarray.push(questions.correctanswer)
                anaswersforquestion= questions.answers.map(answer =>
                    {
                        keycomp++ 
                        const optionname = 'option ' + i
                        return(
                            <div className='answers' key = {keycomp}>
                                    <input type='radio' className='ans1' name={optionname} value = {answer} onChange = {answered} disabled= {this.state.disabled} refid= {questionid}/>
                                    <h3 className='AnswerText'>
                                        {answer}
                                    </h3>
                                <hr className='AnswerHr' />
                            </div>
                        )
                    })
                    i++
                ++questionid
                return(
                        <div className='QuizQuestionsDiv' key={questionid}>
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
                <form>
                    {quizquestionsdiv}
                    <input type='submit' className='Getmarksbtn' onClick={getmarks}/>
                </form>                    
            </div>
        )}
    }

export default Quizcomp