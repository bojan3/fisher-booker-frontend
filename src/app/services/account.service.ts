import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  basePath = 'http://localhost:8081/api/registration/whoami'
  currentUser: any;

  constructor(
    private apiService: ApiService,
    //private config: ConfigService
  ) {
  }

  getMyInfo() {
    return this.apiService.get(this.basePath)
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }

  /*getAll() {
    return this.apiService.get(this.config.users_url);
  }*/

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
