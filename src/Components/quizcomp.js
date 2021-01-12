import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../CSS/QuizContainer.css'
import Marksshower from '../UI/marksshower'
import Marksinfo from '../Components/MarksInfo/Marksinfo'
import Answersshower from '../UI/answershower'
import AnswersInfo from './AnswersInfo/Answersingo'

class Quizcomp extends Component{
    state = {
        eventvalues: ['answer'],
        marks: 0,
        marksshowing: false,
        marksclassname: 'noneshowing',
        formdisabler: false,
        questions: 10,
        classnamehandler: 'ans1',
        answershower: false,
        useroption: [],
        correctanswerstate: []
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
        const useroptionarray = this.state.useroption
        let marksscored = 0
        const correctanswerarray = this.state.correctanswerstate

        for(let i=0; i<useroptionarray.length; i++)
        {
            if(useroptionarray[i] === correctanswerarray[i])
            {
                marksscored+=1
            }
            console.log(marksscored)
            this.setState({marks: marksscored})
        }


        const showermarker = true
        const marksshowdiv = 'showingDiv'
        const formdisablerdive = true
        this.setState({marksshowing: showermarker, marksclassname: marksshowdiv, formdisabler: formdisablerdive})
        console.log(event.target)
        console.log(event.target.previousSibling
        )
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

        let p = 0
    
        const gotquiz = this.props.passingquiz
    
        const gotquizquestions = gotquiz.Questions
    
        let quizquestionsdiv = null

        let correctanswerarray = []

        const answered = (event) =>
        {
            this.setState({correctanswerstate: correctanswerarray})
            let j = 0

            const questid = event.target.name
            const questidsplit = questid.split(" ")
            const questidentifier = questidsplit[1]
            const eventvalue = event.target.value
            const eventvaluespaced = ' ' + eventvalue
            console.log(questidsplit[1])

            //checkkkkkkkkkz-------------------------------------------------------------------------------------

            var correctanswerobject = this.state.useroption
            correctanswerobject[questidentifier] = eventvaluespaced
            this.setState({useroption:correctanswerobject})

            //checkkkkkkkkkz-------------------------------------------------------------------------------------

            if(eventvaluespaced === correctanswerarray[(questidsplit[1])])
            {
                console.log("yay correct answer")
                j++
            }
            console.log("the total marks are", j)
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
                                    <input type='radio' className={this.state.classnamehandler} name={optionname} value = {answer} onClick = {answered} disabled= {this.state.formdisabler} id= {optionname}/>
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
                    <input type='submit' className='Getmarksbtn' onClick={this.getmarksnow}/>
                    <button className='GetansBtn' onClick={this.getanswernow} disabled={!this.state.formdisabler}>Answers</button>
                </form>                    
            </div>
        )}
    }

export default Quizcomp