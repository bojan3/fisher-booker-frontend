import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddShipDTO } from '../entity/DTO/AddShipDTO';
import { ShipDTO } from '../entity/DTO/ShipDTO';
import { Ship } from '../entity/Ship';
import { ApiService } from './api.service';
import { Option } from 'src/app/entity/Option';
import { AddSuperDealDTO } from '../entity/DTO/AddSupeDealDTO';

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

  getAllShips(): Observable<ShipDTO[]>{
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/name')
  }


  deleteShip(id: number): Observable<ShipDTO[]> {
    return this.http.delete<ShipDTO[]>('http://localhost:8081/api/ship/delete{id}')
  }



  getAllShipsByName(): Observable<ShipDTO[]>{
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/name')
  }

    getAllShipsByPrice(): Observable<ShipDTO[]>{
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/price')
  }

    getAllShipsByRating(): Observable<ShipDTO[]>{
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/rating')
  }

  getAllShipsByCapacity(): Observable<ShipDTO[]>{
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/ship/all/capacity')
  }

  getAllShipsByOwner(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/shipOwner/allShipsByOwner');
  }

  checkShipOwnersip(id: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8081/api/ship/ownership/' + id);
  }

  createSuperDeal(deal: AddSuperDealDTO): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8081/api/cottageSuperDeal/add/', deal);
  }

  getOptions(id: number): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:8081/api/ship/options/' + id);
  }
}
