export class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    encryptedPassword: string;
    email: string;
    photoUrl: string;
    role: string;
    roles: string[] = [];

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        username: string,
        encryptedPassword: string,
        email: string,
        photoUrl: string,
        role: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.encryptedPassword = encryptedPassword;
        this.email = email;
        this.photoUrl = photoUrl;
        this.role = role;
    }

    addRole(role: string): void {
        this.roles.push(role);
    }

    hasRole(role: string): boolean {
        return this.roles.includes(role);
    }

    hasAnyRole(roles: string[]): boolean {
        return roles.some(role => this.roles.includes(role));
    }

    hasAllRoles(roles: string[]): boolean {
        return roles.every(role => this.roles.includes(role));
    }
}