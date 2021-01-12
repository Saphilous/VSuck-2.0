import React from 'react'
import '../CSS/ClassMain.css'

const classcomp = (props) =>
{
    const classdetails = props.singleclasspassed
    return(
        <div className='ClassMain'>
            <h1 className='ClassHeader'>
                {classdetails.ClassName}
            </h1>
            <h2>
                {classdetails.Category}
            </h2>
            <div className= 'ClassBody'>
                <div>
                    <h3 className='ClassDescription'>
                        Description:
                        <br/>
                        {classdetails.ClassDescription}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default classcomp