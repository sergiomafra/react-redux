import React from 'react'
import ReactDOM from 'react-dom'

// import FirstComponent from './Components/FirstComponent.js'
// import FunctionComponent from './Components/FunctionComponent'
// import { GoodAfternoon, GoodNight } from './Components/MultipleComponents'
// import Multi from './Components/MultipleComponents'
// import Welcome from './Components/ClassComponent'
import Father from './Components/Father.js'

ReactDOM.render(
  <div>
    <Father name="Sérgio" lastname="Mafra" />
  </div>
  , document.getElementById('root')
)
