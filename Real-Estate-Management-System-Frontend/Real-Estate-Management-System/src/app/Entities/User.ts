import { Property } from "./Property";
export class User {
    id: number;
    name: string;
    surname: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    imageUrl: string;
    roles: string[];
    properties: Property[];
  
    constructor(
      id: number,
      name: string,
      surname: string,
      username: string,
      password: string,
      email: string,
      phone: string,
      imageUrl: string,
      roles: string[],
      properties: Property[]
    ) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.username = username;
      this.password = password;
      this.email = email;
      this.phone = phone;
      this.imageUrl= imageUrl;
      this.roles = roles;
      this.properties = properties;
    }
  }