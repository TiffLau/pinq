import React from 'react';
import { render } from '@testing-library/react';

function Contacts() {
  return (
    <div className="Contacts">
        <div class="contactCard">
            <div class="container">
                <h4><b>Name</b></h4>
                <br></br>
                <p>Email</p>
                <p>Phone</p><br></br>
                <p>Description</p>
            </div>
        </div>
    </div>
  );
}

export default Contacts;