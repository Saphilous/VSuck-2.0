import React, {Component} from 'react';
import Navbar from './NavCont';
import SigFormComp from '../Components/SigFormComp'
import '../CSS/Form.css';
import instance from '../Axios/axios';
import Loader from '../UI/dogloader'

class SigForm extends Component
{
    state = {
        name: null,
        mail: null,
        password: null,
        loading: true
    }
    componentDidMount()
    {
        this.setState({loading:false})
    }
    MailChanged = (event) =>
    {
        const newmail = event.target.value    
        this.setState({mail:newmail})
    }
    PwdChanged = (event) =>
    {
        const newpwd = event.target.value    
        this.setState({password:newpwd})

    }
    NameChanged = (event) =>
    {
        const newname = event.target.value    
        this.setState({name:newname})

    }
    onRegister = (event) =>
    {
        event.preventDefault()
        this.setState({loading: true})
        const details = {name: this.state.name, mail: this.state.mail, password: this.state.password}
        instance.post('/signup', details).then((response) =>
            {
                console.log('Hooooola Hoops')
                this.setState({name:null, password:null, mail:null})
                const prevpath = this.props.location.pathname
                const location = {
                    pathname: '/Login',
                    state: { prevpathanme: prevpath }
                  }
                this.props.history.push(location)
            }).catch(err =>
                {
                    console.log(err)
                })
    }


    render()
    {
        if(this.state.loading === true)
        {
            return(
            <Loader loading = {this.state.loading}/>)
        }
        return(
            <div>
                <Navbar />
                <SigFormComp mailch={this.MailChanged} pwdch = {this.PwdChanged} namech ={this.NameChanged} onRegister= {this.onRegister} />
            </div>

        )
    }
}
export default SigForm