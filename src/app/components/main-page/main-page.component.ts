import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  entities = [['Cottages', '../../assets/images/cottage.png', 'cottages'],
    ['Ships', '../../assets/images/ship.png', 'ships'], ['Fishing instructors', '../../assets/images/fishing_instructor.png','fishing-instructors']];

  constructor() { }

  ngOnInit(): void {
  }

}
