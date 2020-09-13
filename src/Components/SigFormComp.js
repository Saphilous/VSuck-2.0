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
                <input className= 'FormInput1' type='text' placeholder = 'Enter Your mail id' autoComplete = 'off'/>
                <br />
                <h1>
                    Password
                </h1>
                <input className='FormInput1' type='password' placeholder = 'Enter your secure password' autoComplete = 'off' value='password'/>
                <br />
                <h1>
                    Full Name
                </h1>
                <input className='FormInput1' type='text' placeholder = 'Enter your full name' autoComplete = 'off'/>
                <br />
                <NavLink className='SignupLink' to='/Login'>Login</NavLink>
                <input className='Submitbtn' type= 'submit' value='Register'/>
            </form>
        </div>
    )
}
export default sigformcomp