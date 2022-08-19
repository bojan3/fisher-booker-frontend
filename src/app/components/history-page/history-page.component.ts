import { Component, OnInit } from '@angular/core';
import { ReservationDetailsDTO } from 'src/app/entity/DTO/ReservationDetailsDTO';
import { ReservationType } from 'src/app/entity/DTO/ReservationType';
import { CottageOwnerService } from 'src/app/services/cottage-owner.service';

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

  constructor(private cottageOwnerService: CottageOwnerService) { }

  ngOnInit(): void {
    this.cottageOwnerService.getReservationsByOwner(this.pageNum).subscribe((reservations) => {
      this.reservations = reservations;
    });
    this.cottageOwnerService.getNumOfReservations().subscribe((num) => {
      this.numOfReservations = num;
    })
  }

  changed(event: any) {
    this.pageNum = event.pageIndex;
    this.cottageOwnerService.getReservationsByOwner(this.pageNum).subscribe((reservations) => {
      this.reservations = reservations;
    });
  }

}
