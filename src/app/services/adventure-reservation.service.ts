import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdventureReservationDTO } from '../entity/DTO/AdventureReservationDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdventureReservationService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllReservations(username:string): Observable<AdventureReservationDTO[]>{
    
    console.log("vracamo sve rezervacije:");
    return this.http.get<AdventureReservationDTO[]>('http://localhost:8081/api/adventurereservation/all/instructor_username/'+username)
  }
}
