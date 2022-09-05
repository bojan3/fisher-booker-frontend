import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationDetailsDTO } from '../entity/DTO/ReservationDetailsDTO';
import { FishingInstructor } from '../entity/FishingInstructor';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FishingInstructorService {
  
viewAllPath = 'http://localhost:8081/api/instructor/all'

deletePath = 'http://localhost:8081/api/instructor/delete/'

getOnePath = 'http://localhost:8081/api/instructor/'


  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllFishingInstructors(): Observable<FishingInstructor[]>{
    return this.apiService.get(this.viewAllPath);
  }

  delete(id: number): Observable<boolean>{
    return this.apiService.delete(this.deletePath, id);
  }

  details(id : number): Observable<FishingInstructor[]>{
      return this.apiService.get(this.getOnePath, id);
  }

  getAllFishingInstructorsOrderByName() : Observable<FishingInstructor[]>{
    return this.apiService.get('http://localhost:8081/api/instructor/all/byName');
  }

  getReservationsByOwner(numPage: number): Observable<ReservationDetailsDTO[]> {
    console.log("sve rezervacije instruktora!");
    return this.apiService.get('http://localhost:8081/api/instructor/reservations/' + numPage);
  }

  getNumOfReservations(): Observable<number> {
    console.log("broj rezervacija instruktora!");
    return this.apiService.get('http://localhost:8081/api/instructor/reservationNum');
  }







}
