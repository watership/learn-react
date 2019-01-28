import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './assets/logo.svg';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;