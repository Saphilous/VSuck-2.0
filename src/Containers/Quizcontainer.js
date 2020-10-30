import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import instance from '../Axios/axios'
import QuizComp from '../Components/quizcomp'
import Navbar from '../Containers/NavCont'
import '../CSS/QuizContainer.css'

class QuizContainer extends Component{
    state= {
        foundquiz: [],
        disabled : 'AnswersDiv'
    }
    componentDidMount(){
        let quizid = this.props.match.params.id
        const quizbaseurl = '/quizzes/'
        const finalgeturl = quizbaseurl.concat(quizid)
        console.log(finalgeturl)
        instance.get(finalgeturl).then( res =>
            {
                this.setState({foundquiz: res.data})
            }
        )
    }
    render()
    {
      const  formsubmitted = (event) =>
        {
            event.preventDefault()
            console.log(event.target)
        }
       const answersubmitted = (event) =>
        {
            console.log(event.target.value)
            this.setState({disabled: true})
        }
        console.log(this.state.foundquiz)
        return(
            <div className='MainQuizDiv'>
                <Navbar authstate= {true}/>
                <QuizComp passingquiz = {this.state.foundquiz} formsubmitted={formsubmitted} answersubmitted= {answersubmitted} disabler= {this.state.disabled}/>
            </div>
        )
    }
}
export default withRouter(QuizContainer)