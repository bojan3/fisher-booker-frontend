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
  forOwner: boolean = false;
  currentUser: any;
  @Input()
  forClientSubscriptions: boolean = false;

  constructor(private shipService: ShipService,
    private accountService: AccountService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((user) => {
      this.currentUser = user;
      this.forClient = this.isUserClient(user.role);
      this.forOwner = this.isUserOwner(user.role);
    });
  }

  isUserClient(role: string): boolean {
    if (role == "ROLE_CLIENT")
      return true;
    else
      return false;
  }

  isUserOwner(role: string): boolean {
    if (role == "ROLE_SHIP_OWNER")
      return true;
    else
      return false;
  }

  delete(id: number): void {
    if (this.forOwner) {
      this.shipService.deleteShip(id).subscribe(
        (ships) => {
          window.location.reload();
        },
        (error) => {
          this.errorDisplay = true;
        })
    } else {
      this.shipService.adeleteShip(id).subscribe(
        (ships) => {
          window.location.reload();
        },
        (error) => {
          this.errorDisplay = true;
        })
    }
  }

  ngOnButtonClick(id: number): void {

    this.shipService.deleteShip(id)
    window.location.reload()
  }

  subscribeToShip() {
    this.clientService.subscribeToShip(this.ship.id, this.currentUser.id).subscribe();
  }

  showDeleteButton(): Boolean {
    return this.accountService.currentUser.role == 'ROLE_SHIP_OWNER'
  }

  unsubscribeShip() {
    this.clientService.unsubscribeShip(this.ship.id, this.accountService.currentUser.id).subscribe(() => (
      window.location.reload() ));
  }

  showSubscribe(): boolean {
    if (this.forClient && !this.forClientSubscriptions)
      return true;
    else
      return false;
  }
}
