import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdventureReservationDTO } from '../entity/DTO/AdventureReservationDTO';
import { CottageReservationDTO } from '../entity/DTO/CottageReservationDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CottageReservationService {
  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllReservations(username:string): Observable<CottageReservationDTO[]>{
    return this.http.get<CottageReservationDTO[]>('http://localhost:8081/api/cottagereservation/all/owner_username/'+username)
  }
}
