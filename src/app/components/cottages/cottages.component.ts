import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/entity/Address';
import { CottageDTO } from 'src/app/entity/DTO/CottageDTO';
import { CottageService } from 'src/app/services/cottage.service';

@Component({
  selector: 'app-cottages',
  templateUrl: './cottages.component.html',
  styleUrls: ['./cottages.component.css']
})
export class CottagesComponent implements OnInit {

  @Input()
  forCottageOwner: boolean = false;

  cottages: CottageDTO[] = [];

  constructor(private cottageService : CottageService) { }

  ngOnInit(): void {
    if(this.forCottageOwner){
      this.cottageService.getAllCottagesByOwner().subscribe((cottages) => (this.cottages = cottages));
    } else{
      this.cottageService.getAllCottages().subscribe((cottages) => (this.cottages = cottages));
    }
    //this.cottageService.getAllCottagesByName().subscribe((cottages) => (this.cottages = cottages));
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
