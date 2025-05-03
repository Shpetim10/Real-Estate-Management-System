package com.RealEstate.Real_Estate_Management_System_Backend.controller;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.Property;
import com.RealEstate.Real_Estate_Management_System_Backend.service.PropertyService;
import jakarta.annotation.security.PermitAll;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/agent/property-management")
public class PropertyController {
    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @PermitAll
    @GetMapping("/get-property/{propertyId}")
    public ResponseEntity<Property> getProperty(@PathVariable long propertyId){
        Property property=propertyService.getPropertyById(propertyId);

        return new ResponseEntity<>(property,HttpStatus.OK);
    }
    @PermitAll
    @GetMapping("/get-properties")
    public ResponseEntity<List<Property>> getAllProperties(){
        return new ResponseEntity<>(propertyService.getAllProperties(),HttpStatus.OK);
    }
    @PermitAll
    @PostMapping("/add-property")
    public ResponseEntity<Property> addProperty(@RequestBody Property newProperty){
        System.out.println("Inside controller");
        propertyService.saveProperty(newProperty);
        return new ResponseEntity<>(newProperty,HttpStatus.OK);
    }
    @PermitAll
    @DeleteMapping("/delete-property/{propertyId}")
    public ResponseEntity<Property> deleteProperty(@PathVariable long propertyId){
        propertyService.deleteProperty(propertyId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PermitAll
    @PutMapping("/update-property/{propertyId}")
    public ResponseEntity<Property> updateProperty(@PathVariable long propertyId, @RequestBody Property updatedUser){
        propertyService.updateProperty(propertyId,updatedUser);
        return new ResponseEntity<>(updatedUser,HttpStatus.OK);
    }
}
