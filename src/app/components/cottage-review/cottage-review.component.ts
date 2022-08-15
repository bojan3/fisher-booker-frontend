import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateReviewDTO } from 'src/app/entity/DTO/CreateReviewDTO';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cottage-review',
  templateUrl: './cottage-review.component.html',
  styleUrls: ['./cottage-review.component.css']
})
export class CottageReviewComponent implements OnInit {

  reviewForm!: FormGroup;
  cottageId!: number;
  // rate = 0;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((param) => {
      this.cottageId = param.cottageId;
    });

    this.reviewForm = this.formBuilder.group({
      comment: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(300)])],
      grade: [],
      reviewEntityId: [this.cottageId],
      forOwner: [false]
    });
  }

  postReview(){
    this.clientService.postCottageReview(this.reviewForm.value).subscribe(() => this.router.navigate(['/client_profile']))
  }

}
