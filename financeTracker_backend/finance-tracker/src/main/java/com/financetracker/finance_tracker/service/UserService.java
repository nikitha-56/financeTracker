package com.financetracker.finance_tracker.service;

import com.financetracker.finance_tracker.dto.SignupRequest;
import com.financetracker.finance_tracker.dto.LoginRequest;
import com.financetracker.finance_tracker.model.User;
import com.financetracker.finance_tracker.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(SignupRequest signupRequest) {
        // Check if email already exists in the database
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return "Error: Email is already taken!";
        }

        // Create a new User object and set the details from the signup request
        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(signupRequest.getPassword());  // Store password in plain text (not recommended in real apps)

        // Save the user to the repository (the database)
        userRepository.save(user);

        return "User registered successfully!";
    }

    public String authenticateUser(LoginRequest loginRequest) {
        // Find the user by email
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());

        // Check if the user exists
        if (userOpt.isEmpty()) {
            return "Error: User not found!";
        }

        // Get the actual user object from Optional
        User user = userOpt.get();

        // Compare the password (directly comparing plain text passwords)
        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return "Error: Invalid email or password!";
        }

        return "Login successful!";
    }
}
