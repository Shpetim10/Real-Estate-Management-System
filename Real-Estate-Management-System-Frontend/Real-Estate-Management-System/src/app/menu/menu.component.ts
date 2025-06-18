import { AuthService } from './../Services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../Entities/User';

@Component({
  selector: 'app-menu',
  imports: [CommonModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  activeMenu: string='';
  currentUser: User|null=null;
  
  constructor(private authService: AuthService, private router: Router){}
  
ngOnInit(): void {

  // Check if the user is present in BehaviorSubject (which loads from sessionStorage)
  /*
  if (!this.authService.isLoggedIn()) {
    this.router.navigate(['/log-in']);
    return;
  }
*/
  this.authService.getLoggedUser().subscribe({
    next: (res) => this.currentUser = res,
    error: (err) => {
      console.log(err);
      this.router.navigate(['/log-in']); // Redirect on error (e.g., token expired)
    }
  });
}

  
  toggleMenu(menuName: string){
    this.activeMenu = this.activeMenu === menuName ? '' : menuName;
  }
}
