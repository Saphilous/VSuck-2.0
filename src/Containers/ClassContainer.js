import React, {Component} from 'react'
import ClassComp from '../Components/ClassComp'
import instance from '../Axios/axios'

class ClassContainer extends Component
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
    render()
    {
        const classestopass = this.state.classlist
        console.log(classestopass)
        return(
            <React.Fragment>
                <ClassComp classesdata = {classestopass}/>
            </React.Fragment>
        )
    }
}

export default ClassContainer