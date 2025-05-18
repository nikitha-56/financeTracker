
// export default ExpenseEdit;
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ExpenseEdit = () => {
  const [expense, setExpense] = useState({
    amount: '',
    category: '',
    date: '',
    notes: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch Expense Details
  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/expenses/${id}`);
        setExpense(response.data);
      } catch (error) {
        alert("Failed to load expense details");
      }
    };
    fetchExpense();
  }, [id]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/expenses/${id}`, expense);
      setMessage("Expense updated successfully");
      setError('');
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Failed to update expense");
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={{ marginBottom: "20px" }}>Edit Expense</h3>
      <div style={styles.formGroup}>
        <label style={styles.label}>Amount:</label>
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Category:</label>
        <input
          type="text"
          name="category"
          value={expense.category}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Date:</label>
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Notes:</label>
        <input
          type="text"
          name="notes"
          value={expense.notes}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Update Expense</button>
      {message && <p style={styles.message}>{message}</p>}
      {error && <p style={{ ...styles.message, color: "red" }}>{error}</p>}
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "50px 70px 50px 50px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    margin: "auto",
  },
  formGroup: {
    marginBottom: "15px",
    width: "100%",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "100%",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  message: {
    marginTop: "15px",
    fontSize: "1rem",
    color: "#28a745",
  },
};

export default ExpenseEdit;
