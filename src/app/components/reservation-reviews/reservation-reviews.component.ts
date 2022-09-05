import { Component, OnInit } from '@angular/core';
import { AnswerReservationReviewDTO } from 'src/app/entity/DTO/AnswerReservationReviewDTO';
import { ReservationReviewService } from 'src/app/services/reservation-review.service';

@Component({
  selector: 'app-reservation-reviews',
  templateUrl: './reservation-reviews.component.html',
  styleUrls: ['./reservation-reviews.component.css']
})
export class ReservationReviewsComponent implements OnInit {

  constructor(private reviewService : ReservationReviewService) { }

  reviews:  AnswerReservationReviewDTO[]=[];


  ngOnInit(): void {
    this.reviewService.getAll().subscribe((reviews) => (this.reviews = reviews))
    console.log(this.reviews);
  
  }}
