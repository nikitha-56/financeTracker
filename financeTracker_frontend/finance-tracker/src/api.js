import axios from "axios";

// Define the base URL of your API (assuming you're running the backend locally)
const API_URL = "http://localhost:8080/api/expenses"; // Adjust the URL based on your actual API

// Get all expenses
export const getExpenses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (err) {
    throw new Error("Failed to fetch expenses");
  }
};
// eslint-disable-next-line no-undef
  

// Delete an expense
export const deleteExpense = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (err) {
    throw new Error("Failed to delete expense");
  }
};

export const getExpenseById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    throw new Error('Error fetching expense');
  }
};

// Update expense by ID
export const updateExpense = async (id, expense) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, expense);
    return response;
  } catch (error) {
    throw new Error('Error updating expense');
  }
};


export const addExpense = (expense) => axios.post("http://localhost:8080/api/expenses", expense);

