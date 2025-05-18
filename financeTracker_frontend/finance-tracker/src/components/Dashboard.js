// import React, { useState, useEffect } from "react";
// import MenuSidebar from "./MenuSidebar";
// import "./Dashboard.css";

// export default function Dashboard() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [totalExpensesMonth, setTotalExpensesMonth] = useState(0);
//   const [totalExpensesYear, setTotalExpensesYear] = useState(0);
//   const [totalSavings, setTotalSavings] = useState(0);
//   const [savingsTargetMonth, setSavingsTargetMonth] = useState(3000);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const transactions = [
//     { amount: 500, type: "expense", date: "2025-05-02" },
//     { amount: 200, type: "expense", date: "2025-05-10" },
//     { amount: 150, type: "savings", date: "2025-05-11" },
//     { amount: 1000, type: "expense", date: "2025-04-18" },
//     { amount: 500, type: "savings", date: "2025-03-15" },
//     { amount: 2000, type: "expense", date: "2025-01-23" }
//   ];

//   useEffect(() => {
//     const currentMonth = new Date().getMonth() + 1;
//     const currentYear = new Date().getFullYear();

//     const expensesThisMonth = transactions
//       .filter(
//         (t) =>
//           t.type === "expense" &&
//           new Date(t.date).getMonth() + 1 === currentMonth &&
//           new Date(t.date).getFullYear() === currentYear
//       )
//       .reduce((sum, t) => sum + t.amount, 0);

//     const expensesThisYear = transactions
//       .filter((t) => t.type === "expense" && new Date(t.date).getFullYear() === currentYear)
//       .reduce((sum, t) => sum + t.amount, 0);

//     const savingsTotal = transactions
//       .filter((t) => t.type === "savings")
//       .reduce((sum, t) => sum + t.amount, 0);

//     setTotalExpensesMonth(expensesThisMonth);
//     setTotalExpensesYear(expensesThisYear);
//     setTotalSavings(savingsTotal);
//   }, [transactions]);

//   return (
//     <div className="dashboard-wrapper">
//       <MenuSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//       <div className="content-wrapper">
//         <div className="backgroundWrapper">
//           <div className="box">₹{totalExpensesMonth}<br />This Month</div>
//           <div className="box">₹{totalExpensesYear}<br />This Year</div>
//           <div className="box">₹{totalSavings}<br />Savings</div>
//           <div className="box">₹{savingsTargetMonth}<br />Target</div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import MenuSidebar from "./MenuSidebar";
import "./Dashboard.css";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [totalExpensesMonth, setTotalExpensesMonth] = useState(0);
  const [totalExpensesYear, setTotalExpensesYear] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [savingsTargetMonth, setSavingsTargetMonth] = useState(3000);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Sample Transactions (You can replace these with API data or database fetch)
  const transactions = [
    { amount: 500, type: "expense", date: "2025-05-02" },
    { amount: 200, type: "expense", date: "2025-05-10" },
    { amount: 150, type: "savings", date: "2025-05-11" },
    { amount: 1000, type: "expense", date: "2025-04-18" },
    { amount: 500, type: "savings", date: "2025-03-15" },
    { amount: 2000, type: "expense", date: "2025-01-23" }
  ];

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const expensesThisMonth = transactions
      .filter(
        (t) =>
          t.type === "expense" &&
          new Date(t.date).getMonth() + 1 === currentMonth &&
          new Date(t.date).getFullYear() === currentYear
      )
      .reduce((sum, t) => sum + t.amount, 0);

    const expensesThisYear = transactions
      .filter((t) => t.type === "expense" && new Date(t.date).getFullYear() === currentYear)
      .reduce((sum, t) => sum + t.amount, 0);

    const savingsTotal = transactions
      .filter((t) => t.type === "savings")
      .reduce((sum, t) => sum + t.amount, 0);

    setTotalExpensesMonth(expensesThisMonth);
    setTotalExpensesYear(expensesThisYear);
    setTotalSavings(savingsTotal);
  }, [transactions]);

  const progressPercentage = Math.min((totalSavings / savingsTargetMonth) * 100, 100);
  const remainingAmount = Math.max(savingsTargetMonth - totalSavings, 0);

  return (
    <div className="dashboard-wrapper">
      <MenuSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="content-wrapper">
        <h2>Dashboard Overview</h2>
        <div className="backgroundWrapper">
          <div className="box">
            <h3>Total Expenses (This Month)</h3>
            <p>₹{totalExpensesMonth}</p>
          </div>
          <div className="box">
            <h3>Total Expenses (This Year)</h3>
            <p>₹{totalExpensesYear}</p>
          </div>
          <div className="box">
            <h3>Total Savings</h3>
            <p>₹{totalSavings}</p>
          </div>
          <div className="box">
            <h3>Savings Target (This Month)</h3>
            <p>₹{savingsTargetMonth}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor: progressPercentage === 100 ? "#4CAF50" : "#f56c6c"
                }}
              />
            </div>
            <p>
              {progressPercentage === 100
                ? "🎉 Target Achieved!"
                : `💪 Keep Going! ₹${remainingAmount} left`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
