import React from 'react'
import '../../CSS/NavComp.css'
import {NavLink} from 'react-router-dom'

const navcomp = (props) => {
    const authstate = props.authstate
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
        {authstate ? <NavLink to="Logout" className= 'Navli'  activeClassName="selected" exact> 
            Logout
        </NavLink> : <NavLink to="Login" className= 'Navli'  activeClassName="selected" exact> 
            Login/Singup
        </NavLink>}
    </ul>
    )

}

export default navcomp