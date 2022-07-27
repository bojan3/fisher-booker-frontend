import { Component, Input, OnInit } from '@angular/core';
import { FishingInstructor } from 'src/app/entity/FishingInstructor';
import { AccountService } from 'src/app/services/account.service';
import { ClientService } from 'src/app/services/client.service';
import { FishingInstructorService } from 'src/app/services/fishing-instructor.service';


@Component({
  selector: 'app-fishing-instructors',
  templateUrl: './fishing-instructors.component.html',
  styleUrls: ['./fishing-instructors.component.css']
})
export class FishingInstructorsComponent implements OnInit {

  fishinginstructors: FishingInstructor[] = [];

  @Input()
  forClientSubscriptions: boolean = false;

  constructor(private FishingInstructorService: FishingInstructorService,
    private accountService: AccountService,
    private clientService: ClientService) { }


  ngOnInit(): void {
    if(this.forClientSubscriptions){
      this.clientService.getInstructorSubscriptions(this.accountService.currentUser.id).subscribe((fishinginstructors) => {
        this.fishinginstructors = fishinginstructors;
      });
    } else
    this.FishingInstructorService.getAllFishingInstructors().subscribe((fishinginstructors) => {
      this.fishinginstructors = fishinginstructors;
    });
  }

  sortByName() {
    this.FishingInstructorService.getAllFishingInstructorsOrderByName().subscribe((fishinginstructors) => {
      this.fishinginstructors = fishinginstructors
    });
  }
  notClientSubscriptions(): boolean {
    return !this.forClientSubscriptions;
  }

}


