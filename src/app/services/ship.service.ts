import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipDTO } from '../entity/DTO/ShipDTO';
import { Ship } from '../entity/Ship';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all')
  }


  deleteShip(id: number): Observable<ShipDTO[]> {
    return this.apiService.delete('http://localhost:8081/api/ship/delete/owner/' + id);
  }

  getAllShipsByName(): Observable<Ship[]> {
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/name')
  }

  getAllShipsByPrice(): Observable<Ship[]> {
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/price')
  }

  getAllShipsByRating(): Observable<Ship[]> {
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/rating')
  }

  getAllShipsByCapacity(): Observable<Ship[]> {
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/capacity')
  }

  getAllShipsByOwner(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/shipOwner/allShipsByOwner');
  }
  
}
