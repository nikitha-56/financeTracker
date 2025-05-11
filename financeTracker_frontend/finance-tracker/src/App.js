import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./components/AddExpense";
import EditExpense from "./components/EditExpense";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ExpenseChart from './components/ExpenseChart';

import './App.css';

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
         <Route path="/charts" element={<ExpenseChart />} />
      </Routes>
    </Router>
  );
}

export default App;
