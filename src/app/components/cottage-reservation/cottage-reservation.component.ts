import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { CottageReservationDTO } from 'src/app/entity/DTO/CottageReservationDTO';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cottage-reservation',
  templateUrl: './cottage-reservation.component.html',
  styleUrls: ['./cottage-reservation.component.css']
})
export class CottageReservationComponent implements OnInit {

  @Input()
  cottageReservation!: CottageReservationDTO;
  constructor(
    private clientService: ClientService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  canCancel(){
    return this.cottageReservation.canCancel;
  }

  notCanCancel(){
    return !this.cottageReservation.canCancel;
  }

  cancelReservation(){
    this.accountService.getMyInfo().subscribe();
    this.clientService.deleteCottageReservation(this.accountService.currentUser.id, this.cottageReservation.id).subscribe();
  }
}
