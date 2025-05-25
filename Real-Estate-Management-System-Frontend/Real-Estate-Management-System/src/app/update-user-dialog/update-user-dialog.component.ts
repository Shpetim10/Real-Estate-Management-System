import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { User } from '../Entities/User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-update-user-dialog',
  imports: [MatDialogActions, CommonModule, FormsModule, MatDialogContent],
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.css']
})
export class UpdateUserDialogComponent {
  errorMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<UpdateUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { oldUser: User }, 
    public userService: UserService
  ) {}

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onSave(updatedUser: User): void {
    this.errorMessage = '';
    // Prevent duplicate username (excluding the current user)
    this.userService.getAllUsers().subscribe(users => {
      const duplicate = users.some(
        u => u.username === updatedUser.username && u.id !== this.data.oldUser.id
      );
      if (duplicate) {
        this.errorMessage = "A user with this username already exists.";
        return;
      }
      this.dialogRef.close(updatedUser);
    });
  }
}
