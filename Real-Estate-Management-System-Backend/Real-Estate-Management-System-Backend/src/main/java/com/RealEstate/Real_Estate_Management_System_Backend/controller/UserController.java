package com.RealEstate.Real_Estate_Management_System_Backend.controller;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.User;
import com.RealEstate.Real_Estate_Management_System_Backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.internal.Logger;

import java.util.List;

@RestController
@RequestMapping("/user-management")
public class UserController {

    Logger logger = Logger.getLogger(this.getClass().getName());

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/get-user/{id}")
    public ResponseEntity<User> getUser(@PathVariable long id) {
        User user = userService.getUserById(id);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/get-users")

    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/add-user")
    public ResponseEntity<User> addUser(@RequestBody User newUser) {
        userService.saveUser(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User updatedUser) {
        userService.updateUser(id, updatedUser);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @GetMapping("/view-user/{username}")
    public ResponseEntity<User> viewUser(@PathVariable String username) {
        User user = userService.findByUsername(username);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("/edit-user/{id}")
    public ResponseEntity<User> editUser(@PathVariable long id, @RequestBody User updatedUser) {
        userService.updateUser(id, updatedUser);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
}


