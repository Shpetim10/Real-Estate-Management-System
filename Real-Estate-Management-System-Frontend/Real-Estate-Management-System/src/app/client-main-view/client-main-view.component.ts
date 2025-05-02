import { Component, OnInit } from '@angular/core';
import { ClienCarouselPropertyComponent } from "../clien-carousel-property/clien-carousel-property.component";
import { ClientBackgroundCarouselComponent } from "../client-background-carousel/client-background-carousel.component";
import { ClientAgentViewComponent } from "../client-agent-view/client-agent-view.component";
import { RouterLink, RouterModule } from '@angular/router';
import { PropertyServiceService } from '../Services/property-service.service';
import { UserService } from '../Services/user.service';
import { Property } from '../Entities/Property';
import { User } from '../Entities/User';
@Component({
  selector: 'app-client-main-view',
  imports: [ClienCarouselPropertyComponent, ClientBackgroundCarouselComponent, ClientAgentViewComponent, RouterLink, RouterModule],
  templateUrl: './client-main-view.component.html',
  styleUrl: './client-main-view.component.css'
})
export class ClientMainViewComponent implements OnInit {
  constructor(private propertyService: PropertyServiceService, private userService: UserService){}
  properties: Property[]=[];
  agents: User[]=[];
  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe({
      next: (response) => {
        if (response && Array.isArray(response)) {
          this.properties=response
        } else {
          console.error('Unexpected API response:', response);
        }
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
    
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        if (response && Array.isArray(response)) {
          this.agents = response.filter((agent) => agent.roles?.includes('AGENT'));
        } else {
          console.error('Unexpected API response:', response);
        }
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
  
  getBuyProperties(): Property[]{
    return this.properties.filter((property)=> property.status!=='SOLD');
  }
  getSoldProeprties(): Property[]{
    return this.properties.filter((property)=> property.status==='SOLD');
  }
}
