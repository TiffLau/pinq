import React from 'react';
import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/Signup" className="companyName"><b>pinq</b></Link>
      <div className="allLinks">
        <Link to="/Enter" className="links"><b>Enter</b></Link>
        <Link to="/Reminders" className="links"><b>Reminders</b></Link>
        <Link to="/Contacts" className="links"><b>Contacts</b></Link>
        <Link to="/Login" className="links"><b>Login</b></Link>
      </div>
    </div>
  );
}

export default Header;