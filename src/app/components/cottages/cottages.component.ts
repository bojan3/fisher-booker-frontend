import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/entity/Address';
import { Cottage } from 'src/app/entity/Cottage';
import { CottageService } from 'src/app/services/cottage.service';

@Component({
  selector: 'app-cottages',
  templateUrl: './cottages.component.html',
  styleUrls: ['./cottages.component.css']
})
export class CottagesComponent implements OnInit {

  constructor(private cottageService : CottageService) { }

  cottages: Cottage[] = [];

  ngOnInit(): void {
    this.cottageService.getAllCottagesByName().subscribe((cottages) => (this.cottages = cottages));
  }

  sortByName(){
    this.cottageService.getAllCottagesByName().subscribe((cottages) => (this.cottages = cottages));
  }

  sortByPrice(){
    this.cottageService.getAllCottagesByPrice().subscribe((cottages) => (this.cottages = cottages));
  }
  sortByRating(){
    this.cottageService.getAllCottagesByRating().subscribe((cottages) => (this.cottages = cottages));
  }
}
