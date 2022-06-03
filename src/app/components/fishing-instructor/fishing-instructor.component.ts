import { Component, Input, OnInit } from '@angular/core';
import { FishingInstructor } from 'src/app/entity/FishingInstructor';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-fishing-instructor',
  templateUrl: './fishing-instructor.component.html',
  styleUrls: ['./fishing-instructor.component.css']
})
export class FishingInstructorComponent implements OnInit {

  @Input()
  fishinginstructor !: FishingInstructor;

  forClient = false;
  currentUser: any;

  constructor(private clientService: ClientService,
              private accountService: AccountService) { }

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

  subscribeToInstructor(){
    this.clientService.subscribeToInstructor(this.fishinginstructor.id, this.currentUser.id).subscribe();
  }
}
