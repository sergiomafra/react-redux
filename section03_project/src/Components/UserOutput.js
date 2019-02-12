import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {

    return(
        <div className="userOutput">
            <p>User: {props.user}</p>
            <p>Text: {props.text}</p>
        </div>
    )
}

export default userOutput