import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

const initialState = {
  user: "John Doe",
  paragraph: "",
  placeholder: "Type here...",
  componentArray: []
}

export default class App extends Component {

  state = {...initialState}

  setParagraph(e) {
    this.setState({paragraph: e.target.value})
    this.setState( state => ({
      componentArray: [...state.componentArray, e.target.value]
    }))
  }

  createOutputComponents() {
    let outputedComponents = 
    for (text in this.state.componentArray) {
      []
    }
    return (
      <div>
        {outputedComponents}
      <div>
    )
  }

  render() {
    const { user, paragraph } = this.state
    return (
      <div>
        <h1>Keeper!</h1>
        <UserInput placeholder={this.state.placeholder} value={paragraph} />
        <button onClick={e => this.setParagraph(paragraph)}>Submit Text</button>
        {this.createOutputComponents()}
      </div>
    );
  }
}


  // createTable = () => {
  //   let table = []

  //   // Outer loop to create parent
  //   for (let i = 0; i < 3; i++) {
  //     let children = []
  //     //Inner loop to create children
  //     for (let j = 0; j < 5; j++) {
  //       children.push(<td>{`Column ${j + 1}`}</td>)
  //     }
  //     //Create the parent and add the children
  //     table.push(<tr>{children}</tr>)
  //   }
  //   return table
  // }