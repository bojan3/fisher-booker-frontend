import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipOwner } from '../entity/ShipOwner';
import { ApiService } from './api.service';
import { ReservationDetailsDTO } from '../entity/DTO/ReservationDetailsDTO';


@Injectable({
  providedIn: 'root'
})
export class ShipOwnerService {

  deletePath = 'http://localhost:8081/api/shipOwner/delete'
  getOnePath = 'http://localhost:8081/api/ship'
  
  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllShipOwners(): Observable<ShipOwner[]>{
    console.log("//////////");
    return this.http.get<ShipOwner[]>('http://localhost:8081/api/shipOwner/all');
  }

  delete(id: number): Observable<boolean>{
    return this.apiService.delete(this.deletePath, id);
  }

  details(id : number): Observable<ShipOwner[]>{
      return this.apiService.get(this.getOnePath, id);
  }

  getReservationsByOwner(numPage: number): Observable<ReservationDetailsDTO[]> {
    return this.apiService.get('http://localhost:8081/api/shipOwner/reservations/' + numPage);
  }

  getNumOfReservations(): Observable<number> {
    return this.apiService.get('http://localhost:8081/api/shipOwner/reservationNum');
  }

}
