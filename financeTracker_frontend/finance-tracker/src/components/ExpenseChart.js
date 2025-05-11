import React, { useEffect, useState } from 'react';
import { Pie ,Bar} from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
     BarElement, // Import BarElement for the bar chart
    CategoryScale, // Import CategoryScale for bar chart
    LinearScale,
} from 'chart.js';
import './ExpenseChart.css';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ExpenseChart = () => {
    const [expenseData, setExpenseData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [monthlyData, setMonthlyData] = useState([]);
    const [totalData, setTotalData] = useState([]);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        axios.get('http://localhost:8080/api/expenses')
            .then(response => {
                setExpenseData(response.data);
            })
            .catch(error => {
                console.error("Error fetching expense data", error);
            });
    }, []);

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
        const filteredData = expenseData.filter(expense =>
            new Date(expense.date).getMonth() === months.indexOf(e.target.value)
        );

        const categories = [...new Set(filteredData.map(exp => exp.category))];
        const categorySums = categories.map(category =>
            filteredData.filter(exp => exp.category === category).reduce((sum, exp) => sum + exp.amount, 0)
        );

        const sortedData = categories.map((category, index) => ({
            category,
            amount: categorySums[index]
        })).sort((a, b) => b.amount - a.amount);

        setMonthlyData(sortedData);
    };

    useEffect(() => {
        const categories = [...new Set(expenseData.map(exp => exp.category))];
        const categorySums = categories.map(category =>
            expenseData.filter(exp => exp.category === category).reduce((sum, exp) => sum + exp.amount, 0)
        );

        const sortedData = categories.map((category, index) => ({
            category,
            amount: categorySums[index]
        })).sort((a, b) => b.amount - a.amount);

        setTotalData(sortedData);
    }, [expenseData]);

    const colors = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#8e44ad', '#27ae60'];

    const getPieData = (data) => ({
        labels: data.map(d => d.category),
        datasets: [{
            data: data.map(d => d.amount),
            backgroundColor: colors,
            hoverOffset: 4
        }]
    });

    const getBarData = (data) => ({
        labels: data.map(d => d.category),
        datasets: [{
            label: 'Expense Amount',
            data: data.map(d => d.amount),
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    });
return (
        <div className="chart-container">
            <div className="dropdown-wrapper">
                <select value={selectedMonth} onChange={handleMonthChange}>
                    <option value="">Select Month</option>
                    {months.map((month, index) => (
                        <option key={index} value={month}>{month}</option>
                    ))}
                </select>
            </div>

            <div className="chart-wrapper">
                <h3>Monthly Expenses</h3>
                <Pie data={getPieData(monthlyData)} />
                <Bar data={getBarData(monthlyData)} options={{ responsive: true, scales: { x: { beginAtZero: true }, y: { beginAtZero: true } } }} />
                <div className="legend-container">
                    {monthlyData.map((item, index) => (
                        <div key={index} className="legend-item">
                            <span
                                className="legend-color"
                                style={{ backgroundColor: colors[index % colors.length] }}
                            />
                            <span>{item.category}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="chart-wrapper">
                <h3>Total Expenses</h3>
                <Pie data={getPieData(totalData)} />
                <Bar data={getBarData(totalData)} options={{ responsive: true, scales: { x: { beginAtZero: true }, y: { beginAtZero: true } } }} />
                <div className="legend-container">
                    {totalData.map((item, index) => (
                        <div key={index} className="legend-item">
                            <span
                                className="legend-color"
                                style={{ backgroundColor: colors[index % colors.length] }}
                            />
                            <span>{item.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpenseChart;