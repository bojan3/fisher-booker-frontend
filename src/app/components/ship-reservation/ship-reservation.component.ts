import { Component, Input, OnInit } from '@angular/core';
import { ShipReservationDTO } from 'src/app/entity/DTO/ShipReservationDTO';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-ship-reservation',
  templateUrl: './ship-reservation.component.html',
  styleUrls: ['./ship-reservation.component.css']
})
export class ShipReservationComponent implements OnInit {

  @Input()
  shipReservation!: ShipReservationDTO;

  constructor(
    private accountService: AccountService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    console.log(this.shipReservation);
  }

  canCancel(){
    return this.shipReservation.canCancel;
  }

  notCanCancel(){
    return !this.shipReservation.canCancel;
  }

  cancelReservation(){
    this.accountService.getMyInfo().subscribe();
    this.clientService.deleteShipReservation(this.accountService.currentUser.id, this.shipReservation.id).subscribe();
  }

}
