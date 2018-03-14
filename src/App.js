import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    text: []
  }

  handleChange (event) {
    this.setState({
      text: event.target.value.split('')
    })
  }

  handleClick (index) {
    const newtext = [...this.state.text];
    newtext.splice(index, 1);
    this.setState({
      text: newtext
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange.bind(this)} value={this.state.text.join('')} />
        <p>{this.state.text.length}</p>
        <Validation length={this.state.text.length} />
        {this.state.text.map((letter, index) => <Char key={index} letter={letter} onClick={_ => this.handleClick(index)} />)}
      </div>
    );
  }
}

export default App;
