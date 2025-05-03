import { PropertyServiceService } from './../Services/property-service.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,NgForm} from '@angular/forms';
import { MenuComponent } from "../menu/menu.component";
import { NavbarComponent } from "../navbar/navbar.component"; 

@Component({
  standalone: true,
  selector: 'app-add-property',
  imports: [CommonModule, FormsModule, MenuComponent, NavbarComponent],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  constructor(public propertyService: PropertyServiceService) {}
  
  addProperty(newProperty: NgForm){
    this.propertyService.addProperty(newProperty.value).subscribe({
      next: () => {
        console.log(newProperty.value);
        newProperty.resetForm();
      },
      error: (error)=> alert("Error!")
    });
  }
}
