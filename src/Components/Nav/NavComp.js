import React from 'react'
import '../../CSS/NavComp.css'
import {NavLink} from 'react-router-dom'

const navcomp = () => {
    return(
    <ul className='NavUl'>
        <NavLink to="/" className= 'Navli' activeClassName="selected">
            VSuck
        </NavLink>
        <NavLink to="/Dashboard" className= 'Navli' activeClassName="selected">
            Dashboard
        </NavLink>
        <NavLink to="#" className= 'Navli' activeClassName="selected">
            Community
        </NavLink>
        <NavLink to="#" className= 'Navli'  activeClassName="selected">
            Login/Singup
        </NavLink>
    </ul>
    )

}

export default navcomp