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

    onSubmit = ()=>
    {
       const details = {mail: this.state.mail, pwd: this.state.password}
       instance.post('/login', details).then((res) =>
        {
            if(res.status === 200)
            {
                this.props.history.push('/')
            }
            else
            {
                console.log('Error Lol!!!!!!!!!!!!11')
                this.props.history.push('/login')
            }
        }).catch(err =>
            {
                console.error(err)
                alert('Error Logging In! Shut Up and Try Again!!!!')
            })
    }

    render()
    {
        return(
            <div>
                <Navbar />
                <FormComp onSubmit= {this.onSubmit} mailchanged= {this.MailChanged} pwdchanged= {this.PassChanged}/>
            </div>

        )
    }
}
export default Form