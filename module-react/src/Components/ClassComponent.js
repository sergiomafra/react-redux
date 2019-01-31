import React, { Component } from 'react'

export default class Welcome extends Component {

  state = {
    type: "What's up",
    name: "man"
  }

  setType(e) {
    this.setState({ type: e.target.value })
  }

  setName(e) {
    this.setState({ name: e.target.value })
  }

  render() {

    const { type, name } = this.state
    return (
      <div>
        <h1>{type} {name}</h1>
        <hr />
        <input type="text" placeholder="Type..." value={type} onChange={e => this.setType(e)} />
        <input type="name" placeholder="Name..." value={name} onChange={e => this.setName(e)} />
      </div>
    )
  }
}
