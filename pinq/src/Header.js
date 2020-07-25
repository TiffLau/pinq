import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <b className="companyName">pinq</b>
      <div className="allLinks">
        <a className="links" href=""><b>Enter</b></a>
        <a className="links" href=""><b>Tasks</b></a>
        <a className="links" href=""><b>Contacts</b></a>
        <a className="links" href=""><b>Login</b></a>
      </div>
    </div>
  );
}

export default Header;