import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReservationDetailsDTO } from 'src/app/entity/DTO/ReservationDetailsDTO';
import { ReservationReviewDTO } from 'src/app/entity/DTO/ReservationReviewDTO';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { ReservationReviewService } from 'src/app/services/reservation-review.service';
import { RealEstateType } from 'src/app/entity/RealEstateType';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  @Input()
  reservation!: ReservationDetailsDTO;
  @Input()
  type!: ReservationType;
  
  reviewPanelOpenState = false;
  reservationPanelOpenState = false;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private reservationReviewService: ReservationReviewService) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.type);
  }

  buildForm(){
    this.form = this.formBuilder.group({
      content: [''],
      badReview: false,
      didntAppear: false
    })
  }

  submit(){
    var newReview = new ReservationReviewDTO(this.form.value.content,
       this.form.value.badReview, this.form.value.didntAppear, this.type, this.reservation.id);
       this.reservationReviewService.create(newReview).subscribe((res) => {
        console.log(res);
       });
  }

  isCurrent() {
    var today = new Date();
    return new Date(this.reservation.startDate) <= today && new Date(this.reservation.endDate) >= today; 
  }

}
