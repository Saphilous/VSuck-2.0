import React, {Component} from 'react';
import Navbar from './NavCont';
import FormComp from '../Components/formcomp'
import '../CSS/Form.css';
import instance from '../Axios/axios'

class Form extends Component
{
    state = {
        name: null,
        mail: null,
        password: null
    }

    NameChanged = (event) =>
    {
        const newname = event.target.value    
        this.setState({name:newname})

    }
    PassChanged = (event) =>
    {
        const newpawd = event.target.value
        this.setState({password: newpawd})
    }

    onSubmit = () =>
    {
       const details = {name: this.state.name, pwd: this.state.password}
       instance.post('/login', details).then((response) =>
        {
            console.log(response.data)
            this.setState({name: null, password: null}).catch(err =>
                {
                    console.log(err)
                })
                this.props.history.push('/')
        })
    }

    render()
    {
        return(
            <div>
                <Navbar />
                <FormComp onSubmit= {this.onSubmit} namechanged= {this.NameChanged} pwdchanged= {this.PassChanged}/>
            </div>

        )
    }
}
export default Form