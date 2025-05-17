// MenuSidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./MenuSidebar.css";

export default function MenuSidebar({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="dashboard-container">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        onMouseDown={(e) => e.preventDefault()} // <-- Prevents blue focus
        aria-label="Toggle menu"
        className="menu-button"
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "" : "closed"}`}>
        {menuOpen && (
          <nav className="nav-links">

            <Link to="/Login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link to="/Dashboard" onClick={() => setMenuOpen(false)}>
             Dashboard
            </Link>
            <Link to="/add" onClick={() => setMenuOpen(false)}>
              Add Expense
            </Link>
            <Link to="/edit" onClick={() => setMenuOpen(false)}>
              Edit Expense
            </Link>
            <Link to="/charts" onClick={() => setMenuOpen(false)}>
              Charts
            </Link>
          </nav>
        )}
      </aside>
    </div>
  );
}

