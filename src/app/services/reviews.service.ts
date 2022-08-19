import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApproveReviewDTO } from '../entity/DTO/ApproveReviewDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllReservationReviews(): Observable<ApproveReviewDTO[]>{
    return this.http.get<ApproveReviewDTO[]>('http://localhost:8081/api/review/all/unpublished/')
  }

  approve(id:number): Observable<boolean> {
      return this.apiService.put('http://localhost:8081/api/review/publish/'+id, id);
    }



}
