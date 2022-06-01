import { Component, OnInit } from '@angular/core';
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
  constructor(private accountService: AccountService,
    private router: Router) {}

  submitted = false;
  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((account: Account) => (this.account = account));
  }

  onSubmit(){
    console.log(this.account);
    this.accountService.updateAccount(this.account);
    this.router.navigate(['/']);
  }
}
