import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  account!: Account;
  form!: FormGroup;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((account) => (this.account = account));
  }

}
