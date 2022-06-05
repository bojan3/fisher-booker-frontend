import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  account!: Account;

  constructor(private accountService: AccountService) { }


  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((account) => (this.account = account));
  }
  
}
