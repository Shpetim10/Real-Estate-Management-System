import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';
import { PropertyServiceService } from '../Services/property-service.service';
import { Property } from '../Entities/Property';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DeletePropertyDialogComponent } from '../delete-property-dialog/delete-property-dialog.component';
import { ViewPropertyDialogComponent } from '../view-property-dialog/view-property-dialog.component';
import { EditPropertyComponent } from '../edit-property/edit-property.component';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-property-management',
  imports: [MenuComponent,CommonModule, NavbarComponent],
  templateUrl: './property-management.component.html',
  styleUrl: './property-management.component.css'
})
export class PropertyManagementComponent {
  constructor(public propertyService: PropertyServiceService, private dialog: MatDialog){}
  properties: Property[]=[];
  
  ngOnInit(){
    this.getAllProperties();
  }
  
  getAllProperties(){
    this.propertyService.getAllProperties().subscribe({
      next: (response)=> {this.properties=response; console.log(response)},
      error: (error)=> console.log("Error fetching properties!")
    });
  }
  
  deleteProperty(propertyId: number){
    const dialogRef=this.dialog.open(DeletePropertyDialogComponent,{
      height: '250px',
      data: {
        propertyId: propertyId
      }
    });
    
    dialogRef.afterClosed().subscribe((response)=>{
      if(response){
        this.propertyService.deleteProperty(propertyId).subscribe({
          next: (response)=> this.properties=this.properties.filter(property=> propertyId!==property.propertyId),
          error: (error)=> console.log("There was an error during deleting property! ")
        });
      }
    })
  }
  
  viewProperty(property: Property){
    this.dialog.open(ViewPropertyDialogComponent,{
      width: '550px',
      data: {
        property: property
      }
    })
  }
  
  updateProperty(oldProperty: Property){
    let toEdit: Property=JSON.parse(JSON.stringify(oldProperty));
    
    const dialog=this.dialog.open(EditPropertyComponent,{
      width: '550px',
      data: {
        property: toEdit
      }
    })
    
    dialog.afterClosed().subscribe((response)=>
      {
        if(response!==null){
          this.propertyService.updateProperty(toEdit,response).subscribe({
            next: (response)=>this.getAllProperties(),
            error: (error)=> console.error(error)
          }); 
        }
      }
    )
  } 
}
