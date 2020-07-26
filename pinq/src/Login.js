import React, { useState } from 'react';
import { render } from '@testing-library/react';

function Login() {
  return (
    <div className="Login">
      <p className="text">Login to your account here:</p>

      <label class="inputType">
        Email Address:
        <br></br><input type="text" className="inputBox" placeholder="Enter email address"></input>
      </label>
      <br></br><br></br>

      <label class="inputType">
        Password:
        <br></br><input type="text" className="inputBox" placeholder="Enter password"></input>
      </label>
      <br></br>

      <input type="submit" className="submit" value="Submit" />
    </div>
  );
}

export default Login;