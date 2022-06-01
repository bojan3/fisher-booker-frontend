import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FishingInstructor } from '../entity/FishingInstructor';

@Injectable({
  providedIn: 'root'
})
export class FishingInstructorService {

  constructor(private http: HttpClient) { }

  getAllFishingInstructors(): Observable<FishingInstructor[]>{
    return this.http.get<FishingInstructor[]>('http://localhost:8081/api/instructor/all');
  }
}
