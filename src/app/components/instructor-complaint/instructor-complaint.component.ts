import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-instructor-complaint',
  templateUrl: './instructor-complaint.component.html',
  styleUrls: ['./instructor-complaint.component.css']
})
export class InstructorComplaintComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  returnUrl!: string;
  adventureId!: number;

  constructor(private accountService: AccountService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.route.params.subscribe((param) => {
      this.adventureId = param.adventureId;
      console.log("adventureId :" + this.adventureId);
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      text: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(300)])]
    });
  }
  onSubmit() {
    // console.log(this.form.value.text);
    this.accountService.getMyInfo().subscribe();
    this.clientService.createInstructorComplaint(this.adventureId, this.accountService.currentUser.id, this.form.value.text).subscribe();
  }
}
