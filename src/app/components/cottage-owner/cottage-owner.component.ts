import { Component, Input, OnInit } from '@angular/core';
import { CottageOwner } from 'src/app/entity/CottageOwner';
import { CottageOwnerService } from 'src/app/services/cottage-owner.service';

@Component({
  selector: 'app-cottage-owner',
  templateUrl: './cottage-owner.component.html',
  styleUrls: ['./cottage-owner.component.css']
})
export class CottageOwnerComponent implements OnInit {


  @Input()
  cottageowner!:CottageOwner

  constructor(private cottage_owner_service : CottageOwnerService) { }

  ngOnInit(): void {
  }

  delete(id:number):void{
    this.cottage_owner_service.delete(id).subscribe();
    window.location.reload()
  }

}
