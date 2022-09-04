import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/entity/Account';
import { ApproveReviewDTO } from 'src/app/entity/DTO/ApproveReviewDTO';
import { AccountService } from 'src/app/services/account.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private reviewService : ReviewsService) { }

  reviews: ApproveReviewDTO[]=[];


  ngOnInit(): void {
    this.reviewService.getAllReservationReviews().subscribe((reviews) => (this.reviews = reviews))
    console.log(this.reviews);
  
  }}
