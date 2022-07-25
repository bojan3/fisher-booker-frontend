import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cottage-complaint',
  templateUrl: './cottage-complaint.component.html',
  styleUrls: ['./cottage-complaint.component.css']
})
export class CottageComplaintComponent implements OnInit {

  form!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  cottageId!: number;

  constructor(private accountService: AccountService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    this.route.params.subscribe((param) => {
      this.cottageId = param.cottageId;
      console.log("cottageId :" +this.cottageId);
      });

  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  this.form = this.formBuilder.group({
    text: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(300)])]
  });
  }

  onSubmit() {
    // console.log(this.form.value.text);
    this.accountService.getMyInfo().subscribe();
    this.clientService.createCottageComplaint(this.cottageId, this.accountService.currentUser.id, this.form.value.text).subscribe();
  }

}
