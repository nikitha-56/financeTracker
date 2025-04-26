package com.financetracker.finance_tracker.model;

import jakarta.persistence.*;

@Entity
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double amount;
    private String category;
    private String date;
    private String notes;
    
    // Getters and Setters
}
