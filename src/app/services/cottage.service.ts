import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CottageDTO } from '../entity/CottageDTO';
import { ApiService } from './api.service';
import { Cottage } from '../entity/Cottage';

@Injectable({
  providedIn: 'root'
})
export class CottageService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllCottages(): Observable<CottageDTO[]>{
    return this.http.get<CottageDTO[]>('http://localhost:8081/api/cottage/all');
  } 

  getById(id: string): Observable<Cottage>{
    return this.apiService.get('http://localhost:8081/api/cottage/page/'+id);
  }

}
