import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        Finance Tracker
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add" className="nav-link">Add Expense</Link>
        <Link to="/edit/1" className="nav-link">Edit Expense</Link>
        <Link to="/chart" className="nav-link">Expense Chart</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
      </div>
    </div>
  );
}

export default Navbar;
