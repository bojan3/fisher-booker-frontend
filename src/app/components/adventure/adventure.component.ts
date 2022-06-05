import { Component, Input,OnInit } from '@angular/core';
import { Adventure } from 'src/app/entity/Adventure';


@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  constructor() { }
  @Input()
  adventure !: Adventure;
  ngOnInit(): void {
  }

}
