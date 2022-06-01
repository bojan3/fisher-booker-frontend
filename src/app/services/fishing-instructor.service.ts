import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FishingInstructor } from '../entity/FishingInstructor';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FishingInstructorService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllFishingInstructors(): Observable<FishingInstructor[]>{
    return this.http.get<FishingInstructor[]>('http://localhost:8081/api/instructor/all');
  }

  getAllFishingInstructorsOrderByName() : Observable<FishingInstructor[]>{
    return this.apiService.get('http://localhost:8081/api/instructor/all/byName');
  }
}
