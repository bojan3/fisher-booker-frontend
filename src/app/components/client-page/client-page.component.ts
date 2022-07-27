import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  constructor() { }

  mainEntities = [['Cottages', '../../assets/images/cottage.png', 'cottages'], ['Fishing  Instructor', '../../assets/images/fishing_instructor.png', 'fishing-instructors'],
  ['Ships', '../../assets/images/ship.png', 'ships']];

  historyEntities = [['Cottages', '../../assets/images/cottage.png', 'cottage-reservations'], ['Adventures', '../../assets/images/adventure.png', 'adventure-reservations'],
  ['Ships', '../../assets/images/ship.png', 'ship-reservations']]

  ngOnInit(): void {
  }

}
