import { Component, Input, OnInit } from '@angular/core';
import { CottageDTO } from 'src/app/entity/CottageDTO';

@Component({
  selector: 'app-cottage',
  templateUrl: './cottage.component.html',
  styleUrls: ['./cottage.component.css']
})

export class CottageComponent implements OnInit {

  constructor() { }

  @Input()
  cottage !: CottageDTO;

  ngOnInit(): void {
  }

}
