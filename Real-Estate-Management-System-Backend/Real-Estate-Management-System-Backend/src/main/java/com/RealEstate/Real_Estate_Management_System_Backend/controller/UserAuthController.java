package com.RealEstate.Real_Estate_Management_System_Backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserAuthController {
    @GetMapping("/me")
    public ResponseEntity<String> currentUser(Authentication auth) {
        if (auth == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not logged in");
        }
        return ResponseEntity.ok(auth.getName());
    }
    @GetMapping("/roles")
    public ResponseEntity<Collection<?>> currentRoles(Authentication auth){
        if (auth == null) {
            return null;
        }
        return ResponseEntity.ok(auth.getAuthorities());
    }
}

