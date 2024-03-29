import { Component, Input, OnInit } from '@angular/core';
import { FishingInstructor } from 'src/app/entity/FishingInstructor';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { FishingInstructorService } from 'src/app/services/fishing-instructor.service';

@Component({
  selector: 'app-fishing-instructor',
  templateUrl: './fishing-instructor.component.html',
  styleUrls: ['./fishing-instructor.component.css']
})
export class FishingInstructorComponent implements OnInit {

  @Input()
  fishinginstructor !: FishingInstructor;

  @Input()
  forClientSubscriptions: boolean = false;

  forClient = false;
  currentUser: any;
  forAdmin = false;

  constructor(private finshing_instructor_Service : FishingInstructorService, private clientService: ClientService,
    private accountService: AccountService) { }
  
    ngOnInit(): void {
      this.accountService.getMyInfo().subscribe((user) => {
        this.currentUser = user;
        this.forClient = this.isUserClient(user.role);
        this.forAdmin = this.isUserAdmin(user.role);
      });
    }

  viewDetails(id:any):void{
    this.finshing_instructor_Service.details(id).subscribe();
    window.location.reload()
   }
  
  delete(id:number):void{
    this.finshing_instructor_Service.delete(id).subscribe();
    window.location.reload()
  }

  isUserClient(role: string): boolean {
    if(role == "ROLE_CLIENT")
      return true;
    else
      return false;
  }

  showSubscribe(): boolean {
    if (this.forClient && !this.forClientSubscriptions)
      return true;
    else
      return false;
  }

  subscribeToInstructor(){
    this.clientService.subscribeToInstructor(this.fishinginstructor.id, this.currentUser.id).subscribe();
  }

  unsubscribeInstructor(){
    this.clientService.unsubscribeInstructor(this.fishinginstructor.id, this.accountService.currentUser.id).subscribe(() => (
      window.location.reload() )
    );
  }
  
  isUserAdmin(role: string): boolean {
    if(role == "ROLE_ADMIN")
      return true;
    else
      return false;
  }

}
