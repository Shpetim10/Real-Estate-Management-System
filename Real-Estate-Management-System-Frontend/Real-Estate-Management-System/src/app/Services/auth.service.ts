import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtResponse, LoginRequest, SignupRequest, UserProfile } from '../Entities/auth.models';
import { Router } from '@angular/router';
import { User } from '../Entities/User';

const AUTH_API = 'http://localhost:8080/api/auth/';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserProfile | null>;
  public currentUser: Observable<UserProfile | null>;
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Check if running in the browser
    this.currentUserSubject = new BehaviorSubject<UserProfile | null>(this.getUserFromStorage());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(loginRequest: LoginRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(AUTH_API + 'login', loginRequest).pipe(
      tap(response => {
        if (this.isBrowser) {
          this.storeToken(response.token);
          this.storeUser({ username: loginRequest.username });
        }
        this.currentUserSubject.next({ username: loginRequest.username });
      })
    );
  }

  register(signupRequest: SignupRequest): Observable<any> {
    return this.http.post(AUTH_API + 'signup', signupRequest);
  }

  logout(): void {
    if (this.isBrowser) {
      window.sessionStorage.clear();
    }
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/log-in');
  }

  public get currentUserValue(): UserProfile | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.isBrowser && !!this.getToken();
  }

  getToken(): string | null {
    if (this.isBrowser) {
      return window.sessionStorage.getItem(TOKEN_KEY);
    }
    return null;
  }

  private storeToken(token: string): void {
    if (this.isBrowser) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
  }

  private storeUser(user: UserProfile): void {
    if (this.isBrowser) {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  }

  private getUserFromStorage(): UserProfile | null {
    if (this.isBrowser) {
      const user = window.sessionStorage.getItem(USER_KEY);
      if (user) {
        return JSON.parse(user);
      }
    }
    return null;
  }

  getLoggedUser() {
    return this.http.get<User>(AUTH_API + 'me/' + this.getUserFromStorage()?.username);
  }
}