import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CottageDTO } from '../entity/CottageDTO';
import { ApiService } from './api.service';
import { Cottage } from '../entity/Cottage';
import { AddCottageDTO } from '../entity/DTO/AddCottageDTO';
import { AddSuperDealDTO } from '../entity/DTO/AddSupeDealDTO';
import { Option } from 'src/app/entity/Option';
import { DatePeriodDTO } from '../entity/DTO/DatePeriodDTO';
import { AddReservationDTO } from '../entity/DTO/AddReservationDTO';
import { windowTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CottageService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllCottages(): Observable<CottageDTO[]>{
    return this.http.get<CottageDTO[]>('http://localhost:8081/api/cottage/all/name');
  } 

  getById(id: string): Observable<Cottage>{
    return this.apiService.get('http://localhost:8081/api/cottage/page/'+id);
  }

  getAllCottagesByName(): Observable<Cottage[]>{
    return this.http.get<Cottage[]>('http://localhost:8081/api/cottage/all/name');
  }

  getAllCottagesByPrice(): Observable<Cottage[]>{
    return this.http.get<Cottage[]>('http://localhost:8081/api/cottage/all/price');
  }

  getAllCottagesByOwner(): Observable<CottageDTO[]>{
    return this.http.get<CottageDTO[]>('http://localhost:8081/api/cottageOwner/allCottagesByOwner');
  }

  getAllCottagesByRating(): Observable<Cottage[]>{
    return this.http.get<Cottage[]>('http://localhost:8081/api/cottage/all/rate');
  }

  saveCottage(cottage: Cottage): Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8081/api/cottage/save', cottage);
  }



  adeleteCottage(id: number): Observable<CottageDTO> {
    console.log("ADMIN");
    return this.apiService.delete('http://localhost:8081/api/cottage/admin/delete', id );
  }


  deleteCottage(id: number): Observable<CottageDTO> {
    return this.apiService.delete('http://localhost:8081/api/cottage/delete/owner/' + id);
  }

  getByDate(date: Date): Observable<CottageDTO[]>{
    console.log(date);
    return this.apiService.post('http://localhost:8081/api/cottage/all/date', JSON.stringify(date));
  }
}
