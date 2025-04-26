package com.RealEstate.Real_Estate_Management_System_Backend.entity;

import com.RealEstate.Real_Estate_Management_System_Backend.enums.Features;
import com.RealEstate.Real_Estate_Management_System_Backend.enums.PropertyType;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long propertyId;

    @Column(unique = true)
    private String governIssuedId;

    private String address;
    private String city;
    private String country;

    private int bedrooms;
    private int bathrooms;

    private int floor;

    @ElementCollection
    private List<Features> features;

    private PropertyType propertyType;
    private String description;

    private double price;

    private String status;

    public Property(Long propertyId, String governIssuedId, String address, String city, String country, int bedrooms, int bathrooms, int floor, List<Features> features, PropertyType propertyType, String description, double price, String status) {
        this.propertyId = propertyId;
        this.governIssuedId = governIssuedId;
        this.address = address;
        this.city = city;
        this.country = country;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.floor = floor;
        this.features = features;
        this.propertyType = propertyType;
        this.description = description;
        this.price = price;
        this.status = status;
    }

    public Property() {

    }

    public Long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Long propertyId) {
        this.propertyId = propertyId;
    }

    public String getGovernIssuedId() {
        return governIssuedId;
    }

    public void setGovernIssuedId(String governIssuedId) {
        this.governIssuedId = governIssuedId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(int bedrooms) {
        this.bedrooms = bedrooms;
    }

    public int getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(int bathrooms) {
        this.bathrooms = bathrooms;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public List<Features> getFeatures() {
        return features;
    }

    public void setFeatures(List<Features> features) {
        this.features = features;
    }

    public PropertyType getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(PropertyType propertyType) {
        this.propertyType = propertyType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
