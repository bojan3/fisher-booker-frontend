import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  entities = [['Cottages', '../../assets/images/cottage.png', 'cottages'], ['Adventures', '../../assets/images/adventure.png', 'adventures'],
    ['Ships', '../../assets/images/ship.png', 'ships']];

  constructor() { }

  ngOnInit(): void {
  }

}
