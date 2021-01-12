import React from 'react'

const Answersinfo = (props) =>
{
    var i =0
    const answershower = props.correctanswerarray.map(crctanswer =>
        {
            i++
            return(
                <ol>
                    <li key = {i}>
                        {i}. {crctanswer}
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