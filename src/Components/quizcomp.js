import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../CSS/QuizContainer.css'
import Marksshower from '../UI/marksshower'
import Marksinfo from '../Components/MarksInfo/Marksinfo'
import Answersshower from '../UI/answershower'
import AnswersInfo from './AnswersInfo/Answersingo'

class Quizcomp extends Component{
    state = {
        eventvalues: [' answer', ' wrong answer'],
        marks: 0,
        marksshowing: false,
        marksclassname: 'noneshowing',
        formdisabler: false,
        questions: 10,
        classnamehandler: 'ans1',
        answershower: false
    }

    backdropdisabler = (event) =>
    {
        const markstempshowing = false
        const answertempshowing = false
        this.setState({marksshowing: markstempshowing, answershower: answertempshowing})
    }

    getmarksnow = (event) =>
    {
        event.preventDefault()
        const showermarker = true
        const marksshowdiv = 'showingDiv'
        const formdisablerdive = true
        this.setState({marksshowing: showermarker, marksclassname: marksshowdiv, formdisabler: formdisablerdive})
    }

    getanswernow = (event) =>
    {
        event.preventDefault()
        if(this.state.formdisabler === true)
        {
            this.setState({answershower: true})
        }
    }
    resetformnow = (event) =>
    {
        event.preventDefault()
        document.getElementById('Quizform').reset()
        this.setState({marks: 0})
    }

    render()
    {

        let i = 0

        let j = 0

        let p = 0
    
        const gotquiz = this.props.passingquiz
    
        const gotquizquestions = gotquiz.Questions
    
    
        let quizquestionsdiv = null

        let correctanswerarray = []

        const answered = (event) =>
        {
            const questid = event.target.name
            console.log('the qustion id is ' + questid)
            const questidsplit = questid.split(" ")
            const eventvalue = ' ' + event.target.value
            let elements = this.state.eventvalues
                console.log(elements)
                elements.push(eventvalue)
                this.setState({eventvalues:elements})
            if(eventvalue === correctanswerarray[questidsplit[1]])
            {               
                for (let index = 0; index < this.state.eventvalues.length; index++) {
                    if(eventvalue != this.state.eventvalues[index])
                    {
                        console.log(eventvalue !== this.state.eventvalues[index])
                        j++
                        p++
                        console.log(j)
                        
                    }
                    else
                    {
                        console.log("get off you wanker!")
                    }
                }    
                const totalmarks = j-1
                this.setState({marks:totalmarks})        
            }
            else
            {
                if(this.state.formdisabler)
                {
                    const stateclasssetter = 'wronganswer'
                    this.setState({classnamehandler: stateclasssetter})
                }
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
                                    <input type='radio' className={this.state.classnamehandler} name={optionname} value = {answer} onClick = {answered} disabled= {this.state.formdisabler} id= {questionid}/>
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
                <Marksshower closeBackDrop={this.backdropdisabler} showMarks= {this.state.marksshowing}> <Marksinfo totalmarks={this.state.marks} actualmarks={this.state.questions}></Marksinfo> </Marksshower>
                <Answersshower closeBackDrop={this.backdropdisabler} showAnswers= {this.state.answershower}><AnswersInfo correctanswerarray= {correctanswerarray}></AnswersInfo></Answersshower>
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
                <h3 className={this.state.marksclassname}>
                    You scored a total of {this.state.marks}
                </h3>
                </div>
                <form id='Quizform'>
                    {quizquestionsdiv}
                    <button className='ResetFormButton' onClick={this.resetformnow}>Reset</button>
                    <input type='submit' className='Getmarksbtn' onClick={this.getmarksnow}/>
                    <button className='GetansBtn' onClick={this.getanswernow}>Answers</button>
                </form>                    
            </div>
        )}
    }

export default Quizcomp