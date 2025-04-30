import { Injectable } from '@angular/core';
import { User } from '../Entities/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = 'http://localhost:8080/user-management';
  constructor(private http: HttpClient) { }
  userRoles: String[]=["ADMIN","AGENT"];

  public addUser(user: User): Observable<User>{
     return this.http.post<User>(`${this.apiServerUrl}/add-user`, user);
   }

  public getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/get-users`);
  }
  public deleteUser(userId: number):Observable<User>{
    return this.http.delete<User>(`${this.apiServerUrl}/delete-user/{id}/${userId}`);
  }
  public updateUser(oldUser: User, updatedUser: User ): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/update-user/{id}/${oldUser.id}`,updatedUser);
  }
}
