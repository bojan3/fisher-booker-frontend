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

  constructor(private shipService: ShipService) { }

  ngOnInit(): void {
    this.shipService.getAllShipsByName().subscribe((ships) => (this.ships = ships))
  }

  sortByName(){
    this.shipService.getAllShipsByName().subscribe((ships) => (this.ships = ships));
  }

  sortByPrice(){
    this.shipService.getAllShipsByPrice().subscribe((ships) => (this.ships = ships));
  }
  sortByRating(){
    this.shipService.getAllShipsByRating().subscribe((ships) => (this.ships = ships));
  }

  sortByCapacity(){
    this.shipService.getAllShipsByCapacity().subscribe((ships) => (this.ships = ships));
  }

}
