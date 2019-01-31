import React from 'react'
import ReactDOM from 'react-dom'

// import FirstComponent from './Components/FirstComponent.js'
// import FunctionComponent from './Components/FunctionComponent'
// import { GoodAfternoon, GoodNight } from './Components/MultipleComponents'
// import Multi from './Components/MultipleComponents'
import Welcome from './Components/ClassComponent'


ReactDOM.render(
  <div>
    <Welcome type="Good Morning" name="Sérgio" />
  </div>
  , document.getElementById('root')
)
