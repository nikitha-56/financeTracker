package com.financetracker.finance_tracker.dto;

import com.financetracker.finance_tracker.model.Expense;
import java.util.List;

public class DashboardResponse {
    private String name;
    private double salary;
    private double totalExpenses;
    private double savings;
    private List<Expense> expenses;

    public DashboardResponse(String name, double salary, double totalExpenses, double savings, List<Expense> expenses) {
        this.name = name;
        this.salary = salary;
        this.totalExpenses = totalExpenses;
        this.savings = savings;
        this.expenses = expenses;
    }

    // Getters
    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    public double getTotalExpenses() {
        return totalExpenses;
    }

    public double getSavings() {
        return savings;
    }

    public List<Expense> getExpenses() {
        return expenses;
    }
}

