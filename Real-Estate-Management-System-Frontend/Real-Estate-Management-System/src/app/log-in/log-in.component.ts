import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [CommonModule,FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  username = '';
  password = '';
  userInfo = '';
  error = '';

  constructor(private auth: AuthService,private router: Router) {
    this.checkLogin();
  }

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => {this.checkLogin(); this.router.navigate(["/add-user"])},
      error: () => {this.error = 'Login failed'; alert(this.error)}
    });
  }

  logout() {
    this.auth.logout().subscribe(() => this.userInfo = '');
  }

  checkLogin() {
    this.auth.getCurrentUser().subscribe({
      next: data => {
      this.userInfo = data; 
      this.error = '';
      
      },
      error: () => this.userInfo = ''
    });
  }
}
