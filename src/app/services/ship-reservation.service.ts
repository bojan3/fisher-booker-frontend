import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipReservationDTO } from '../entity/DTO/ShipReservationDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShipReservationService {
  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllReservations(username:string): Observable<ShipReservationDTO[]>{
    return this.http.get<ShipReservationDTO[]>('http://localhost:8081/api/shipreservation/all/owner_username/'+username)
  }
}
