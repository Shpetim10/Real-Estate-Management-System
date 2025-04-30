package com.RealEstate.Real_Estate_Management_System_Backend.service;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.User;
import com.RealEstate.Real_Estate_Management_System_Backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class UserService {

    Logger logger = Logger.getLogger(this.getClass().getName());

    private void dgb (String message) {
        logger.info("UserService => " + message);
    }

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public void updateUser(long id, User user){
        User userFromDB = userRepository.findById(user.getId()).get();
        if (userFromDB != null) {
            if (user.getPassword() != null && !user.getPassword().isEmpty()) {
                userFromDB.setPassword(passwordEncoder.encode(user.getPassword()));
            }
            userFromDB.setUsername(user.getUsername());
            userFromDB.setName(user.getName());
            userFromDB.setSurname(user.getSurname());
            userFromDB.setPhone(user.getPhone());
            userFromDB.setEmail(user.getEmail());
            userFromDB.setRoles(new ArrayList<>(user.getRoles()));
            userRepository.save(userFromDB);
        }
    }

    public List<User> findByRolesContaining(String role) {
        return userRepository.findByRolesContaining(role);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User findByUsername(String username) {
        userRepository.findByUsername(username);
        return userRepository.findByUsername(username).orElse(null);
    }

    public User getUserById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
}
