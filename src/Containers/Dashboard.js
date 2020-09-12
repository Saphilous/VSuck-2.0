import React, {Component} from 'react';
import ClassComp from '../Components/Dash/classcomp';
import NavBar from './NavCont';
import '../CSS/Dashboard.css'

class DashBoard extends Component
{
    render()
    {
        return (
            <div className='DashboardDiv'>
                <NavBar />
                <div className= 'ClassHolder'>
                    <ClassComp />
                </div>
            </div>
        )
    }
}
export default DashBoard