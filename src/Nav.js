import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="ul-container">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-item">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservation" className="nav-item">
            Reservation
          </Link>
        </li>
        <li>
          <Link to="/orderonline" className="nav-item">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-item">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
