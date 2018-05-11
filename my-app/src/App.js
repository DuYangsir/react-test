import React, { Component } from 'react';
import logo from './logo.svg';
import './../public/style/App.less';

const element = (
  <div className="App">
    <header className="App-header">
      <img alt="logo"
          className="App-logo"
          src={logo}
      />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      element
    </p>
  </div>
)

class App extends Component {
  render() {
    return element
  }
}

export default App;
