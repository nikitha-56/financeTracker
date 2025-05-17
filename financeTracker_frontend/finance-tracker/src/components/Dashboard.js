import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Sample Data
  const totalExpenses = 5000;
  const totalSavings = 2000;
  const savingsTarget = 3000;

  const progressPercentage = Math.min((totalSavings / savingsTarget) * 100, 100);

  return (
    <main className={`main-content ${menuOpen ? "shifted" : ""}`}>
      <h1>Welcome to Dashboard</h1>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Expenses</h3>
          <p>₹{totalExpenses}</p>
        </div>
        <div className="stat-card">
          <h3>Total Savings</h3>
          <p>₹{totalSavings}</p>
        </div>
        <div className="stat-card">
          <h3>Savings Target</h3>
          <p>₹{savingsTarget}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${progressPercentage}%`,
                backgroundColor: progressPercentage === 100 ? "#4CAF50" : "#f56c6c",
              }}
            />
          </div>
          <p>{progressPercentage === 100 ? "Target Achieved 🎉" : "Keep Going 💪"}</p>
        </div>
      </div>
    </main>
  );
}
