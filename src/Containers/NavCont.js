import React, {Component} from 'react'
import NavComp from '../Components/Nav/NavComp'
import '../CSS/NavComp.css'

class NavCont extends Component {
    render()
    {
        return (

            <div className='Navbar'>
                <NavComp />
            </div>

        )
    }
}

export default NavCont