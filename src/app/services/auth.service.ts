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
    private router: Router
    ) { }

  private access_token = null;

  login(user: any) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    // const body = `username=${user.username}&password=${user.password}`;
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

    console.log('User pre slanja: ',JSON.stringify(user));
    console.log(JSON.stringify(user.name));
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

    console.log("token => " + secureToken);

    console.log(JSON.stringify(secureToken));

    return this.http.post<boolean>('http://localhost:8081/api/verify/email', secureToken);
    // return this.http.get<boolean>('http://localhost:8081/api/verify/email/token');
    // return this.apiService.post("http://localhost:8081/api/verify/email", JSON.stringify(secureToken), headers);
    // return this.apiService.post("http://localhost:8081/api/registration/verify/"+token, headers);
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
  /*verify_email(secureToken: any): Observable<boolean> {
    //console.log("pogadja:  "+"http://localhost:8081/api/registration/verify/%22+token);

    console.log("saljem zahtev za verifikaciju backendu...")

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post<boolean>('http://localhost:8081/api/verify/email', secureToken);
  }*/

}
