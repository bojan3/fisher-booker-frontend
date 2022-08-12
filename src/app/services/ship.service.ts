import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddShipDTO } from '../entity/DTO/AddShipDTO';
import { ShipDTO } from '../entity/DTO/ShipDTO';
import { Ship } from '../entity/Ship';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  save(ship: AddShipDTO): Observable<boolean>{
    console.log(ship);
    return this.apiService.post('http://localhost:8081/api/ship/save', ship);
  }

  getById(id: string): Observable<Ship> {
    return this.apiService.get('http://localhost:8081/api/ship/page/' + id);
  }

  getAllShips(type ?: string, order?: string): Observable<ShipDTO[]>{
    if(type && order)
      return this.apiService.get('http://localhost:8081/api/ship/all/', {type: type, order: order});
    return this.apiService.get('http://localhost:8081/api/ship/all');
  }

  deleteShip(id: number): Observable<ShipDTO[]> {
    return this.http.delete<ShipDTO[]>('http://localhost:8081/api/ship/delete{id}')
  }

  getAllShipsByOwner(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/shipOwner/allShipsByOwner');
  }
}
