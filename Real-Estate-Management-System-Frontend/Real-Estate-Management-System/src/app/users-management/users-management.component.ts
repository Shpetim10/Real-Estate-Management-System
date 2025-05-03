import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { User } from '../Entities/User';
import { UserService } from '../Services/user.service';
import { DialogRef } from '@angular/cdk/dialog';
import { ViewUserDialogComponent } from '../view-user-dialog/view-user-dialog.component';
import { ConfirmDeleteUserComponent } from '../confirm-delete-user/confirm-delete-user.component';
import { UpdateUserDialogComponent } from '../update-user-dialog/update-user-dialog.component';

@Component({
  selector: 'app-users-management',
  imports: [MenuComponent, NavbarComponent, CommonModule],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.css'
})
export class UsersManagementComponent implements OnInit{
  users: User[]=[];
  constructor(private userService: UserService, private dialog: MatDialog){}
  
  ngOnInit(): void {
      this.getAllUsers();
  }
  
  getAllUsers(){
    this.userService.getAllUsers().subscribe({
      next: (response)=> this.users=response,
      error: (err)=> console.log(err)
    });
  }
  
  viewUser(userToView: User): void {
    const dialogRef = this.dialog.open(ViewUserDialogComponent, {
      width: '500px',
      data: { user: userToView }
    });
  }
  
  deleteUser(userId: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteUserComponent, {
      width: '350px',
      data: { userId }
    });
  
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.userService.deleteUser(userId).subscribe({
          next: () => {
            console.log(`User with id ${userId} was deleted successfully!`);
            this.users = this.users.filter(user => user.id !== userId);
          },
          error: (error) => console.error(error)
        });
      }
    });
  }
  
  updateUser(oldUser: User): void {
    let userToUpdate: User=JSON.parse(JSON.stringify(oldUser)); 
    console.log(userToUpdate.id);// Clone object to avoid mutation
    const dialogRef = this.dialog.open(UpdateUserDialogComponent, {
      width: '500px',
      data: { oldUser: userToUpdate }
    });
  
    dialogRef.afterClosed().subscribe((updatedUser) => {
      if (updatedUser) {
        this.userService.updateUser(oldUser, updatedUser).subscribe({
          next: () => {
            console.log(`User with id ${oldUser.id} was updated!`);
            this.getAllUsers(); // Refresh users list
          },
          error: (error) => console.error(error)
        });
      }
    });
  }
}
