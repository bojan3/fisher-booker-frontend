import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Ship } from 'src/app/entity/Ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {
  @Input()
  ship !: Ship;

  errorDisplay: boolean = false;

  constructor(public shipService: ShipService) { }

  ngOnInit(): void {

  }

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
