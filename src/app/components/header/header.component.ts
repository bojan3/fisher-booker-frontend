import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService, private authService: AuthService, private router: Router) { }
  // account!: Account;

  ngOnInit(): void {
  }

  isUserLogged() {
    return !!this.accountService.currentUser;
  }

  userName() {
    const user = this.accountService.currentUser;
    return user.firstName + ' ' + user.lastName;
  }

  isUserClient(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role.name == 'ROLE_CLIENT';
  }

  isUserCottageOwner(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role.name == 'ROLE_COTTAGE_OWNER';
  }

  isUserAdmin(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role.name == 'ROLE_ADMIN';
  }
  isUserShipOwner(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role.name == 'ROLE_SHIP_OWNER';
  }

  isUserFishingInstructor(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role.name == 'ROLE_INSTRUCTOR';
  }
  logout(){
    this.authService.logout();
  }

  openProfile(){
    // this.accountService.getMyInfo().subscribe((account) => (this.account = account))
    switch(this.accountService.currentUser.role.name){
      case 'ROLE_COTTAGE_OWNER': this.router.navigate(['/cottage_owner_profile']); break;
      case 'ROLE_SHIP_OWNER': this.router.navigate(['/ship_owner_profile']); break;
      case 'ROLE_CLIENT': this.router.navigate(['/client_profile']); break;
      case 'ROLE_INSTRUCTOR': this.router.navigate(['/instructor_profile']); break;
      case 'ROLE_ADMIN': this.router.navigate(['/admin_profile']); break;
      default: this.router.navigate(['/']);
    }
  }
}
