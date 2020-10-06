import React, {Component} from 'react'
import SingleClassComp from '../Components/SingleClass'
import Navbar from '../Containers/NavCont'
import instance from '../Axios/axios'
import { withRouter } from 'react-router-dom'

class ClassContainer extends Component
{
    state = {
        singleclass : {}
    }
    componentDidMount()
    {
        let iD = this.props.match.params.id
        console.log(iD)
        const Baselink = '/classes/'
        const actlink = Baselink.concat(iD)
        instance.get(actlink).then(res =>
        {
            console.log(res.data)
            this.setState({singleclass: res.data})
        })
    }
    render()
    {
        const singleclasspassing = this.state.singleclass
        console.log(this.state.singleclass)
        return(
            <React.Fragment>
                <Navbar />
                <SingleClassComp singleclasspassed ={singleclasspassing}/>
            </React.Fragment>
        )
    }
}

export default withRouter(ClassContainer)