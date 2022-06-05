import { Component, OnInit } from '@angular/core';
import { AdventureReservationDTO } from 'src/app/entity/DTO/AdventureReservationDTO';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-adventure-reservations',
  templateUrl: './adventure-reservations.component.html',
  styleUrls: ['./adventure-reservations.component.css']
})
export class AdventureReservationsComponent implements OnInit {

  adventureReservations: AdventureReservationDTO[] = [];

  constructor(
    private accountService: AccountService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe();
    this.clientService.getAdventureReservations(this.accountService.currentUser.id).subscribe((adventureReservations) => (this.adventureReservations = adventureReservations));

  }
  getNotFinished(){
    this.accountService.getMyInfo().subscribe();
    this.clientService.getAdventureReservations(this.accountService.currentUser.id).subscribe((adventureReservations) => (this.adventureReservations = adventureReservations));
 }


  getFinished(){
    this.accountService.getMyInfo().subscribe();
    this.clientService.getFinishedAdventureReservations(this.accountService.currentUser.id).subscribe((adventureReservations) => (this.adventureReservations = adventureReservations));

  }
}
