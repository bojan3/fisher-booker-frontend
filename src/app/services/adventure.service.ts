import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';


import { AdventureDTO } from 'src/app/entity/AdventureDTO';
import { Adventure } from '../entity/Adventure';
@Injectable({
  providedIn: 'root'
})
export class AdventureService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllAdventures(): Observable<AdventureDTO[]>{
    return this.http.get<AdventureDTO[]>('http://localhost:8081/api/adventure/all');
  }

  getById(id: string): Observable<Adventure>{
    return this.apiService.get('http://localhost:8081/api/cottage/page/'+id);
  // getAllCottages(): Observable<Cottage[]>{
  //   return this.http.get<Cottage[]>('http://localhost:8081/api/cottage/all');
  // }
  }
  getAllAdventuresByName(): Observable<Adventure[]>{
    return this.http.get<Adventure[]>('http://localhost:8081/api/cottage/all/name');
  }
  getAllAdventuresByPrice(): Observable<Adventure[]>{
    return this.http.get<Adventure[]>('http://localhost:8081/api/cottage/all/price');
  }

  getAllAdventuresByOwner(): Observable<AdventureDTO[]>{
    return this.http.get<AdventureDTO[]>('http://localhost:8081/api/instructor/allAdventuresByOwner');
  } 

  getAllAdventuresByRating(): Observable<Adventure[]>{
    return this.http.get<Adventure[]>('http://localhost:8081/api/cottage/all/rate');
  }

  saveAdventure(adventure: Adventure): Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8081/api/cottage/save', adventure);
  }
  

}
