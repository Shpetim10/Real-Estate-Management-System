import { AuthService } from './../Services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
      this.authService.getLoggedUser().subscribe({
        next: (res)=> this.currentUser=res,
        error: (err)=> console.log(err)
      });
  }
  
  toggleMenu(menuName: string){
    this.activeMenu = this.activeMenu === menuName ? '' : menuName;
  }
}
