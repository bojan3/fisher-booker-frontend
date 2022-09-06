import { Component, Input, OnInit } from '@angular/core';
import { AdventureReservationDTO } from 'src/app/entity/DTO/AdventureReservationDTO';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-adventure-reservation',
  templateUrl: './adventure-reservation.component.html',
  styleUrls: ['./adventure-reservation.component.css']
})
export class AdventureReservationComponent implements OnInit {

  @Input()
  adventureReservation!: AdventureReservationDTO;

  @Input()
  forStarted!: boolean;

  constructor(
    private accountService: AccountService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
  }

  canCancel(){
    return this.adventureReservation.canCancel;
  }

  notCanCancel(){
    return !this.adventureReservation.canCancel;
  }

  cancelReservation(){
    this.accountService.getMyInfo().subscribe();
    this.clientService.deleteAdventureReservation(this.accountService.currentUser.id, this.adventureReservation.id).subscribe(() => (
      window.location.reload() ));
  }

}
