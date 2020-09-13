import React from 'react'
import '../../CSS/NavComp.css'
import {NavLink} from 'react-router-dom'

const navcomp = () => {
    return(
    <ul className='NavUl'>
        <NavLink to="/" className= 'Navli' activeClassName="selected" exact>
            VSuck
        </NavLink>
        <NavLink to="/Dashboard" className= 'Navli' activeClassName="selected" exact>
            Dashboard
        </NavLink>
        <NavLink to="/Community" className= 'Navli' activeClassName="selected" exact>
            Community
        </NavLink>
        <NavLink to="Login" className= 'Navli'  activeClassName="selected" exact> 
            Login/Singup
        </NavLink>
    </ul>
    )

}

export default navcomp