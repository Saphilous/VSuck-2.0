import React from 'react';
import './Marks.css';
import Backdrop from './backdrop'

const Marksshow = (props) =>
{
    return(

        <React.Fragment>
        
        <Backdrop showBackDrop= {props.showMarks} close={props.closeBackDrop}/>


        <div className='Marks-Info' style={{transform: props.showMarks ? 'translateX(0)' : 'translateX(-100vh)', 
                                            opacity: props.showMarks ? '1' : '0'}}>

        {props.children}

        </div>

        </React.Fragment>
        
        )
}

export default Marksshow