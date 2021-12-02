import { Component, OnInit } from '@angular/core';
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
    //this.cottages = this.cottageService.getAllCottages
    this.cottageService.getAllCottages().subscribe((cottages) => (this.cottages = cottages));
  }

}
