package com.RealEstate.Real_Estate_Management_System_Backend.repository;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository <User, Long> {

    Optional<User> findByUsername(String username);
    List< User> findByRolesContaining(String role);


}