import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './react.js';
import Header from './containers/Header';
import Events from './containers/Events';
import About from './containers/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Events />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hi <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Name />
      </header>
    </div>
  );
}

export default App;
