import { Component, Input,OnInit } from '@angular/core';
import { AdventureDTO } from 'src/app/entity/AdventureDTO';


@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  constructor() { }
  @Input()
  adventure !: AdventureDTO;
  ngOnInit(): void {
  }

}
