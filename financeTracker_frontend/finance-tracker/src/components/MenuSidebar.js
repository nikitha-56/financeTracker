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
          <li onClick={() => handleNavigation("/Dashboard")}>Dashboard</li>
          <li onClick={() => handleNavigation("/add")}>Add Expense</li>
          <li onClick={() => handleNavigation("/edit")}>Edit Expense</li>
          <li onClick={() => handleNavigation("/Login")}>Login</li>
          <li onClick={() => handleNavigation("/charts")}>Charts</li>
           <li onClick={() => handleNavigation("/ExpenseList")}>ExpenseList</li>
        </ul>
      </div>

      <div id="toggle-btn" onClick={toggleSidebar}>
        {menuOpen ? "✕" : "☰"}
      </div>
    </>
  );
};

export default SidebarNavigation;
