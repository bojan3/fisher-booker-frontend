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

    verify(id:number, answer:string): Observable<Boolean>{
      console.log('prihvatanje zahteva sa id:'+id);
    return  this.http.delete<Boolean>('http://localhost:8081/api/account/accepteddeleteAccountRequest/'+id+"/"+answer);
    }
    delete(id:number, answer:string): Observable<Boolean>{
      console.log('brisanje zahteva sa id:'+id);
     // window.location.reload();
     return this.http.delete<Boolean>('http://localhost:8081/api/account/denieddeleteAccountRequest/'+id+"/"+answer);
    }

}
