import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../entity/Client';
import { ApiService } from './api.service';
import { CottageDTO } from '../entity/DTO/CottageDTO';
import { ShipDTO } from '../entity/DTO/ShipDTO';
import { FishingInstructor } from '../entity/FishingInstructor';
import { AdventureReservationDTO } from '../entity/DTO/AdventureReservationDTO';
import { CottageReservationDTO } from '../entity/DTO/CottageReservationDTO';
import { ShipReservationDTO } from '../entity/DTO/ShipReservationDTO';
import { CreateSuperDealReservation } from '../entity/DTO/CreateSuperDealReservation';
import { AddReservationDTO } from '../entity/DTO/AddReservationDTO';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllClients(): Observable<Client[]>{

    return this.http.get<Client[]>('http://localhost:8080/api/client/all');
    
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

    getCottageSubscriptions(accountId: number): Observable<CottageDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/subscriptions/cottage/' + accountId);
    }

    getInstructorSubscriptions(accountId: number): Observable<FishingInstructor[]>{
      return this.apiService.get('http://localhost:8081/api/client/subscriptions/instructor/' + accountId);
    }

    getShipSubscriptions(accountId: number): Observable<ShipDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/subscriptions/ship/' + accountId);
    }

    unsubscribeCottage(cottageId: number, accountId: number){
      return this.apiService.put('http://localhost:8081/api/client/unsubscribe/cottage/' + cottageId, JSON.stringify(accountId));
    }

    unsubscribeInstructor(instructorId: number, accountId: number){
      return this.apiService.put('http://localhost:8081/api/client/unsubscribe/instructor/' + instructorId, JSON.stringify(accountId));
    }

    unsubscribeShip(shipId: number, accountId: number){
      return this.apiService.put('http://localhost:8081/api/client/unsubscribe/ship/' + shipId, JSON.stringify(accountId));
    }

    getAdventureReservations(accountId: number): Observable<AdventureReservationDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/reservation/adventure/' + accountId);
    }

    getFinishedAdventureReservations(accountId: number): Observable<AdventureReservationDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/finishedreservation/adventure/' + accountId);
    }

    getShipReservations(accountId: number): Observable<ShipReservationDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/reservation/ship/' + accountId);
    }

    getFinishedShipReservations(accountId: number): Observable<ShipReservationDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/finishedreservation/ship/' + accountId);
    }

    getCottageReservations(accountId: number): Observable<CottageReservationDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/reservation/cottage/' + accountId);
    }

    getFinishedCottageReservations(accountId: number): Observable<CottageReservationDTO[]>{
      return this.apiService.get('http://localhost:8081/api/client/finishedreservation/cottage/' + accountId);
    }

    deleteCottageReservation(accountId: number, cottageReservationId: number){
      return this.apiService.delete('http://localhost:8081/api/client/reservation/cottage/delete/' + accountId, JSON.stringify(cottageReservationId));
    }

    deleteShipReservation(accountId: number, shipReservationId: number){
      return this.apiService.delete('http://localhost:8081/api/client/reservation/ship/delete/' + accountId, JSON.stringify(shipReservationId));
    }

    deleteAdventureReservation(accountId: number, adventureReservationId: number){
      return this.apiService.delete('http://localhost:8081/api/client/reservation/adventure/delete/' + accountId, JSON.stringify(adventureReservationId));
    }

    createCottageComplaint(cottageId: number, accountId: number, text: string){
      return this.apiService.put('http://localhost:8081/api/client/cottagecomplaint/' + cottageId + '/' + accountId, JSON.stringify(text));
    }

    createInstructorComplaint(adventureId: number, accountId: number, text: string){
      return this.apiService.put('http://localhost:8081/api/client/instructorcomplaint/' + adventureId + '/' + accountId, JSON.stringify(text));
    }

    createShipComplaint(shipId: number, accountId: number, text: string){
      return this.apiService.put('http://localhost:8081/api/client/shipcomplaint/' + shipId + '/' + accountId, JSON.stringify(text));
    }

    postCottageReview(review: any){
      return this.apiService.post('http://localhost:8081/api/review/cottage/save', JSON.stringify(review))
    }

    postShipReview(review: any){
      return this.apiService.post('http://localhost:8081/api/review/ship/save', JSON.stringify(review))
    }

    postAdventureReview(review: any){
      return this.apiService.post('http://localhost:8081/api/review/adventure/save', JSON.stringify(review))
    }

    createCottageSuperDealRes(clientId: number, superDealId : number){
      const superDealReservation = new CreateSuperDealReservation(clientId, superDealId);
      return this.apiService.post('http://localhost:8081/api/client/cottage/superdeal/reservation', JSON.stringify(superDealReservation));
    }

    createReservation(reservation: AddReservationDTO): Observable<boolean>{
      return this.apiService.post('http://localhost:8081/api/reservation/createByClient', JSON.stringify(reservation));
    }
}






