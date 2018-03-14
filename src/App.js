import React, { Component } from 'react';
import './App.css';

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
      </div>
    );
  }
}

export default App;
