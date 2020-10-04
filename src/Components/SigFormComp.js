import React from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/Form.css';

const sigformcomp = (props) =>
{

    return(
        <div className='FormDiv'>
            <form>
                <h1>
                    Mail ID
                </h1>
                <input className= 'FormInput1' name= 'mail' onChange= {props.mailch} type='text' placeholder = 'Enter Your mail id' autoComplete = 'off'/>
                <br />
                <h1>
                    Password
                </h1>
                <input className='FormInput1' name= 'pwd' onChange= {props.pwdch} type='password' placeholder = 'Enter a secure password' autoComplete = 'off'/>
                <br />
                <h1>
                    Full Name
                </h1>
                <input className='FormInput1' name= 'fname' onChange= {props.namech} type='text' placeholder = 'Enter your full name' autoComplete = 'off'/>
                <br />
                <NavLink className='SignupLink' to='/Login'>Login</NavLink>
                <button className='Submitbtn' onClick= {props.onRegister}>Register</button>
            </form>
        </div>
    )
}
export default sigformcomp