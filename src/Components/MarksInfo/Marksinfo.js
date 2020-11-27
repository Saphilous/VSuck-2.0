import React from 'react'

const Marksinfo = (props) =>
{
    return(
        <div>
            <h1>
                These are your marks:
                <br/>
                {props.totalmarks} out of {props.actualmarks}
                <br/>
            </h1>
            <h3>
                Remember to keep Practicing to improve your score
            </h3>
        </div>
    )
}

export default Marksinfo