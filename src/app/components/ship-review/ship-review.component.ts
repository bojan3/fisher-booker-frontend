import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-ship-review',
  templateUrl: './ship-review.component.html',
  styleUrls: ['./ship-review.component.css']
})
export class ShipReviewComponent implements OnInit {

  shipId!: number;
  reviewForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.shipId = param.shipId;
    });

    this.reviewForm = this.formBuilder.group({
      comment: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(300)])],
      grade: [],
      reviewEntityId: [this.shipId],
      forOwner: [false]
    });
  }

  postReview(){
    this.clientService.postShipReview(this.reviewForm.value).subscribe(() => this.router.navigate(['/client_profile']))
  }


}
