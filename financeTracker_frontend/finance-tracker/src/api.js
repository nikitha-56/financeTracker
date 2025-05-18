import axios from "axios";

const API_URL = "http://localhost:8080/api/expenses";

// Get all expenses
export const getExpenses = async () => {
  try {
    return await axios.get(API_URL);
  } catch (err) {
    throw new Error("Failed to fetch expenses");
  }
};

// Delete expense by ID with error handling
export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error("Failed to delete expense");
    }
  } catch (err) {
    throw new Error("Error deleting expense");
  }
};

// Get expense by ID
export const getExpenseById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    throw new Error("Error fetching expense");
  }
};

// Update expense by ID
export const updateExpense = async (id, expense) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, expense);
    return response;
  } catch (error) {
    throw new Error("Error updating expense");
  }
};

// Add a new expense
export const addExpense = (expense) => axios.post(API_URL, expense);
