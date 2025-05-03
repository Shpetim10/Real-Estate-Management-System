import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuComponent } from '../menu/menu.component';
import { User } from '../Entities/User';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { UserProfile } from '../Entities/auth.models';
import { Property } from '../Entities/Property';
import { PropertyServiceService } from '../Services/property-service.service';
import { UserService } from '../Services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent,MenuComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  currentUser: UserProfile | null = null;
  resourceData: any = null;
  loading = false;
  error = '';
  loggedUser: User| null =null;
  properties: Property[]=[];
  users: User[]=[];
  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private propertyService :PropertyServiceService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.fetchProtectedResource();
    
    this.getLoggedUser();
    
    this.getProperties();
    this.getUsers();
  }

  fetchProtectedResource(): void {
    this.loading = true;
    this.http.get('http://localhost:8080/api/resources/user')
      .subscribe({
        next: (data) => {
          this.resourceData = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error fetching resource data';
          this.loading = false;
        }
      });
  }

  logout(): void {
    this.authService.logout();
  }
  
  getLoggedUser(){
    this.authService.getLoggedUser().subscribe({
      next: (response)=> this.loggedUser=response,
      error: (err)=> console.log(err)
    })
  }
  
  getProperties(){
    if((this.currentUser?.roles ?? []).includes('ADMIN')){
      this.propertyService.getAllProperties().subscribe({
        next: (response)=> {this.properties=response; console.log(response)},
        error: (error)=> console.log("Error fetching properties!")
      });
    }
    else{
      this.propertyService.getAllPropertiesByAgent(this.currentUser?.username ?? '').subscribe({
        next: (response)=> this.properties=response,
        error: (err)=> console.log(err)
      });
    }
  }
  
  getUsers(){
    this.userService.getAllUsers().subscribe({
      next: (response) => {
          this.users=response
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
  
  getSoldProperties(): Property[]{
    return this.properties.filter((prop)=>prop.status==='SOLD');
  }
  
  getAgents(): User[]{
    return this.users.filter((u)=>u.roles.includes('AGENT'));
  }
  
  getProfit(): number{
    let allProfit: number=0;
    
    this.properties.forEach((prop)=>{
      if(prop.status==='SOLD')
        allProfit=allProfit+prop.price;
    });
    
    return allProfit;
    
  }
}
