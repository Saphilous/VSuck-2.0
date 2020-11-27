import React from 'react'

const Answersinfo = (props) =>
{
   const answershower = props.correctanswerarray.map(crctanswer =>
        {
            return(
                <ol>
                    <li>
                        {crctanswer}
                    </li>
                </ol>
            )
        })
    return(
        <div>
            <h1>
                The Correct Answers
                <br/>
            </h1>
            {answershower}
        </div>
    )
}

export default Answersinfo