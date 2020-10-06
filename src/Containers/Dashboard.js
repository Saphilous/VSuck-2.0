import React, {Component} from 'react';
import ClassComp from '../Components/Dash/classcomp';
import NavBar from './NavCont';
import '../CSS/Dashboard.css'

class DashBoard extends Component
{

    ClassboardClicked = () =>
    {
        this.props.history.push('/Dashboard/Classid')
    }

    render()
    {
        return (
            <div className='DashboardDiv'>
                <NavBar  authstate = {true}/>
                <div className= 'ClassHolder'>
                    <ClassComp ClassboardClicked={this.ClassboardClicked}/>
                </div>
            </div>
        )
    }
}
export default DashBoard