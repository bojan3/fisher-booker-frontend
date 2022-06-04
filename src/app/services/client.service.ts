import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../entity/Client';
import { ApiService } from './api.service';
import { CottageDTO } from '../entity/DTO/CottageDTO';
import { FishingInstructor } from '../entity/FishingInstructor';
import { Ship } from '../entity/Ship';
import { ShipDTO } from '../entity/DTO/ShipDTO';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllClients(): Observable<Client[]>{

    return this.http.get<Client[]>('http://localhost:8081/api/client/all');
  }

  subscribeToCottage(cottageId: number, accountId: number){
    console.log(JSON.stringify(accountId));
    return this.apiService.put('http://localhost:8081/api/client/subscribe/cottage/' + cottageId, JSON.stringify(accountId));
  }

  subscribeToShip(shipId: number, accountId: number){
    console.log(JSON.stringify(accountId));
    return this.apiService.put('http://localhost:8081/api/client/subscribe/ship/' + shipId, JSON.stringify(accountId));
  }

  subscribeToInstructor(instructorId: number, accountId: number){
    console.log(JSON.stringify(accountId));
    return this.apiService.put('http://localhost:8081/api/client/subscribe/instructor/' + instructorId, JSON.stringify(accountId));
  }

  // getByAccountId(accountId: number): Observable<Client>{
  //   return this.apiService.get('http://localhost:8081/api/client/' + accountId);
  // }

    getCottageSubscriptions(accountId: number): Observable<CottageDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/subscriptions/cottage/' + accountId);
    }

    getInstructorSubscriptions(accountId: number): Observable<FishingInstructor[]>{
      return this.apiService.get('http://localhost:8081/api/client/subscriptions/instructor/' + accountId);
    }

    getShipSubscriptions(accountId: number): Observable<ShipDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/subscriptions/ship/' + accountId);
    }

}






