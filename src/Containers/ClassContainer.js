import React, {Component} from 'react'
import SingleClassComp from '../Components/SingleClass'
import Navbar from '../Containers/NavCont'
import instance from '../Axios/axios'
import { withRouter, NavLink } from 'react-router-dom'
import Loader from '../UI/dogloader'

class ClassContainer extends Component
{
    state = {
        singleclass : {},
        quizzes: [],
        loading: true
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
            this.setState({singleclass: res.data}, () =>
            {
                const RecivedSingleClass = this.state.singleclass
                const ClassCategory = RecivedSingleClass.Category
                const actquizlink = Baselink2.concat(ClassCategory)
                console.log(actquizlink)
                instance.get(actquizlink).then(res =>
                    {
                        const quizholder = []
                        for (let key in res.data)
                        {
                            quizholder.push({
                                ...res.data[key],
                                id: [key]
                            })
                        }
                        this.setState({quizzes: quizholder, loading: false})
                    })
            })
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
                const ClassCategory = this.state.singleclass.Category + '/'
                console.log(quizidforlink)
                const basequizurl = '/quizzes/'
                const quizlink1 = basequizurl.concat(ClassCategory)
                const quizlinkre = quizlink1.concat(quizidforlink)
                console.log(quizlinkre)
                return(
                    <li className = 'Quiz-Links-Div'>
                    <NavLink to={quizlinkre} className='Navli' exact>Quiz {i}</NavLink>
                    </li>
                )
            })
        const singleclasspassing = this.state.singleclass
        if(this.state.loading === true)
        {
            return(
                <Loader loading={this.state.loading}/>
            )
        }
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