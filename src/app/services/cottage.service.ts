import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CottageService {

  constructor(private http: HttpClient) { }

  getAllCottages(): Observable<CottageBasic[]>{
    return this.http.get<CottageBasic[]>('http://localhost:8080/channels');
  }

}
