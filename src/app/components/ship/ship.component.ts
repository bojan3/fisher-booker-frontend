import { Component, Input, OnInit } from '@angular/core';
import { Ship } from 'src/app/entity/Ship';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  constructor() { }

  @Input()
  ship !: Ship;

  ngOnInit(): void {
  }

}
