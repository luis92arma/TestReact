import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/lista/lista';
import MyComponent from './components/my_component/my_component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Lista />
        <MyComponent />
      </div>
    );
  }
}

export default App;
