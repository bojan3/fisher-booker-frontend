import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  incomepath='http://localhost:8081/api/admin/income'
  newincomepath='http://localhost:8081/api/admin/income/new'


  constructor(
    private apiService: ApiService,
    //private config: ConfigService
    private http: HttpClient) { }

     

 getCurrentIncome() :Observable<string>{    
  console.log("ulazimo u kontroler");
   return this.apiService.get(this.incomepath);
  }

  setNewIncome(value:string): Observable<string>{
    console.log("ulazimo u kontroler");
    console.log("Nova vrednost procenta:"+value);    
    return this.apiService.post(this.newincomepath,{"income":value}.income);
  }
  

}
