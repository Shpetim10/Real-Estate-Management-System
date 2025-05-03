package com.RealEstate.Real_Estate_Management_System_Backend.dto;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.Property;
import com.RealEstate.Real_Estate_Management_System_Backend.entity.User;

public class PropertyDto {
    private String agentUsername;
    private Property property;

    public PropertyDto(String currentUser, Property property) {
        this.agentUsername = currentUser;
        this.property = property;
    }

    public String getCurrentUser() {
        return agentUsername;
    }

    public void setAgentUsername(String currentUser) {
        this.agentUsername = currentUser;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }
}
