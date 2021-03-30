import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">
          <h2>Sapienza</h2>
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
      </div>
    </div>
  );
}

export default Navbar;
