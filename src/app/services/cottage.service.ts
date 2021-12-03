import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cottage } from '../entity/Cottage';

@Injectable({
  providedIn: 'root'
})
export class CottageService {

  constructor(private http: HttpClient) { }

  getAllCottages(): Observable<Cottage[]>{
    return this.http.get<Cottage[]>('http://localhost:8080/channels');
  }

}
