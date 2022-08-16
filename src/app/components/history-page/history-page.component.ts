import { Component, OnInit } from '@angular/core';
import { CottageOwnerService } from 'src/app/services/cottage-owner.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  constructor(private cottageOwnerService: CottageOwnerService) { }

  ngOnInit(): void {
    this.cottageOwnerService.getReservationsByOwner().subscribe((reservations) => {
      console.log(reservations);
    })
  }

}
