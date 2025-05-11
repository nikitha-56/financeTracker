import React, { useState, useEffect } from "react";
import { getExpenses, deleteExpense } from "../api"; // API calls
import { useNavigate } from "react-router-dom";

const ExpenseList = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const response = await getExpenses();
        console.log(response);  // Log the full response object to the console
        setExpenses(response.data);  // Assuming your response contains a 'data' property
      } catch (err) {
        setError("Failed to load expenses");
      } finally {
        setLoading(false);
      }
    }
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id); // Deleting an expense
      setExpenses(expenses.filter(exp => exp.id !== id));
    } catch (err) {
      setError("Failed to delete expense");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ${expense.amount}{" "}
            <button onClick={() => handleDelete(expense.id)}>Delete</button>{" "}
            <button onClick={() => handleEdit(expense.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
