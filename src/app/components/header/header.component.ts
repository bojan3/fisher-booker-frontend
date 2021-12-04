import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  isUserLogged() {
    return !!this.accountService.currentUser;
  }

  userName() {
    const user = this.accountService.currentUser;
    return user.firstName + ' ' + user.lastName;
  }

}
