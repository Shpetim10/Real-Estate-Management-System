export class Client{
    fullName: string;
    contactNumber: string;
    emailAddress: string;
    
    constructor(fullName:string, contactNumber: string, email: string){
        this.fullName=fullName;
        this.contactNumber=contactNumber;
        this.emailAddress=email;
    }
}