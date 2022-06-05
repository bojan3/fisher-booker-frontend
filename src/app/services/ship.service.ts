import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../entity/Ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient) { }

  getAllShips(): Observable<Ship[]>{
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/name')
  }


 deleteShip(id:number): Observable<Ship[]>{
    return this.http.delete<Ship[]>('http://localhost:8081/api/ship/delete{id}')
 }



  getAllShipsByName(): Observable<Ship[]>{
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/name')
  }

    getAllShipsByPrice(): Observable<Ship[]>{
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/price')
  }

    getAllShipsByRating(): Observable<Ship[]>{
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/rating')
  }

  getAllShipsByCapacity(): Observable<Ship[]>{
    return this.http.get<Ship[]>('http://localhost:8081/api/ship/all/capacity')
  }
}
