import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Entities/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl='http://localhost:8080/user-management';
  
  constructor(private http: HttpClient) { }
  
  roles: string[]=[
    'ADMIN',
    'AGENT'
  ];
  
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/add-user`, user);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/get-users`);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete-user/${userId}`);
  }

  public updateUser(oldUser: User, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/update-user/${oldUser.id}`, updatedUser);
  }

}
