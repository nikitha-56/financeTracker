import React, { useState, useEffect } from "react";
import { getExpenses, deleteExpense } from "../api";
import { useNavigate } from "react-router-dom";
import "./ExpenseList.css"; // Importing CSS

const ExpenseList = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const response = await getExpenses();
        setExpenses(response.data);
      } catch (err) {
        setError("Failed to load expenses");
      } finally {
        setLoading(false);
      }
    }
    fetchExpenses();
  }, []);

  const handleEdit = (id) => {
    if (id) {
      navigate(`/edit/${id}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      setExpenses((prev) => prev ? prev.filter((exp) => exp.id !== id) : []);
    } catch (err) {
      setError("Failed to delete expense");
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="expense-list-container">
      <h2 className="title">Expense List</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Notes</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={expense.id}>
              <td>{index + 1}</td>
              <td>{expense.notes}</td>
              <td>{formatAmount(expense.amount)}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(expense.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
