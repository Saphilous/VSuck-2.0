import React, {Component} from 'react'

class Community extends Component
{
    state = {
        message: null
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