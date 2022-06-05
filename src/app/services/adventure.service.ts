import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adventure } from '../entity/Adventure';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {

  constructor(private http: HttpClient, private apiService : ApiService) { }

  getAllAdventures(): Observable<Adventure[]>{
    return this.apiService.get('http://localhost:8081/api/adventure/all%27');
  }

  getAllAdventuresByInstructor(instructorId : number): Observable<Adventure[]>{
    return this.apiService.get('http://localhost:8081/api/adventure/all/instructor/' + instructorId);
  }

  getAllAdventuresByInstructorOrderByName(instructorId : number): Observable<Adventure[]>{
    return this.apiService.get('http://localhost:8081/api/adventure/all/instructor/' + instructorId + '/orderByName');
  }
  

}
