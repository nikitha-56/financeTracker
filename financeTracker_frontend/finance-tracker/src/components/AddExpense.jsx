import React, { useState } from "react";
import { addExpense } from "../api"; // we'll use this function to call backend

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState(""); // to show success/failure

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newExpense = {
        amount: parseFloat(amount), // convert amount to number
        category,
        date,
        notes
      };
      console.log(newExpense); // updated log
      await addExpense(newExpense);
      setMessage("Expense added successfully");
      setAmount("");
      setCategory("");
      setDate("");
      setNotes("");
    } catch (err) {
      console.error(err);
      setMessage("Failed to add expense");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Notes:</label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Add Expense</button>
      {message && <p style={styles.message}>{message}</p>}
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
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
    color: "#28a745", // success message color
  },
};

export default AddExpense;
