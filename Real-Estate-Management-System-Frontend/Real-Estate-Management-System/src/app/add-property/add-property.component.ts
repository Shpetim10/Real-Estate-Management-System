import { AuthService } from './../Services/auth.service';
import { PropertyServiceService } from './../Services/property-service.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,NgForm} from '@angular/forms';
import { MenuComponent } from "../menu/menu.component";
import { NavbarComponent } from "../navbar/navbar.component"; 
import { User } from '../Entities/User';
import { UserService } from '../Services/user.service';

@Component({
  standalone: true,
  selector: 'app-add-property',
  imports: [CommonModule, FormsModule, MenuComponent, NavbarComponent],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit{
  public loggedUser: User| null =null;
  public agents: User[]=[];
  public errorMessage: string = '';
  
  constructor(public propertyService: PropertyServiceService, public authService: AuthService, public userService: UserService) {}
  ngOnInit(): void {
      this.getLoggedUser();
      //this.getAgents();
  }
  getLoggedUser(){
    this.authService.getLoggedUser().subscribe({
      next: (response)=> {this.loggedUser=response;this.getAgents();},
      error: (err)=> console.log(err)
    })
  }
  
  getAgents(){
    this.userService.getAllUsers().subscribe({
      next: (response) => {
          this.agents=response.filter(user=>user.roles.includes("AGENT"))
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
  addProperty(newProperty: NgForm) {
    this.errorMessage = '';
    const propertyData = { ...newProperty.value };
  
    // Always set agentUsername: for agent, use their username; for admin, use selected
    if (this.loggedUser?.roles?.includes('AGENT')) {
      propertyData.agentUsername = this.loggedUser.username;
    } // for admin, agentUsername comes from the select box
  
    // --- Data Validation ---
    if (!propertyData.governIssuedId || !propertyData.address || !propertyData.city || !propertyData.country) {
      this.errorMessage = "Please fill in all required fields.";
      return;
    }
  
    this.propertyService.getAllProperties().subscribe((properties) => {
      const duplicate = properties.some(
        (p) =>
          (propertyData.propertyId && p.propertyId == propertyData.propertyId) ||
          (propertyData.governIssuedId && p.governIssuedId === propertyData.governIssuedId)
      );
      if (duplicate) {
        this.errorMessage = "A property with the same Property ID or Government Issued ID already exists.";
        return;
      }
  
      this.propertyService.addProperty({
        ...propertyData,
        agent: { username: propertyData.agentUsername } // ensure agent object has username
      }).subscribe({
        next: () => {
          console.log(propertyData);
          newProperty.resetForm();
          this.errorMessage = '';
        },
        error: (error) => this.errorMessage = "Error saving property!"
      });
    });
  }
}
