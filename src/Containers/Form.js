import React, {Component} from 'react';
import Navbar from './NavCont';
import FormComp from '../Components/formcomp'
import '../CSS/Form.css';
import instance from '../Axios/axios'

class Form extends Component
{
    state = {
        mail: null,
        password: null,
        Auth: false
    }

    MailChanged = (event) =>
    {
        const newmail = event.target.value    
        this.setState({mail:newmail})

    }
    PassChanged = (event) =>
    {
        const newpawd = event.target.value
        this.setState({password: newpawd})
    }

    onSubmit = async (event)=>
    {
        event.preventDefault()
        const details = {mail: this.state.mail, pwd: this.state.password}
        console.log(details + 'This is working so far')
        const response = await instance.post('/login', {details})
        console.log('Not working from here')
        console.log(response)
        this.setState({Auth: true})
        this.props.history.push('/')
    }

    render()
    {
        console.log(this.state.Auth)
        if(!this.state.Auth)
        {
            return(
                <div>
                    <Navbar authstate = {this.state.Auth}/>
                    <FormComp onSubmit= {this.onSubmit} mailchanged= {this.MailChanged} pwdchanged= {this.PassChanged}/>
                </div>
            )
        }
        else
        {
            return(
                <div>
                    Go back to the Home page :) Login Succesful!
                </div>
            )
        }
    }
}
export default Form