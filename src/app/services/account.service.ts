import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Account } from '../entity/Account';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AccountService {

  basePath = 'http://localhost:8081/api/registration/whoami'

  unverifiedPath = 'http://localhost:8081/api/account/unverified'

  verifyPath = 'http://localhost:8081/api/account/verify/'

  deletePath = 'http://localhost:8081/api/account/delete/'

  newAdminPath = 'http://localhost:8081/api/account/newAdmin'

  currentUser: any;

  constructor(
    private apiService: ApiService,
    //private config: ConfigService
    private http: HttpClient) { }

  getMyInfo(): Observable<any> {
    
    return this.apiService.get(this.basePath)
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }
  /*
    getAll() {
      return this.apiService.get(this.config.users_url);
    }*/

  getAllUnverified(): Observable<Account[]> {
    return this.apiService.get(this.unverifiedPath);
  }

  verify(id: number): Observable<boolean> {
    return this.apiService.put(this.verifyPath, id);
  }

  delete(id: number): Observable<boolean> {
    return this.apiService.delete(this.deletePath, id);
  }

  newAdmin(account: Account): Observable<boolean> {
    console.log(account);
    return this.apiService.post(this.newAdminPath, account);
  }

  updateAccount(account: any) {
    console.log("updating account...");
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post("http://localhost:8081/api/account/update", JSON.stringify(account), headers);
  }

  sendDeleteAccountRequest(text: string) {
    return this.apiService.post("http://localhost:8081/api/account/deleteAccountRequest", JSON.stringify(text));
  }

}
