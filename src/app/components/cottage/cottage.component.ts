import { Component, Input, OnInit } from '@angular/core';
import { Cottage } from 'src/app/entity/Cottage';

@Component({
  selector: 'app-cottage',
  templateUrl: './cottage.component.html',
  styleUrls: ['./cottage.component.css']
})

export class CottageComponent implements OnInit {

  constructor() { }

  @Input()
  cottage !: Cottage;

  ngOnInit(): void {
  }

}
