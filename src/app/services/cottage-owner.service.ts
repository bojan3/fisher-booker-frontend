import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CottageOwner } from '../entity/CottageOwner';
import { ReservationDetailsDTO } from '../entity/DTO/ReservationDetailsDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CottageOwnerService {

  deletePath = 'http://localhost:8081/api/cottageOwner/delete/'

  deletePath1 = 'http://localhost:8081/api/account/delete'

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllCottageOwners(): Observable<CottageOwner[]> {
    return this.http.get<CottageOwner[]>('http://localhost:8081/api/cottageOwner/all');
  }

  delete(id: number): Observable<boolean> {
    return this.apiService.delete(this.deletePath, id);
  }

  delete1(id: number): Observable<boolean> {
    return this.apiService.delete(this.deletePath1, id);
  }

  getReservationsByOwner(): Observable<ReservationDetailsDTO[]> {
    return this.apiService.get('http://localhost:8081/api/cottageOwner/reservations');
  }

}
