package com.RealEstate.Real_Estate_Management_System_Backend.enums;

public enum PropertyType {
    APARTAMENT("Apartament","This is an apartamanet!"),
    DUPLEX("Duplex","This is a duplex!"),
    PENTHOUSE("Penthouse","This is a penthouse!");

    private String name;
    private String description;

    PropertyType(String name, String description){
        this.name=name;
        this.description=description;
    }
}
