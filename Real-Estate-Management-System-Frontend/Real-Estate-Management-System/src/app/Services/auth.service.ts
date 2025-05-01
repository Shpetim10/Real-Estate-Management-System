import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  apiBaseUrl: string='http://localhost:8080/api'
  login(username: string, password: string): Observable<any> {
    const form = new FormData();
    form.append('username', username);
    form.append('password', password);
    return this.http.post(this.apiBaseUrl+'/login', form, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post(this.apiBaseUrl+'/logout', {}, { withCredentials: true });
  }

  getCurrentUser(): Observable<string> {
    return this.http.get(this.apiBaseUrl+'/api/me', { responseType: 'text', withCredentials: true });
  }
}
