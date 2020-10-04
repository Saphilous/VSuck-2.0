import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import instance from '../../Axios/axios'

export default function withAuth (ComponenttoProtect)
{
    return class extends Component
    {
        state = {
            loading: true,
            redirect: false
        }

        componentDidMount()
        {
            instance.get('/checktoken').then( res =>
                {
                    if(res.status === 200)
                    {
                        this.setState({loading:false})
                    }
                    else
                    {
                        console.log('There is an error processing check line 24 Auth.js')
                    }
                }
            ).catch(err =>
                {
                    console.log(err)
                    this.setState({loading: false, redirect: true})
                })
        }
        render()
        {
            const {loading, redirect} = this.state
            if(loading)
            {
                return(null)
            }
            if(redirect)
            {
                return(
                    <Redirect to = '/Login' />
                )
            }
            return( <ComponenttoProtect {...this.props} />)
        }
    }
}