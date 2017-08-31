import React, { Component } from 'react';
import logo from './marta.png';
import './App.css';

import MartaDash from './MartaDash.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MARTA</h2>
        </div>
        <div className="marta">
          <MartaDash />
        </div>
      </div>
    );
  }
}

export default App;
