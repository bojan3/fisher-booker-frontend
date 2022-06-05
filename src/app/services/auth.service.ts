import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from './account.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private accountService: AccountService,
    private http: HttpClient,
    //private config: ConfigService,
    private router: Router
  ) { }

  private access_token = null;

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
        this.access_token = res.body.accessToken;
        console.log(this.access_token);
        localStorage.setItem("jwt", res.body.accessToken);
      }));
  }

  signup(user: any) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post("http://localhost:8081/auth/signup", JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
    this.accountService.currentUser = null;
    this.access_token = null;
    this.router.navigate(['/logIn']);
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }
  verify_email(secureToken: any): Observable<boolean> {
    //console.log("pogadja:  "+"http://localhost:8081/api/registration/verify/%22+token);

    console.log("saljem zahtev za verifikaciju backendu...")

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post<boolean>('http://localhost:8081/api/verify/email', secureToken);
  }

}
