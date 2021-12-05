import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipOwner } from '../entity/ShipOwner';


@Injectable({
  providedIn: 'root'
})
export class ShipOwnerService {

  constructor(private http: HttpClient) { }

  getAllShipOwners(): Observable<ShipOwner[]>{
    return this.http.get<ShipOwner[]>('http://localhost:8081/api/shipOwner/all');
  }
}
