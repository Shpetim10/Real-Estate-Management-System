import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuComponent } from '../menu/menu.component';
import { User } from '../Entities/User';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { UserProfile } from '../Entities/auth.models';
@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent,MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  currentUser: UserProfile | null = null;
  resourceData: any = null;
  loading = false;
  error = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.fetchProtectedResource();
  }

  fetchProtectedResource(): void {
    this.loading = true;
    this.http.get('http://localhost:8080/api/resources/user')
      .subscribe({
        next: (data) => {
          this.resourceData = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error fetching resource data';
          this.loading = false;
        }
      });
  }

  logout(): void {
    this.authService.logout();
  }
}
