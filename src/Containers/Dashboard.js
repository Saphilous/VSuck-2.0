import React, {Component} from 'react';
import ClassComp from '../Components/Dash/classcomp';
import NavBar from './NavCont';
import instance from '../Axios/axios'
import '../CSS/Dashboard.css'

class DashBoard extends Component
{
    state= {
        classlist: []
    }

    componentDidMount()
    {
        instance.get('/classes').then(res =>
            {
                const classdata = []
                for (let key in res.data)
                {
                    classdata.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({
                    classlist:classdata
                })
            })
    }
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
                    <ClassComp classesdata={this.state.classlist} ClassboardClicked={this.ClassboardClicked}/>
                </div>
            </div>
        )
    }
}
export default DashBoard