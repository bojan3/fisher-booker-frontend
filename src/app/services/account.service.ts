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

}
