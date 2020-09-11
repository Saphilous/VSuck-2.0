import React, { Component } from 'react'
import NavCont from './NavCont'
import HomeComp from '../Components/HomeComponents'
import '../CSS/HomeCount.css'


class Home extends Component {
    render () {
        return (
            <div>
                <NavCont />
                <HomeComp />
            </div>  
        )
    }
}
export default Home