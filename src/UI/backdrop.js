import React from 'react';
import './Backdrop.css';

const backdrop =(props) =>
{
    return(
    props.showBackDrop ? <div className='Backdrop' onClick= {props.close}></div> : null)
}

export default backdrop