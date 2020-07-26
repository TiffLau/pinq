import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Reminders from './Reminders';

function App() {
  return (
    <div className="App">
      <Header/>
      <p className="welcome">Hello! Welcome to pinq!</p>
      <Reminders/>
    </div>
  );
}

export default App;

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> hi.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/