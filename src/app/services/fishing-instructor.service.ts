import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
