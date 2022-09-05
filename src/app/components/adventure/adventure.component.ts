import { Component, Input,OnInit } from '@angular/core';
import { AdventureDTO } from 'src/app/entity/AdventureDTO';
import { AccountService } from 'src/app/services/account.service';
import { AdventureService } from 'src/app/services/adventure.service';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  @Input()
  adventure !: AdventureDTO;
  errorDisplay: boolean = false;

  @Input()
  forClientSubscriptions: boolean = false;

  forClient: boolean = false;
  forAdmin: boolean = false;
  forOwner: boolean = false;
  currentUser: any;

  constructor(private adventureService: AdventureService,
    private accountService: AccountService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((user) => {
      this.currentUser = user;
      this.forClient = this.isUserClient(user.role);
      this.forAdmin = this.isUserAdmin(user.role);
      this.forOwner = this.isUserOwner(user.role);
    }
    );
  }


  isUserOwner(role: string): boolean {
    if (role == "ROLE_COTTAGE_OWNER")
      return true;
    else
      return false;
  }

  isUserClient(role: string): boolean {
    if (role == "ROLE_CLIENT")
      return true;
    else
      return false;
  }
  isUserAdmin(role: string): boolean {
    console.log(role);
    if (role == "ROLE_ADMIN")
      return true;
    else
      return false;
  }


  delete(id: number): void {
    if (this.forOwner){
    this.adventureService.deleteAdventure(id).subscribe(
       (adventures) => {
         window.location.reload();
       },
       (error) => {
         this.errorDisplay = true;
       })}
    if (this.forAdmin){
    this.adventureService.adeleteAdventure(id).subscribe(
      (cottages) => {
        window.location.reload();
      },
      (error) => {
        this.errorDisplay = true;
      })}
  }

  subscribeToCottage() {
    this.clientService.subscribeToInstructor(this.adventure.id, this.currentUser.id).subscribe();
  }

  showSubscribeButton(): boolean {
    if (this.forClient && !this.forClientSubscriptions) {
      return true;
    }
    else return false;
  }

  unsubscribeCottage(){
    this.clientService.unsubscribeInstructor(this.adventure.id, this.currentUser.id).subscribe();
  }
}

