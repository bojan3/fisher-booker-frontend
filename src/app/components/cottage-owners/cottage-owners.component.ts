import { Component, OnInit } from '@angular/core';
import { CottageOwner } from 'src/app/entity/CottageOwner';
import { CottageOwnerService } from 'src/app/services/cottage-owner.service';


@Component({
  selector: 'app-cottage-owners',
  templateUrl: './cottage-owners.component.html',
  styleUrls: ['./cottage-owners.component.css']
})
export class CottageOwnersComponent implements OnInit {

  constructor(private CottageOwnerService : CottageOwnerService) { }

  cottageowners: CottageOwner[]=[];


  ngOnInit(): void {
    this.CottageOwnerService.getAllCottageOwners().subscribe((cottageowners) => {
      
      this.cottageowners = cottageowners
    console.log(this.cottageowners);
    });

  }}


