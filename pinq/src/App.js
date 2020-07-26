import React from 'react';
import Header from './Header'
import Reminders from './Reminders';
import Login from './Login';
import Enter from './Enter';
import Signup from './Signup';
import Contacts from './Contacts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <p className="welcome">Hello! Welcome to pinq!</p>
        <Switch>
          <Route path="/Enter"><Enter /></Route>
          <Route path="/Reminders"><Reminders/></Route>
          <Route path="/Contacts"><Contacts/></Route>
          <Route path="/Login"><Login /></Route>
          <Route path="/Signup"><Signup /></Route>
        </Switch>
        
      </div>
    </Router>
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