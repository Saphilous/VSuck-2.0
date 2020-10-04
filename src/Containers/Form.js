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

    onSubmit = async ()=>
    {
       const details = {mail: this.state.mail, pwd: this.state.password}

         instance.post('/login', {details}).then((res) =>
            {
                if(res.status === 200)
                {
                    this.setState({Auth: true})
                    this.props.history.push('/Dashboard')
                }
                else
                {
                    console.log('Error Lol!!!!!!!!!!!!11')
                    this.props.history.push('/')
                }
            }).catch(err =>
                {
                    console.error(err)
                    alert('Error Logging In! Shut Up and Try Again!!!!')
                }
            )
    }

    render()
    {
        console.log(this.state.Auth)
        if(!this.state.Auth)
        {
            return(
                <div>
                    <Navbar />
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