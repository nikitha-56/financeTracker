import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import AddExpense from "./components/AddExpense";
import EditExpense from "./components/EditExpense";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ExpenseChart from './components/ExpenseChart';
import Dashboard from "./components/Dashboard";
import MenuSidebar from "./components/MenuSidebar";  // new menu/sidebar component
import './App.css';
import BackgroundWrapper from "./components/BackgroundWrapper";

function AppWrapper() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Routes on which to show the menu button/sidebar
  const showMenu = ["/dashboard", "/add", "/charts"].some(path => location.pathname.startsWith(path))
    || location.pathname.startsWith("/edit/");

  useEffect(() => {
    // Close sidebar on route change
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {showMenu && <MenuSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        <BackgroundWrapper>
      <Routes>
        <Route
          path="/"
          element={localStorage.getItem("user") ? <Navigate to="/home" /> : <Navigate to="/signup" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
        <Route path="/charts" element={<ExpenseChart />} />
      </Routes>
      </BackgroundWrapper>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
