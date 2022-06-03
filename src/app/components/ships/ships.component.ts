import { Component, Input, OnInit } from '@angular/core';
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

  ships: Ship[] = [];

  constructor(private shipService: ShipService,
              private clientService: ClientService,
              private accountService: AccountService) { }

  ngOnInit(): void {
    if(this.forShipOwner){
      this.shipService.getAllShipsByOwner().subscribe((ships) => (this.ships = ships));
    }
    if(this.forClientSubscriptions){
      this.clientService.getShipSubscriptions(this.accountService.currentUser.id).subscribe((ships) => (this.ships = ships));
    }
    else{
      this.shipService.getAllShips().subscribe((ships) => (this.ships = ships));
    }
    //this.shipService.getAllShipsByName().subscribe((ships) => (this.ships = ships))
  }

  sortByName(){
    this.shipService.getAllShipsByName().subscribe((ships) => (this.ships = ships));
  }

  sortByPrice(){
    this.shipService.getAllShipsByPrice().subscribe((ships) => (this.ships = ships));
  }
  sortByRating(){
    this.shipService.getAllShipsByRating().subscribe((ships) => (this.ships = ships));
  }

  sortByCapacity(){
    this.shipService.getAllShipsByCapacity().subscribe((ships) => (this.ships = ships));
  }

 ngOnButtonClick():void{

//  this.shipService.deleteShip(1)
 }

 notClientSubscriptions(): boolean {
  return !this.forClientSubscriptions;
}

}
