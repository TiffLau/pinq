import React from 'react';
import './Reminders.css';
import { render } from '@testing-library/react';

function Reminders() {
  return (
    <div className="Reminders">
        <div class="reminderCard">
            <div class="container">
                <h4><b>Name</b></h4>
                <br></br>
                <p>Date</p>
                <p>Time</p><br></br>
                <p>Description</p>
            </div>
        </div>
    </div>
  );
}

export default Reminders;