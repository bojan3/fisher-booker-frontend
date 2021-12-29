import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CottageOwner } from '../entity/CottageOwner';

@Injectable({
  providedIn: 'root'
})
export class CottageOwnerService {

  constructor(private http: HttpClient) { }

  getAllCottageOwners(): Observable<CottageOwner[]>{
    return this.http.get<CottageOwner[]>('http://localhost:8081/api/cottageOwner/all');
  }
}
