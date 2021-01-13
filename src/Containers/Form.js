import React, {Component} from 'react';
import Navbar from './NavCont';
import FormComp from '../Components/formcomp'
import '../CSS/Form.css';
import instance from '../Axios/axios'
import Loader from '../UI/dogloader'

class Form extends Component
{
    state = {
        mail: null,
        password: null,
        Auth: false,
        showingmsg: false,
        loading: true
    }

    componentDidMount()
    {
        this.setState({loading: false})
        if(this.props.location.state)
        {
            if(this.props.location.state.prevpathanme === '/Signup')
            {
                this.setState({showingmsg: true}, ()=>
                {
                    console.log(this.state.showingmsg)
                })
            }
        }
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
        this.setState({loading: true})
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
        console.log(this.props.history)
        console.log(this.props.location)
        if(this.state.loading === true)
        {
            return(
                <Loader loading={this.state.loading}/>
            )
        }
        if(!this.state.Auth)
        {
            return(
                <div>
                    <div className = 'Login-Div'>
                        <div className='Signup-Flash-Div' hidden= {!this.state.showingmsg}>
                            Sign up succesful! Please Login to Continue
                        </div>
                        <Navbar authstate = {this.state.Auth}/>
                        <FormComp onSubmit= {this.onSubmit} mailchanged= {this.MailChanged} pwdchanged= {this.PassChanged}/>
                    </div>
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