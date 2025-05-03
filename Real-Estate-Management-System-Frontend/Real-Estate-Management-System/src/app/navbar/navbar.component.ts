import { AuthService } from './../Services/auth.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Entities/User';
import { error } from 'console';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(public authService: AuthService,public router: Router){}
  
  loggedUser: User | null=null;
  
  ngOnInit(): void {
      this.authService.getLoggedUser().subscribe({
        next: (response)=> this.loggedUser=response,
        error: (err)=> console.log(err)
      });
  }
  logout(): void {
    this.authService.logout();
  }
}
