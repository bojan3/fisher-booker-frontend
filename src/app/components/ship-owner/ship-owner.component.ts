import { Component, Input, OnInit } from '@angular/core';
import { ShipOwner } from 'src/app/entity/ShipOwner';

@Component({
  selector: 'app-ship-owner',
  templateUrl: './ship-owner.component.html',
  styleUrls: ['./ship-owner.component.css']
})
export class ShipOwnerComponent implements OnInit {


  @Input()
  shipowner!:ShipOwner

  constructor() { }

  ngOnInit(): void {
  }

}
