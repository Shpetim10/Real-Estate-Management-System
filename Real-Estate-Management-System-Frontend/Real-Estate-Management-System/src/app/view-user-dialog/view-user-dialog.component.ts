import { Component , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { User } from '../Entities/User';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-user-dialog',
  imports: [MatDialogActions, CommonModule,MatDialogContent],
  templateUrl: './view-user-dialog.component.html',
  styleUrl: './view-user-dialog.component.css'
})
export class ViewUserDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
