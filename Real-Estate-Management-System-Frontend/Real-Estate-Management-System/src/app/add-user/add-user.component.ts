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
  constructor(public userService: UserService) {}

  addUser(newUser: NgForm) {
    this.userService.addUser(newUser.value).subscribe({
      next: (response) => {
        alert("User was added successfully!");
        console.log(newUser.value);
        newUser.resetForm();
      },
      error: (error) => alert("Error!")
    });
  }
}