package com.RealEstate.Real_Estate_Management_System_Backend.service;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.Property;
import com.RealEstate.Real_Estate_Management_System_Backend.repository.PropertyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {
    private final PropertyRepository propertyRepository;

    public PropertyService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    public List<Property> getAllProperties(){
        return propertyRepository.findAll();
    }

    public Property getPropertyById(Long propertyId){
        Optional<Property> property=propertyRepository.findById(propertyId);
        if(!property.isPresent()) throw new RuntimeException("This property was not found!");

        return property.get();
    }

    public Property saveProperty(Property property){
        propertyRepository.save(property);
        return property;
    }

    public Property deleteProperty(Long propertyId){
        Optional<Property> toDelete=propertyRepository.findById(propertyId);

        if(!toDelete.isPresent()){
            throw new RuntimeException("This property was not found!");
        }

        propertyRepository.delete(toDelete.get());

        return toDelete.get();
    }

    public void updateProperty(Long propertyId, Property updatedProperty){
        Property property =this.getPropertyById(propertyId);

        property.setBathrooms(updatedProperty.getBathrooms());
        property.setAddress(updatedProperty.getAddress());
        property.setBedrooms(updatedProperty.getBedrooms());
        property.setCity(updatedProperty.getCity());
        property.setCountry(updatedProperty.getCountry());
        property.setFloor(updatedProperty.getFloor());
        property.setFeatures(updatedProperty.getFeatures());
        property.setStatus(updatedProperty.getStatus());
        property.setPrice(updatedProperty.getPrice());
        property.setPropertyType(updatedProperty.getPropertyType());
        property.setDescription(updatedProperty.getDescription());
        property.setGovernIssuedId(updatedProperty.getGovernIssuedId());
        property.setImageUrl(updatedProperty.getImageUrl());
        property.setArea(updatedProperty.getArea());

        propertyRepository.save(property);
    }
}
