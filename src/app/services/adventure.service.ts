import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adventure } from '../entity/Adventure';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {

  constructor(private http: HttpClient) { }

  getAllAdventures(): Observable<Adventure[]>{
    return this.http.get<Adventure[]>('http://localhost:8081/api/adventure/all');
  }

}
