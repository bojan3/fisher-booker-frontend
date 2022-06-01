import { Component, Input, OnInit } from '@angular/core';
import { FishingInstructor } from 'src/app/entity/FishingInstructor';

@Component({
  selector: 'app-fishing-instructor',
  templateUrl: './fishing-instructor.component.html',
  styleUrls: ['./fishing-instructor.component.css']
})
export class FishingInstructorComponent implements OnInit {

  @Input()
  fishinginstructor !: FishingInstructor;

  constructor() { }

  ngOnInit(): void {
  }
}
