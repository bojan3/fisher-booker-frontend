import { Component, Input, OnInit } from '@angular/core';
import { AnswerReservationReviewDTO } from 'src/app/entity/DTO/AnswerReservationReviewDTO';
import { ReservationReviewService } from 'src/app/services/reservation-review.service';

@Component({
  selector: 'app-reservation-review',
  templateUrl: './reservation-review.component.html',
  styleUrls: ['./reservation-review.component.css']
})
export class ReservationReviewComponent implements OnInit {

  @Input()
  review !: AnswerReservationReviewDTO;

  constructor( private reservationReviewService : ReservationReviewService) { }

  ngOnInit(): void {
    
  }

 penal(review:any):void{
  this.reservationReviewService.penal(review).subscribe();
  window.location.reload()
 }

delete(review:any):void{
  this.reservationReviewService.delete(review).subscribe();
  window.location.reload()
}


}
