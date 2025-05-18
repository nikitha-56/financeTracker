package com.financetracker.finance_tracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.financetracker.finance_tracker.model.Expense;
import com.financetracker.finance_tracker.repository.ExpenseRepository;

@Service
public class ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense addExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    public Double getTotalExpenses() {
        return expenseRepository.getTotalExpenses();
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public List<Expense> getExpensesByUserId(Long userId) {
        return expenseRepository.findByUser_Id(userId);
    }
    public Double getTotalExpensesByUser(Long userId) {
        return expenseRepository.getTotalExpensesByUser(userId);
    }
public Expense getExpenseById(Long id) {
    return expenseRepository.findById(id).orElse(null);
}




    public Expense updateExpense(Long id, Expense expenseDetails) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found with id " + id));

        expense.setAmount(expenseDetails.getAmount());
        expense.setCategory(expenseDetails.getCategory());
        expense.setDate(expenseDetails.getDate());
        expense.setNotes(expenseDetails.getNotes());

        return expenseRepository.save(expense);
    }

    public void deleteExpense(Long id) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found with id " + id));
        expenseRepository.delete(expense);
    }
}
