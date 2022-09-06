import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/entity/Complaint';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  constructor(private complaintService :ComplaintService) { }

  complaints: Complaint[]=[];


  ngOnInit(): void {
    this.complaintService.getAllUnanswered().subscribe((complaints) => (this.complaints = complaints))
    console.log(this.complaints);
  
  }}
