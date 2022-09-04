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
  

  constructor(private http: HttpClient, private apiService:ApiService) { }

  save(ship: Ship): Observable<boolean>{
    console.log(ship);
    
    return this.apiService.post('http://localhost:8081/api/ship/save', ship);
  }

  getById(id: string): Observable<Ship> {
    return this.apiService.get('http://localhost:8081/api/ship/page/' + id);
  }

  getAllShips(): Observable<ShipDTO[]> {
    return this.apiService.get('http://localhost:8081/api/ship/all');
  }

 deleteShip(id:number): Observable<Ship[]>{
    return this.http.delete<Ship[]>('http://localhost:8081/api/ship/delete{id}')   
 }

  getAllShipsByName(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/name')
  adeleteShip(id: number): Observable<ShipDTO>{
    return this.apiService.delete('http://localhost:8081/api/ship/admin/delete',id);
  }

  getAllShipsByOwner(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/shipOwner/allShipsByOwner');
  }

  getAllShipsByPrice(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/price')
  }

  getAllShipsByRating(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/rating')
  }

  getAllShipsByCapacity(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/capacity')
  }
}
