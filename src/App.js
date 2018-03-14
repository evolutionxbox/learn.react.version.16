import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    text: ''
  }

  handleChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const letters = this.state.text.split('');

    return (
      <div className="App">
        <input onChange={this.handleChange.bind(this)} />
        <p>{this.state.text.length}</p>
        <Validation length={this.state.text.length} />
        {letters.map((letter, index) => <Char key={index} letter={letter} />)}
      </div>
    );
  }
}

export default App;
