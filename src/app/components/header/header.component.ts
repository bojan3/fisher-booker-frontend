import { PortalHostDirective } from '@angular/cdk/portal';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormRecord } from '@angular/forms';
import { Router } from '@angular/router';
import { Schedule, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { AdventureReservationService } from 'src/app/services/adventure-reservation.service';
import { Account } from 'src/app/entity/Account';
import { AdventureReservationDTO } from 'src/app/entity/DTO/AdventureReservationDTO';
import { SchedulerComponent } from 'src/app/components/scheduler/scheduler.component';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { CottageReservationService } from 'src/app/services/cottage-reservation.service';
import { ShipReservationService } from 'src/app/services/ship-reservation.service';
import { CottageOwnerService } from 'src/app/services/cottage-owner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  account!: Account;

  reservationdata!: AdventureReservationDTO[];
  scheduler: SchedulerComponent = new SchedulerComponent(this.accountService,
    this.adventureReservationS,this.cottageReservationS, this.shipReservationS, this.cottageOwnerService)
  podaci:any = []
  podaci1!:any
  podaci2:AdventureReservationDTO[] = []
  podaci3: Array<AdventureReservationDTO> = [];

  myObserver = {
    next: (x: AdventureReservationDTO[]) => {
             console.log(x)
               // this.podaci2.push(x)
               // this.scheduler.ngOnInit(x)
                
              this.scheduler.data2=x

            }
    ,
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => {

    console.log(this.scheduler.data2)
  },
  };

  constructor(private adventureReservationS: AdventureReservationService, private accountService: AccountService,
     private authService: AuthService, private router: Router,
     private cottageReservationS: CottageReservationService, private shipReservationS: ShipReservationService,
     private cottageOwnerService: CottageOwnerService) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe();
    

  
    //this.calendar();
  }

  isUserLogged() {
    return !!this.accountService.currentUser;
  }

  userName() {
    const user = this.accountService.currentUser;
    return user.firstName + ' ' + user.lastName;
  }

  isUserClient(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role == 'ROLE_CLIENT';
  }

  isUserCottageOwner(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role == 'ROLE_COTTAGE_OWNER';
  }

  isUserAdmin(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role == 'ROLE_ADMIN';
  }
  isUserShipOwner(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role == 'ROLE_SHIP_OWNER';
  }

  isUserFishingInstructor(){
    return (!!this.accountService.currentUser) && this.accountService.currentUser.role == 'ROLE_INSTRUCTOR';
  }
  logout(){
    this.authService.logout();
  }

  newAdmin(account : Account){
    this.accountService.newAdmin(account);
  }

  openProfile(){
    switch(this.accountService.currentUser.role){
      case 'ROLE_COTTAGE_OWNER': this.router.navigate(['/cottage_owner_profile']); break;
      case 'ROLE_SHIP_OWNER': this.router.navigate(['/ship_owner_profile']); break;
      case 'ROLE_CLIENT': this.router.navigate(['/client_profile']); break;
      case 'ROLE_INSTRUCTOR': this.router.navigate(['/instructor_profile']); break;
      case 'ROLE_ADMIN': this.router.navigate(['/admin_profile']); break;
      default: this.router.navigate(['/']);
    }
  }

  openUsersPage(){
    if(!!this.accountService.currentUser)
    {
      switch(this.accountService.currentUser.role){
        case 'ROLE_COTTAGE_OWNER': this.router.navigate(['/']); break;
        case 'ROLE_SHIP_OWNER': this.router.navigate(['/']); break;
        case 'ROLE_CLIENT': this.router.navigate(['/client_profile']); break;
        case 'ROLE_INSTRUCTOR': this.router.navigate(['/']); break;
        case 'ROLE_ADMIN': this.router.navigate(['/']); break;
        default: this.router.navigate(['/']);
      }
    }
      else
      {
        this.router.navigate(['/']);
      }
    }

    calendar(){
      console.log(this.accountService.currentUser.username)
      
     // console.log(this.adventureReservationS.getAllReservations(this.accountService.currentUser.username).subscribe(this.myObserver))  
    //   this.scheduler.getData(this.podaci2)
      console.log("ulazak u kalendar!")
      this.router.navigate(['/scheduler']);

      
    }

}
