import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';
import { PropertyServiceService } from '../Services/property-service.service';
import { Property } from '../Entities/Property';
import { response } from 'express';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-property-management',
  imports: [MenuComponent,CommonModule],
  templateUrl: './property-management.component.html',
  styleUrl: './property-management.component.css'
})
export class PropertyManagementComponent {
  constructor(public propertyService: PropertyServiceService){}
  properties: Property[]=[];
  
  ngOnInit(){
    this.getAllProperties();
  }
  
  getAllProperties(){
    this.propertyService.getAllProperties().subscribe({
      next: (response)=> {this.properties=response; console.log(response)},
      error: (error)=> alert("Error fetching properties!")
    });
  }
}
