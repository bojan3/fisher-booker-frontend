import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adventure } from '../entity/Adventure';
import { ApiService } from './api.service';

import { AdventureDTO } from 'src/app/entity/AdventureDTO';
@Injectable({
  providedIn: 'root'
})
export class AdventureService {

  constructor(private http: HttpClient, private apiService : ApiService) { }

  getAllAdventuresByInstructor(instructorId : number): Observable<AdventureDTO[]>{
    return this.apiService.get('http://localhost:8081/api/adventure/all/instructor/' + instructorId);
  }

  getAllAdventuresByInstructorOrderByName(instructorId : number): Observable<AdventureDTO[]>{
    return this.apiService.get('http://localhost:8081/api/adventure/all/instructor/' + instructorId + '/orderByName');
  }
  //constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllAdventures(type ?: string, order?: string): Observable<AdventureDTO[]>{
    if(type && order)
      return this.apiService.get('http://localhost:8081/api/adventure/all/', {type: type, order: order});
    return this.apiService.get('http://localhost:8081/api/adventure/all');
  }

  getById(id: string): Observable<AdventureDTO>{
    return this.apiService.get('http://localhost:8081/api/cottage/page/'+id);
  // getAllCottages(): Observable<Cottage[]>{
  //   return this.http.get<Cottage[]>('http://localhost:8081/api/cottage/all');
  // }
  }
  getAllAdventuresByName(): Observable<AdventureDTO[]>{
    return this.http.get<AdventureDTO[]>('http://localhost:8081/api/cottage/all/name');
  }
  getAllAdventuresByPrice(): Observable<AdventureDTO[]>{
    return this.http.get<AdventureDTO[]>('http://localhost:8081/api/cottage/all/price');
  }

  getAllAdventuresByOwner(): Observable<AdventureDTO[]>{
    return this.http.get<AdventureDTO[]>('http://localhost:8081/api/instructor/allAdventuresByOwner');
  } 

  getAllAdventuresByRating(): Observable<AdventureDTO[]>{
    return this.http.get<AdventureDTO[]>('http://localhost:8081/api/cottage/all/rate');
  }

  saveAdventure(adventure: AdventureDTO): Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8081/api/cottage/save', adventure);
  }
  

}
