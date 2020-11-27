import React from 'react';
import './Marks.css';
import Backdrop from './backdrop'

const AnswersShow = (props) =>
{
    return(

        <React.Fragment>
        
        <Backdrop showBackDrop= {props.showAnswers} close={props.closeBackDrop}/>


        <div className='Marks-Info' style={{transform: props.showAnswers ? 'translateX(0)' : 'translateX(-100vh)', 
                                            opacity: props.showAnswers ? '1' : '0'}}>

        {props.children}

        </div>

        </React.Fragment>
        
        )
}

export default AnswersShow