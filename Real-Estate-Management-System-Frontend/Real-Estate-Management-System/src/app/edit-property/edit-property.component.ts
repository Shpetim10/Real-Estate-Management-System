import { CommonModule} from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PropertyServiceService } from '../Services/property-service.service';
import { Property } from '../Entities/Property';
import { FormsModule ,NgForm} from '@angular/forms';
@Component({
  selector: 'app-edit-property',
  imports: [MatDialogModule,MatDialogActions, CommonModule, FormsModule,MatButtonModule],
  templateUrl: './edit-property.component.html',
  styleUrl: './edit-property.component.css'
})
export class EditPropertyComponent {
  constructor(public propertyService: PropertyServiceService,
    private dialogRef: MatDialogRef<EditPropertyComponent>,
    @Inject (MAT_DIALOG_DATA) public data: {property: Property}){}
    
    onCancel(){
      this.dialogRef.close(null);
    }
    updateProperty(updated: NgForm){
      this.dialogRef.close(updated.value);
    }
}
