import { Component, OnInit } from '@angular/core';
import { ShipReservationDTO } from 'src/app/entity/DTO/ShipReservationDTO';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-ship-reservations',
  templateUrl: './ship-reservations.component.html',
  styleUrls: ['./ship-reservations.component.css']
})
export class ShipReservationsComponent implements OnInit {

  shipReservations: ShipReservationDTO[] = [];
  forStarted: boolean = false;

  constructor(
    private accountService: AccountService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe();
    this.clientService.getShipReservations(this.accountService.currentUser.id).subscribe((shipReservations) => (this.shipReservations = shipReservations));
  }

  getNotFinished(){
    this.forStarted = false;
    this.accountService.getMyInfo().subscribe();
    this.clientService.getShipReservations(this.accountService.currentUser.id).subscribe((shipReservations) => (this.shipReservations = shipReservations));
  }

  getFinished(){
    this.forStarted = true;
    this.accountService.getMyInfo().subscribe();
    this.clientService.getFinishedShipReservations(this.accountService.currentUser.id).subscribe((shipReservations) => (this.shipReservations = shipReservations));

  }

}
