import { LogInComponent } from '../log-in/log-in.component';
import { AuthService } from './../Services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public auth: AuthService,public router: Router){}
  
  @ViewChild(LogInComponent) logIn!: LogInComponent;

  logout() {
    this.auth.logout().subscribe(() => {this.logIn.userInfo=''; this.router.navigate(['/log-in']) });
  }
}
