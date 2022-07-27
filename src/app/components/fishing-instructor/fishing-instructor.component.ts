import { Component, Input, OnInit } from '@angular/core';
import { FishingInstructor } from 'src/app/entity/FishingInstructor';
import { FishingInstructorService } from 'src/app/services/fishing-instructor.service';

@Component({
  selector: 'app-fishing-instructor',
  templateUrl: './fishing-instructor.component.html',
  styleUrls: ['./fishing-instructor.component.css']
})
export class FishingInstructorComponent implements OnInit {

  @Input()
  fishinginstructor !: FishingInstructor;

  constructor(private finshing_instructor_Service : FishingInstructorService) { }
  
  ngOnInit(): void {
  }

  viewDetails(id:any):void{
    this.finshing_instructor_Service.details(id).subscribe();
    window.location.reload()
   }
  
  delete(id:number):void{
    this.finshing_instructor_Service.delete(id).subscribe();
    window.location.reload()
  }

}
