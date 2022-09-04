import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-ship-complaint',
  templateUrl: './ship-complaint.component.html',
  styleUrls: ['./ship-complaint.component.css']
})
export class ShipComplaintComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  returnUrl!: string;
  shipId!: number;

  constructor(private accountService: AccountService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((param) => {
      this.shipId = param.shipId;
      console.log("shipId :" + this.shipId);
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      text: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(300)])]
    });
  }
  onSubmit() {
    console.log(this.form.value.text);
    this.accountService.getMyInfo().subscribe();
    this.clientService.createShipComplaint(this.shipId, this.accountService.currentUser.id, this.form.value.text).subscribe();
  }
}
