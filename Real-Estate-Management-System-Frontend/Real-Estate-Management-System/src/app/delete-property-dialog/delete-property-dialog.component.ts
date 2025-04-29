import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-property-dialog',
  imports: [MatDialogModule],
  templateUrl: './delete-property-dialog.component.html',
  styleUrl: './delete-property-dialog.component.css'
})
export class DeletePropertyDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeletePropertyDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: {propertyId: number}){}
  
  onCancel(){
    this.dialogRef.close(false);
  }
  
  onDelete(){
    this.dialogRef.close(true);
  }
}
