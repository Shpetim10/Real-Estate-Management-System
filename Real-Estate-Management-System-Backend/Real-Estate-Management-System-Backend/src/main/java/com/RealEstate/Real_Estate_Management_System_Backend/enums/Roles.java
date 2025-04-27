package com.RealEstate.Real_Estate_Management_System_Backend.enums;

public enum Roles {

    ADMIN("ADMIN","Administrator", "ROLE_ADMIN"),
    AGENT("AGENT","Agent", "ROLE_AGENT"),
    ;

    private String name;
    private String description;
    private String roleName;

    Roles(String name, String description, String roleName) {
        this.name = name;
        this.description = description;
        this.roleName = roleName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
