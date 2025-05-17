package com.financetracker.finance_tracker.controller;

import com.financetracker.finance_tracker.dto.DashboardResponse;
import com.financetracker.finance_tracker.service.DashboardService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:3000")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    // ✅ **1. Fetch Dashboard Data**
    @GetMapping("/{userId}")
    public DashboardResponse getDashboardData(@PathVariable Long userId) {
        return dashboardService.getDashboardData(userId);
    }

    // ✅ **2. Fetch only Savings (optional)**
    @GetMapping("/{userId}/savings")
    public double getSavings(@PathVariable Long userId) {
        return dashboardService.calculateSavings(userId);
    }

    // ✅ **3. Fetch all Expenses**
    @GetMapping("/{userId}/expenses")
    public List<com.financetracker.finance_tracker.model.Expense> getAllExpenses(@PathVariable Long userId) {
        return dashboardService.getAllExpenses(userId);
    }
}
