import React, {Component} from 'react'

class Logout extends Component
{
    componentDidMount()
    {
        document.cookie = 'SesToken =; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        this.props.history.push('/')
    }
    render()
    {
        return(
            <h1>
                Sucker
            </h1>
        )
    }
}

export default Logout