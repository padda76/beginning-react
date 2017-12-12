import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import GithubCard from './GithubCard';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          
            <Counter />
            <hr />
        </div>
        <GithubCard />
        <hr />
      </div>
    );
  }
}

export default App;
