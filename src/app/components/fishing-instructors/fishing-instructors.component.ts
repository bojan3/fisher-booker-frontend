import { Component, OnInit } from '@angular/core';
import { FishingInstructor } from 'src/app/entity/FishingInstructor';
import { FishingInstructorService } from 'src/app/services/fishing-instructor.service';


@Component({
  selector: 'app-fishing-instructors',
  templateUrl: './fishing-instructors.component.html',
  styleUrls: ['./fishing-instructors.component.css']
})
export class FishingInstructorsComponent implements OnInit {

  constructor(private FishingInstructorService : FishingInstructorService) { }

  fishinginstructors: FishingInstructor[] = [];

  ngOnInit(): void {
    this.FishingInstructorService.getAllFishingInstructors().subscribe((fishinginstructors) => {
      this.fishinginstructors = fishinginstructors
    });

  }

  sortByName(){
    this.FishingInstructorService.getAllFishingInstructorsOrderByName().subscribe((fishinginstructors) => {
      this.fishinginstructors = fishinginstructors});
  }

}
