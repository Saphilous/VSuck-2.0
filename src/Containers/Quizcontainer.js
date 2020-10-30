import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import instance from '../Axios/axios'
import QuizComp from '../Components/quizcomp'
import Navbar from '../Containers/NavCont'
import '../CSS/QuizContainer.css'

class QuizContainer extends Component{
    state= {
        foundquiz: []
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
        const formsubmitted = (event) =>
        {
            event.preventDefault()
        }
        console.log(this.state.foundquiz)
        return(
            <div className='MainQuizDiv'>
                <Navbar authstate= {true}/>
                <QuizComp passingquiz = {this.state.foundquiz} formsubmitted={formsubmitted} />
            </div>
        )
    }
}
export default withRouter(QuizContainer)