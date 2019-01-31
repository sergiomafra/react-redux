import React from 'react'
import Son from './Son'


export default props =>
  <div>
    <h1>{props.name} {props.lastname}</h1>
    <h2>
      <ul>
        <Son name="Juliana" lastname={props.lastname} />
        <Son {...props} />
        <Son {...props} name="Rafael" />
      </ul>
    </h2>
  </div>
