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
            <div className= 'ClassBody'>
                <div>
                    <h3 className='ClassDescription'>
                        Description:
                        <br/>
                        {classdetails.ClassDescription}
                    </h3>
                </div>
                <div>
                    <h3 className='ClassQuiz'>
                        Quizzes: Nothing to Display
                    </h3>
                    <h3 className='ClassAssignments'>
                        Assignments: No Assignments for now. So, go, shuu... Enjoy your pointeless lives until we all die in the pandemic
                    </h3>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default classcomp