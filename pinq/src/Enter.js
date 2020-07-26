import React from 'react';
import { render } from '@testing-library/react';

function Enter() {
  return (
    <div className="Enter">
      <p className="text">Enter a new reminder here:</p>

      <label class="inputType">
        Name of Contact:
        <br></br><input type="text" className="inputBox" placeholder="Enter name of contact"></input>
      </label>
      <br></br><br></br>

      <label class="inputType">
        Snooze until [Date]:
        <br></br><input type="text" className="inputBox" placeholder="Enter snooze date"></input>
      </label>
      <br></br><br></br>

      <label class="inputType">
        Snooze until [Time]: 
        <br></br><input type="text" className="inputBox" placeholder="Enter snooze time"></input>
      </label>
      <br></br><br></br>

      <label class="inputType">
        Description: 
        <br></br><input type="text" className="inputBox" placeholder="Enter description"></input>
      </label>
      <br></br>

      <input type="submit" className="submit" value="Submit"/>
    </div>
  );
}

export default Enter;