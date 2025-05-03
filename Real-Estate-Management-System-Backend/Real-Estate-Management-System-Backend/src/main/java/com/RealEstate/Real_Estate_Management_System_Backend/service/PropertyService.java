package com.RealEstate.Real_Estate_Management_System_Backend.service;

import com.RealEstate.Real_Estate_Management_System_Backend.dto.PropertyDto;
import com.RealEstate.Real_Estate_Management_System_Backend.entity.Property;
import com.RealEstate.Real_Estate_Management_System_Backend.entity.User;
import com.RealEstate.Real_Estate_Management_System_Backend.repository.PropertyRepository;
import com.RealEstate.Real_Estate_Management_System_Backend.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {
    private final PropertyRepository propertyRepository;
    private final UserRepository userRepository;

    public PropertyService(PropertyRepository propertyRepository, UserRepository userRepository) {
        this.propertyRepository = propertyRepository;
        this.userRepository = userRepository;
    }

    public List<Property> getAllProperties(){
        return propertyRepository.findAll();
    }

    public Property getPropertyById(Long propertyId){
        Optional<Property> property=propertyRepository.findById(propertyId);
        if(!property.isPresent()) throw new RuntimeException("This property was not found!");

        return property.get();
    }

    public List<Property> getAllPropertiesByUsername(String username){
        return userRepository.findAllPropertiesByUsername(username);
    }

    public Property saveProperty(PropertyDto propertyDto) {
        Optional<User> optionalAgent = userRepository.findByUsername(propertyDto.getCurrentUser());

        if (!optionalAgent.isPresent()) {
            throw new UsernameNotFoundException("Agent not found with username: " + propertyDto.getCurrentUser());
        }

        User agent = optionalAgent.get();
        propertyDto.getProperty().setAgent(agent);
        agent.getProperties().add(propertyDto.getProperty());

        return propertyRepository.save(propertyDto.getProperty());
    }


    public Property deleteProperty(Long propertyId){
        Optional<Property> toDelete=propertyRepository.findById(propertyId);

        if(!toDelete.isPresent()){
            throw new RuntimeException("This property was not found!");
        }

        propertyRepository.delete(toDelete.get());
        User agent=toDelete.get().getAgent();
        agent.getProperties().remove(toDelete);

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
