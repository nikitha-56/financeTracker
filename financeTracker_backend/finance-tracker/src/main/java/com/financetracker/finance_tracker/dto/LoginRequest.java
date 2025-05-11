package com.financetracker.finance_tracker.dto;

public class LoginRequest {
    private String email;
    private String password;

    // Getter and Setter methods for email and password
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
