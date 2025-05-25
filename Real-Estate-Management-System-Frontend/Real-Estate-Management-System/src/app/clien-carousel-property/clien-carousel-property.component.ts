import { PropertyDataService } from './../Services/property-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../Services/property-service.service';
import { Property } from '../Entities/Property';
@Component({
  selector: 'app-clien-carousel-property',
  imports: [CommonModule],
  templateUrl: './clien-carousel-property.component.html',
  styleUrl: './clien-carousel-property.component.css'
})
export class ClienCarouselPropertyComponent implements OnInit {
  properties: Property[] = [];
  propertiesGroups: Property[][] = [];

  constructor(private propertyService: PropertyServiceService,
    private propertyDataService: PropertyDataService,
    private router: Router) {}

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe({
      next: (response) => {
        if (response && Array.isArray(response)) {
          this.properties = response;
          this.propertiesGroups = this.chunkArray(this.properties, 3);
        } else {
          console.error('Unexpected API response:', response);
        }
      },
      error: (err) => {
        console.error('Error fetching properties:', err);
      }
    });
  }

  chunkArray(arr: Property[], size: number): Property[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  }
  
  openViewPage(property: Property): void {
    this.propertyDataService.property = property;
    this.router.navigate(['/client-property']);
  }
}