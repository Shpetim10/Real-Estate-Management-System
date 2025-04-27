import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  activeMenu: string='';
  
  toggleMenu(menuName: string){
    this.activeMenu = this.activeMenu === menuName ? '' : menuName;
  }
}
