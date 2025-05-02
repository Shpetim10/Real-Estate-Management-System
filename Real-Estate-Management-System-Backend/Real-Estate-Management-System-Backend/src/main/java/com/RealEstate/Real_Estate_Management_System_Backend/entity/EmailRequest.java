package com.RealEstate.Real_Estate_Management_System_Backend.entity;

public class EmailRequest {
    private String to;
    private Client client;
    private Property property;

    public EmailRequest(String to, Client client, Property property) {
        this.to = to;
        this.client = client;
        this.property = property;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }
}
