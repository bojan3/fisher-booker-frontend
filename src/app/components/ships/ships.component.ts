import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/entity/Ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships: Ship[] = [];

  constructor(public shipService: ShipService) { }

  ngOnInit(): void {
    this.shipService.getAllShips().subscribe((ships) => (this.ships = ships))
  }

 ngOnButtonClick():void{

  this.shipService.deleteShip(1)
 }



}
