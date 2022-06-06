import { Component, OnInit } from '@angular/core';
import { CottageReservationDTO } from 'src/app/entity/DTO/CottageReservationDTO';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cottage-reservations',
  templateUrl: './cottage-reservations.component.html',
  styleUrls: ['./cottage-reservations.component.css']
})
export class CottageReservationsComponent implements OnInit {

  cottageReservations: CottageReservationDTO[] = [];

  forStarted: boolean = false;

  constructor(
    private accountService: AccountService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe();
    this.clientService.getCottageReservations(this.accountService.currentUser.id).subscribe((cottageReservations) => (this.cottageReservations = cottageReservations));
  }


  getNotFinished(){
    this.forStarted = false;
    this.accountService.getMyInfo().subscribe();
    this.clientService.getCottageReservations(this.accountService.currentUser.id).subscribe((cottageReservations) => (this.cottageReservations = cottageReservations));
  }


  getFinished(){
    this.forStarted = true;
    this.accountService.getMyInfo().subscribe();
    this.clientService.getFinishedCottageReservations(this.accountService.currentUser.id).subscribe((cottageReservations) => (this.cottageReservations = cottageReservations));
  }
}
