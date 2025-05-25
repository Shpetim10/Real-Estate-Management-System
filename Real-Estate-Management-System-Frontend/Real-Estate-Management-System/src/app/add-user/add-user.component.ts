import { UserService } from './../Services/user.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MenuComponent } from "../menu/menu.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  standalone: true,
  selector: 'app-add-user',
  imports: [CommonModule, FormsModule, MenuComponent, NavbarComponent],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  errorMessage: string = '';

  constructor(public userService: UserService) {}

  addUser(newUser: NgForm) {
    this.errorMessage = '';
    const userData = { ...newUser.value };

    // Check for duplicate username
    this.userService.getAllUsers().subscribe((users) => {
      const duplicate = users.some(u => u.username === userData.username);
      if (duplicate) {
        this.errorMessage = "A user with this username already exists.";
        return;
      }

      this.userService.addUser(userData).subscribe({
        next: (response) => {
          this.errorMessage = "User was added successfully!";
          console.log(newUser.value);
          newUser.resetForm();
        },
        error: (error) => this.errorMessage = "Error!"
      });
    });
  }
}