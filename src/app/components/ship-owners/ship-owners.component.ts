import { Component, OnInit } from '@angular/core';
import { ShipOwner } from 'src/app/entity/ShipOwner';
import { ShipOwnerService } from 'src/app/services/ship-owner.service';


@Component({
  selector: 'app-ship-owners',
  templateUrl: './ship-owners.component.html',
  styleUrls: ['./ship-owners.component.css']
})
export class ShipOwnersComponent implements OnInit {

  constructor(private ShipOwnerService : ShipOwnerService) { }

  shipowners: ShipOwner[]=[];


  ngOnInit(): void {
    this.ShipOwnerService.getAllShipOwners().subscribe((shipowners) => {
      
      this.shipowners = shipowners
    console.log(this.shipowners);
    });

  }}


