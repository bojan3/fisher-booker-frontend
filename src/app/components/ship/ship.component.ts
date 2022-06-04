import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ShipDTO } from 'src/app/entity/DTO/ShipDTO';
import { Ship } from 'src/app/entity/Ship';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {
  @Input()
  ship !: ShipDTO;

  errorDisplay: boolean = false;
  forClient: boolean = false;
  currentUser: any;
  constructor(private shipService: ShipService,
              private accountService: AccountService,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((user) => {
    this.currentUser = user;
    this.forClient = this.isUserClient(user.role);
    });
              }

  isUserClient(role: string): boolean {
    if(role == "ROLE_CLIENT")
      return true;
    else
      return false;
    }

  delete(id: number): void {
    this.shipService.deleteShip(id).subscribe(
      (ships) => {
        window.location.reload();
      },
      (error) => {
        this.errorDisplay = true;
      })
  }

  subscribeToShip(){
    this.clientService.subscribeToShip(this.ship.id, this.currentUser.id).subscribe();
  }

  showDeleteButton(){
    
  }
}
