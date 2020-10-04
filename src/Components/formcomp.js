import React from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/Form.css';

const formcomp = (props) =>
{
    return(
        <div className='FormDiv'>
            <form>
                <h1>
                    Mail ID
                </h1>
                <input className= 'FormInput1' onChange= {props.mailchanged} name= 'Mail' type='text' placeholder = 'Enter Your mail id' autoComplete = 'off'/>
                <br />
                <h1>
                    Password
                </h1>
                <input className='FormInput1' onChange= {props.pwdchanged} name= 'password' type='password' placeholder = 'Enter your secure password' autoComplete = 'off'/>
                <br />
                <NavLink className='SignupLink' to='/Signup'>Signup</NavLink>
                <button className='Submitbtn' onClick= {props.onSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default formcomp