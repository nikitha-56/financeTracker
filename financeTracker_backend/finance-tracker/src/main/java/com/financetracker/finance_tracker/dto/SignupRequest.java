package com.financetracker.finance_tracker.dto;

public class SignupRequest {
    private String name;
    private String email;
    private String password;

    // Getter and Setter methods for name, email, and password
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

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
