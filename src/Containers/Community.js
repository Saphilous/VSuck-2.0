import React, {Component} from 'react'
import instance from '../Axios/axios'

class Community extends Component
{
    state = {
        message: null
    }
    componentDidMount() {
        instance.get('/login').then(res =>
            {
                this.setState({message: res.data})
            })
    }

    render()
    {
        return(
            <h1>
                'Foo Fighters' {this.state.message}
            </h1>
        )
    }
}

export default Community