import React from 'react';
import { render } from '@testing-library/react';

function Signup() {
  return (
    <div className="Signup">
      <p className="text">Create an account here:</p>

      <label className="inputType">
        First Name: 
        <br></br><input type="text" className="inputBox" placeholder="Enter first name"></input>
      </label>
      <br></br><br></br>

      <label className="inputType">
        Last Name: 
        <br></br><input type="text" className="inputBox" placeholder="Enter last name"></input>
      </label>
      <br></br><br></br>

      <label className="inputType">
        Email Address: 
        <br></br><input type="text" className="inputBox" placeholder="Enter email address"></input>
      </label>
      <br></br><br></br>

      <label className="inputType">
        Password: 
        <br></br><input type="text" className="inputBox" placeholder="Enter password"></input>
      </label>
      <br></br>

      <input type="submit" className="submit" value="Submit"/>
    </div>
  );
}

export default Signup;