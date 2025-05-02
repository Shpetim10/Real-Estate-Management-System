package com.RealEstate.Real_Estate_Management_System_Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private String token;
    private String username;
    private List<String> roles;
    private boolean success;
    private String message;

    public LoginResponse(String invalidCredentials, boolean b) {
        this.message = invalidCredentials;
        this.success = b;
    }
}