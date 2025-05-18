import { useNavigate } from "react-router-dom";
import "./MenuSidebar.css";

const SidebarNavigation = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close sidebar after navigation
  };

  return (
    <>
      <div className={`sidebar-overlay ${menuOpen ? "visible" : ""}`} onClick={toggleSidebar} />
      
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <header>My App</header>
        <ul>
          <li onClick={() => handleNavigation("/ExpenseList")}>Expense List</li>
          <li onClick={() => handleNavigation("/Dashboard")}>Dashboard</li>
          <li onClick={() => handleNavigation("/add")}>Add Expense</li>
          {/* Removed Edit Expense from sidebar */}
          <li onClick={() => handleNavigation("/Login")}>Login</li>
          <li onClick={() => handleNavigation("/charts")}>Charts</li>
        </ul>
      </div>

      <div id="toggle-btn" onClick={toggleSidebar}>
        {menuOpen ? "✕" : "☰"}
      </div>
    </>
  );
};

export default SidebarNavigation;
