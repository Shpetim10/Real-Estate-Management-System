// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtResponse, LoginRequest, SignupRequest, UserProfile } from '../Entities/auth.models';
import { Router } from '@angular/router';
const AUTH_API = 'http://localhost:8080/api/auth/';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserProfile | null>;
  public currentUser: Observable<UserProfile | null>;
  
  constructor(private http: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<UserProfile | null>(this.getUserFromStorage());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(loginRequest: LoginRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(AUTH_API + 'login', loginRequest)
      .pipe(
        tap(response => {
          this.storeToken(response.token);
          this.storeUser({ username: loginRequest.username });
          this.currentUserSubject.next({ username: loginRequest.username });
        })
      );
  }

  register(signupRequest: SignupRequest): Observable<any> {
    return this.http.post(AUTH_API + 'signup', signupRequest);
  }

  logout(): void {
    window.sessionStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/log-in');
  }

  public get currentUserValue(): UserProfile | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  private storeToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  private storeUser(user: UserProfile): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromStorage(): UserProfile | null {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
}