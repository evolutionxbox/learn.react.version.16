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
    return (
      <div className="App">
        <input onChange={this.handleChange.bind(this)} />
        <p>{this.state.text.length}</p>
        <Validation length={this.state.text.length} />
      </div>
    );
  }
}

export default App;
