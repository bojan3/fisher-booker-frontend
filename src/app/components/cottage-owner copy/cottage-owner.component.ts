import { Component, Input, OnInit } from '@angular/core';
import { CottageOwner } from 'src/app/entity/CottageOwner';

@Component({
  selector: 'app-cottage-owner',
  templateUrl: './cottage-owner.component.html',
  styleUrls: ['./cottage-owner.component.css']
})
export class CottageOwnerComponent implements OnInit {


  @Input()
  cottageowner!:CottageOwner

  constructor() { }

  ngOnInit(): void {
  }

}
