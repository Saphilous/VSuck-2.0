import React, {Component} from 'react';
import ClassComp from '../Components/Dash/classcomp';
import NavBar from './NavCont';
import instance from '../Axios/axios'
import '../CSS/Dashboard.css'
import Loader from '../UI/dogloader'

class DashBoard extends Component
{
    state= {
        classlist: [],
        loading: true
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
                    classlist:classdata, loading: false
                })
            })
    }
    ClassboardClicked = (event) =>
    {
        console.log(event.target.value)
        const linkurl = event.target.value
        const linkbase = '/Dashboard/'
        const link = linkbase.concat(linkurl)
        this.props.history.push(link)
    }
    render()
    {
        if(this.state.loading === true)
        {
            return(
                <Loader loading={this.state.loading}/>
            )
        }
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