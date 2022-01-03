import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  constructor() { }

  entities = [['Cottages', '../../assets/images/cottage.png', 'cottages'], ['Adventures', '../../assets/images/adventure.png', 'adventures'],
  ['Ships', '../../assets/images/ship.png', 'ships']];


  ngOnInit(): void {
  }

}
