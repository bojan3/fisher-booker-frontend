import { Component, Input, OnInit } from '@angular/core';
import { ApproveReviewDTO } from 'src/app/entity/DTO/ApproveReviewDTO';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  @Input()
  review !: ApproveReviewDTO;

  constructor(private reviewService : ReviewsService) { }

  ngOnInit(): void {

  }

  approve(id:any):void{
        
      this.reviewService.approve(id).subscribe();
     this.reviewService.getAllReservationReviews();
    }
    

    delete(id:any):void{
      console.log("delete review");

      console.log(id);
      this.reviewService.delete(id).subscribe();
     //this.reviewService.getAllReservationReviews();
    }


  }





