package com.financetracker.finance_tracker.service;

import com.financetracker.finance_tracker.dto.DashboardResponse;
import com.financetracker.finance_tracker.model.Expense;
import com.financetracker.finance_tracker.model.User;
import com.financetracker.finance_tracker.repository.ExpenseRepository;
import com.financetracker.finance_tracker.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExpenseRepository expenseRepository;

    // ✅ **1. Fetch Dashboard Data for a specific User**
    public DashboardResponse getDashboardData(Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            throw new RuntimeException("User not found");
        }

        User user = userOpt.get();
        List<Expense> expenses = expenseRepository.findByUser_Id(userId);

        // Calculate total expenses
        double totalExpenses = expenses.stream().mapToDouble(Expense::getAmount).sum();

        // Calculate savings if the user has provided their salary
        double salary = user.getSalary();
        double savings = salary - totalExpenses;

        return new DashboardResponse(user.getName(), salary, totalExpenses, savings, expenses);
    }

    // ✅ **2. Calculate Savings directly (optional)** 
    public double calculateSavings(Long userId) {
        DashboardResponse dashboardData = getDashboardData(userId);
        return dashboardData.getSavings();
    }

    // ✅ **3. Get All Expenses for User**
    public List<Expense> getAllExpenses(Long userId) {
        return expenseRepository.findByUser_Id(userId);
    }
}

