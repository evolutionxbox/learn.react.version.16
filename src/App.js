import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username: "evolutionxbox"
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
