import { Component , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { User } from '../Entities/User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-update-user-dialog',
  imports: [MatDialogActions, CommonModule, FormsModule, MatDialogContent],
  templateUrl: './update-user-dialog.component.html',
  styleUrl: './update-user-dialog.component.css'
})
export class UpdateUserDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { oldUser: User }, public userService: UserService
  ) {}

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onSave(updatedUser: User): void {
    this.dialogRef.close(updatedUser);
  }

}
