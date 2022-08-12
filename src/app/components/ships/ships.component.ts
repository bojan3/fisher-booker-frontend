import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShipDTO } from 'src/app/entity/DTO/ShipDTO';
import { Ship } from 'src/app/entity/Ship';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  @Input()
  forShipOwner: boolean = false;

  @Input()
  forClientSubscriptions: boolean = false;

  ships: ShipDTO[] = [];

  sortByGroup!: FormGroup;
  orderGroup!: FormGroup;
  
  constructor(private shipService: ShipService,
    private clientService: ClientService,
    private accountService: AccountService) { }

  ngOnInit(): void {

    this.sortByGroup = new FormGroup({
      'sortByRadio' : new FormControl()
    });

    this.orderGroup = new FormGroup({
      'orderRadio' : new FormControl()
    });

    this.orderGroup.patchValue({orderRadio: 'ASC'});

    if(this.forShipOwner){
      this.shipService.getAllShipsByOwner().subscribe((ships) => (this.ships = ships));
    }
    if (this.forClientSubscriptions) {
      this.clientService.getShipSubscriptions(this.accountService.currentUser.id).subscribe((ships) => (this.ships = ships));
    }
    else {
      this.shipService.getAllShips().subscribe((ships) => (this.ships = ships));
    }
    //this.shipService.getAllShipsByName().subscribe((ships) => (this.ships = ships))
  }

  getSorted(){
    this.shipService.getAllShips(this.sortByGroup.value.sortByRadio, this.orderGroup.value.orderRadio).subscribe((ships) => (this.ships = ships));
   }

  notClientSubscriptions(): boolean {
    return !this.forClientSubscriptions;
  }

}
