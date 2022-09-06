import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Complaint } from '../entity/Complaint';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class ComplaintService {

  constructor(private http: HttpClient, private apiService: ApiService) { }


  respond(complaint: Complaint): Observable<Boolean>{
     return this.apiService.post('http://localhost:8081/api/complaint/answer',JSON.stringify(complaint))
  }


  getAllUnanswered(): Observable<Complaint[]>{
    return this.http.get<Complaint[]>('http://localhost:8081/api/complaint/unanswered')
  }

}
