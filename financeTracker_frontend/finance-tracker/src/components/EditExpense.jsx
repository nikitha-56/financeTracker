import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate
import { getExpenseById, updateExpense } from '../api'; // Add API calls to get and update expense

const ExpenseEdit = () => {
  const [expense, setExpense] = useState({
    amount: '',
    category: '',
    date: '',
    notes: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const { id } = useParams(); // Get the ID from the URL

  useEffect(() => {
    // Fetch expense details by ID
    const fetchExpense = async () => {
      try {
        const response = await getExpenseById(id); // API call to get expense details by ID
        setExpense({
          amount: response.data.amount,
          category: response.data.category,
          date: response.data.date,
          notes: response.data.notes
        });
      } catch (error) {
        setMessage('Failed to load expense details');
      }
    };

    fetchExpense();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateExpense(id, expense); // Send PUT request to update expense
      alert('Expense updated successfully');
      navigate('/'); // Redirect to the home page after successful update
    } catch (err) {
      console.error(err);
      alert('Failed to update expense');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={expense.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Notes:</label>
          <input
            type="text"
            name="notes"
            value={expense.notes}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Expense</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ExpenseEdit;
