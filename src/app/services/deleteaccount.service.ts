import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DeleteAccount } from '../entity/DeleteAccount';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteaccountService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAll(): Observable<DeleteAccount[]>{
    return this.http.get<DeleteAccount[]>('http://localhost:8081/api/account/allDeleteRequests');
  }

    verify(id:number): void{
      this.http.delete('http://localhost:8081/api/account/accepteddeleteAccountRequest/'+id);
    }
    delete(id:number): void{
      this.http.delete('http://localhost:8081/api/account/deniddeleteaccount/'+id);
    }
}
