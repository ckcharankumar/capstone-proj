import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="ul-container">
        <li>
          <a href="www.facebook.com">Home</a>
        </li>
        <li>
          <a href="www.facebook.com">About</a>
        </li>
        <li>
          <a href="www.facebook.com">Menu</a>
        </li>
        <li>
          <a href="www.facebook.com">Reservation</a>
        </li>
        <li>
          <a href="www.facebook.com">Order Online</a>
        </li>
        <li>
          <a href="www.facebook.com">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
