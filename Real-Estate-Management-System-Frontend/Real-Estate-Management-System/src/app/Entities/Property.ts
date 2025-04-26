export class Property {
    propertyId?: number; // Optional since ID is auto-generated
    governIssuedId: string;
    address: string;
    city: string;
    country: string;
    bedrooms: number;
    bathrooms: number;
    floor: number;
    features: string[]; // Assuming Features is another interface
    propertyType: string; // Assuming PropertyType is an enum or type
    description: string;
    price: number;
    status: string;
    imageUrl: string;

    constructor(
        governIssuedId: string,
        address: string,
        city: string,
        country: string,
        bedrooms: number,
        bathrooms: number,
        floor: number,
        features: string[],
        propertyType: string,
        description: string,
        price: number,
        status: string,
        imageUrl: string,
        propertyId?: number // Optional parameter
    ) {
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
        this.imageUrl = imageUrl;
    }
}