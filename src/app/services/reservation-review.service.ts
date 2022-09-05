import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerReservationReviewDTO } from '../entity/DTO/AnswerReservationReviewDTO';
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

  getAll(): Observable<AnswerReservationReviewDTO[]>{
    return this.apiService.get(this.baseUrl+"all");
  }

  penal(review:AnswerReservationReviewDTO): Observable<AnswerReservationReviewDTO[]>{
    return this.apiService.post(this.baseUrl+"penal", review);
  }
  delete(review:AnswerReservationReviewDTO): Observable<AnswerReservationReviewDTO[]>{
    return this.apiService.delete(this.baseUrl+"delete", review);
  }


}
