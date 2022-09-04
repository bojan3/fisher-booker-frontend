import { Component, OnInit } from '@angular/core';
import { ReservationDetailsDTO } from 'src/app/entity/DTO/ReservationDetailsDTO';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { AccountService } from 'src/app/services/account.service';
import { CottageOwnerService } from 'src/app/services/cottage-owner.service';
import { ShipOwnerService } from 'src/app/services/ship-owner.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  reservations: ReservationDetailsDTO[] = [];
  type: ReservationType = ReservationType.COTTAGE;
  pageNum = 0;
  numOfReservations = 0;

  constructor(private cottageOwnerService: CottageOwnerService,
    private shipOwnerService: ShipOwnerService,
    private accountService: AccountService) {
      switch(this.accountService.currentUser.role) {
        case 'ROLE_COTTAGE_OWNER': {
          this.type = ReservationType.COTTAGE;
          break;
        }
        case 'ROLE_SHIP_OWNER': {
          this.type = ReservationType.SHIP;
          break;
        }
      }
    }

  ngOnInit(): void {
    switch (this.accountService.currentUser.role) {
      case 'ROLE_COTTAGE_OWNER': {
        this.cottageOwnerService.getReservationsByOwner(this.pageNum).subscribe((reservations) => {
          this.reservations = reservations;
        });
        this.cottageOwnerService.getNumOfReservations().subscribe((num) => {
          this.numOfReservations = num;
        })
        break;
      }
      case 'ROLE_SHIP_OWNER': {
        this.shipOwnerService.getReservationsByOwner(this.pageNum).subscribe((reservations) => {
          this.reservations = reservations;
        });
        this.shipOwnerService.getNumOfReservations().subscribe((num) => {
          this.numOfReservations = num;
        })
        break;
      }
    }

  }

  changed(event: any) {
    this.pageNum = event.pageIndex;
    switch (this.accountService.currentUser.role) {
      case 'ROLE_COTTAGE_OWNER': {
        this.cottageOwnerService.getReservationsByOwner(this.pageNum).subscribe((reservations) => {
          this.reservations = reservations;
        });
        break;
      }
      case 'ROLE_SHIP_OWNER': {
        this.shipOwnerService.getReservationsByOwner(this.pageNum).subscribe((reservations) => {
          this.reservations = reservations;
        });
        break;
      }
    }
  }

}
