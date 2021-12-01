import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  @Input()
  name: string = '';

  @Input()
  path: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
