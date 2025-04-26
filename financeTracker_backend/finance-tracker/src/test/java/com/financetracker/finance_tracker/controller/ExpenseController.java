package com.financetracker.finance_tracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.financetracker.finance_tracker.model.Expense;
import com.financetracker.finance_tracker.service.ExpenseService;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;


    
    @PostMapping
    public ResponseEntity<String> addExpense(@RequestBody Expense expense) {
        expenseService.addExpense(expense);
        return ResponseEntity.ok("Expense added successfully");
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }
}
