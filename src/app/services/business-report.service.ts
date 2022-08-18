import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, single, tap } from 'rxjs/operators';
import { TwoStringsDTO } from '../entity/DTO/TwoStringsDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessReportService {
   response!:Response
   totalincome ='http://localhost:8081/api/admin/interval_income';
   totalreservations ='http://localhost:8081/api/admin/interval_total';
   typeincome ='http://localhost:8081/api/admin/interval_income/';
   typereservations ='http://localhost:8081/api/admin/interval_total/';


  constructor(private http: HttpClient, private apiService: ApiService) { }

  GetIncome(data:TwoStringsDTO):Observable<Response>{
    console.log(data)
    return this.apiService.post(this.totalincome,data).pipe(map((user: Response) => {
      this.response = user;
      return user;
    }));;
  }

  GetShipIncome(data:TwoStringsDTO):Observable<Response>{
    console.log(data)
    return this.apiService.post(this.typeincome+"SHP",data).pipe(map((user: Response) => {
      this.response = user;
      return user;
    }));;
  }

  GetAdventureIncome(data:TwoStringsDTO):Observable<Response>{
    console.log(data)
    return this.apiService.post(this.typeincome+"ADV",data).pipe(map((user: Response) => {
      this.response = user;
      return user;
    }));;
  }

  GetCottageIncome(data:TwoStringsDTO):Observable<Response>{
    console.log(data)
    return this.apiService.post(this.typeincome+"CTG",data).pipe(map((user: Response) => {
      this.response = user;
      return user;
    }));;
  }

  CountTotalReservations(data:TwoStringsDTO):Observable<Response>{
    console.log(data)
    return this.apiService.post(this.totalreservations,data).pipe(map((user: Response) => {
      this.response = user;
      return user;
    }));;
  }

  CountAdventureReservations(data:TwoStringsDTO):Observable<Response>{
    console.log(data)
    return this.apiService.post(this.typereservations+"ADV",data).pipe(map((user: Response) => {
      this.response = user;
      return user;
    }));;
  }

  CountShipReservations(data:TwoStringsDTO):Observable<Response>{
    console.log(data)
    return this.apiService.post(this.typereservations+"SHP",data).pipe(map((user: Response) => {
      this.response = user;
      return user;
    }));;
  }

  CountCottageReservations(data:TwoStringsDTO):Observable<Response>{
    console.log(data)
    return this.apiService.post(this.typereservations+"CTG",data).pipe(map((user: Response) => {
      this.response = user;
      return user;
    }));;
  }

}
