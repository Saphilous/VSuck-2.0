import React, { Component } from 'react'
import NavCont from './NavCont'
import HomeComp from '../Components/HomeComponents'
import '../CSS/HomeCount.css'
import instance from '../Axios/axios'
import Loader from '../UI/dogloader'


class Home extends Component {
    state = {
        AUTH: false,
        loading: true
    }
    componentDidMount()
    {
        this.setState({loading: false})
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
        if(this.state.loading === true)
        {
            return(
                <Loader loading={this.state.loading}/>
            )
        }
        return (
            <div className='HomeDiv'>
                <NavCont authstate= {this.state.AUTH}/>
                <HomeComp />
            </div>  
        )
    }
}
export default Home