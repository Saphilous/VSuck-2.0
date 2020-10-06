import React, {Component} from 'react'
import Navbar from './NavCont'

class Community extends Component
{
    state = {
        message: null
    }
    render()
    {
        return(
            <React.Fragment>
                <Navbar authstate={true}/>
                <h1>
                    Coming Soon {this.state.message}
                </h1>
            </React.Fragment>
        )
    }
}

export default Community