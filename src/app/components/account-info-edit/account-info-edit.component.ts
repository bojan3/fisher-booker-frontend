import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-info-edit',
  templateUrl: './account-info-edit.component.html',
  styleUrls: ['./account-info-edit.component.css']
})
export class AccountInfoEditComponent implements OnInit {

  account !: Account;
  formDelete!: UntypedFormGroup;
  submitted = false;
  requestSent = false;

  constructor(private accountService: AccountService,
    private router: Router, private formBuilder: UntypedFormBuilder,) {}

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((account: Account) => (this.account = account));
    this.buildForm();
  }

  buildForm(){
    this.formDelete = this.formBuilder.group({
      description: ['']
    })
  }

  onSubmit(){
    console.log(this.account);
    this.accountService.updateAccount(this.account);
    this.router.navigate(['/']);
  }

  onDelete() {
    console.log(this.formDelete.value);
    this.accountService.sendDeleteAccountRequest(this.formDelete.value).subscribe((res) => {
      if(res.body){
        this.requestSent = true;
      }
    })
  }
}
