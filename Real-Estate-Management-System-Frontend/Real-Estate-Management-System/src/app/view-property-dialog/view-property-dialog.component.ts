import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { PropertyServiceService } from '../Services/property-service.service';
import { Property } from '../Entities/Property';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-property-dialog',
  imports: [MatDialogModule,MatDialogActions,CommonModule],
  templateUrl: './view-property-dialog.component.html',
  styleUrl: './view-property-dialog.component.css'
})
export class ViewPropertyDialogComponent {
  constructor(public propertyService: PropertyServiceService,
    private dialogRef: MatDialogRef<ViewPropertyDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: { property: Property}
  ){}
  
  onClose(){
    this.dialogRef.close();
  }
  
}
