import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-user',
  imports: [],
  templateUrl: './confirm-delete-user.component.html',
  styleUrl: './confirm-delete-user.component.css'
})
export class ConfirmDeleteUserComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
