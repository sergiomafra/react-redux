import React from 'react'
import './UserInput.css'


const userInput = (props) => {
  return (
    <div className="userinput">
      <h2 className="cellpad">Input text here:</h2><br/>
      <input type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default userInput
