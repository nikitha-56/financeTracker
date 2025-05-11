package com.financetracker.finance_tracker.controller;

import com.financetracker.finance_tracker.dto.SignupRequest;
import com.financetracker.finance_tracker.dto.LoginRequest;
import com.financetracker.finance_tracker.model.User;
import com.financetracker.finance_tracker.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest signupRequest) {
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return "Error: Email is already in use!";
        }

        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(signupRequest.getPassword());  // Store password in plain text (not recommended)

        userRepository.save(user);
        return "Signup successful!";
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        // Check if user exists by email
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        
        // If user is not found
        if (!userOpt.isPresent()) {
            return "Error: User not found!";
        }

        // Get the user from Optional
        User user = userOpt.get();

        // Compare the password (store and compare in plain text, not secure for production)
        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return "Error: Invalid credentials!";
        }

        return "Login successful!";
    }
}
