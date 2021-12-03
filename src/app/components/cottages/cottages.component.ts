import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/entity/Address';

@Component({
  selector: 'app-cottages',
  templateUrl: './cottages.component.html',
  styleUrls: ['./cottages.component.css']
})
export class CottagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let address = new Address(1, '', '', '', '');
    console.log(address.toStsring());
    
  }

}
