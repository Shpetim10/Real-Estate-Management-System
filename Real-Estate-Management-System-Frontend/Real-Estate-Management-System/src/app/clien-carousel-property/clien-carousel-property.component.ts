import { PropertyDataService } from './../Services/property-data.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Property } from '../Entities/Property';
import { PropertyServiceService } from '../Services/property-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clien-carousel-property',
  imports: [CommonModule],
  templateUrl: './clien-carousel-property.component.html',
  styleUrl: './clien-carousel-property.component.css'
})
export class ClienCarouselPropertyComponent implements OnInit {

  properties: Property[] = [];
  propertiesGroups: any[]=[];
  constructor(public propertyService: PropertyServiceService,private propertyDataService: PropertyDataService,private router:Router) { }

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe({
      next: (response) => {
        if (response && Array.isArray(response)) {
          this.properties=response
          this.propertiesGroups = this.chunkArray(this.properties, 3);
        } else {
          console.error('Unexpected API response:', response);
        }
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    })
  }

  chunkArray(arr: Property[], size: number) {
      return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
      );
    }
    
    openViewPage(property: Property){
      this.propertyDataService.property = property;
      this.router.navigate(['/client-property']);
    }
}