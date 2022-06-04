import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ShipDTO } from 'src/app/entity/DTO/ShipDTO';
import { Ship } from 'src/app/entity/Ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent {
  @Input()
  ship !: ShipDTO;

  errorDisplay: boolean = false;

  constructor(public shipService: ShipService) { }
  
  delete(id: number): void {
    this.shipService.deleteShip(id).subscribe(
      (ships) => {
        window.location.reload();
      },
      (error) => {
        this.errorDisplay = true;
      })
  }

}
