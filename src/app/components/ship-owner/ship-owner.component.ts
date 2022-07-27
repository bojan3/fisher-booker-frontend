import { Component, Input, OnInit } from '@angular/core';
import { ShipOwner } from 'src/app/entity/ShipOwner';
import { ShipOwnerService } from 'src/app/services/ship-owner.service';

@Component({
  selector: 'app-ship-owner',
  templateUrl: './ship-owner.component.html',
  styleUrls: ['./ship-owner.component.css']
})
export class ShipOwnerComponent implements OnInit {


  @Input()
  shipowner!: ShipOwner

  constructor(private ship_owner_service: ShipOwnerService) { }

  ngOnInit(): void {
  }


  viewDetails(id: any): void {
    this.ship_owner_service.details(id).subscribe();
    window.location.reload()
  }

  delete(id: number): void {
    this.ship_owner_service.delete(id).subscribe();
    window.location.reload()
  }

}
