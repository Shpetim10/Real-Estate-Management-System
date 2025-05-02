package com.RealEstate.Real_Estate_Management_System_Backend.config;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.User;
import com.RealEstate.Real_Estate_Management_System_Backend.enums.Roles;
import com.RealEstate.Real_Estate_Management_System_Backend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(DataInitializer.class);
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        initializeDefaultUsers();
    }

    private void initializeDefaultUsers() {
        if (userService.findByUsername("admin") == null) {
            User admin = new User();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setRoles(Roles.ADMIN);
            admin.setEmail("admin@realestate.com");

            userService.saveUser(admin);
            logger.info("Default admin user created");
        }

        if (userService.findByUsername("agent") == null) {
            User agent = new User();
            agent.setUsername("agent");
            agent.setPassword(passwordEncoder.encode("agent123"));
            agent.setRoles(Roles.AGENT);
            agent.setEmail("agent@realestate.com");

            userService.saveUser(agent);
            logger.info("Default agent user created");
        }
    }
}