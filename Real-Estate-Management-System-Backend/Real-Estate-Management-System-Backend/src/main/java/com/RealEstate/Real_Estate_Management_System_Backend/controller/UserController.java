package com.RealEstate.Real_Estate_Management_System_Backend.controller;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.User;
import com.RealEstate.Real_Estate_Management_System_Backend.service.UserService;
import jakarta.annotation.security.PermitAll;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.internal.Logger;

import java.util.List;


@RestController
@RequestMapping("/admin/user-management")
public class UserController {

    Logger logger = Logger.getLogger(this.getClass().getName());

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PermitAll
    @GetMapping("/get-user/{id}")
    public ResponseEntity<User> getUser(@PathVariable long id) {
        User user = userService.getUserById(id);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @PermitAll
    @GetMapping("/get-users")

    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PermitAll
    @PostMapping("/add-user")
    public ResponseEntity<User> addUser(@RequestBody User newUser) {
        userService.saveUser(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }
    @PermitAll
    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PermitAll
    @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User updatedUser) {
        System.out.println(id+" is updated!");
        userService.updateUser(id, updatedUser);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
}


