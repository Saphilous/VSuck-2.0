import React, { Component } from 'react'
import NavCont from './NavCont'
import HomeComp from '../Components/HomeComponents'
import '../CSS/HomeCount.css'
import instance from '../Axios/axios'


class Home extends Component {
    state = {
        AUTH: false
    }
    componentDidMount()
    {
        instance.get('/checktoken').then(res =>
            {
                if(res.status === 200)
                {
                    this.setState({AUTH: true})
                }
            }).catch(err =>
                {
                    console.log(err)
                    console.log("Wowsies we was wrong")
                })
    }
    render () {

        return (
            <div className='HomeDiv'>
                <NavCont authstate= {this.state.AUTH}/>
                <HomeComp />
            </div>  
        )
    }
}
export default Home