import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-adventure-review',
  templateUrl: './adventure-review.component.html',
  styleUrls: ['./adventure-review.component.css']
})
export class AdventureReviewComponent implements OnInit {
  
  adventureId!: number;
  reviewForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
    this.route.params.subscribe((param) => {
      this.adventureId = param.adventureId;
    });
  
    this.reviewForm = this.formBuilder.group({
      comment: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(300)])],
      grade: [],
      reviewEntityId: [this.adventureId],
      forOwner: [true]
    });

  }

  postReview(){
    this.clientService.postAdventureReview(this.reviewForm.value).subscribe(() => this.router.navigate(['/client_profile']))
  }

}
