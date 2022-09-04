import { asNativeElements, Component, Input, NgModule, OnInit } from '@angular/core';
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


 ngOnButtonClick(id:number):void{

  this.shipService.deleteShip(id)
  window.location.reload()
 }

  

  errorDisplay: boolean = false;
  forClient: boolean = false;
  forAdmin: boolean = false;
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
      this.forAdmin = this.isUserAdmin(user.role);
      this.forOwner = this.isUserOwner(user.role);
    });
              }

  isUserClient(role: string): boolean {
    if(role == "ROLE_CLIENT")
      return true;
    else
      return false;
    }

  isUserAdmin(role: string): boolean {
    if (role == "ROLE_ADMIN")
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
    if(this.forClient)
    {this.shipService.deleteShip(id).subscribe(
      (ships) => {
        window.location.reload();
      },
      (error) => {
        this.errorDisplay = true;
      })}
    if (this.forAdmin)
      {
      this.shipService.adeleteShip(id).subscribe(
        (ships) => {
          window.location.reload();
        },
        (error) => {
          this.errorDisplay = true;
       })}
    }
  

  subscribeToShip(){
    this.clientService.subscribeToShip(this.ship.id, this.currentUser.id).subscribe();
  }

  showDeleteButton(): boolean { 
    return (this.forAdmin || this.forOwner)
  }

  unsubscribeShip(){
    this.clientService.unsubscribeShip(this.ship.id, this.accountService.currentUser.id).subscribe();
  }

  showSubscribe(): boolean {
    if (this.forClient && !this.forClientSubscriptions)
      return true;
    else
      return false;
  }
}
