import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule , NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-add-user',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})

export class AddUserComponent {

  constructor(
    public userService: UserService // Make sure this service is imported and provided
  ) {}


 // Replace this simpler version
addUser(userForm: NgForm): void {
  this.userService.addUser(userForm.value).subscribe({
    next: (response) => {
      console.log('User added successfully', response);
      userForm.reset(); // Reset the form after successful submission
      // Optionally reset the form or perform other actions
    },
    error: (error) => {
      console.error('Error adding user', error);
      // Handle the error appropriately
    }
  })
}
}
