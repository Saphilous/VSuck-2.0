import React, {Component} from 'react'
import SingleClassComp from '../Components/SingleClass'
import Navbar from '../Containers/NavCont'
import instance from '../Axios/axios'
import { withRouter, NavLink } from 'react-router-dom'

class ClassContainer extends Component
{
    state = {
        singleclass : {},
        quizzes: []
    }
    componentDidMount()
    {
        let iD = this.props.match.params.id
        const Baselink = '/classes/'
        const Baselink2 = '/quizzes/'
        const actlink = Baselink.concat(iD)
        //const actlink2 = Baselink2.concat(iD)
        instance.get(actlink).then(res =>
        {
            this.setState({singleclass: res.data})
        })
        instance.get('/quizzes').then(res =>
            {
                const quizholder = []
                for (let key in res.data)
                {
                    quizholder.push({
                        ...res.data[key],
                        id: [key]
                    })
                }
                this.setState({quizzes: quizholder})
            })
    }
    render()
    {
        let quizindividi = []
        let i =0
        const mapquizelemsbeforepass = this.state.quizzes.map(quizzestopass =>
            {
                quizindividi.push(quizzestopass)
                i+=1
                const quizidforlink = quizzestopass._id
                const basequizurl = '/quizzes/'
                const quizlinkre = basequizurl.concat(quizidforlink)
                console.log(quizlinkre)
                return(
                    <li>
                    <NavLink to={quizlinkre} className='Navli' exact>Quiz {i}</NavLink>
                    </li>
                )
            })


            
        const singleclasspassing = this.state.singleclass
        return(
            <React.Fragment>
                <div className='ClassMainDiv'>
                    <Navbar authstate = {true}/>
                    <SingleClassComp singleclasspassed ={singleclasspassing} quizzespassing = {this.quizindividi}/>
                        <h3 className='ClassQuiz'>
                            Quizzes:
                            <ul>
                            {mapquizelemsbeforepass}
                            </ul>
                        </h3>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(ClassContainer)