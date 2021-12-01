import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  entities = [['Cottage owners', '../../assets/images/cottage_owner.png'], ['Fishing instructors', '../../assets/images/fishing_instructor.png'],
   ['Ship owners', '../../assets/images/ship_owner.png'], ['Clients', '../../assets/images/client.png'],
    ['Cottages', '../../assets/images/cottage.png'], ['Adventures', '../../assets/images/adventure.png'],
     ['Ships', '../../assets/images/ship.png']];

  constructor() { }

  ngOnInit(): void {
  }

}
