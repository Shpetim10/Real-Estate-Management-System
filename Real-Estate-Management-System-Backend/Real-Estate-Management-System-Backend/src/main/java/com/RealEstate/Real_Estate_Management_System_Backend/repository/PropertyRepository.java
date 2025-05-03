package com.RealEstate.Real_Estate_Management_System_Backend.repository;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.Property;
import com.RealEstate.Real_Estate_Management_System_Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property,Long> {
}
