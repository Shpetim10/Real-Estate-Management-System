import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Property } from '../Entities/Property';
import { PropertyServiceService } from '../Services/property-service.service';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';
@Component({
  selector: 'app-clien-carousel-property',
  imports: [CommonModule],
  templateUrl: './clien-carousel-property.component.html',
  styleUrl: './clien-carousel-property.component.css'
})
export class ClienCarouselPropertyComponent implements OnInit {
  properties: Property[] = [];
  propertiesGroups: any[]=[];
  constructor(public propertyService: PropertyServiceService) { }

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
}