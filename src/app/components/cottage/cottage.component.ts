import { Component, Input, OnInit } from '@angular/core';
import { CottageDTO } from 'src/app/entity/CottageDTO';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { CottageService } from 'src/app/services/cottage.service';

@Component({
  selector: 'app-cottage',
  templateUrl: './cottage.component.html',
  styleUrls: ['./cottage.component.css']
})

export class CottageComponent implements OnInit {

  @Input()
  cottage !: CottageDTO;
  errorDisplay: boolean = false;

  @Input()
  forClientSubscriptions: boolean = false;

  forClient: boolean = false;
  currentUser: any;

  constructor(private cottageService: CottageService,
    private accountService: AccountService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((user) => {
      this.currentUser = user;
      this.forClient = this.isUserClient(user.role);
    }
    );
  }

  isUserClient(role: string): boolean {
    if (role == "ROLE_CLIENT")
      return true;
    else
      return false;
  }

  delete(id: number): void {
    this.cottageService.deleteCottage(id).subscribe(
       (cottages) => {
         window.location.reload();
       },
       (error) => {
         this.errorDisplay = true;
       })
  }

  subscribeToCottage() {
    this.clientService.subscribeToCottage(this.cottage.id, this.currentUser.id).subscribe();
  }

  showSubscribeButton(): boolean {
    if (this.forClient && !this.forClientSubscriptions) {
      return true;
    }
    else return false;
  }

  unsubscribeCottage(){
    this.clientService.unsubscribeCottage(this.cottage.id, this.currentUser.id).subscribe();
  }
}
