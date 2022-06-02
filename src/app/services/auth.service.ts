import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from './account.service';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenName: string = "jwt";

  constructor(
    private apiService: ApiService,
    private accountService: AccountService,
    //private config: ConfigService,
    private router: Router,
    private http: HttpClient
  ) { }

  login(user: any) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = {
      'username': user.username,
      'password': user.password
    };
    console.log(body);

    return this.apiService.post("http://localhost:8081/auth/login", JSON.stringify(body), loginHeaders)
      .pipe(map((res) => {
        console.log('Login success');
        localStorage.setItem(this.tokenName, res.body.accessToken);
      }));
  }

  signup(user: any) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    console.log('User pre slanja: ', JSON.stringify(user));

    return this.apiService.post("http://localhost:8081/auth/signup", JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  verify_email(secureToken: any): Observable<boolean> {
    //console.log("pogadja:  "+"http://localhost:8081/api/registration/verify/"+token);

    console.log("saljem zahtev za verifikaciju backendu...")

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post<boolean>('http://localhost:8081/api/verify/email', secureToken);
  }

  logout() {
    this.accountService.currentUser = null;
    localStorage.removeItem(this.tokenName);
    this.router.navigate(['/logIn']);
  }

  tokenIsPresent() {
    var token = localStorage.getItem(this.tokenName);
    return token != undefined && token != null;
  }

  getToken() {
    return localStorage.getItem(this.tokenName)
  }
}
