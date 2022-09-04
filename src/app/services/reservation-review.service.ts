import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationReviewDTO } from '../entity/DTO/ReservationReviewDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationReviewService {

  baseUrl: string = "http://localhost:8081/api/reservationReview/"

  constructor(private apiService: ApiService) { }

  create(review: ReservationReviewDTO): Observable<boolean> {
    return this.apiService.post(this.baseUrl + 'create', review);
  }

}
